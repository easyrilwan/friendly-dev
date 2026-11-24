import { useState } from "react";

import type { Route } from "./+types/index";
import ProjectCard from "~/components/ProjectCard";
import type { Project } from "~/types";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch("http://localhost:8000/projects");

  if (!res.ok)
    throw new Response("Failed to fetch projects", {
      status: res.status,
    });

  const data: Project[] = await res.json();

  return { projects: data };
}

// HydrateFallback is rendered while the client loader is running
export function HydrateFallback() {
  return <div>Loading...</div>;
}

export default function ProjectsPage({ loaderData }: Route.ComponentProps) {
  const { projects } = loaderData as { projects: Project[] };

  console.log(projects);

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  // Calculate Total Pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Get Current Pages Projects
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);

  // Pagination Button Render
  const renderPagination = () => (
    <div className="mt-8 flex justify-center gap-2">
      {Array.from({ length: totalPages }, (_, idx) => (
        <button
          key={idx + 1}
          onClick={() => setCurrentPage(idx + 1)}
          className={`cursor-pointer rounded px-3 py-1 ${currentPage === idx + 1 ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-200 transition hover:bg-gray-500"}`}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <h2 className="mb-8 text-3xl font-bold">🚀 Projects</h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {totalPages > 1 && renderPagination()}
    </>
  );
}
