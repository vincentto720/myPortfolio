import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import type { JSX } from "react/jsx-runtime";

// Import your page components
import Home from "./components/home";
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import ContactMe from "./components/contactMe";
import { skills } from "./components/skills";

type SkillColumnProps = {
  skills: Array<{ icon: JSX.Element; name: string }>;
  direction: "down" | "up";
};

const SkillColumn = ({ skills, direction }: SkillColumnProps) => (
  <div className="flex flex-col gap-8 overflow-hidden">
    <motion.div
      animate={{ y: direction === 'down' ? ['0%', '-50%'] : ['-50%', '0%'] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="flex flex-col gap-8"
    >
      {[...skills, ...skills].map((skill, i) => (
        <div key={i} className="flex flex-col items-center opacity-100 hover:opacity-80 transition-opacity">
          {skill.icon}
        </div>
      ))}
    </motion.div>
  </div>
);

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Split skills into columns for alternating scroll directions
  const column1 = skills.filter((_, i) => i % 3 === 0);
  const column2 = skills.filter((_, i) => i % 3 === 1);
  const column3 = skills.filter((_, i) => i % 3 === 2);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-900">
      {/* Animated Background - Fixed across all sections */}
      <div className="fixed inset-0 flex justify-around px-8 py-8 pointer-events-none z-0">
        <SkillColumn skills={column1} direction="down" />
        <SkillColumn skills={column2} direction="up" />
        <SkillColumn skills={column3} direction="down" />
      </div>

      {/* Navigation */}
      <nav className="bg-gradient-to-r from-black to-blue-800 backdrop-blur-md shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-xl font-bold text-white">Vincent To</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')} 
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-blue-600 hover:bg-gray-100 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-blue-600 hover:bg-gray-100 transition-colors"
              >
                About Me
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-blue-600 hover:bg-gray-100 transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-blue-600 hover:bg-gray-100 transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button (Hamburger) */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-white hover:bg-gray-100"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 bg-gray-800 backdrop-blur-md rounded-b-lg">
              <button 
                onClick={() => scrollToSection('home')} 
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-100"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-100"
              >
                About Me
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-100"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-100"
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content - Single page with all sections */}
      <main className="relative z-10">
        <section id="home" className="min-h-screen">
          <Home scrollToSection={scrollToSection} />
        </section>

        <section id="about" className="min-h-screen">
          <AboutMe />
        </section>

        <section id="projects" className="min-h-screen">
          <Projects />
        </section>

        <section id="contact" className="min-h-screen">
          <ContactMe />
        </section>
      </main>
    </div>
  );
}