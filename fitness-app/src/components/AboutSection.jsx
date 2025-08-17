import React from 'react';
import { Target, Users, Award } from 'lucide-react';
import aboutImage from '../assets/images/about-section.jpg';
import '../App.css';

const AboutSection = () => {
  return (
    <section id="apropos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--fitness-dark-blue)' }}>
                Qui Sommes-Nous ?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nous sommes une équipe de professionnels passionnés par la musculation et le fitness, 
                dédiés à vous aider à atteindre vos objectifs de santé et de bien-être. Notre approche 
                est basée sur des programmes personnalisés, adaptés à votre niveau et à vos aspirations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Que vous soyez débutant ou athlète confirmé, nous vous offrons un accompagnement sur mesure, 
                des conseils nutritionnels et un suivi rigoureux pour maximiser vos résultats et transformer 
                votre corps et votre esprit.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--fitness-orange)' }}>
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--fitness-dark-blue)' }}>
                  Objectifs Personnalisés
                </h3>
                <p className="text-gray-600 text-sm">
                  Programmes adaptés à vos besoins spécifiques
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--fitness-blue-gray)' }}>
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--fitness-dark-blue)' }}>
                  Équipe Experte
                </h3>
                <p className="text-gray-600 text-sm">
                  Coachs certifiés et passionnés
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--fitness-orange)' }}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--fitness-dark-blue)' }}>
                  Résultats Garantis
                </h3>
                <p className="text-gray-600 text-sm">
                  Suivi rigoureux et méthodes éprouvées
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={aboutImage} 
                alt="Salle de sport moderne" 
                className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: 'var(--fitness-orange)' }}>500+</div>
                <div className="text-sm text-gray-600">Clients Satisfaits</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: 'var(--fitness-blue-gray)' }}>5+</div>
                <div className="text-sm text-gray-600">Années d'Expérience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

