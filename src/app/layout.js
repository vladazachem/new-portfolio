import './globals.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Vlada Sarokina | Junior Front-End Developer & Web Designer",
    description: "Portfolio of Vlada Sarokina, showcasing projects and skills.",
    icons: {
      icon: "/logo.png?v=1.0"
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="global-padding font-poppins bg-main text-text">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
