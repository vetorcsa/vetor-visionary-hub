import React from 'react';
import { Link } from 'react-router-dom';
import ContactSection from '@/components/About/ContactSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Server, Database, Cpu, Code, Layers, LineChart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-black to-vetor-black overflow-hidden">
        {/* Subtle animated background patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-[25rem] h-[25rem] rounded-full bg-vetor-green/5 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-[10%] right-[5%] w-[20rem] h-[20rem] rounded-full bg-vetor-green/3 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-3 py-1 bg-vetor-green bg-opacity-10 rounded-full">
              <span className="text-vetor-green font-medium text-sm">Quem Somos</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in">
              Inovando o Mercado com Soluções Tecnológicas Personalizadas
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Somos uma empresa especializada em desenvolver soluções tecnológicas sob medida para diversos setores do mercado.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link 
                to="/contato"
                className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Fale Conosco
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link 
                to="/crie-seu-site"
                className="btn-gradient flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2 rounded-md font-medium"
              >
                <Globe className="w-4 h-4" />
                Crie seu site
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Redesigned */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Nossa História
              </h2>
              <div className="w-16 h-1 bg-vetor-green mb-8"></div>
              <p className="text-gray-300 mb-6">
                A VETOR nasceu da visão de profissionais experientes em tecnologia que identificaram a necessidade de soluções personalizadas para desafios específicos de diferentes setores do mercado.
              </p>
              <p className="text-gray-300 mb-6">
                Desde nossa fundação, temos trabalhado com empresas de diversos portes, desde startups até grandes corporações, sempre com o compromisso de entregar soluções tecnológicas que realmente fazem a diferença.
              </p>
              <p className="text-gray-300">
                Nossa equipe multidisciplinar combina conhecimento técnico avançado com profundo entendimento de negócios, permitindo que desenvolvamos soluções que não apenas resolvem problemas, mas também impulsionam o crescimento e a inovação.
              </p>
            </div>
            
            <div className="relative">
              {/* Replaced team photo with design elements */}
              <div className="glass-card p-10 rounded-xl border border-vetor-green/20 bg-black/60 backdrop-blur-sm shadow-lg hover:shadow-[0_0_30px_rgba(0,176,80,0.1)] transition-all duration-500">
                <div className="grid grid-cols-2 gap-6">
                  <div className="glass-card p-6 rounded-xl border border-vetor-green/10 bg-black/40 backdrop-blur-sm hover:border-vetor-green/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,176,80,0.15)] text-center group">
                    <div className="w-16 h-16 bg-vetor-green/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-vetor-green/20 transition-all">
                      <Code className="w-8 h-8 text-vetor-green" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Desenvolvimento</h3>
                    <p className="text-gray-400">Soluções personalizadas de software para necessidades específicas.</p>
                  </div>
                  
                  <div className="glass-card p-6 rounded-xl border border-vetor-green/10 bg-black/40 backdrop-blur-sm hover:border-vetor-green/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,176,80,0.15)] text-center group">
                    <div className="w-16 h-16 bg-vetor-green/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-vetor-green/20 transition-all">
                      <Layers className="w-8 h-8 text-vetor-green" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Integração</h3>
                    <p className="text-gray-400">Sistemas que se comunicam perfeitamente entre si.</p>
                  </div>
                  
                  <div className="glass-card p-6 rounded-xl border border-vetor-green/10 bg-black/40 backdrop-blur-sm hover:border-vetor-green/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,176,80,0.15)] text-center group">
                    <div className="w-16 h-16 bg-vetor-green/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-vetor-green/20 transition-all">
                      <Database className="w-8 h-8 text-vetor-green" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Dados</h3>
                    <p className="text-gray-400">Gestão e análise de dados para decisões estratégicas.</p>
                  </div>
                  
                  <div className="glass-card p-6 rounded-xl border border-vetor-green/10 bg-black/40 backdrop-blur-sm hover:border-vetor-green/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,176,80,0.15)] text-center group">
                    <div className="w-16 h-16 bg-vetor-green/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-vetor-green/20 transition-all">
                      <LineChart className="w-8 h-8 text-vetor-green" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Resultados</h3>
                    <p className="text-gray-400">Soluções que impulsionam o crescimento e a eficiência.</p>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <div className="inline-block px-4 py-2 bg-vetor-green/10 rounded-full">
                    <span className="text-vetor-green font-medium">+ de 5 anos de experiência</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 border border-vetor-green/10 rounded-full z-0"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 border border-vetor-green/10 rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission, Vision, Values Section */}
      <section className="py-20 bg-vetor-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Missão, Visão e Valores
            </h2>
            <div className="w-16 h-1 bg-vetor-green mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-black p-8 rounded-xl border border-vetor-green/10 hover:border-vetor-green/30 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-vetor-green/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-vetor-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Missão</h3>
              <p className="text-gray-400 text-center">
                Desenvolver soluções tecnológicas inovadoras que transformem desafios em oportunidades, impulsionando o crescimento e a eficiência dos nossos clientes.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-black p-8 rounded-xl border border-vetor-green/10 hover:border-vetor-green/30 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-vetor-green/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-vetor-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Visão</h3>
              <p className="text-gray-400 text-center">
                Ser reconhecida como referência em inovação tecnológica, criando soluções que antecipam necessidades e estabelecem novos padrões nos setores em que atuamos.
              </p>
            </div>
            
            {/* Values */}
            <div className="bg-black p-8 rounded-xl border border-vetor-green/10 hover:border-vetor-green/30 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-vetor-green/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-vetor-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Valores</h3>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vetor-green rounded-full mr-2"></span>
                  <span>Inovação constante</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vetor-green rounded-full mr-2"></span>
                  <span>Excelência técnica</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vetor-green rounded-full mr-2"></span>
                  <span>Compromisso com resultados</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vetor-green rounded-full mr-2"></span>
                  <span>Ética e transparência</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vetor-green rounded-full mr-2"></span>
                  <span>Foco no cliente</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Solutions Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[30%] left-[15%] w-[25rem] h-[25rem] rounded-full bg-vetor-green/5 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-[30%] right-[15%] w-[20rem] h-[20rem] rounded-full bg-vetor-green/3 blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nossas Soluções
            </h2>
            <div className="w-16 h-1 bg-vetor-green mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Website Development */}
            <div className="glass-card p-8 rounded-xl border border-vetor-green/20 backdrop-blur-sm hover:border-vetor-green/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,176,80,0.2)]">
              <div className="w-16 h-16 bg-vetor-green/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Globe className="h-8 w-8 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Desenvolvimento de Sites</h3>
              <p className="text-gray-400 text-center mb-6">
                Sites modernos, responsivos e otimizados para SEO que destacam seu negócio no ambiente digital e melhoram sua presença online.
              </p>
              <div className="flex justify-center">
                <Link to="/crie-seu-site">
                  <Button className="bg-vetor-green hover:bg-vetor-darkgreen text-white flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Crie seu site
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Automation */}
            <div className="glass-card p-8 rounded-xl border border-vetor-green/20 backdrop-blur-sm hover:border-vetor-green/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,176,80,0.2)]">
              <div className="w-16 h-16 bg-vetor-green/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Cpu className="h-8 w-8 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Automação de Processos</h3>
              <p className="text-gray-400 text-center mb-6">
                Soluções de automação que reduzem tarefas manuais, aumentam a eficiência operacional e minimizam erros nos processos críticos da sua empresa.
              </p>
              <div className="flex justify-center">
                <Link to="/contato">
                  <Button className="bg-vetor-green hover:bg-vetor-darkgreen text-white">
                    Saiba mais
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* ERP Solutions */}
            <div className="glass-card p-8 rounded-xl border border-vetor-green/20 backdrop-blur-sm hover:border-vetor-green/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,176,80,0.2)]">
              <div className="w-16 h-16 bg-vetor-green/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Database className="h-8 w-8 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Soluções ERP</h3>
              <p className="text-gray-400 text-center mb-6">
                Sistemas de gestão empresarial integrados que unificam dados, otimizam processos e fornecem informações em tempo real para tomada de decisões estratégicas.
              </p>
              <div className="flex justify-center">
                <Link to="/contato">
                  <Button className="bg-vetor-green hover:bg-vetor-darkgreen text-white">
                    Saiba mais
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Create Your Site CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-[30rem] h-[30rem] rounded-full bg-vetor-green/5 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[25rem] h-[25rem] rounded-full bg-vetor-green/3 blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto glass-card p-10 rounded-2xl border border-vetor-green/20 backdrop-blur-sm shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Precisa de um Site Profissional?
                </h2>
                <p className="text-white/70 mb-6">
                  Desenvolvemos sites modernos, otimizados e personalizados para atender às necessidades específicas do seu negócio.
                </p>
              </div>
              
              <div>
                <Link to="/crie-seu-site">
                  <Button className="bg-vetor-green hover:bg-vetor-darkgreen text-white flex items-center gap-2 px-6 py-6 text-lg h-auto">
                    <Globe className="w-5 h-5" />
                    Crie seu site agora
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tax Recovery CTA Section */}
      <section className="py-20 bg-vetor-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[20%] right-[10%] w-[30rem] h-[30rem] rounded-full bg-vetor-green/5 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-[20%] left-[10%] w-[25rem] h-[25rem] rounded-full bg-vetor-green/3 blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto glass-card p-10 rounded-2xl border border-vetor-green/20 backdrop-blur-sm shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Economia com Recuperação Tributária
                </h2>
                <p className="text-white/70 mb-6">
                  Nossos especialistas identificam oportunidades para recuperar tributos pagos indevidamente e reduzir a carga tributária da sua empresa.
                </p>
              </div>
              
              <div>
                <Link to="/recuperacao-tributaria">
                  <Button className="bg-vetor-green hover:bg-vetor-darkgreen text-white flex items-center gap-2 px-6 py-6 text-lg h-auto">
                    <Server className="w-5 h-5" />
                    Recuperação Tributária
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default About;
