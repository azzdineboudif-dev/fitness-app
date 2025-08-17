import React from 'react';
import { Star, Quote } from 'lucide-react';
import testimonialsImage from '../assets/images/testimonials-section.jpg';
import '../App.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Jean Dupont",
      role: "Entrepreneur",
      content: "Grâce à l'équipe, j'ai perdu 15 kg et retrouvé une énergie incroyable. Les coachs sont très professionnels et motivants !",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Marie Curie",
      role: "Professeure",
      content: "J'ai toujours eu du mal à rester motivée, mais les programmes personnalisés ont tout changé. Je me sens plus forte et plus confiante.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Pierre Martin",
      role: "Athlète",
      content: "La préparation physique spécifique m'a permis d'améliorer mes performances de 30%. Une équipe exceptionnelle !",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="temoignages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--fitness-dark-blue)' }}>
            Ce Que Nos Clients Disent
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les témoignages de nos clients qui ont transformé leur vie grâce à nos programmes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Testimonials */}
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-1"
              >
                {/* Quote Icon */}
                <div className="flex items-start space-x-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--fitness-orange)' }}
                  >
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    {/* Stars */}
                    <div className="flex space-x-1 mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    {/* Content */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center space-x-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-lg" style={{ color: 'var(--fitness-dark-blue)' }}>
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image and Stats */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={testimonialsImage} 
                alt="Clients satisfaits" 
                className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-3xl font-bold mb-4">
                  Rejoignez Notre Communauté
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Plus de 500 personnes ont déjà transformé leur vie avec nous
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold" style={{ color: 'var(--fitness-orange)' }}>98%</div>
                    <div className="text-sm">Satisfaction Client</div>
                  </div>
                  <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold" style={{ color: 'var(--fitness-orange)' }}>-12kg</div>
                    <div className="text-sm">Perte Moyenne</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Review Card */}
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <div className="flex items-center space-x-2 mb-3">
                {renderStars(5)}
              </div>
              <p className="text-sm text-gray-600 mb-3">
                "Une expérience exceptionnelle ! Je recommande vivement."
              </p>
              <div className="flex items-center space-x-3">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" 
                  alt="Client"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--fitness-dark-blue)' }}>
                    Sophie L.
                  </div>
                  <div className="text-xs text-gray-500">Il y a 2 jours</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--fitness-dark-blue)' }}>
              Prêt à Commencer Votre Transformation ?
            </h3>
            <p className="text-gray-600 mb-6">
              Rejoignez des centaines de personnes qui ont déjà atteint leurs objectifs
            </p>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-[var(--fitness-orange)] hover:bg-[var(--fitness-orange)]/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              Commencer Maintenant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

