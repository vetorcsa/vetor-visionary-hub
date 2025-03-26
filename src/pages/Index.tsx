
import React from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import Hero from '@/components/Home/Hero';
import ServicesCard from '@/components/Home/ServicesCard';
import { Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const Index: React.FC = () => {
  const { services } = useAdmin();
  
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-black to-vetor-black relative overflow-hidden">
        {/* Subtle animated background patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-[25rem] h-[25rem] rounded-full bg-vetor-green/5 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-[10%] right-[5%] w-[20rem] h-[20rem] rounded-full bg-vetor-green/3 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">Soluções</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Nossas Soluções Tecnológicas
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-vetor-green to-vetor-green/40 mx-auto mb-8 rounded-full"></div>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Desenvolvemos soluções personalizadas para diferentes setores, trazendo inovação e eficiência para o seu negócio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServicesCard key={service.id} serviceId={service.id} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-black to-vetor-black relative overflow-hidden">
        {/* Enhanced background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-vetor-green/5 blur-3xl"></div>
          <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] rounded-full bg-vetor-green/5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto glass-card p-12 rounded-2xl border border-vetor-green/20 backdrop-blur-sm bg-black/40 shadow-lg">
            <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-6">Automação</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Automatize processos com Python
            </h2>
            <p className="text-white/80 mb-10 text-xl">
              Transforme tarefas repetitivas em processos automatizados e eficientes, aumentando a produtividade da sua empresa.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/automacoes-processos" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-vetor-green to-vetor-darkgreen hover:from-vetor-darkgreen hover:to-vetor-green text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
              >
                Ver automações <Globe className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-vetor-green/10 rounded-full"></div>
        <div className="absolute top-20 -right-20 w-60 h-60 border border-vetor-green/5 rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 border border-vetor-green/20 rounded-full"></div>
      </section>
    </div>
  );
};

export default Index;
