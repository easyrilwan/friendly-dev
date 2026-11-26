import { useState } from "react";

import type { Route } from "./+types/index";
import Pagination from "~/components/Pagination";
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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10;

  const { projects } = loaderData as { projects: Project[] };
  // console.log(projects);

  // Get Unique Categories
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];
  // console.log(categories);

  // Filter Projects Based On The Category
  const filterProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Calculate Total Pages
  const totalPages = Math.ceil(filterProjects.length / projectsPerPage);

  // Get Current Pages Projects
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = filterProjects.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <h2 className="mb-8 text-3xl font-bold">🚀 Projects</h2>

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
            className={`cursor-pointer rounded px-3 py-1 text-sm ${selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-700 hover:bg-gray-500"}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
    </>
  );
}
