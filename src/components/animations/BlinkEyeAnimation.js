"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function BlinkEyeAnimation() {
    const outerCircleRef = useRef(null);
    const clipPathRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const initAnimation = () => {
            if (animationRef.current) {
                animationRef.current.kill();
            }

            animationRef.current = gsap.timeline({
                repeat: 1,
                delay: 2,
            });

            animationRef.current
                .to([clipPathRef.current, outerCircleRef.current], {
                    scaleY: 0,
                    duration: 0.3,
                    transformOrigin: "center",
                    ease: "power2.inOut",
                })
                .to([clipPathRef.current, outerCircleRef.current], {
                    scaleY: 1,
                    duration: 0.3,
                    transformOrigin: "center",
                    ease: "power2.inOut",
                });
        };

        initAnimation();

        const handleResize = () => {
            initAnimation();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            if (animationRef.current) {
                animationRef.current.kill();
            }
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <svg
            id="point"
            viewBox="0 0 244 244"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="z-0 absolute bg-transparent w-[380px] h-[380px] top-[330px] right-12">
            <defs>
                <clipPath id="circle-clip">
                    <circle
                        ref={clipPathRef}
                        cx="122"
                        cy="122"
                        r="122"
                        fill="#2570BB"
                    />
                </clipPath>
            </defs>

            <circle
                ref={outerCircleRef}
                cx="122"
                cy="122"
                r="122"
                fill="#2570BB"
            />

            <g clipPath="url(#circle-clip)">
                <circle cx="122" cy="122" r="88" fill="#F06543" />
                <circle cx="121.5" cy="121.5" r="52.5" fill="#EDE8E4" />
                <circle cx="122" cy="123" r="14" fill="#181410" />
            </g>
        </svg>
    );
}
