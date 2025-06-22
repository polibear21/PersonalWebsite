import { motion } from 'framer-motion'

const skills = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML/CSS", level: 95 }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "Python", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 75 }
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Figma", level: 75 },
      { name: "Agile", level: 80 }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#001328]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-xl text-[#87A2BF] max-w-2xl mx-auto">
            A comprehensive set of technical skills and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.1, ease: "easeOut" }
              }}
              className="bg-[#001328] border border-[#1a2a3a] rounded-xl p-6 hover:border-[#04e3ff] transition-all duration-100 hover:shadow-xl hover:shadow-[#04e3ff]/10"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {skillCategory.category}
              </h3>
              
              <div className="space-y-6">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#87A2BF] font-medium">{skill.name}</span>
                      <span className="text-[#04e3ff] font-semibold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-[#001328] rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-2 bg-gradient-to-r from-[#04e3ff] to-[#03b8cc] rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-[#001328] border border-[#1a2a3a] rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Additional Skills & Technologies
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "JavaScript", "Redux", "GraphQL", "REST APIs",
                "Firebase", "Vercel", "Netlify", "Jest",
                "Webpack", "Babel", "ESLint", "Prettier",
                "Responsive Design", "PWA", "SEO", "Performance"
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="text-center p-3 bg-[#001328] rounded-lg border border-[#1a2a3a] hover:border-[#04e3ff] transition-colors"
                >
                  <span className="text-[#87A2BF] text-sm font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 