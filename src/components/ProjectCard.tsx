import { motion } from 'framer-motion'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image: string
  github: string
  live: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        y: -10,
        transition: { duration: 0.1, ease: "easeOut" }
      }}
      className="group relative bg-[#001328] border border-[#1a2a3a] rounded-xl overflow-hidden hover:border-[#04e3ff] transition-all duration-100 hover:shadow-xl hover:shadow-[#04e3ff]/10"
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-[#04e3ff]/10 to-[#03b8cc]/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#04e3ff]/20 to-[#03b8cc]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#04e3ff] mb-2">
              {project.title.charAt(0)}
            </div>
            <div className="text-[#87A2BF] text-lg font-medium">
              {project.title}
            </div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#04e3ff] transition-colors">
          {project.title}
        </h3>
        
        <p className="text-[#87A2BF] text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-[#001328] text-[#04e3ff] text-xs rounded-md border border-[#1a2a3a] hover:border-[#04e3ff] transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex gap-3">
          <motion.a
            href={project.github}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-transparent text-[#04e3ff] border border-[#04e3ff] px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-[#04e3ff] hover:text-white transition-all duration-300"
          >
            GitHub
          </motion.a>
          <motion.a
            href={project.live}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-[#04e3ff] text-white px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-[#03b8cc] transition-all duration-300"
          >
            Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
} 