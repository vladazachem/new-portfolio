import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";

export default function AboutMeSection() {
    return (
        <section id="about" className="flex flex-col gap-24 py-16">
            <h2 className="font-medium text-center">About me</h2>
            <div className="flex flex-col w-[52%]">
                <div className="flex flex-col gap-8">
                    <h4>When working on a project, what I like the most is the process of bringing an idea to life, as
                        well as the systematization of information within the project.</h4>
                    <h4>I love to work with new people and to challenge myself in trying new things. I want my work to
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
            <div className="z-0 absolute top-[340px] right-[50px]">
                <svg id="point-animation" width="319" height="319" viewBox="0 0 319 319" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <circle cx="159.142" cy="159.142" r="122" transform="rotate(22.2768 159.142 159.142)"
                            fill="#2570BB"></circle>
                    <circle cx="131.743" cy="169.644" r="88" transform="rotate(22.2768 131.743 169.644)"
                            fill="#F06543"></circle>
                    <circle cx="102.996" cy="179.873" r="52.5" transform="rotate(22.2768 102.996 179.873)"
                            fill="#EDE8E4"></circle>
                    <circle cx="70.87" cy="191.027" r="14" transform="rotate(22.2768 70.87 191.027)"
                            fill="#181410"></circle>
                </svg>
            </div>
        </section>
    );
}
