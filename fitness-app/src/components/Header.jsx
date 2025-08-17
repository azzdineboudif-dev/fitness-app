import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import heroBanner from '../assets/images/hero-banner.jpg';
import '../App.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="relative">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="text-white font-bold text-2xl">
              Fitness<span style={{ color: 'var(--fitness-orange)' }}>Pro</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="text-white hover:text-[var(--fitness-orange)] transition-colors duration-300"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('apropos')}
                className="text-white hover:text-[var(--fitness-orange)] transition-colors duration-300"
              >
                À Propos
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-[var(--fitness-orange)] transition-colors duration-300"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('temoignages')}
                className="text-white hover:text-[var(--fitness-orange)] transition-colors duration-300"
              >
                Témoignages
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-[var(--fitness-orange)] transition-colors duration-300"
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-[var(--fitness-orange)] transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/90 backdrop-blur-sm rounded-lg mt-2 p-4">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('accueil')}
                  className="text-white hover:text-[var(--fitness-orange)] transition-colors duration-300 text-left"
                >
                  Accueil
                </button>
                <button 
                  onClick={() => scrollToSection('apropos')}
                  className="text-white hover:text-[var(--fitness-orange)] transition-colors duration-300 text-left"
                >
                  À Propos
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-white hover:text-[var(--fitness-orange)] transition-colors duration-300 text-left"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('temoignages')}
                  className="text-white hover:text-[var(--fitness-orange)] transition-colors duration-300 text-left"
                >
                  Témoignages
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white hover:text-[var(--fitness-orange)] transition-colors duration-300 text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Banner */}
      <div 
        id="accueil"
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              Atteignez Vos 
              <span className="block" style={{ color: 'var(--fitness-orange)' }}>
                Objectifs Fitness
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300">
              Entraînement personnalisé, résultats garantis.
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-[var(--fitness-orange)] hover:bg-[var(--fitness-orange)]/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-600"
            >
              Commencez Votre Transformation
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

