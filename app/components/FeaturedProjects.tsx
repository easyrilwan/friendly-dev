import { Link } from "react-router";

import ProjectCard from "./ProjectCard";
import type { Project } from "~/types";

type FeaturedProjectProps = {
  projects: Project[];
  count: number;
};

export default function FeaturedProjects({
  projects,
  count = 4,
}: FeaturedProjectProps) {
  const featured = projects.filter((p) => p.featured).slice(0, count);

  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-gray-200">
        🌟 Featured Projects
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <Link
        to="/projects"
        className="mt-6 flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-2 text-center text-white transition hover:bg-blue-700"
      >
        See More Projects
      </Link>
    </section>
  );
}
