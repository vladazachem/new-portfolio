import Link from "next/link";

export default function ProjectsList({ project, onHover }) {
    return (
        <li
            className={`cursor-pointer`}
            onMouseEnter={() => onHover(project.id)}
        >
            <Link href={`/projects/${project.slug}`} className="font-medium text-center hover:text-highlight">
                <h3>{project.name}</h3>
            </Link>
        </li>
    );
}
