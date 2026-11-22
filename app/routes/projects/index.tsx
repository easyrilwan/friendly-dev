import type { Route } from "./+types/index";
import type { Project } from "~/types";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch("http://localhost:8000/projects");
  const data = await res.json();

  return { projects: data };
}

export default function ProjectsPage({ loaderData }: Route.ComponentProps) {
  const { projects } = loaderData;
  console.log(projects);

  // const { id, title, description, url, data, category, featured } = loaderData;

  return (
    <>
      <h2 className="mb-8 text-3xl font-bold">🚀 Projects</h2>
    </>
  );
}
