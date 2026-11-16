import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev Portfolio" },
    { name: "description", content: "Web design and development projects" },
  ];
}

export default function Home() {
  return <section>App</section>;
}
