import type { Route } from "./+types/index";
import AboutPreview from "~/components/AboutPreview";
import FeaturedProjects from "~/components/FeaturedProjects";
import type { Project } from "~/types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev Portfolio | Welcome" },
    { name: "description", content: "Web design and development projects" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);

  const data: Project[] = await res.json();

  return { projects: data };
}

export default function HomePage({ loaderData }: Route.ComponentProps) {
  const { projects } = loaderData as { projects: Project[] };
  // console.log(projects);

  return (
    <>
      <FeaturedProjects projects={projects} count={2} />
      
      <AboutPreview />
    </>
  );
}
