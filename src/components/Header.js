import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center">
            <Link href="/">
                <h3>
                    Hi, I&apos;m{" "}
                    <b className="relative font-medium">
                        Vlada
                        <span className="before:absolute before:content-[''] before:w-[95px] before:h-[1px] before:bg-text before:top-10 before:left-0"></span>
                    </b>
                </h3>
            </Link>
            <nav>
                <ul className="flex flex-row gap-14 uppercase">
                    <li>
                        <Link href="#works" className="w-20 hover:text-highlight">All Works</Link>
                    </li>
                    <li>
                        <Link href="#about" className="w-20 hover:text-highlight">About Me</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
