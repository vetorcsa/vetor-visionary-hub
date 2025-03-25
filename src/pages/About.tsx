
import React from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { Check, Users, Target, Eye, Heart } from 'lucide-react';

const About: React.FC = () => {
  const { aboutData } = useAdmin();
  
  return (
    <div className="page-transition pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-vetor-black mb-6 animate-fade-in">
              {aboutData.title}
            </h1>
            <p className="text-lg text-vetor-darkgray mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {aboutData.description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Mission, Vision, Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
              <div className="w-14 h-14 bg-vetor-green bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-vetor-black mb-4">
                Nossa Missão
              </h3>
              <p className="text-vetor-darkgray">
                {aboutData.mission}
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 animate-slide-in-bottom" style={{ animationDelay: '0.2s' }}>
              <div className="w-14 h-14 bg-vetor-green bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-vetor-black mb-4">
                Nossa Visão
              </h3>
              <p className="text-vetor-darkgray">
                {aboutData.vision}
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
              <div className="w-14 h-14 bg-vetor-green bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-vetor-black mb-4">
                Nossos Valores
              </h3>
              <ul className="text-vetor-darkgray space-y-2">
                {aboutData.values.map((value, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-4 h-4 text-vetor-green mr-2 flex-shrink-0" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-3 py-1 bg-vetor-green bg-opacity-10 rounded-full">
              <span className="text-vetor-green font-medium text-sm">Nossa Equipe</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-vetor-black mb-4">
              Conheça os Especialistas
            </h2>
            <p className="text-vetor-darkgray max-w-2xl mx-auto">
              Nossa equipe de profissionais experientes está pronta para desenvolver soluções tecnológicas que atendam às necessidades específicas do seu negócio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutData.team.map((member, index) => (
              <div 
                key={member.id} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-vetor-black mb-1">
                    {member.name}
                  </h3>
                  <p className="text-vetor-green font-medium mb-4">
                    {member.position}
                  </p>
                  <p className="text-vetor-darkgray">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-3 py-1 bg-vetor-green bg-opacity-10 rounded-full">
                <span className="text-vetor-green font-medium text-sm">Tecnologias</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-vetor-black mb-6">
                Tecnologias que utilizamos
              </h2>
              <p className="text-vetor-darkgray mb-8">
                Utilizamos as tecnologias mais modernas e eficientes para desenvolver soluções personalizadas que atendam às necessidades específicas do seu negócio.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-vetor-green bg-opacity-10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Check className="w-5 h-5 text-vetor-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-vetor-black mb-1">
                      Desenvolvimento de Software
                    </h3>
                    <p className="text-vetor-darkgray">
                      Criamos aplicações web e móveis personalizadas com as tecnologias mais modernas.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-vetor-green bg-opacity-10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Check className="w-5 h-5 text-vetor-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-vetor-black mb-1">
                      Inteligência Artificial
                    </h3>
                    <p className="text-vetor-darkgray">
                      Implementamos soluções de IA para automatizar processos e otimizar resultados.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-vetor-green bg-opacity-10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Check className="w-5 h-5 text-vetor-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-vetor-black mb-1">
                      Computação em Nuvem
                    </h3>
                    <p className="text-vetor-darkgray">
                      Utilizamos serviços em nuvem para garantir escalabilidade e segurança.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm animate-float">
                <h4 className="text-lg font-medium text-vetor-black mb-2">
                  Frontend
                </h4>
                <p className="text-vetor-darkgray mb-4">
                  React, Angular, Vue.js
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm animate-float" style={{ animationDelay: '0.2s' }}>
                <h4 className="text-lg font-medium text-vetor-black mb-2">
                  Backend
                </h4>
                <p className="text-vetor-darkgray mb-4">
                  Node.js, Python, Java
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm animate-float" style={{ animationDelay: '0.4s' }}>
                <h4 className="text-lg font-medium text-vetor-black mb-2">
                  Banco de Dados
                </h4>
                <p className="text-vetor-darkgray mb-4">
                  MongoDB, MySQL, PostgreSQL
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm animate-float" style={{ animationDelay: '0.6s' }}>
                <h4 className="text-lg font-medium text-vetor-black mb-2">
                  DevOps
                </h4>
                <p className="text-vetor-darkgray mb-4">
                  Docker, Kubernetes, CI/CD
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
