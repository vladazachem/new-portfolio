import Image from "next/image";

export default function ProjectBanner({ project }) {
    return (
        <div className="flex flex-col gap-10 px-21 items-center">
            <div
                className="flex justify-center items-center rounded-[30px] overflow-hidden">
                <Image
                    src={project.banner}
                    alt={project.name}
                    key={project.id}
                    loading="eager"
                    width={759}
                    height={510}
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    priority
                />
            </div>
            <div className="flex flex-row justify-between w-full">
                <div className="flex flex-col gap-4">
                    <h5 className="text-lg xs:text-base">{project.name}</h5>
                    <h5 className="text-lg xs:text-base">{project.role}</h5>
                </div>
                <div className="flex flex-col gap-4">
                    <h5 className="text-lg text-right xs:text-base">{project.year}</h5>
                    <h5 className="text-lg text-right xs:text-base">{project.type}</h5>
                </div>
            </div>
        </div>

    );
}