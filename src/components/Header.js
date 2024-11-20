import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex justify-between items-center py-4 px-8 bg-primary shadow-md">
            <h1 className="text-3xl font-bold text-accent">Hi, I'm Vlada</h1>
            <nav>
                <ul className="flex gap-6">
                    <li>
                        <Link href="/" className="text-accent hover:underline">
                            All Works
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-accent hover:underline">
                            About Me
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}