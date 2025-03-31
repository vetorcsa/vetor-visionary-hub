
import React from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { Mail, Phone, MapPin, MessageCircle, Send, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection: React.FC = () => {
  const { footerData } = useAdmin();
  
  const whatsappNumber = "6298166-3235";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  
  return (
    <section className="py-16 bg-vetor-black border-t border-vetor-green/10 relative overflow-hidden" id="contato">
      {/* Background elements */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(rgba(0, 176, 80, 0.03) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[30%] left-[15%] w-[20rem] h-[20rem] rounded-full bg-vetor-green/5 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[25rem] h-[25rem] rounded-full bg-vetor-green/3 blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
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
          <div className="glass-card p-8 rounded-xl border border-vetor-green/20 backdrop-blur-sm hover:border-vetor-green/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,176,80,0.1)]">
            <p className="text-gray-300 mb-8">
              Estamos ansiosos para ouvir sobre seu projeto e como podemos ajudar. Sinta-se à vontade para entrar em contato conosco através dos canais abaixo.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-vetor-green" />
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
                <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-vetor-green" />
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
                <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-vetor-green" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">
                    Telefone
                  </h3>
                  <a 
                    href="tel:6298166-3235" 
                    className="text-gray-400 hover:text-vetor-green transition-colors"
                  >
                    (62) 98166-3235
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center mr-4">
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
                    className="text-gray-400 hover:text-vetor-green transition-colors"
                  >
                    Iniciar conversa no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* WhatsApp Card */}
          <div className="glass-card p-8 rounded-xl border border-vetor-green/20 backdrop-blur-sm hover:border-vetor-green/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,176,80,0.1)]">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              Fale Conosco pelo WhatsApp
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Send className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Resposta Rápida</h4>
                  <p className="text-gray-400">Respondemos mensagens em até 2 horas durante o horário comercial.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Users className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Suporte Especializado</h4>
                  <p className="text-gray-400">Nossa equipe técnica está pronta para esclarecer suas dúvidas sobre nossas soluções.</p>
                </div>
              </div>
            </div>
            
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
