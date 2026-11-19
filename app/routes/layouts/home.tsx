import { Outlet } from "react-router";

import Hero from "~/components/Hero";

export default function HomeLayout() {
  return (
    <>
      <Hero name="Rilwan" />
      
      <section className="mx-auto my-8 max-w-6xl px-6">
        <Outlet />
      </section>
    </>
  );
}
