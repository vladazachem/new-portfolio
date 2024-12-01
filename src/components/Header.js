"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const isMainPage = pathname === "/";

    return (
        <header className="flex justify-between items-center">
            <Link href="/">
                <h3 className="xs:text-[17px] md:text-[25px]">
                    Hi, I&apos;m{" "}
                    <b className="relative font-medium">
                        Vlada
                        <span className="before:absolute before:content-[''] before:w-[95px] before:h-[1px] before:bg-text before:top-10 before:left-0
                        xs:before:w-[55px] xs:before:top-[25px]
                        md:before:w-[80px] md:before:top-[33px]
                        "></span>
                    </b>
                </h3>
            </Link>
            <nav className="sm:hidden">
                <ul className="flex flex-row gap-14 uppercase">
                    {isMainPage ? (
                        <>
                            <li>
                                <Link href="/#works" className="w-20 hover:text-highlight">
                                    <h5>All Works</h5>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#about" className="w-20 hover:text-highlight">
                                    <h5>About Me</h5>
                                </Link>
                            </li>
                        </>
                    ) : (
                        <li>
                            <Link href="/" className="w-20 hover:text-highlight">
                                <h5>Home</h5>
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}
