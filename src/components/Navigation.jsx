import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  IconHome,
  IconCode,
  IconStar,
  IconRocket,
  IconMail,
  IconMenu2,
  IconX,
} from '@tabler/icons-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: <IconHome className="w-5 h-5" /> },
    { id: 'skills', label: 'Skills', icon: <IconStar className="w-5 h-5" /> },
    { id: 'projects', label: 'Projects', icon: <IconCode className="w-5 h-5" /> },
    { id: 'experience', label: 'Experience', icon: <IconRocket className="w-5 h-5" /> },
    { id: 'contact', label: 'Contact', icon: <IconMail className="w-5 h-5" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="fixed bottom-20 left-10 z-50 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="bg-gray-800/80 backdrop-blur-md rounded-full px-6 py-4 border border-gray-700/50">
          <ul className="flex items-center gap-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <motion.button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative p-3 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-purple-500 to-pink-500'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.icon}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.label}
                  </span>
                </motion.button>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        className="fixed top-4 right-4 z-50 lg:hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-gray-800/80 backdrop-blur-md rounded-full border border-gray-700/50 text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <IconX className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <IconMenu2 className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-16 right-0 bg-gray-800/90 backdrop-blur-md rounded-2xl p-4 border border-gray-700/50 min-w-[200px]"
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        activeSection === item.id
                          ? 'text-white bg-gradient-to-r from-purple-500 to-pink-500'
                          : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                      }`}
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-gray-800/50 z-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 origin-left"
          style={{
            scaleX: activeSection === 'home' ? 0.2 : 
                   activeSection === 'skills' ? 0.4 :
                   activeSection === 'projects' ? 0.6 :
                   activeSection === 'experience' ? 0.8 : 1
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </>
  );
};

export default Navigation;
