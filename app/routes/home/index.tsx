import type { Route } from "./+types/index";
import Hero from "~/components/Hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev Portfolio | Welcome" },
    { name: "description", content: "Web design and development projects" },
  ];
}

export default function Home() {
  return (
    <section>
      <Hero name="Rilwan" />
    </section>
  );
}
