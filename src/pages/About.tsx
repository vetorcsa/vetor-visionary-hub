
import React, { useState } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { Check, Target, Eye, Heart, Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Robot, Database, TrendingUp } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';

const About: React.FC = () => {
  const { aboutData, footerData } = useAdmin();
  
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
    <div className="page-transition pt-20 bg-black text-white">
      {/* Hero Section - Expanded with more information */}
      <div className="bg-gradient-to-b from-vetor-black to-black py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-6">Quem Somos</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              {aboutData.title}
            </h1>
            <p className="text-lg text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {aboutData.description}
            </p>
            
            {/* Expanded company info section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-vetor-green/20 hover:border-vetor-green/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-vetor-green mb-4">Desenvolvimento de Sites</h3>
                <p className="text-gray-300">
                  Criamos sites profissionais e responsivos que destacam a identidade da sua marca, 
                  otimizados para conversão e com excelente experiência para o usuário em todos os dispositivos.
                </p>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-vetor-green/20 hover:border-vetor-green/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-vetor-green mb-4">Marketing Digital</h3>
                <p className="text-gray-300">
                  Desenvolvemos estratégias completas de marketing digital, incluindo SEO, gestão de redes sociais, 
                  campanhas pagas e análise de dados para maximizar sua presença online e gerar resultados concretos.
                </p>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-vetor-green/20 hover:border-vetor-green/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-vetor-green mb-4">Projetos de Software</h3>
                <p className="text-gray-300">
                  Nossa equipe especializada desenvolve soluções de software personalizadas, 
                  desde aplicações web e sistemas de gestão até integrações complexas, 
                  atendendo às necessidades específicas do seu negócio e reduzindo significativamente a carga de trabalho operacional.
                </p>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-vetor-green/20 hover:border-vetor-green/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-vetor-green mb-4">Projetos de Automação</h3>
                <p className="text-gray-300">
                  Automatizamos processos empresariais através de tecnologias avançadas, 
                  reduzindo custos operacionais, eliminando tarefas repetitivas e aumentando 
                  a eficiência e produtividade do seu negócio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* New section for Robotics and Advanced Technology */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">Tecnologia Avançada</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Soluções para Aumentar seu Lucro
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Desenvolvemos tecnologias que automatizam processos, reduzem custos e maximizam o lucro da sua empresa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-vetor-green/20 hover:border-vetor-green/40 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-vetor-green/10 rounded-full flex items-center justify-center mb-6">
                <Robot className="w-8 h-8 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-vetor-green mb-4">Robôs e Automação</h3>
              <p className="text-gray-300">
                Desenvolvemos robôs de software (RPA) que automatizam tarefas repetitivas, processos operacionais e fluxos de trabalho completos, permitindo que sua equipe foque em atividades estratégicas enquanto os robôs executam o trabalho operacional.
              </p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-vetor-green/20 hover:border-vetor-green/40 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-vetor-green/10 rounded-full flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-vetor-green mb-4">Sistemas Integrados</h3>
              <p className="text-gray-300">
                Criamos sistemas inteligentes que integram todos os departamentos da sua empresa, eliminando retrabalho, reduzindo erros humanos e garantindo que todas as informações estejam centralizadas e acessíveis para tomadas de decisão mais eficientes.
              </p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-vetor-green/20 hover:border-vetor-green/40 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-vetor-green/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-vetor-green mb-4">Otimização de Lucro</h3>
              <p className="text-gray-300">
                Nossas soluções tecnológicas são projetadas com foco no aumento da lucratividade, seja através da redução de custos operacionais, otimização de processos ou aumento da capacidade produtiva, gerando ROI mensurável para seu negócio.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
              Nossas soluções já ajudaram diversas empresas a reduzir até 70% da carga de trabalho manual em processos administrativos, resultando em economia significativa e aumento médio de 30% nos lucros operacionais.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission, Vision, Values Section */}
      <section className="py-20 bg-vetor-black/80">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/50 rounded-xl p-6 shadow-lg border border-vetor-green/20 hover:border-vetor-green/50 transition-all duration-300 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
              <div className="w-14 h-14 bg-vetor-green bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Nossa Missão
              </h3>
              <p className="text-gray-300">
                {aboutData.mission}
              </p>
            </div>
            
            <div className="bg-black/50 rounded-xl p-6 shadow-lg border border-vetor-green/20 hover:border-vetor-green/50 transition-all duration-300 animate-slide-in-bottom" style={{ animationDelay: '0.2s' }}>
              <div className="w-14 h-14 bg-vetor-green bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Nossa Visão
              </h3>
              <p className="text-gray-300">
                {aboutData.vision}
              </p>
            </div>
            
            <div className="bg-black/50 rounded-xl p-6 shadow-lg border border-vetor-green/20 hover:border-vetor-green/50 transition-all duration-300 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
              <div className="w-14 h-14 bg-vetor-green bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Nossos Valores
              </h3>
              <ul className="text-gray-300 space-y-2">
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
      
      {/* Contact Section - Added to About page */}
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-vetor-black/30"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-6">Contato</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Entre em Contato
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Estamos prontos para ajudar seu negócio a crescer com nossas soluções tecnológicas. Entre em contato conosco!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-vetor-green/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-vetor-green/20 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-vetor-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">
                      Endereço
                    </h4>
                    <p className="text-gray-300">
                      Torre Tóquio, Metropolitan Mall - Av. Dep. Jamel Cecílio, 2690 - Jardim Goiás, Goiânia - GO, 74810-100
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-vetor-green/20 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-vetor-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">
                      Email
                    </h4>
                    <a 
                      href={`mailto:${footerData.email}`} 
                      className="text-gray-300 hover:text-vetor-green transition-colors"
                    >
                      {footerData.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-vetor-green/20 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-vetor-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">
                      Telefone
                    </h4>
                    <a 
                      href={`tel:${footerData.phone.replace(/\D/g, '')}`} 
                      className="text-gray-300 hover:text-vetor-green transition-colors"
                    >
                      {footerData.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-vetor-green/20 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Envie uma Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Nome Completo
                    </label>
                    <input 
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-black/60 border border-vetor-green/30 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green text-white"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input 
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-black/60 border border-vetor-green/30 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green text-white"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Telefone
                    </label>
                    <input 
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-black/60 border border-vetor-green/30 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green text-white"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      Assunto
                    </label>
                    <select 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-black/60 border border-vetor-green/30 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green text-white"
                    >
                      <option value="">Selecione</option>
                      <option value="Imobiliário">Tecnologia Imobiliária</option>
                      <option value="Fiscal">Tecnologia Fiscal</option>
                      <option value="Logística">Tecnologia em Logística</option>
                      <option value="Automação">Robôs e Automação</option>
                      <option value="Personalizado">Soluções Personalizadas</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Mensagem
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-black/60 border border-vetor-green/30 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green text-white resize-none"
                    placeholder="Descreva seu projeto ou necessidade..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`w-full py-3 px-6 rounded-md font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                    formStatus === 'submitting' 
                      ? 'bg-gray-600 text-white cursor-not-allowed' 
                      : formStatus === 'success'
                      ? 'bg-green-600 text-white'
                      : formStatus === 'error'
                      ? 'bg-red-600 text-white'
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

export default About;
