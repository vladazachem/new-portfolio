import Header from "@/components/Header";
import Intro from "@/components/Intro";
import WorksSection from "@/components/WorksSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <Intro />
                <WorksSection />
                <div className="divider-line"></div>
                <div id="about" className="global-padding about-section">
                    <EducationSection/>
                    <SkillsSection/>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
