import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
    technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    image: "/api/placeholder/400/250",
    link: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    image: "/api/placeholder/400/250",
    link: "#"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    image: "/api/placeholder/400/250",
    link: "#"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern portfolio website with 3D animations, smooth transitions, and responsive design showcasing my work.",
    technologies: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS"],
    image: "/api/placeholder/400/250",
    link: "#"
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description: "A comprehensive social media management dashboard with analytics, scheduling, and content management tools.",
    technologies: ["React", "Express.js", "Redis", "AWS"],
    image: "/api/placeholder/400/250",
    link: "#"
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    description: "A mobile-first fitness application with workout tracking, progress analytics, and social features for motivation.",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    image: "/api/placeholder/400/250",
    link: "#"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge 
            and an opportunity to learn and grow as a developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary to-blue-600 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">
                      {project.title}
                    </span>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white text-primary px-6 py-2 rounded-lg font-semibold"
                    >
                      View Project
                    </motion.button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-primary text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                    >
                      Live Demo
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 border border-primary text-primary py-2 px-4 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
                    >
                      Source Code
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 