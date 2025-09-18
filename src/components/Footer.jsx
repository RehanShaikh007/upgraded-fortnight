import React from 'react';
import { motion } from 'framer-motion';
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandInstagram,
  IconHeart,
  IconArrowUp,
} from '@tabler/icons-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <IconBrandLinkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/rehan-shaikh-900571276/",
      label: "LinkedIn"
    },
    {
      icon: <IconBrandGithub className="w-6 h-6" />,
      url: "https://github.com/rehanshaikh",
      label: "GitHub"
    },
    {
      icon: <IconBrandTwitter className="w-6 h-6" />,
      url: "https://twitter.com/rehanshaikh",
      label: "Twitter"
    },
    {
      icon: <IconBrandInstagram className="w-6 h-6" />,
      url: "https://instagram.com/rehanshaikh",
      label: "Instagram"
    }
  ];

  return (
    <footer className="relative py-12 px-6 md:px-20 bg-gradient-to-t from-gray-900 to-transparent border-t border-gray-800/50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Rehan Shaikh
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Full Stack Developer passionate about creating amazing digital experiences 
              with modern web technologies.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-400 hover:text-white hover:bg-purple-500/20 transition-all duration-300 border border-gray-700/50 hover:border-purple-500/50"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Skills', 'Projects', 'Experience', 'Contact'].map((link, index) => (
                <li key={index}>
                  <motion.button
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3 text-gray-400">
              <p>rehan.shaikh@example.com</p>
              <p>+91 98765 43210</p>
              <p>Mumbai, India</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm flex items-center gap-2">
            © 2024 Rehan Shaikh. Made with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <IconHeart className="w-4 h-4 text-red-500" />
            </motion.span>
            and modern web technologies.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconArrowUp className="w-4 h-4" />
            Back to Top
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
