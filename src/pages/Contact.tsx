
import React from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Contact: React.FC = () => {
  const { footerData } = useAdmin();
  
  const whatsappNumber = "62982474117";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  
  return (
    <div className="page-transition pt-20 bg-black text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-vetor-black to-black py-20">
        <div className="container mx-auto px-4 md:px-6">
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
      
      {/* Contact Info Section */}
      <section className="py-20 bg-vetor-black/80">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Contact Info */}
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-vetor-green/20 mb-12">
              <div className="inline-block mb-4 px-3 py-1 bg-vetor-green bg-opacity-10 rounded-full">
                <span className="text-vetor-green font-medium text-sm">Entre em Contato</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Vamos Conversar
              </h2>
              <p className="text-gray-300 mb-8">
                Estamos ansiosos para ouvir sobre seu projeto e como podemos ajudar. Sinta-se à vontade para entrar em contato conosco através dos canais abaixo.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-vetor-green bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-vetor-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">
                      Endereço
                    </h3>
                    <p className="text-gray-300">
                      Torre Tóquio, Metropolitan Mall - Av. Dep. Jamel Cecílio, 2690 - Jardim Goiás, Goiânia - GO, 74810-100
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-vetor-green bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-vetor-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">
                      Email
                    </h3>
                    <a 
                      href="mailto:vetorcsa@gmail.com" 
                      className="text-gray-300 hover:text-vetor-green transition-colors"
                    >
                      vetorcsa@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-vetor-green bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-vetor-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">
                      Telefone
                    </h3>
                    <a 
                      href="tel:62982474117" 
                      className="text-gray-300 hover:text-vetor-green transition-colors"
                    >
                      62 982474117
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-vetor-green bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                    <MessageCircle className="w-6 h-6 text-vetor-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">
                      WhatsApp
                    </h3>
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-vetor-green transition-colors"
                    >
                      Iniciar conversa no WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* WhatsApp Card */}
            <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-vetor-green/20 p-8 animate-slide-in-right text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                Fale Conosco pelo WhatsApp
              </h3>
              
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Clique no botão abaixo para iniciar uma conversa direta conosco pelo WhatsApp. 
                Estamos prontos para atender suas dúvidas e necessidades sobre nossas soluções tecnológicas.
              </p>
              
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-green-500 hover:bg-green-600 text-white border-none py-6 px-8 text-lg flex items-center gap-3">
                  <MessageCircle className="w-6 h-6" />
                  Conversar no WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
