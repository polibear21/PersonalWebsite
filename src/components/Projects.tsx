import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    image: "/project1.jpg",
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL", "Tailwind"],
    image: "/project2.jpg",
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation", "CSS3"],
    image: "/project3.jpg",
    github: "#",
    live: "#"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and clean design.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    image: "/project4.jpg",
    github: "#",
    live: "#"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#001328]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-xl text-[#87A2BF] max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge 
            and learning experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent text-[#04e3ff] border-2 border-[#04e3ff] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#04e3ff] hover:text-white transition-colors"
          >
            View More Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 