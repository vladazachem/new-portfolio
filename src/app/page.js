import Intro from "@/components/Intro";
import ProjectsSection from "@/components/ProjectsSection";
import AboutMeSection from "@/components/AboutMeSection";


export default function Home() {
    return (
        <div>
            <main>
                <Intro />
                <ProjectsSection />
                <div className="divider-line"></div>
                <AboutMeSection />
            </main>
        </div>
    );
}
