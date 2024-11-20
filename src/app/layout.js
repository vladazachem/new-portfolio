export const metadata = {
    title: "Vlada's Portfolio",
    description: "Showcasing projects, skills, and education",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="bg-primary text-accent font-sans">
        {children}
        </body>
        </html>
    );
}