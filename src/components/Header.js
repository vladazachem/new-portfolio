export default function Header() {
    return (
        <header className="flex justify-between items-center py-6">
            <h3>
                Hi, I&apos;m{" "}
                <b className="myname relative">
                    Vlada
                    <span className="before:absolute before:content-[''] before:w-[95px] before:h-[1px] before:bg-text before:top-6 before:left-0"></span>
                </b>
            </h3>
            <nav>
                <ul className="navbar">
                    <li>
                        <a href="#works" className="nav-link">All Works</a>
                    </li>
                    <li>
                        <a href="#about" className="nav-link">About Me</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
