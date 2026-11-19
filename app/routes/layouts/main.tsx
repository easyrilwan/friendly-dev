import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <section className="mx-auto my-8 max-w-6xl px-6">
        <Outlet />
      </section>
    </>
  );
}
