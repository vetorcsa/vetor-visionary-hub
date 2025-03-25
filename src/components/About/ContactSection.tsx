
import React from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection: React.FC = () => {
  const { footerData } = useAdmin();
  
  const whatsappNumber = "62982474117";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  
  return (
    <section className="py-16 bg-vetor-black border-t border-vetor-green/10" id="contato">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-400 text-lg">
            Estamos prontos para ajudar seu negócio a crescer com nossas soluções tecnológicas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="lg:pr-8">
            <p className="text-gray-300 mb-8">
              Estamos ansiosos para ouvir sobre seu projeto e como podemos ajudar. Sinta-se à vontade para entrar em contato conosco através dos canais abaixo.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-vetor-green/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 text-vetor-green" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">
                    Endereço
                  </h3>
                  <p className="text-gray-400">
                    Torre Tóquio, Metropolitan Mall - Av. Dep. Jamel Cecílio, 2690 - Jardim Goiás, Goiânia - GO, 74810-100
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-vetor-green/10 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-vetor-green" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">
                    Email
                  </h3>
                  <a 
                    href="mailto:vetorcsa@gmail.com" 
                    className="text-gray-400 hover:text-vetor-green transition-colors"
                  >
                    vetorcsa@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-vetor-green/10 rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-5 h-5 text-vetor-green" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">
                    Telefone
                  </h3>
                  <a 
                    href="tel:62982474117" 
                    className="text-gray-400 hover:text-vetor-green transition-colors"
                  >
                    62 982474117
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-vetor-green/10 rounded-full flex items-center justify-center mr-4">
                  <MessageCircle className="w-5 h-5 text-vetor-green" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">
                    WhatsApp
                  </h3>
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-vetor-green transition-colors"
                  >
                    Iniciar conversa no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* WhatsApp Card */}
          <div className="bg-black/40 border border-vetor-green/10 rounded-xl p-8 backdrop-blur-sm text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Fale Conosco pelo WhatsApp
            </h3>
            
            <p className="text-gray-400 mb-8">
              Clique no botão abaixo para iniciar uma conversa direta conosco pelo WhatsApp. 
              Estamos prontos para atender suas dúvidas e necessidades sobre nossas soluções tecnológicas.
            </p>
            
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-green-500 hover:bg-green-600 text-white border-none py-4 px-6 text-lg flex items-center gap-3 w-full justify-center">
                <MessageCircle className="w-6 h-6" />
                Conversar no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
