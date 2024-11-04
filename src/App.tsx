import React from "react";
import { Flame, Layout, Palette, Code, Cpu } from "lucide-react";
import NavBar from "./components/NavBar";
import ProjectCard from "./components/ProjectCard";
import PulsingGradient from "./components/PulsingGradient";

function App() {
  const skills = [
    {
      icon: <Layout className="w-6 h-6" />,
      name: "Web Design",
      description: "Creating beautiful, responsive interfaces",
    },
    {
      icon: <Flame className="w-6 h-6" />,
      name: "Firebase",
      description: "Real-time databases & authentication",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      name: "Arduino",
      description: "Physical robots, for everyday use",
    },
    {
      icon: <Code className="w-6 h-6" />,
      name: "Frontend",
      description: "Modern React development",
    },
  ];

  const projects = [
    {
      title: "Pin Lock",
      description: "A simple but effective solution for room security.",
      technologies: ["LiquidCrystal", "Keypad", "Arduino"],
      imageUrl: "doorlock.png",
      githubUrl: "https://github.com/AnthonyY-dev/SmartDoorLock",
      liveUrl: "https://youtu.be/9Cadp6dBYJY?si=xNvX2fkupA30Qmvc",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <PulsingGradient variant="primary" />

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center"
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-8">
              <img
                src="/logo.svg"
                alt="Anthony's Logo"
                className="w-full h-full"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-white">Anthony</span>
              <span className="text-amber-500">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              Web Designer & Firebase Expert
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-amber-500 text-black rounded-full hover:bg-amber-400 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-amber-500 text-amber-500 rounded-full hover:bg-amber-500 hover:text-black transition-colors"
              >
                View Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 bg-neutral-900/50 backdrop-blur-sm relative"
      >
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-amber-500">Skills</span> & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-black/50 backdrop-blur-sm rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-all"
              >
                <div className="text-amber-500 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured <span className="text-amber-500">Projects</span>
          </h2>
          <div
            className={`grid grid-cols-1 ${
              projects.length > 1 ? "md:grid-cols-2" : "md:w-2/3 lg:w-1/2"
            } gap-8 mx-auto`}
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
