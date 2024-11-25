import projects from "@/data/projects";
import ProjectBanner from "@/components/ProjectBanner";
import ProjectInfo from "@/components/ProjectInfo";
import Link from "next/link";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }) {
    const { slug } = await params; // Await params to resolve dynamic properties

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="py-16 px-12">
                <h1 className="text-4xl font-semibold mb-8">Project not found</h1>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center px-[80px] py-[140px]">
            <ProjectBanner project={project} />
            <ProjectInfo project={project} />
            <Link href={project.link} className="arrow-link">Open project<span className="arrow"></span></Link>
        </div>
    );
}
