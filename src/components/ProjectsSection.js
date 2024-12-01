"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectsList from "@/components/ProjectsList";
import projects from "@/data/projects";

export default function WorkSection() {
    const [activeProjectId, setActiveProjectId] = useState(projects[0].id);

    return (
        <section id="works" className="flex flex-col gap-40 pt-40 pb-72 justify-center">
            <h2 className="font-medium text-center">All Works</h2>
            <div className="flex flex-wrap items-center justify-center
            gap-40">
                <div className="previews">
                    {projects.map((project) => (
                            <Image
                                src={project.miniPreview}
                                alt={`${project.name} preview`}
                                className={`w-64 h-64 rounded-3xl ${
                                    activeProjectId === project.id ? "block" : "hidden"
                                }`}
                                key={project.id}
                                width={256}
                                height={256}
                            />
                    ))}
                </div>
                <ul id="project-links" className="space-y-6 items-center">
                    {projects.map((project) => (
                        <ProjectsList
                            key={project.id}
                            project={project}
                            onHover={setActiveProjectId}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
}
