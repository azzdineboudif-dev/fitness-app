import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import '../App.css';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const quickLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "À Propos", href: "#apropos" },
    { name: "Services", href: "#services" },
    { name: "Témoignages", href: "#temoignages" },
    { name: "Contact", href: "#contact" }
  ];

  const legalLinks = [
    { name: "Politique de Confidentialité", href: "#" },
    { name: "Conditions d'Utilisation", href: "#" },
    { name: "Mentions Légales", href: "#" },
    { name: "CGV", href: "#" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[var(--fitness-dark-blue)] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Fitness<span style={{ color: 'var(--fitness-orange)' }}>Pro</span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Votre partenaire de confiance pour atteindre vos objectifs fitness. 
                Transformez votre corps et votre esprit avec nos programmes personnalisés.
              </p>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-[var(--fitness-blue-gray)] hover:bg-[var(--fitness-orange)] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Navigation Rapide</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-[var(--fitness-orange)] transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-1 text-[var(--fitness-orange)] flex-shrink-0" />
                <div>
                  <p className="text-gray-300">contact@fitness.com</p>
                  <p className="text-sm text-gray-400">Réponse sous 24h</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-1 text-[var(--fitness-orange)] flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+33 1 23 45 67 89</p>
                  <p className="text-sm text-gray-400">Lun-Ven 9h-18h</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-[var(--fitness-orange)] flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Rue du Fitness</p>
                  <p className="text-sm text-gray-400">75000 Paris, France</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Recevez nos conseils fitness et nos dernières actualités directement dans votre boîte mail.
            </p>
            
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-3 bg-[var(--fitness-blue-gray)] text-white placeholder-gray-300 rounded-lg border border-transparent focus:border-[var(--fitness-orange)] focus:outline-none transition-colors duration-300"
              />
              <button
                type="submit"
                className="w-full bg-[var(--fitness-orange)] hover:bg-[var(--fitness-orange)]/90 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                S'abonner
              </button>
            </form>
            
            <p className="text-xs text-gray-400 mt-3">
              En vous abonnant, vous acceptez notre politique de confidentialité.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--fitness-blue-gray)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm">
                © 2025 FitnessPro. Tous droits réservés.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-[var(--fitness-orange)] text-sm transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[var(--fitness-orange)] hover:bg-[var(--fitness-orange)]/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center z-50"
        aria-label="Retour en haut"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;

