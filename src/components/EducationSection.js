import education from "@/data/education";

export default function EducationSection() {
    return (
        <section id="education" className="py-24">
            <h4 className="font-semibold mb-16">02 Education</h4>
            <div className="flex flex-row-reverse justify-between sm:flex-col-reverse md:flex-col-reverse">
                {education.map((item, index) => (
                    <div key={index} className="flex flex-col gap-2 sm:mb-10 md:mb-10">
                        <h4 className="text-xl font-semibold">{item.degree}</h4>
                        <p className="text-lg">{item.institution}</p>
                        <p className="text-lg">{item.year}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
