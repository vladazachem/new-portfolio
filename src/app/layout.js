import './globals.css';

export const metadata = {
    title: 'Vlada Sarokina | Junior Front-End Developer & Web Designer',
    description: 'Portfolio of Vlada Sarokina, showcasing projects and skills.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="global-padding font-poppins bg-main text-text">{children}</body>
        </html>
    );
}
