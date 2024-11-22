import skills from "@/data/skills";

export default function SkillsSection() {
    if (!Array.isArray(skills)) {
        console.error("Skills must be an array");
        return null; // Handle gracefully
    }

    return (
        <section id="skills" className="py-24">
            <h2 className="text-5xl font-medium mb-16">01 Software Skills</h2>
            <div className="grid grid-cols-2 gap-8">
                <ul className="space-y-4">
                    {skills.map((skill, index) => (
                        <li key={index} className="text-lg">
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
