import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-primary text-accent">
            <Header />
            <main className="container mx-auto p-6">
                <h2 className="text-2xl font-bold mb-6">All Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
