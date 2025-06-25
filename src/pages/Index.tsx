
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Phone, MapPin, Calendar, GraduationCap, Briefcase, Camera, Video, Award, MessageCircle } from "lucide-react";
import PremiumBackground from "@/components/PremiumBackground";
import HeroSection from "@/components/HeroSection";
import AboutGrid from "@/components/AboutGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactGrid from "@/components/ContactGrid";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Premium Animated Background */}
      <PremiumBackground scrollY={scrollY} />
      
      {/* Dynamic Overlay with Less Opacity */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70 z-10" />
      
      {/* Main Content */}
      <div className="relative z-20">
        {/* Hero Section */}
        <HeroSection isVisible={isVisible} scrollY={scrollY} />
        
        {/* About Grid Section */}
        <AboutGrid isVisible={isVisible} />
        
        {/* Experience Timeline */}
        <ExperienceTimeline isVisible={isVisible} />
        
        {/* Contact Grid */}
        <ContactGrid isVisible={isVisible} />
        
        {/* Footer */}
        <footer className="py-8 text-center text-gray-400 border-t border-yellow-400/20">
          <p className="text-sm">© 2024 Marwan Mohamed. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
