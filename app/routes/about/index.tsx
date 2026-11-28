export default function AboutPage() {
  const techLists = [
    "HTML5",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.JS",
    "Tailwind CSS",
    "Next.JS",
    "React Native",
    "Node.JS",
    "Supabase",
    "Firebase",
    "MongoDB",
    "PostgreSQL",
  ];

  return (
    <div className="mx-auto max-w-5xl rounded-lg bg-gray-900 px-6 py-16">
      {/* Intro */}
      <div className="mb-12 flex flex-col items-center gap-10 md:flex-row md:items-start">
        <img
          src="/images/profile.jpg"
          alt="profile"
          className="size-40 rounded-full border-4 border-blue-500 object-cover shadow-md"
          loading="lazy"
        />

        <div>
          <h1 className="mb-2 text-3xl font-bold text-white">
            Hey, I'm Rilwan 👋
          </h1>
          <p className="text-lg text-gray-300">
            I'm a passionate web developer and content creator who loves
            building friendly digital experiences and helping others grow into
            confident, modern developers.
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-white">My Mission</h2>
        <p className="leading-relaxed text-gray-300">
          After turning my life around, I made it my mission to share what I’ve
          learned with others — not just about code, but about building a life
          you’re proud of. Through tutorials, courses, and real-world projects,
          I aim to make development accessible, friendly, and something you look
          forward to each day.
        </p>
      </div>

      {/* Tech Stack */}
      <h2 className="mb-4 text-2xl font-semibold text-white">🚀 Tech I Use</h2>
      <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
        {techLists.map((tech) => (
          <li key={tech} className="rounded-md bg-gray-700 px-3 py-1">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
