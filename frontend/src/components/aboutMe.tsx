import { motion } from "framer-motion";
import { FaGraduationCap, FaTools } from "react-icons/fa";
import profileImage from '../assets/vinnyGrad.jpeg';

export default function AboutPage() {

  const skills = [
    "Python", "C++", "PHP", "JavaScript", "TypeScript", "PHP",
    "HTML", "CSS", "Tailwind CSS", "React", "Node.js",
    "MySQL", "MariaDB", "PostgreSQL", "MongoDB", "SQLite",
    "Git", "Linux", "macOS", "Windows", "NumPy", "Pandas", "scikit-learn",
    "Vite", "Nginx", "AWS", "Docker", "CI/CD Pipelines", "Jenkins"
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About Me
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-4"></div>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-r from-black to-blue-800 p-8 text-white rounded-2xl shadow-lg mb-10"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              {/* <div className="bg-gray-800 to-black w-60 h-60 rounded-full mx-auto shadow-lg"></div> */}
                <img 
                  src={profileImage} 
                  alt="Vincent Z. To" 
                  className="w-60 h-60 rounded-full mx-auto shadow-lg object-cover object-[center_80%]"
                />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-3xl font-bold text-white mb-4">
                Vincent Z. To
              </h3>
              <p className="text-lg text-white mb-4 leading-relaxed">
                I'm a developer who enjoys building applications that feel clean, intuitive, and useful. I love
                working across the stack—from designing databases to writing front-end interfaces—and
                I'm always experimenting with new tools that make development smoother and more fun. My 
                current focus is learning more about the CI/CD pipeline and DevOps practices to streamline
                deployment processes. I created this portfolio with React, Tailwind CSS, Nginx, Docker, and Jenkins
                to familarize myself with these technologies. 
              </p>
              <p className="text-lg text-white leading-relaxed">
                I recently graduated with a B.S. in Computer Science from CSU Bakersfield and
                I've worked on projects involving OCR, neural networks, full-stack web apps, and Spotify
                API integrations. Whether it's cleaning data, crafting SQL queries, or building interactive
                UIs, I love bringing ideas to life through code. 
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-black to-blue-800 p-8 text-white rounded-2xl shadow-lg mb-10"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <FaGraduationCap color="white" size={32} />
            Education
          </h2>
          <div className="bg-gray-800 to-black rounded-xl p-6 border-l-4 border-black">
            <h3 className="text-2xl font-bold text-white mb-2">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-white font-semibold text-lg mb-1">
              California State University Bakersfield
            </p>
            <p className="text-white font-medium">Cum Laude (3.71 GPA)</p>
          </div>
        </motion.div>
        

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-black to-blue-800 p-8 text-white rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <FaTools color="white" size={32} />
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.03 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 to-black text-white border border-black px-4 py-3 rounded-xl text-center font-semibold hover:bg-gray-500 transition-colors shadow-md"
                >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}