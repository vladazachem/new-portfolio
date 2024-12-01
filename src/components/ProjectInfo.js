import Image from "next/image";

export default function ProjectInfo({ project }) {
    return (
        <div className="flex flex-col items-center pb-20">
            <div className="flex flex-row sm:flex-col justify-between w-full py-36 px-[5%] sm:py-28 sm:px-0 sm:gap-6">
                <h5 className="font-bold">Project overview</h5>
                <div className="w-[75%] sm:w-full">
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
                />
            </div>
        </div>
    );
}