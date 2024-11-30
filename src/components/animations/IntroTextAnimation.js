"use client"

import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default function IntroTextAnimation() {
    const textContainerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const lines = textContainerRef.current.querySelectorAll("h1");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: textContainerRef.current,
                start: "top 80%",
                end: "top 20%",
                toggleActions: "play none none reverse",
                markers: false,
            }
        })

        tl.fromTo(
            lines,
            {y: 100, opacity: 0},
            {y: 0, opacity: 1, ease: "power2.out", stagger: 0.7}
        )

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        }
    }, []);

    return (
        <div
            className="flex flex-col gap-10 py-32"
            ref={textContainerRef}
        >
            <div className="overflow-hidden">
                <h1>
                    <b className="lower-case-itro font-medium text-[60px] mr-2">I&apos;m a </b>
                    Junior Front-End
                </h1>
            </div>
            <div className="overflow-hidden">
                <h1>Developer &</h1>
            </div>
            <div className="overflow-hidden">
                <h1 className="text-center">Web Designer</h1>
            </div>
        </div>
    );
}