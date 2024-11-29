"use client"

import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WatchingEye() {
    const animationRef = useRef(null);

    useEffect(() => {
        const animation = gsap.to(animationRef.current, {
            rotate: -45,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "back.inOut",
            transformOrigin: "center center",
            scrollTrigger: {
                trigger: animationRef.current,
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play pause resume reset",
                scrub: false,
                markers: false
            },
            onRepeat: () => {
                animation.pause(); // Pause animation on repeat
                setTimeout(() => animation.play(), 1000); // Resume after 2 seconds
            }
        });

        return () => {
            animation.kill();
        };
    }, []);

    return (
        <div id="point-animation" className="-z-1 absolute top-[2500px] right-[80px]">
            <svg
                ref={animationRef}
                id="point-animation"
                width="319"
                height="319"
                viewBox="0 0 319 319"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="159.142" cy="159.142" r="122" fill="#2570BB"/>
                <circle cx="131.743" cy="169.644" r="88" fill="#F06543"/>
                <circle cx="102.996" cy="179.873" r="52.5" fill="#EDE8E4"/>
                <circle cx="70.87" cy="191.027" r="14" fill="#181410"/>
            </svg>
        </div>
    );
}
