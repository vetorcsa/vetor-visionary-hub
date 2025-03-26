import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import ContactSection from '@/components/About/ContactSection';
import { Building, UserCheck, Lightbulb, Code, LineChart, ChevronRight, Database, Globe, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="pt-36 pb-24 bg-gradient-to-b from-black to-vetor-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[10%] right-[15%] w-[30rem] h-[30rem] rounded-full bg-vetor-green/5 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-[10%] left-[10%] w-[25rem] h-[25rem] rounded-full bg-vetor-green/3 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">Sobre Nós</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Quem é a <span className="text-vetor-green">Vetor Tecnologia</span>
              </h1>
              <p className="text-white/80 text-lg mb-6">
                Somos uma empresa de desenvolvimento de software e consultoria em TI com foco em soluções personalizadas para negócios de todos os portes. 
              </p>
              <p className="text-white/70 mb-8">
                Fundada com a missão de transformar processos através da tecnologia, atuamos em diferentes setores, oferecendo desenvolvimento de sistemas, 
                recuperação tributária, automação de processos e criação de sites.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-vetor-green hover:bg-vetor-green/90 text-white py-3 px-5 rounded-lg font-medium inline-flex items-center">
                  Fale Conosco <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-vetor-green/20 via-vetor-green/10 to-transparent opacity-70 z-10 pointer-events-none"></div>
                <img 
                  src="https://placehold.co/800x450/001400/00B050/png?text=Vetor+Tecnologia&font=montserrat" 
                  alt="Vetor Tecnologia" 
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">Nossos Valores</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Princípios que orientam nosso trabalho
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-vetor-green to-vetor-green/40 mx-auto mb-6 rounded-full"></div>
            <p className="text-white/70 max-w-3xl mx-auto">
              Nossa cultura organizacional é construída sobre valores sólidos que guiam todas as nossas decisões e interações.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="h-10 w-10 text-vetor-green" />,
                title: "Inovação",
                description: "Buscamos constantemente novas maneiras de resolver problemas, utilizando tecnologias modernas e abordagens criativas."
              },
              {
                icon: <UserCheck className="h-10 w-10 text-vetor-green" />,
                title: "Compromisso",
                description: "Cumprimos nossas promessas e assumimos responsabilidade pelo sucesso dos projetos de nossos clientes."
              },
              {
                icon: <Building className="h-10 w-10 text-vetor-green" />,
                title: "Transparência",
                description: "Mantemos comunicação clara e honesta em todos os aspectos do nosso relacionamento com clientes e parceiros."
              },
              {
                icon: <LineChart className="h-10 w-10 text-vetor-green" />,
                title: "Excelência",
                description: "Não nos contentamos com o básico. Buscamos a excelência em cada linha de código e em cada solução que entregamos."
              },
              {
                icon: <Code className="h-10 w-10 text-vetor-green" />,
                title: "Qualidade",
                description: "Seguimos rigorosos padrões de qualidade em nosso desenvolvimento, garantindo soluções estáveis e seguras."
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-vetor-green" />,
                title: "Foco no Cliente",
                description: "Colocamos as necessidades dos nossos clientes em primeiro lugar, criando soluções que geram valor real para seus negócios."
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-black/80 to-black/40 border border-vetor-green/10 rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="bg-vetor-green/10 p-4 inline-block rounded-lg mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section className="py-24 bg-gradient-to-b from-black to-vetor-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-[30rem] h-[30rem] rounded-full bg-vetor-green/5 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-[10%] right-[15%] w-[25rem] h-[25rem] rounded-full bg-vetor-green/3 blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">Nossas Soluções</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Tecnologia sob medida para seu negócio
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-vetor-green to-vetor-green/40 mx-auto mb-6 rounded-full"></div>
            <p className="text-white/70 max-w-3xl mx-auto">
              Oferecemos soluções tecnológicas personalizadas para diferentes setores e necessidades, sempre com foco em resultados.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-black/80 to-black/40 border border-vetor-green/10 rounded-xl p-8 backdrop-blur-sm"
            >
              <div className="mb-6">
                <div className="bg-vetor-green/10 p-4 inline-block rounded-lg">
                  <Database className="h-8 w-8 text-vetor-green" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Soluções ERP</h3>
              <p className="text-white/70 mb-6">
                Sistemas integrados para gestão empresarial desenvolvidos especificamente para Imobiliárias e Transportadoras, 
                otimizando processos e reduzindo custos operacionais.
              </p>
              <Link to="/solucoes-erp" className="text-vetor-green font-semibold inline-flex items-center hover:text-vetor-green/80 transition-colors">
                Saiba mais <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-black/80 to-black/40 border border-vetor-green/10 rounded-xl p-8 backdrop-blur-sm"
            >
              <div className="mb-6">
                <div className="bg-vetor-green/10 p-4 inline-block rounded-lg">
                  <LineChart className="h-8 w-8 text-vetor-green" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Recuperação Tributária</h3>
              <p className="text-white/70 mb-6">
                Análise especializada para identificar oportunidades de recuperação de impostos pagos indevidamente, 
                gerando economia e maximizando recursos financeiros.
              </p>
              <Link to="/recuperacao-tributaria" className="text-vetor-green font-semibold inline-flex items-center hover:text-vetor-green/80 transition-colors">
                Saiba mais <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-black/80 to-black/40 border border-vetor-green/10 rounded-xl p-8 backdrop-blur-sm"
            >
              <div className="mb-6">
                <div className="bg-vetor-green/10 p-4 inline-block rounded-lg">
                  <Cpu className="h-8 w-8 text-vetor-green" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Automação de Processos</h3>
              <p className="text-white/70 mb-6">
                Transforme tarefas repetitivas em processos automatizados com Python, aumentando a eficiência 
                e reduzindo erros humanos em suas operações diárias.
              </p>
              <Link to="/automacoes-processos" className="text-vetor-green font-semibold inline-flex items-center hover:text-vetor-green/80 transition-colors">
                Criar automação <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-black/80 to-black/40 border border-vetor-green/10 rounded-xl p-8 backdrop-blur-sm"
            >
              <div className="mb-6">
                <div className="bg-vetor-green/10 p-4 inline-block rounded-lg">
                  <Globe className="h-8 w-8 text-vetor-green" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Criação de Sites</h3>
              <p className="text-white/70 mb-6">
                Desenvolvimento de websites profissionais, responsivos e otimizados para SEO, 
                proporcionando uma presença digital moderna e eficiente para sua empresa.
              </p>
              <Link to="/crie-seu-site" className="text-vetor-green font-semibold inline-flex items-center hover:text-vetor-green/80 transition-colors">
                Saiba mais <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-black/80 to-black/40 border border-vetor-green/10 rounded-xl p-8 backdrop-blur-sm col-span-1 md:col-span-2 lg:col-span-2"
            >
              <div className="lg:flex items-center">
                <div className="lg:w-1/2 mb-6 lg:mb-0">
                  <div className="bg-vetor-green/10 p-4 inline-block rounded-lg mb-4">
                    <Code className="h-8 w-8 text-vetor-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Desenvolvimento Personalizado</h3>
                  <p className="text-white/70 lg:mr-10">
                    Criação de software sob medida para as necessidades específicas do seu negócio, 
                    com tecnologias modernas e metodologias ágeis. Desde aplicativos móveis até sistemas complexos, 
                    trazemos sua visão à realidade.
                  </p>
                </div>
                
                <div className="lg:w-1/2 flex flex-col lg:items-end">
                  <div className="bg-black/30 border border-vetor-green/10 rounded-lg p-4 lg:p-6 backdrop-blur-sm">
                    <h4 className="text-lg font-semibold text-white mb-2">Tecnologias</h4>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Python', 'Node.js', 'Django', 'Flutter', 'PostgreSQL', 'Next.js', 'AWS'].map((tech) => (
                        <span key={tech} className="bg-vetor-green/10 text-vetor-green px-3 py-1 rounded-md text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link to="/contato" className="mt-6 text-vetor-green font-semibold inline-flex items-center hover:text-vetor-green/80 transition-colors">
                    Solicitar orçamento <ChevronRight className="ml-1 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">Nossa Equipe</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Conheça nossos especialistas
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-vetor-green to-vetor-green/40 mx-auto mb-6 rounded-full"></div>
            <p className="text-white/70 max-w-3xl mx-auto">
              Nossa equipe multidisciplinar reúne talentos em diferentes áreas da tecnologia, formando um time completo para atender suas necessidades.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <motion.div 
                key={member}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: member * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative rounded-xl overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity z-10"></div>
                  <img 
                    src={`https://randomuser.me/api/portraits/${member % 2 === 0 ? 'men' : 'women'}/${member}.jpg`}
                    alt="Team Member" 
                    className="w-full aspect-square object-cover rounded-xl transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">Nome do Profissional</h3>
                <p className="text-vetor-green">Cargo / Especialidade</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default About;
