import education from "@/data/education";

export default function EducationSection() {
    return (
        <section id="education" className="py-24">
            <h2 className="text-5xl font-medium mb-16">02 Education</h2>
            <div className="grid grid-cols-3 gap-8">
                {education.map((item, index) => (
                    <div key={index}>
                        <h3 className="text-xl font-semibold">{item.degree}</h3>
                        <p className="text-lg">{item.institution}</p>
                        <p className="text-lg">{item.year}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
