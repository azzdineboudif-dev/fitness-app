import React from 'react';
import { Dumbbell, Heart, Trophy } from 'lucide-react';
import servicesImage from '../assets/images/services-section.jpg';
import '../App.css';

const ServicesSection = () => {
  const services = [
    {
      icon: Dumbbell,
      title: "Musculation Personnalisée",
      description: "Des séances individuelles avec un coach dédié pour sculpter votre corps et augmenter votre force.",
      features: ["Programmes sur mesure", "Suivi personnalisé", "Techniques avancées"],
      color: "var(--fitness-orange)"
    },
    {
      icon: Heart,
      title: "Body Fitness & Cardio",
      description: "Des entraînements combinant renforcement musculaire et exercices cardiovasculaires pour une condition physique optimale.",
      features: ["Cardio-training", "Renforcement musculaire", "Amélioration endurance"],
      color: "var(--fitness-blue-gray)"
    },
    {
      icon: Trophy,
      title: "Préparation Physique Spécifique",
      description: "Des programmes conçus pour les athlètes souhaitant améliorer leurs performances dans une discipline particulière.",
      features: ["Préparation sportive", "Performance optimisée", "Récupération active"],
      color: "var(--fitness-dark-blue)"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--fitness-dark-blue)' }}>
            Nos Programmes d'Entraînement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos programmes spécialement conçus pour vous accompagner dans votre transformation physique
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
              >
                <div className="p-8">
                  {/* Icon */}
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: service.color }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--fitness-dark-blue)' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div 
                          className="w-2 h-2 rounded-full mr-3"
                          style={{ backgroundColor: service.color }}
                        ></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button 
                    className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105"
                    style={{ 
                      backgroundColor: service.color,
                      color: 'white'
                    }}
                  >
                    En Savoir Plus
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={servicesImage} 
                alt="Personnes s'entraînant en salle" 
                className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold" style={{ color: 'var(--fitness-dark-blue)' }}>
              Pourquoi Choisir Nos Services ?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0"
                  style={{ backgroundColor: 'var(--fitness-orange)' }}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1" style={{ color: 'var(--fitness-dark-blue)' }}>
                    Approche Scientifique
                  </h4>
                  <p className="text-gray-600">
                    Nos méthodes sont basées sur les dernières recherches en sciences du sport
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0"
                  style={{ backgroundColor: 'var(--fitness-blue-gray)' }}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1" style={{ color: 'var(--fitness-dark-blue)' }}>
                    Suivi Personnalisé
                  </h4>
                  <p className="text-gray-600">
                    Chaque programme est adapté à vos objectifs et à votre condition physique
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0"
                  style={{ backgroundColor: 'var(--fitness-orange)' }}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1" style={{ color: 'var(--fitness-dark-blue)' }}>
                    Résultats Mesurables
                  </h4>
                  <p className="text-gray-600">
                    Nous suivons vos progrès avec des outils de mesure précis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

