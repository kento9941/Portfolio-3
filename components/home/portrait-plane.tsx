"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from '@react-three/fiber';
import { Plane, useTexture  } from "@react-three/drei";
import * as THREE from 'three';
import { publicPath } from "@/utils/public-path";
import vertex from "@/shaders/home/vertex-shader.glsl";
import fragment from "@/shaders/home/fragment-shader.glsl";

const PortraitPlane = () => {
    const { viewport } = useThree();
    const materialRef = useRef<THREE.ShaderMaterial>(null!);

    // -----------------------------------------
    // adjust aspect ratio
    const imageAspect = 3 / 2;
    const screenAspect = viewport.width / viewport.height;

    let scaleX = viewport.width;
    let scaleY = viewport.height;

    if (screenAspect > imageAspect) {
        scaleX = viewport.width;
        scaleY = viewport.width / imageAspect;
    } else {
        scaleY = viewport.height;
        scaleX = viewport.height * imageAspect;
    }

    // align at the bottom
    const positionY = -viewport.height / 2 + scaleY / 2;

    // ----------------------------------------
    // shader config & frame update
    const stateRef = useRef({
        mouse: new THREE.Vector2(0, 0),
        prevMouse: new THREE.Vector2(0, 0),
        velocity: new THREE.Vector2(0, 0),
        isFirstMove: true,
    });

    const image = useTexture(publicPath("images/me.png"));

    const shader = useMemo(() => {
        return {
            uniforms: {
                uTexture: { value: image },
                uMouse: { value: new THREE.Vector2(0, 0) },
                uVelocity: { value: new THREE.Vector2(0, 0) },
                uRadius: { value: 0.01 },
                uStrength: { value: 5.0 },
            },
            vertexShader: vertex,
            fragmentShader: fragment,
        }
    }, [image]);

    useFrame(() => {
        if (!materialRef.current) return;
        if (stateRef.current.isFirstMove) return;
        
        const data = stateRef.current;
        const uniforms = materialRef.current.uniforms;

        // 1. Calculate the frame velocity
        const frameVelocity = new THREE.Vector2().subVectors(data.mouse, data.prevMouse);
        
        // 2. Add frame movement
        data.velocity.add(frameVelocity);

        // 3. Update shader values smoothly
        uniforms.uMouse.value.lerp(data.mouse, 0.3);
        uniforms.uVelocity.value.lerp(data.velocity, 0.1);

        // 4. Save for next frame execution
        data.prevMouse.copy(data.mouse);

        // 5. Damp down the residual movement to 0
        data.velocity.multiplyScalar(0.97); 
    });

    const onPointerMove = (e: any) => {
        if (e.uv) {
            const data = stateRef.current;
            
            if (data.isFirstMove) {
                data.mouse.copy(e.uv);
                data.prevMouse.copy(e.uv);
                data.velocity.set(0, 0);
                data.isFirstMove = false;
            } else {
                data.mouse.copy(e.uv);
            }
        }
    };

    return (
        <Plane 
            args={[1, 1]} 
            scale={[scaleX, scaleY, 1]}
            position={[0, positionY, 0]}
            onPointerMove={onPointerMove}
        >
            <shaderMaterial
                ref={materialRef}
                args={[shader]}
                transparent
            />
        </Plane>
    )
}

export default PortraitPlane;
