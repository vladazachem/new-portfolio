import skills from "@/data/skills";

export default function SkillsSection() {
    return (
        <section id="skills" className="py-24">
            <h4 className="font-semibold mb-16">01 Software Skills</h4>
            <div className="grid grid-cols-4 grid-rows-4 grid-flow-col gap-8
            xxs:grid-cols-3 xxs:grid-rows-5
            ">
                {skills.map((skill, index) => (
                    <p key={index} className="text-lg sm:text-sm">
                        {skill}
                    </p>
                ))}
            </div>
        </section>
    );
}
