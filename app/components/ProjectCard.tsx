import { Link } from "react-router";

import type { Project } from "~/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`projects/${project.id}`}
      className="block h-full transform transition duration-300 hover:scale-[1.02]"
    >
      <div className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-700 bg-gray-800 shadow-sm transition hover:shadow-md">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-40 w-full shrink-0 object-cover"
        />

        <div className="flex flex-1 flex-col p-5">
          <h3 className="mb-2 text-3xl font-semibold text-blue-400">
            {project.title}
          </h3>

          <p className="mb-4 text-sm text-pretty text-gray-300">
            {project.description}
          </p>

          <div className="mt-auto flex items-center justify-between text-sm text-gray-400">
            <span>{project.category}</span>

            <span>{new Date(project.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
