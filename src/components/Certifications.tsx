import { motion } from 'framer-motion'

const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-123456",
    image: "/api/placeholder/100/100",
    description: "Demonstrates expertise in designing distributed systems on AWS."
  },
  {
    id: 2,
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2023",
    credentialId: "GCP-789012",
    image: "/api/placeholder/100/100",
    description: "Validates ability to build scalable applications on Google Cloud Platform."
  },
  {
    id: 3,
    name: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    date: "2022",
    credentialId: "AZ-204-345678",
    image: "/api/placeholder/100/100",
    description: "Proves skills in developing solutions for Microsoft Azure."
  },
  {
    id: 4,
    name: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2022",
    credentialId: "MDB-901234",
    image: "/api/placeholder/100/100",
    description: "Validates expertise in MongoDB application development."
  },
  {
    id: 5,
    name: "React Developer Certification",
    issuer: "Meta",
    date: "2022",
    credentialId: "REACT-567890",
    image: "/api/placeholder/100/100",
    description: "Demonstrates proficiency in React development and best practices."
  },
  {
    id: 6,
    name: "Node.js Certified Developer",
    issuer: "OpenJS Foundation",
    date: "2021",
    credentialId: "NODE-123789",
    image: "/api/placeholder/100/100",
    description: "Validates skills in Node.js development and server-side JavaScript."
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span> & Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I believe in continuous learning and professional development. 
            Here are some of the certifications I've earned to validate my skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-100">
                {/* Certificate Header */}
                <div className="bg-gradient-to-r from-primary to-blue-600 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold">🏆</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm opacity-90">Issued</span>
                      <div className="font-semibold">{cert.date}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                  <p className="text-blue-100">{cert.issuer}</p>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Credential ID:</span>
                      <span className="text-sm font-mono text-primary">{cert.credentialId}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Status:</span>
                      <span className="text-sm text-green-600 font-medium">✓ Active</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                    >
                      Verify
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 border border-primary text-primary py-2 px-4 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
                    >
                      Download
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Additional <span className="gradient-text">Achievements</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Hackathon Winner", description: "1st place in 2023 Tech Innovation Challenge", icon: "🏆" },
              { title: "Open Source Contributor", description: "50+ contributions to popular repositories", icon: "🌟" },
              { title: "Mentor", description: "Helped 20+ developers grow their skills", icon: "👨‍🏫" },
              { title: "Speaker", description: "Presented at 5+ tech conferences", icon: "🎤" }
            ].map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-primary to-blue-600 text-white p-6 rounded-xl text-center"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h4 className="text-xl font-bold mb-2">{achievement.title}</h4>
                <p className="text-blue-100 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            View All Certificates
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 