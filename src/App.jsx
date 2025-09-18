import React from "react";
import LandingPage from "./pages/LandingPage";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Background } from "./components/Backgorund";
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Background>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 w-screen">
          <Navigation />
          <LandingPage/>
          <SkillsSection/>
          <ProjectsSection/>
          <ExperienceSection/>
          <ContactSection/>
          <Footer />
        </div>
      </Background>
    </Router>
  );
};

export default App;
