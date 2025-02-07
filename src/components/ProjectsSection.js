"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProjectsList from "@/components/ProjectsList";
import projects from "@/data/projects";

export default function WorkSection() {
    const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
    const reversedProjects = [...projects].reverse();

    return (
        <section id="works" className="flex flex-col gap-40 pt-40 pb-72 justify-center">
            <h2 className="font-medium text-center">All Works</h2>
            <div className="flex flex-wrap items-center justify-center gap-40">
                <div className="md:hidden relative w-64 h-64">
                    {reversedProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: activeProjectId === project.id ? 1 : 0
                            }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={project.miniPreview}
                                alt={`${project.name} preview`}
                                className="w-64 h-64 rounded-3xl"
                                width={256}
                                height={256}
                                quality={100}
                                unoptimized
                            />
                        </motion.div>
                    ))}
                </div>

                <ul id="project-links" className="space-y-6 items-center">
                    {reversedProjects.map((project) => (
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
