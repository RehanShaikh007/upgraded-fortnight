import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  IconExternalLink,
  IconBrandGithub,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandMongodb,
  IconBrandJavascript,
  IconBrandHtml5,
  IconBrandCss3,
  IconCode,
  IconEye,
} from '@tabler/icons-react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Premium Estate",
      description: "A full-stack real estate platform built with React, Node.js, and MongoDB. Features include user authentication, property management, property listing, and contact management.",
      image: "./estate.png",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Javascript"],
      icons: [
        <IconBrandReact key="react" className="w-5 h-5" />,
        <IconBrandNodejs key="node" className="w-5 h-5" />,
        <IconBrandMongodb key="mongo" className="w-5 h-5" />
      ],
      github: "https://github.com/RehanShaikh007/MERN_RealEstate",
      live: "https://mern-realestate-cb9h.onrender.com/",
      featured: true,
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Netflix Clone",
      description: "A Netflix-inspired streaming platform with user authentication, movie browsing, search functionality, and responsive design.",
      image: "./netflix.png",
      technologies: ["React", "Firebase", "TMDB API", "CSS3", "JavaScript"],
      icons: [
        <IconBrandReact key="react" className="w-5 h-5" />,
        <IconBrandJavascript key="js" className="w-5 h-5" />,
        <IconBrandCss3 key="css" className="w-5 h-5" />
      ],
      github: "https://github.com/RehanShaikh007/MERN_Netflix",
      live: "https://mern-netflix-kysu.onrender.com/",
      featured: true,
      category: "Full Stack"
    },
    {
      id: 3,
      title: "Resume Build with Ai",
      description: "A resume builder with AI-powered project recommendation and job search functionality.",
      image: "./viberr.png",
      technologies: ["HTML", "CSS", "Gemini API", "javascript", "Job API"],
      icons: [
        <IconBrandReact key="react" className="w-5 h-5" />,
        <IconBrandNodejs key="node" className="w-5 h-5" />,
        <IconBrandMongodb key="mongo" className="w-5 h-5" />
      ],
      github: "https://github.com/RehanShaikh007/Resume_Build_with_Ai",
      live: "https://rehanshaikh007.github.io/Resume_Build_with_Ai/",
      featured: false,
      category: "Frontend"
    },
    {
      id: 4,
      title: "CodePen Clone",
      description: "A CodePen-inspired code editor with live preview, syntax highlighting, and multiple language support for frontend development.",
      image: "./codepen.png",
      technologies: ["React", "Monaco Editor", "CSS3", "JavaScript", "HTML5"],
      icons: [
        <IconBrandReact key="react" className="w-5 h-5" />,
        <IconBrandJavascript key="js" className="w-5 h-5" />,
        <IconBrandHtml5 key="html" className="w-5 h-5" />
      ],
      github: "https://github.com/RehanShaikh007/CodePen_Clone",
      live: "https://code-pen-clone-eta.vercel.app/",
      featured: false,
      category: "Frontend"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and passion for creating amazing digital experiences
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform-gpu will-change-transform ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.01
              }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform-gpu will-change-transform"
                  loading="lazy"
                  decoding="async"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10"
                >
                  <motion.div
                    className="text-6xl text-purple-400"
                    animate={{ scale: hoveredProject === project.id ? 1.08 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconCode />
                  </motion.div>
                </motion.div>

                {/* Overlay */}
                <div 
                  className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20"
                >
                  <button
                    data-action="github"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors hover:scale-110"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (project.github) {
                        window.open(project.github, '_blank', 'noopener,noreferrer');
                      } else {
                        console.error('GitHub URL is not defined for project:', project.title);
                      }
                    }}
                    title="View on GitHub"
                  >
                    <IconBrandGithub className="w-6 h-6 text-white" />
                  </button>
                  <button
                    data-action="live"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors hover:scale-110"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (project.live) {
                        window.open(project.live, '_blank', 'noopener,noreferrer');
                      } else {
                        console.error('Live URL is not defined for project:', project.title);
                      }
                    }}
                    title="View Live Demo"
                  >
                    <IconExternalLink className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    Featured
                  </motion.div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-gray-800/80 backdrop-blur-sm text-gray-300 text-sm font-medium rounded-full">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(168, 85, 247, 0.2)",
                        borderColor: "rgba(168, 85, 247, 0.5)"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Tech Icons */}
                <div className="flex items-center gap-3">
                  {project.icons.map((icon, iconIndex) => (
                    <motion.div
                      key={iconIndex}
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {icon}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.open('https://github.com/RehanShaikh007?page=1&tab=repositories', '_blank', 'noopener,noreferrer');
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <IconEye className="w-5 h-5" />
              View All Projects
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
