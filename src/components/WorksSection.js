import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function WorkSection() {
    return (
        <section id="works" className="myworks">
            <h2>All Works</h2>
            <div className="projects">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
            <div className="divider-line"></div>
        </section>
    );
}
