import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "./projectlist"; // Import from separate file

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            My Projects
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-4"></div>
        </motion.div>

        {/* Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Project Header */}
              <div className="bg-gradient-to-r from-black to-blue-800 p-8 text-white">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                    <p className="text-white text-lg">{project.subtitle}</p>
                  </div>
                </div>
                <p className="text-white leading-relaxed">{project.description}</p>
              </div>

              {/* Project Features */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {project.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 + 0.3 }}
                      className="bg-white/30 backdrop-blur-sm rounded-xl p-6 border-l-4 border-black hover:shadow-md transition-shadow"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.2 + idx * 0.05 + 0.5 }}
                      className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-900 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                {(project.demoUrl || project.githubUrl) && (
                  <div className="flex flex-wrap gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                      >
                        <FaExternalLinkAlt size={16} />
                        Learn More
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border-2 border-black text-black px-5 py-2 rounded-xl font-semibold hover:bg-white/40 transition-colors"
                      >
                        <FaGithub size={16} />
                        View Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}