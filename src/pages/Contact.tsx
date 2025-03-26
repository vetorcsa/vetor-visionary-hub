
import React from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { Mail, Phone, MapPin, MessageCircle, Send, Users, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const { footerData } = useAdmin();
  
  const whatsappNumber = "62982474117";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  
  return (
    <div className="page-transition pt-20 bg-black text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-vetor-black to-black py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-[30rem] h-[30rem] rounded-full bg-vetor-green/5 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[25rem] h-[25rem] rounded-full bg-vetor-green/3 blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-6">Contato</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Entre em Contato
            </h1>
            <p className="text-lg text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Estamos prontos para ajudar seu negócio a crescer com nossas soluções tecnológicas. Entre em contato e vamos conversar!
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Info Section - Redesigned */}
      <section className="py-20 bg-vetor-black/80 relative">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(rgba(0, 176, 80, 0.05) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left side: Contact Info */}
              <div className="glass-card p-8 md:p-12 rounded-xl border border-vetor-green/20 backdrop-blur-sm hover:border-vetor-green/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,176,80,0.1)]">
                <div className="mb-8">
                  <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">Nossa Localização</Badge>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Vamos Conversar
                  </h2>
                  <p className="text-gray-300 mb-8">
                    Estamos ansiosos para ouvir sobre seu projeto e como podemos ajudar. Sinta-se à vontade para entrar em contato conosco através dos canais abaixo.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="glass-card p-6 rounded-xl border border-vetor-green/10 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,176,80,0.1)] hover:border-vetor-green/20 group">
                    <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-vetor-green/20 transition-all">
                      <MapPin className="w-6 h-6 text-vetor-green" />
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">
                      Endereço
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Torre Tóquio, Metropolitan Mall<br />
                      Av. Dep. Jamel Cecílio, 2690<br />
                      Jardim Goiás, Goiânia - GO<br />
                      74810-100
                    </p>
                  </div>
                  
                  <div className="glass-card p-6 rounded-xl border border-vetor-green/10 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,176,80,0.1)] hover:border-vetor-green/20 group">
                    <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-vetor-green/20 transition-all">
                      <Mail className="w-6 h-6 text-vetor-green" />
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">
                      Email
                    </h3>
                    <a 
                      href="mailto:vetorcsa@gmail.com" 
                      className="text-gray-300 hover:text-vetor-green transition-colors block mb-2"
                    >
                      vetorcsa@gmail.com
                    </a>
                    <p className="text-gray-400 text-sm">
                      Enviamos uma resposta em até 24 horas úteis.
                    </p>
                  </div>
                  
                  <div className="glass-card p-6 rounded-xl border border-vetor-green/10 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,176,80,0.1)] hover:border-vetor-green/20 group">
                    <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-vetor-green/20 transition-all">
                      <Phone className="w-6 h-6 text-vetor-green" />
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">
                      Telefone
                    </h3>
                    <a 
                      href="tel:62982474117" 
                      className="text-gray-300 hover:text-vetor-green transition-colors block mb-2"
                    >
                      (62) 98247-4117
                    </a>
                    <p className="text-gray-400 text-sm">
                      Disponível em horário comercial.
                    </p>
                  </div>
                  
                  <div className="glass-card p-6 rounded-xl border border-vetor-green/10 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,176,80,0.1)] hover:border-vetor-green/20 group">
                    <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-vetor-green/20 transition-all">
                      <Clock className="w-6 h-6 text-vetor-green" />
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">
                      Horário de Atendimento
                    </h3>
                    <p className="text-gray-300 mb-1">
                      Segunda - Sexta: 8h às 18h
                    </p>
                    <p className="text-gray-300">
                      Sábado: 9h às 13h
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right side: WhatsApp Card */}
              <div className="glass-card p-8 md:p-12 rounded-xl border border-vetor-green/20 backdrop-blur-sm hover:border-vetor-green/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,176,80,0.1)]">
                <div className="flex flex-col h-full justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg hover:shadow-green-500/20 transition-all duration-300 hover:scale-105">
                    <MessageCircle className="w-12 h-12 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-6 text-center">
                    Fale Conosco pelo WhatsApp
                  </h3>
                  
                  <div className="space-y-6 mb-10">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center mr-4 mt-1">
                        <Send className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-1">Resposta Rápida</h4>
                        <p className="text-gray-300">Respondemos mensagens em até 2 horas durante o horário comercial.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center mr-4 mt-1">
                        <Users className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-1">Suporte Especializado</h4>
                        <p className="text-gray-300">Nossa equipe técnica está pronta para esclarecer suas dúvidas sobre nossas soluções.</p>
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="bg-green-500 hover:bg-green-600 text-white border-none py-6 px-8 text-lg flex items-center gap-3 w-full justify-center transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
                      <MessageCircle className="w-6 h-6" />
                      Conversar no WhatsApp
                    </Button>
                  </a>
                  
                  <p className="text-center text-gray-400 mt-4 text-sm">
                    Clique no botão acima para iniciar uma conversa direta conosco pelo WhatsApp.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Map Section */}
            <div className="mt-16 glass-card p-8 rounded-xl border border-vetor-green/20 backdrop-blur-sm hover:border-vetor-green/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,176,80,0.1)]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Nossa Localização
                  </h3>
                  <p className="text-gray-300">
                    Visite-nos no Metropolitan Mall, um dos principais centros empresariais de Goiânia.
                  </p>
                </div>
                <a 
                  href="https://maps.google.com/?q=Torre+Tóquio,+Metropolitan+Mall+-+Av.+Dep.+Jamel+Cecílio,+2690+-+Jardim+Goiás,+Goiânia+-+GO,+74810-100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-vetor-green/10 hover:bg-vetor-green/20 text-vetor-green px-4 py-2 rounded-md transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Ver no Google Maps
                </a>
              </div>
              
              <div className="rounded-lg overflow-hidden border border-vetor-green/20 h-80 md:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.5814962089386!2d-49.24143472483724!3d-16.703856783150526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef16ee1141d09%3A0xdbc61c12864f1667!2sMetropolitan%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1689261423286!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Vetor"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
