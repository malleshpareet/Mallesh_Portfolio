import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 0,
    title: "Httply",
    description:
      "The ultimate API & WebSocket client. Develop, test, and debug REST APIs and WebSocket connections. Built for speed, designed for modern developer workflows.",
    image: "/projects/image.png",
    tags: ["API Client", "WebSocket", "REST", "Developer Tools"],
    demoUrl: "https://httply.qzz.io/",
    githubUrl: "#",
    span: "col-span-1 md:col-span-2 row-span-1 md:row-span-2",
    featured: true,
  },
  {
    id: 1,
    title: "ScanLash",
    description: "ScanLash Virtual Try-On App for Eyewear",
    image: "/projects/project1.jpeg",
    tags: ["Flutter", "Laravel", "MySql"],
    demoUrl: "https://play.google.com/store/apps/details?id=com.scanlash.eyelashes",
    githubUrl: "#",
    span: "col-span-1 row-span-1",
  },
  {
    id: 2,
    title: "NexaMart",
    description: "A scalable online marketplace connecting buyers and sellers.",
    image: "/projects/project2.png",
    tags: ["Flutter", "Java Spring-boot", "Razorpay", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.jpg",
    tags: ["React", "Node.js", "Python", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${project.span}`}
              style={{ minHeight: "220px" }}
            >
              {/* Full-bleed background image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay — always visible at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-all duration-500 group-hover:from-black/95 group-hover:via-black/60" />

              {/* Glow border on hover */}
              <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-primary/60 transition-all duration-500 pointer-events-none" />

              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/90 text-primary-foreground backdrop-blur-sm shadow-lg shadow-primary/30">
                    ✦ Featured
                  </span>
                </div>
              )}

              {/* Tags top-right */}
              <div className="absolute top-4 right-4 z-10 flex flex-wrap gap-1 justify-end">
                {project.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-black/50 text-white/80 backdrop-blur-sm border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content — slides up on hover */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-5 transform transition-transform duration-500">
                <h3 className="text-white font-bold text-lg mb-1 drop-shadow-lg">
                  {project.title}
                </h3>

                {/* Description hidden by default, reveals on hover */}
                <p className="text-white/70 text-xs leading-relaxed mb-4 line-clamp-2 max-h-0 overflow-hidden opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 text-justify">
                  {project.description}
                </p>

                {/* Button */}
                <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                  {project.demoUrl !== "#" ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold backdrop-blur-sm hover:bg-primary transition-colors duration-300 shadow-lg shadow-primary/30"
                    >
                      View Live <ExternalLink size={12} />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/malleshpareet"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
