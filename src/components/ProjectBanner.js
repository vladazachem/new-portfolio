import Image from "next/image";

export default function ProjectBanner({ project }) {
    return (
        <div className="flex flex-col gap-10 px-21 items-center">
            <div
                className="relative h-[510px] w-[759px] rounded-[30px] overflow-hidden flex justify-center items-center">
                <Image
                    src={project.banner}
                    alt={project.name}
                    key={project.id}
                    loading="eager"
                    fill
                    sizes="759px"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    priority
                />
            </div>
            <div className="flex flex-row justify-between w-[759px]">
                <div className="flex flex-col gap-4">
                    <h5 className="text-lg">{project.name}</h5>
                    <h5 className="text-lg">{project.role}</h5>
                </div>
                <div className="flex flex-col gap-4">
                    <h5 className="text-lg text-right">{project.year}</h5>
                    <h5 className="text-lg text-right">{project.type}</h5>
                </div>
            </div>
        </div>

    );
}