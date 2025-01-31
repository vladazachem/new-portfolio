import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex flex-col">
            <div className="flex justify-end sm:justify-start">
                <div className="flex flex-col">
                    <div className="font-bold mb-6">
                        <h5>Please feel free to share your project details with me.</h5>
                        <h5>I would be happy to assist you with your website.</h5>
                    </div>
                    <div className="flex flex-col gap-4 mb-4 font-bold">
                        <Link href="mailto:vladyslavasarokina@gmail.com" className="text-lg hover:text-highlight">
                            vladyslavasarokina@gmail.com
                        </Link>
                        <Link href="https://www.instagram.com" className="text-lg hover:text-highlight">
                            Instagram
                        </Link>
                        <Link href="https://www.behance.net/vladasarokina" className="text-lg hover:text-highlight">
                            Behance
                        </Link>
                        <Link href="https://github.com/vladazachem" className="text-lg hover:text-highlight">
                            GitHub
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <h6 className="xxs:text-xs">2024 • Made with love by Vlada Sarokina.</h6>
            </div>
        </footer>
    );
}
