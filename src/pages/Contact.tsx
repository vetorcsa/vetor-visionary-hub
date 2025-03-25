
import React, { useState } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

const Contact: React.FC = () => {
  const { footerData } = useAdmin();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simular envio do formulário
    setTimeout(() => {
      // Em um cenário real, aqui seria a chamada para uma API
      const success = Math.random() > 0.2; // 80% de chance de sucesso para demonstração
      
      if (success) {
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        toast({
          title: "Mensagem enviada!",
          description: "Agradecemos seu contato. Retornaremos em breve.",
          variant: "default",
        });
      } else {
        setFormStatus('error');
        toast({
          title: "Erro ao enviar",
          description: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.",
          variant: "destructive",
        });
      }
      
      // Voltar ao estado inicial após 3 segundos
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };
  
  return (
    <div className="page-transition pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-vetor-black mb-6 animate-fade-in">
              Entre em Contato
            </h1>
            <p className="text-lg text-vetor-darkgray mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Estamos prontos para ajudar seu negócio a crescer com nossas soluções tecnológicas. Entre em contato e vamos conversar!
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Info and Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="lg:pr-8">
              <div className="inline-block mb-4 px-3 py-1 bg-vetor-green bg-opacity-10 rounded-full">
                <span className="text-vetor-green font-medium text-sm">Entre em Contato</span>
              </div>
              <h2 className="text-3xl font-bold text-vetor-black mb-6">
                Vamos Conversar
              </h2>
              <p className="text-vetor-darkgray mb-8">
                Estamos ansiosos para ouvir sobre seu projeto e como podemos ajudar. Sinta-se à vontade para entrar em contato conosco através dos canais abaixo ou usando o formulário de contato.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-vetor-green bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-vetor-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-vetor-black mb-1">
                      Endereço
                    </h3>
                    <p className="text-vetor-darkgray">
                      Torre Tóquio, Metropolitan Mall - Av. Dep. Jamel Cecílio, 2690 - Jardim Goiás, Goiânia - GO, 74810-100
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-vetor-green bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-vetor-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-vetor-black mb-1">
                      Email
                    </h3>
                    <a 
                      href="mailto:vetorcsa@gmail.com" 
                      className="text-vetor-darkgray hover:text-vetor-green transition-colors"
                    >
                      vetorcsa@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-vetor-green bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-vetor-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-vetor-black mb-1">
                      Telefone
                    </h3>
                    <a 
                      href="tel:62982474117" 
                      className="text-vetor-darkgray hover:text-vetor-green transition-colors"
                    >
                      62 982474117
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-vetor-green bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                    <MessageCircle className="w-5 h-5 text-vetor-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-vetor-black mb-1">
                      WhatsApp
                    </h3>
                    <a 
                      href="https://wa.me/62982474117" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-vetor-darkgray hover:text-vetor-green transition-colors"
                    >
                      Iniciar conversa no WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              
              {/* WhatsApp Button */}
              <div className="mt-8">
                <a 
                  href="https://wa.me/62982474117" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-green-500 hover:bg-green-600 text-white border-none w-full sm:w-auto flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Conversar no WhatsApp
                  </Button>
                </a>
              </div>
              
              {/* Map or Image */}
              <div className="mt-12 bg-gray-100 rounded-xl overflow-hidden h-64">
                <img 
                  src="/placeholder.svg" 
                  alt="Mapa localização"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-xl p-8 animate-slide-in-right">
              <h3 className="text-2xl font-bold text-vetor-black mb-6">
                Envie uma Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-vetor-darkgray mb-1">
                      Nome Completo
                    </label>
                    <input 
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-vetor-darkgray mb-1">
                      Email
                    </label>
                    <input 
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-vetor-darkgray mb-1">
                      Telefone
                    </label>
                    <input 
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-vetor-darkgray mb-1">
                      Assunto
                    </label>
                    <select 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green"
                    >
                      <option value="">Selecione</option>
                      <option value="Imobiliário">Tecnologia Imobiliária</option>
                      <option value="Fiscal">Tecnologia Fiscal</option>
                      <option value="Logística">Tecnologia em Logística</option>
                      <option value="Personalizado">Soluções Personalizadas</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-vetor-darkgray mb-1">
                    Mensagem
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green resize-none"
                    placeholder="Descreva seu projeto ou necessidade..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`w-full py-3 px-6 rounded-md font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                    formStatus === 'submitting' 
                      ? 'bg-gray-400 text-white cursor-not-allowed' 
                      : formStatus === 'success'
                      ? 'bg-green-500 text-white'
                      : formStatus === 'error'
                      ? 'bg-red-500 text-white'
                      : 'bg-vetor-green text-white hover:bg-vetor-darkgreen'
                  }`}
                >
                  {formStatus === 'submitting' && (
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  )}
                  {formStatus === 'success' && <CheckCircle className="w-5 h-5" />}
                  {formStatus === 'error' && <AlertCircle className="w-5 h-5" />}
                  {formStatus === 'idle' && <Send className="w-5 h-5" />}
                  
                  {formStatus === 'submitting' && 'Enviando...'}
                  {formStatus === 'success' && 'Mensagem Enviada!'}
                  {formStatus === 'error' && 'Erro ao Enviar'}
                  {formStatus === 'idle' && 'Enviar Mensagem'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
