"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import ImageStack from "./image-stack";

gsap.registerPlugin(ScrollTrigger)

const Carousel = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        const totalWidth = ScrollTrigger.maxScroll(window);
        const singleWidth = (totalWidth + window.innerWidth) / 3;

        ScrollTrigger.create({
            trigger: carouselRef.current,
            start: 0,
            end: "max",
            horizontal:true,
            onUpdate: (self) => {
                const scroll = self.scroll();
                
                // right -> middle
                if (scroll >= singleWidth * 2) {
                    self.scroll(scroll - singleWidth);
                } 
                // left -> middle
                else if (scroll <= singleWidth) {
                    self.scroll(scroll + singleWidth);
                }
            }
        })
    }, [])
    return (
        <div
            ref={carouselRef}
            className="w-full flex justify-center overflow-x-auto no-scrollbar"
        >
            <ImageStack />
            <ImageStack />
            <ImageStack />
        </div>
    )
}

export default Carousel;