"use client";

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import PortraitPlane from './portrait-plane';

const PortraitScene = () => {
    return (
        <Canvas
			orthographic
			camera={{ zoom: 1, position: [0, 0, 1] }}
			dpr={[1, 2]}
		>
			<Suspense fallback={null}>
				<PortraitPlane />
			</Suspense>
		</Canvas>
    )
}

export default PortraitScene;
