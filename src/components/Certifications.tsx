import { motion } from 'framer-motion'

const certifications = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-123456",
    description: "Demonstrates expertise in designing distributed systems on AWS platform.",
    image: "/aws-logo.png"
  },
  {
    id: 2,
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2023",
    credentialId: "GCP-789012",
    description: "Validates ability to build scalable applications using Google Cloud technologies.",
    image: "/gcp-logo.png"
  },
  {
    id: 3,
    title: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    date: "2022",
    credentialId: "AZ-204-345678",
    description: "Proves skills in developing, testing, and maintaining cloud applications.",
    image: "/azure-logo.png"
  },
  {
    id: 4,
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    credentialId: "CKA-901234",
    description: "Validates skills in Kubernetes cluster administration and management.",
    image: "/kubernetes-logo.png"
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-[#001328]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Certifications</h2>
          <p className="text-xl text-[#87A2BF] max-w-2xl mx-auto">
            Professional certifications that validate my expertise in various technologies and platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.1, ease: "easeOut" }
              }}
              className="bg-[#001328] border border-[#1a2a3a] rounded-xl p-6 hover:border-[#04e3ff] transition-all duration-100 hover:shadow-xl hover:shadow-[#04e3ff]/10"
            >
              {/* Certification Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#001328] rounded-lg flex items-center justify-center border border-[#1a2a3a]">
                    <span className="text-[#04e3ff] font-bold text-lg">
                      {certification.issuer.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white hover:text-[#04e3ff] transition-colors">
                      {certification.title}
                    </h3>
                    <p className="text-[#87A2BF] text-sm">{certification.issuer}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[#04e3ff] text-sm font-medium">{certification.date}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#87A2BF] mb-4 leading-relaxed">
                {certification.description}
              </p>

              {/* Credential ID */}
              <div className="flex items-center justify-between">
                <span className="text-[#87A2BF] text-sm">
                  Credential ID: <span className="text-[#04e3ff] font-mono">{certification.credentialId}</span>
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-[#04e3ff] border border-[#04e3ff] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#04e3ff] hover:text-white transition-colors"
                >
                  Verify
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-[#001328] border border-[#1a2a3a] rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-[#87A2BF] mb-6">
              I believe in staying current with industry best practices and emerging technologies. 
              These certifications represent my commitment to professional development and expertise 
              in cloud computing and modern development practices.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#04e3ff] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#03b8cc] transition-colors"
            >
              View All Certifications
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 