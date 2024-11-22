import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }) {
    return (
        <div className="flex items-center space-x-8">
            <Image
                src={project.miniPreview}
                alt={project.name}
                className="preview w-64 h-64 rounded-lg"
                width={256}
                height={256}
            />
            <div>
                <h3>{project.name}</h3>
                <Link href={`/projects/${project.slug}`} className="text-red font-medium underline">
                    Open Project
                </Link>
            </div>
        </div>
    );
}
