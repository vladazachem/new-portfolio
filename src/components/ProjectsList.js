import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectsList({ project, onHover }) {
    return (
        <motion.li
            className="cursor-pointer"
            onMouseEnter={() => onHover(project.id)}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            <Link href={`/projects/${project.slug}`} className="font-medium text-center hover:text-highlight transition-colors duration-300">
                <h3>{project.name}</h3>
            </Link>
        </motion.li>
    );
}
