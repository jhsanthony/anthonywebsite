import React from "react";
import {
  Flame,
  Layout,
  Palette,
  Code,
  Mail,
  Github,
  Send,
  Cpu,
  Gamepad2,
  Image,
} from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import PulsingGradient from "../components/PulsingGradient";

function HomePage() {
  const skills = [
    {
      icon: <Image className="w-6 h-6" />,
      name: "Graphics",
      description: "Creating beautiful, modern icons & images",
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      name: "Roblox",
      description: "Game development & programming.",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      name: "Arduino",
      description: "Tiny physical computers for physical machines.",
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
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await addDoc(collection(db, "messages"), {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
        timestamp: serverTimestamp(),
      });

      form.reset();
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

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
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8"></p>
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
      {/* <section id="projects" className="py-20 relative">
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
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Let's <span className="text-amber-500">Connect</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                  <p className="text-gray-400">
                    I'm always interested in hearing about new projects and
                    opportunities.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="mailto:admin@anthonyy.me"
                    className="flex items-center space-x-3 text-gray-300 hover:text-amber-500 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>admin@anthonyy.me</span>
                  </a>
                  <a
                    href="https://github.com/jhsanthony"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-amber-500 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>github.com/jhsanthony</span>
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 bg-neutral-900 border border-amber-500/20 rounded-lg focus:outline-none focus:border-amber-500 text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 bg-neutral-900 border border-amber-500/20 rounded-lg focus:outline-none focus:border-amber-500 text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-neutral-900 border border-amber-500/20 rounded-lg focus:outline-none focus:border-amber-500 text-white resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-amber-500 text-black rounded-lg hover:bg-amber-400 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
