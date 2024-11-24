import Link from "next/link";

export default function ProjectsList({ project, isActive, onHover }) {
    return (
        <li
            className={`cursor-pointer ${isActive ? "font-bold text-red" : ""}`}
            onMouseEnter={() => onHover(project.id)}
        >
            <Link href={`/projects/${project.slug}`} className="font-medium underline">
                {project.name}
            </Link>
        </li>
    );
}
