"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectsList from "@/components/ProjectsList";
import projects from "@/data/projects";

export default function WorkSection() {
    const [activeProjectId, setActiveProjectId] = useState(projects[0].id);

    return (
        <section id="works" className="myworks">
            <h2 className="text-5xl font-medium mb-12 text-center">All Works</h2>
            <div className="flex flex-wrap items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
                <div className="previews">
                    {projects.map((project) => (
                            <Image
                                src={project.miniPreview}
                                alt={`${project.name} preview`}
                                className={`w - 64 h-64 rounded-lg ${
                                    activeProjectId === project.id ? "block" : "hidden"
                                }`}
                                key={project.id}
                                width={256}
                                height={256}
                            />
                    ))}
                </div>
                <ul className="list space-y-4">
                    {projects.map((project) => (
                        <ProjectsList
                            key={project.id}
                            project={project}
                            isActive={activeProjectId === project.id}
                            onHover={setActiveProjectId}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
}
