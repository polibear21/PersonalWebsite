import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#001328]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-[#87A2BF] max-w-2xl mx-auto">
            Passionate developer with a love for creating meaningful digital experiences
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
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-[#04e3ff] to-[#03b8cc] p-1">
                <div className="w-full h-full rounded-2xl bg-[#001328] p-2">
                  <div className="w-full h-full rounded-2xl bg-[#001328] flex items-center justify-center">
                    <span className="text-[#87A2BF] text-lg">
                      David Zhao
                    </span>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#04e3ff] rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#03b8cc] rounded-full opacity-60"></div>
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
            <h3 className="text-3xl font-bold text-white mb-4">
              Full Stack Developer & Creative Problem Solver
            </h3>
            
            <p className="text-[#87A2BF] text-lg leading-relaxed">
              I'm a passionate developer who loves turning complex problems into simple, 
              beautiful, and intuitive solutions. With expertise in modern web technologies, 
              I create seamless user experiences that make a difference.
            </p>

            <p className="text-[#87A2BF] text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community. 
              I believe in continuous learning and pushing the boundaries of what's possible.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#04e3ff] mb-2">3+</div>
                <div className="text-[#87A2BF]">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#04e3ff] mb-2">50+</div>
                <div className="text-[#87A2BF]">Projects Completed</div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#04e3ff] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#03b8cc] transition-colors"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ 
                  behavior: 'smooth' 
                })
              }}
            >
              View My Work
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 