import { useEffect, useState, useRef } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { motion, useScroll, useTransform } from 'framer-motion';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { FloatingDock } from "../components/FloatingIcons";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconDownload,
  IconCode,
  IconRocket,
  IconStar,
  IconArrowRight,
} from "@tabler/icons-react";

const LandingPage = () => {
  const [dateState, setDateState] = useState(new Date());
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const handleViewMyWork = () => {
    window.open('https://github.com/RehanShaikh007?page=1&tab=repositories', '_blank', 'noopener,noreferrer');
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Rehan_Shaikh_CV.pdf';
    link.download = 'Rehan_Shaikh_CV.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const hours = dateState.getHours();
  const minutes = String(dateState.getMinutes()).padStart(2, '0');
  const period = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
      
  const showTime = `${formattedHours}:${minutes} ${period}`;

  useEffect(() => {
    const interval = setInterval(() => setDateState(new Date()), 30000);
    return () => clearInterval(interval); 
  }, []);

  const links = [
    {
      title: "Resume",
      icon: (
        <IconDownload className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#resume",
    },
    {
      title: "Projects",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Skills",
      icon: (
        <IconStar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills",
    },
    {
      title: "Experience",
      icon: (
        <IconRocket className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#experience",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/rehan-shaikh-900571276/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/RehanShaikh007",
    },
  ];

  return (
    <div className='w-full min-h-screen relative overflow-hidden'>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Navigation Bar */}
      <motion.nav 
        className='flex justify-between px-6 md:px-20 h-20 items-center relative z-10'
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className='flex items-center gap-2'
          whileHover={{ scale: 1.05 }}
        >
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <AccessTimeIcon style={{fontSize: '1.5em', color: '#ec4899'}}/>
          </motion.span>
          <h2 style={{fontFamily: "Sofia Sans Condensed"}} className='text-xl md:text-3xl text-pink-200 font-bold'>
            {showTime}
          </h2>
        </motion.div>

        <motion.div 
          className='flex items-center gap-2'
          whileHover={{ scale: 1.05 }}
        >
          <motion.span
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <DateRangeIcon style={{fontSize: '1.5em', color: '#ec4899'}}/>
          </motion.span>
          <h2 style={{fontFamily: 'Sofia Sans Condensed'}} className='text-xl md:text-3xl text-pink-200 font-bold'> 
            {dateState.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            })}
          </h2>
        </motion.div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className='relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-[80vh] px-6 md:px-20'
        style={{ y, opacity }}
      >
        <motion.div 
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="relative"
            animate={{
              rotateY: [0, 5, 0],
              rotateX: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.img 
              src="./3d.png" 
              alt="Rehan Shaikh" 
              className='w-64 md:w-80 lg:w-96 z-50 relative'
              whileHover={{ scale: 1.05, rotateY: 10 }}
              transition={{ duration: 0.3 }}
            />
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex-1 text-center lg:text-left lg:ml-12 mt-8 lg:mt-0"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 1, type: "spring", stiffness: 200 }}
          >
            <h1 
              style={{fontFamily: 'Russo One'}} 
              className='text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6'
            >
              REHAN SHAIKH
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <TypeAnimation
              sequence={[
                'MERN STACK DEVELOPER',
                2000,
                'FRONTEND SPECIALIST',
                2000,
                'BACKEND ENGINEER',
                2000,
                'FULL STACK DEVELOPER',
                2000,
                'REACT & NODE.JS EXPERT',
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              style={{ 
                fontSize: '1.5rem',
                marginTop: '20px', 
                color: 'white',
                fontWeight: '600',
                textShadow: '0 0 20px rgba(236, 72, 153, 0.5)'
              }}
            />
          </motion.div>

          <motion.p 
            className='text-lg md:text-xl text-gray-300 mt-8 max-w-2xl leading-relaxed'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            Passionate Full Stack Developer with expertise in React.js, Node.js, and MongoDB. 
            I create innovative web applications with stunning UI/UX and robust backend solutions. 
            Currently seeking opportunities to build amazing products while growing professionally.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
          >
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewMyWork}
            >
              <span className="relative z-10 flex items-center gap-2 text-lg">
                View My Work
                <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
            >
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="w-1 h-3 bg-pink-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Floating Dock */}
      {/* <motion.section 
        className='mt-14 relative z-10'
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <FloatingDock items={links} />
      </motion.section> */}
    </div>
  )
}

export default LandingPage