export default function ProjectCard({ project }) {
    return (
        <div className="border rounded-lg overflow-hidden shadow-md">
            <img
                src={project.preview}
                alt={project.name}
                className="w-full h-40 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-bold">{project.name}</h3>
                <p className="text-sm text-gray-500">{project.role}</p>
                <p className="text-sm mt-2">{project.description}</p>
                <p className="text-xs text-gray-400">{project.year}</p>
            </div>
        </div>
    );
}