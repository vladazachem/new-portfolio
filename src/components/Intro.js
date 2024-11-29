"use client"

import {useEffect, useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Intro() {
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
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, ease:"power2.out", stagger: 0.5 }
        )

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        }
    }, []);

    return (
        <section>
            <div
                className="flex flex-col gap-10 py-32"
                ref={textContainerRef}
            >
                <div className="overflow-hidden">
                    <h1>
                        <b className="font-medium text-[60px]">I&apos;m a </b>
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
            <div className="z-0 absolute top-[340px] right-[50px]">
                <svg id="point" width="380" height="380" viewBox="0 0 244 244" fill="none"
                     xmlns="http://www.w3.org/2000/svg" className="z-0">
                    <circle cx="122" cy="122" r="122" fill="#2570BB"/>
                    <circle cx="122" cy="122" r="88" fill="#F06543"/>
                    <circle cx="121.5" cy="121.5" r="52.5" fill="#EDE8E4"/>
                    <circle cx="122" cy="123" r="14" fill="#181410"/>
                </svg>
            </div>

            <div className="divider-line"></div>
        </section>
    );
}
