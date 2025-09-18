import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  IconBriefcase,
  IconCalendar,
  IconMapPin,
  IconCode,
  IconRocket,
  IconStar,
  IconTrendingUp,
  IconUsers,
  IconAward,
  IconChevronRight,
} from '@tabler/icons-react';

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      id: 1,
      company: "Bytedocker",
      position: "SDE Intern",
      duration: "2025 Aug - Present",
      location: "Remote",
      type: "Internship",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with cross-functional teams to deliver high-quality solutions.",
      achievements: [
        "Built 5+ client websites with 99.9% uptime",
        "Reduced page load times by 50% through optimization",
        "Implemented responsive designs for mobile-first approach",
        "Collaborated with designers to create pixel-perfect UIs"
      ],
      technologies: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      icon: <IconCode className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      company: "Plotch.ai",
      position: "React Intern",
      duration: "2025 Feb - 2025 Apr",
      location: "Remote",
      type: "Internship",
      description: "Contributed to the development of user interfaces showcasing AI agent use-cases for e-commerce and HR departments using React.js. Built a strong foundation in web development.",
      achievements: [
        "Collaborated with the design team to translate wireframes and mock-ups into functional UI components.",
        "Implemented responsive designs for mobile-first approach",
      ],
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "Neo4j", "Nodejs"],
      icon: <IconStar className="w-6 h-6" />,
      color: "from-green-500 to-teal-500"
    },
    {
      id: 3,
      company: "Geekster",
      position: "Full Stack Developer Intern",
      duration: "2023 Sep - 2024 Oct",
      location: "Remote",
      type: "Bootcamp",
      description: "Solved over 100 data structures and algorithms problems, enhancing problem-solving skills and coding proficiency.",
      achievements: [
        "Solved 100+ DSA Problems",
        "Built multiple full-stack projects, applying learned concepts in real-world scenarios.",
        "Secured 1st Position in Geekster Hackathon",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Nodejs", "Expressjs", "MongoDB"],
      icon: <IconBriefcase className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering",
      institution: "Savitribai Phule Pune University",
      duration: "2019 - 2022",
      location: "Nashik, India",
      grade: "9.09 CGPA",
      achievements: [
        "Final Year Project: International Research Journal Pulbished Heating and Cooling Load Calculations using software",
        "Bagged Second Position at Quad Bike Design Challenge - Hyderabad",
        "Ex-Member of KKWIEER Brahmastra Quad Bike Team",
      ]
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
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
            Experience & Education
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My professional journey and educational background that shaped my expertise
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex bg-gray-800/50 backdrop-blur-sm rounded-full p-2 border border-gray-700/50">
            <motion.button
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 0
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setActiveTab(0)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Experience
            </motion.button>
            <motion.button
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 1
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setActiveTab(1)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Education
            </motion.button>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        {activeTab === 0 && (
          <motion.div
            ref={ref}
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative mb-12 pl-20"
                variants={itemVariants}
              >
                {/* Timeline Dot */}
                <motion.div
                  className={`absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} border-4 border-gray-900 z-10`}
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Experience Card */}
                <motion.div
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className={`p-3 rounded-full bg-gradient-to-r ${exp.color} bg-opacity-20`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {exp.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                        <p className="text-purple-400 font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-300 text-sm">{exp.duration}</p>
                      <p className="text-gray-400 text-xs">{exp.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                      {exp.type}
                    </span>
                    <div className="flex items-center gap-1 text-gray-400">
                      <IconMapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <IconAward className="w-5 h-5 text-yellow-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className="flex items-start gap-3 text-gray-300 text-sm"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: achIndex * 0.1 }}
                        >
                          <IconChevronRight className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <IconCode className="w-5 h-5 text-cyan-400" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50 hover:border-purple-500/50 hover:bg-purple-500/20 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Education Section */}
        {activeTab === 1 && (
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 bg-opacity-20"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconTrendingUp className="w-8 h-8 text-purple-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-purple-400 font-semibold text-lg">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-300">{edu.duration}</p>
                    <p className="text-gray-400 text-sm">{edu.location}</p>
                    <p className="text-yellow-400 font-semibold">{edu.grade}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <IconStar className="w-5 h-5 text-yellow-400" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {edu.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        className="flex items-start gap-3 text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: achIndex * 0.1 }}
                      >
                        <IconChevronRight className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
