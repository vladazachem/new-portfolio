import Intro from "@/components/Intro";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";


export default function Home() {
    return (
        <div>
            <main>
                <Intro />
                <ProjectsSection />
                <div className="divider-line"></div>
                <div id="about" className="global-padding about-section">
                    <SkillsSection/>
                    <EducationSection/>
                </div>
            </main>
        </div>
    );
}
