import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a love for creating innovative solutions 
            and beautiful user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-96 h-96 rounded-2xl bg-gradient-to-br from-primary to-blue-600 p-1">
                <div className="w-full h-full rounded-2xl bg-white p-2">
                  <div className="w-full h-full rounded-2xl bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-xl">
                      David Zhao
                    </span>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full"></div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Who I Am
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a dedicated developer with a strong foundation in modern web technologies. 
                My journey in software development started with a curiosity about how things work 
                on the web, and it has evolved into a passion for building applications that make 
                a difference in people's lives.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                What I Do
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                I specialize in full-stack development, creating responsive web applications 
                using modern frameworks like React, Next.js, and Node.js. I enjoy working on 
                both the frontend and backend, ensuring seamless user experiences and robust 
                server-side solutions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                My Approach
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with 
                the latest industry trends. Every project is an opportunity to learn and grow, 
                and I'm always excited to tackle new challenges and technologies.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white rounded-lg shadow-md"
              >
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white rounded-lg shadow-md"
              >
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-gray-600">Projects Completed</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 