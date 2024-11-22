import projects from "@/data/projects";

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
        <div className="py-16 px-12">
            <h1 className="text-4xl font-semibold mb-8">{project.name}</h1>
            <img
                src={project.banner}
                alt={project.name}
                className="w-full rounded-lg mb-8"
            />
            <p className="text-lg">{project.description}</p>
        </div>
    );
}
