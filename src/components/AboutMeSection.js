import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import WatchingEye from "@/components/animations/WatchingEye";

export default function AboutMeSection() {
    return (<section id="about" className="flex flex-col gap-24 pt-16">
            <h2 className="font-medium text-center">About me</h2>
            <div className="flex flex-col w-[52%] md:w-full">
                <div className="flex flex-col gap-8">
                    <h4>When working on a project, what I like the most is the process of bringing an idea to life as
                        well as the systematization of information within the project.</h4>
                    <h4>I love to work with new people and challenge myself to try new things. I want my work to
                        be beneficial for people functionally and emotionally. I seek new experience and look forward to
                        new opportunities.</h4>
                    <h4>Our communication is possible in the following languages: <b className="font-semibold">English,
                        Polish and Ukrainian</b>.
                    </h4>
                </div>
                <div>
                    <SkillsSection/>
                    <div className="divider-line"></div>
                    <EducationSection/>
                </div>
            </div>
            <WatchingEye />
        </section>
    );
}
