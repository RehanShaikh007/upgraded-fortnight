import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import {
  IconBrandReact,
  IconBrandJavascript,
  IconBrandNodejs,
  IconBrandMongodb,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandGit,
  IconBrandGithub,
  IconBrandFigma,
  IconBrandVscode,
  IconBrandVercel,
  IconCloud,
  IconDatabase,
  IconCode,
  IconPalette,
  IconTerminal,
  IconServer,
  IconWorld,
  IconStack,
  IconSettings,
  IconRocket,
} from '@tabler/icons-react';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const controls = useAnimation();

  const skills = [
    {
      name: 'React.js',
      level: 95,
      icon: <IconBrandReact className="w-8 h-8" />,
      symbol: <IconStack className="w-5 h-5" />,
      color: 'from-blue-400 to-cyan-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
    },
    {
      name: 'JavaScript',
      level: 90,
      icon: <IconBrandJavascript className="w-8 h-8" />,
      symbol: <IconCode className="w-5 h-5" />,
      color: 'from-yellow-400 to-orange-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
    },
    {
      name: 'Node.js',
      level: 85,
      icon: <IconBrandNodejs className="w-8 h-8" />,
      symbol: <IconServer className="w-5 h-5" />,
      color: 'from-green-400 to-emerald-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
    },
    {
      name: 'MongoDB',
      level: 80,
      icon: <IconBrandMongodb className="w-8 h-8" />,
      symbol: <IconDatabase className="w-5 h-5" />,
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-600/10',
      borderColor: 'border-green-600/30',
    },
    {
      name: 'HTML5',
      level: 95,
      icon: <IconBrandHtml5 className="w-8 h-8" />,
      symbol: <IconWorld className="w-5 h-5" />,
      color: 'from-orange-400 to-red-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
    },
    {
      name: 'CSS3',
      level: 90,
      icon: <IconBrandCss3 className="w-8 h-8" />,
      symbol: <IconPalette className="w-5 h-5" />,
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-600/10',
      borderColor: 'border-blue-600/30',
    },
    {
      name: 'Git',
      level: 85,
      icon: <IconBrandGit className="w-8 h-8" />,
      symbol: <IconTerminal className="w-5 h-5" />,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-600/10',
      borderColor: 'border-orange-600/30',
    },
    {
      name: 'GitHub',
      level: 80,
      icon: <IconBrandGithub className="w-8 h-8" />,
      symbol: <IconCode className="w-5 h-5" />,
      color: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gray-500/10',
      borderColor: 'border-gray-500/30',
    },
    {
      name: 'Figma',
      level: 75,
      icon: <IconBrandFigma className="w-8 h-8" />,
      symbol: <IconPalette className="w-5 h-5" />,
      color: 'from-purple-400 to-pink-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
    },
    {
      name: 'VS Code',
      level: 90,
      icon: <IconBrandVscode className="w-8 h-8" />,
      symbol: <IconSettings className="w-5 h-5" />,
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-blue-700/10',
      borderColor: 'border-blue-700/30',
    },
    {
      name: 'Vercel',
      level: 85,
      icon: <IconBrandVercel className="w-8 h-8" />,
      symbol: <IconRocket className="w-5 h-5" />,
      color: 'from-gray-600 to-gray-800',
      bgColor: 'bg-gray-700/10',
      borderColor: 'border-gray-700/30',
    },
    {
      name: 'Netlify',
      level: 80,
      icon: <IconCloud className="w-8 h-8" />,
      symbol: <IconCloud className="w-5 h-5" />,
      color: 'from-cyan-400 to-teal-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
    },
  ];

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    }),
  };

  return (
    <section id="skills" className="py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
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
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I work with to create amazing digital experiences
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={`group relative p-6 rounded-2xl ${skill.bgColor} border ${skill.borderColor} backdrop-blur-sm hover:scale-105 transition-all duration-200`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Symbol in top-right corner */}
              <motion.div
                className={`absolute top-4 right-4 p-2 rounded-lg bg-gradient-to-r ${skill.color} bg-opacity-20 text-white/80`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {skill.symbol}
              </motion.div>

              {/* Main Icon */}
              <motion.div
                className={`text-4xl mb-4 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                {skill.icon}
              </motion.div>

              {/* Skill Name */}
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-200">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="relative">
                <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    variants={progressVariants}
                    custom={skill.level}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  />
                </div>
                <motion.span
                  className="absolute -top-8 right-0 text-sm font-medium text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  {skill.level}%
                </motion.span>
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <IconBrandReact className="w-6 h-6 text-cyan-400" />
            </motion.div>
            <span className="text-gray-300 font-medium">
              Always learning and exploring new technologies
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
