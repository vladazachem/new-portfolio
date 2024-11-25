import Image from "next/image";

export default function ProjectInfo({ project }) {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row justify-between w-[60%] py-[140px]">
                <h5 className="font-bold">Project overview</h5>
                <div className="w-[75%]">
                    <h5>{project.description}</h5>
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