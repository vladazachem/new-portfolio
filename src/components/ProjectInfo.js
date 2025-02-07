import Image from "next/image";

export default function ProjectInfo({ project }) {
    return (
        <div className="flex flex-col items-center pb-20">
            <div className="flex flex-row md:flex-col justify-between w-full py-36 sm:py-28 md:px-0 md:gap-8">
                <h5 className="font-bold">Project overview</h5>
                <div className="w-[900px] md:w-full">
                    {project.description.map((desc, index) => (
                        <h5 key={index} className="mb-2 xs:text-base">{desc}</h5>
                    ))}
                </div>
            </div>
            <div className="flex justify-center items-center rounded-[30px] overflow-hidden">
                <Image src={project.preview}
                       alt={project.name}
                       width={1200}
                       height={680}
                       quality={100}
                       unoptimized
                />
            </div>
        </div>
    );
}