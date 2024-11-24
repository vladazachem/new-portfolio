import Header from "@/components/Header";
import Intro from "@/components/Intro";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";


export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <Intro />
                <ProjectsSection />
                <div className="divider-line"></div>
                <div id="about" className="global-padding about-section">
                    <SkillsSection/>
                    <EducationSection/>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
