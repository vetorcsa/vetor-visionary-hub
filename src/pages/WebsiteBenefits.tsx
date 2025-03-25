import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Code, Smartphone, Globe, Rocket, LineChart, 
  Shield, BarChart, Search, Zap, ArrowRight, Check,
  Palette, LayoutGrid, Users, ClipboardCheck, MousePointer,
  Headphones, MessageSquare, HeartHandshake, Lightbulb,
  Building, FileText
} from 'lucide-react';

const WebsiteBenefits: React.FC = () => {
  const [currentTab, setCurrentTab] = useState('profissional');
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true });
  const isProcessInView = useInView(processRef, { once: true });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true });
  const isPricingInView = useInView(pricingRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });
  
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const yPos = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  
  const testimonials = [
    {
      name: "Ana Silva",
      role: "Proprietária, Clínica Estética Renova",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      content: "Nosso site não era apenas bonito, mas também funcional. As conversões aumentaram em 140% no primeiro mês após o lançamento."
    },
    {
      name: "Carlos Eduardo",
      role: "CEO, Logística Express",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      content: "O site foi além das nossas expectativas. O processo foi simples e o resultado elevou nossa marca a um novo patamar profissional."
    },
    {
      name: "Mariana Costa",
      role: "Diretora, Escola Futuro Brilhante",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      content: "A equipe entendeu perfeitamente nossas necessidades. O site reflete exatamente nossa filosofia educacional e valores."
    }
  ];
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="overflow-hidden bg-black">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen pt-36 md:pt-0 md:flex md:items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] opacity-20 pointer-events-none"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-vetor-green/5 rounded-full animate-pulse-slow opacity-30"></div>
        <div className="absolute top-40 right-20 w-48 h-48 border border-vetor-green/10 rounded-full animate-float opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-vetor-green/5 rounded-full blur-xl"></div>
        <div className="absolute -bottom-10 left-1/4 w-64 h-64 bg-vetor-green/5 rounded-full blur-3xl"></div>
        
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{ opacity, y: yPos }}
        >
          <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-vetor-green/20 to-transparent transform"></div>
          <div className="absolute inset-y-0 left-1/3 w-px bg-gradient-to-b from-transparent via-vetor-green/20 to-transparent"></div>
          <div className="absolute inset-y-0 right-1/3 w-px bg-gradient-to-b from-transparent via-vetor-green/20 to-transparent"></div>
        </motion.div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7 }}
            >
              <div>
                <Badge className="bg-vetor-green/10 text-vetor-green hover:bg-vetor-green/20 mb-4 py-1.5 px-4 text-xs font-medium tracking-wider">WEBSITES PROFISSIONAIS</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Seu negócio merece um<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-vetor-green via-vetor-green to-vetor-lightgreen">site impecável</span>
                </h1>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                  Desenvolvemos websites profissionais otimizados para resultados, prontos para transformar visitantes em clientes e impulsionar seu negócio.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-vetor-green hover:bg-vetor-darkgreen text-white gap-2 group"
                  >
                    <span>Solicitar Orçamento</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-vetor-green/30 text-vetor-green hover:bg-vetor-green/10"
                  >
                    Ver Portfólio
                  </Button>
                </div>
                
                <div className="mt-8 flex items-center gap-6">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-vetor-green/20 border border-black flex items-center justify-center text-white text-xs">
                        <img
                          src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i}.jpg`}
                          alt="Cliente"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-400">
                    <span className="text-white font-medium">+200</span> clientes satisfeitos
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-vetor-green/10 flex items-center justify-center">
                    <Check className="h-4 w-4 text-vetor-green" />
                  </div>
                  <span className="text-sm text-gray-300">Design Responsivo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-vetor-green/10 flex items-center justify-center">
                    <Check className="h-4 w-4 text-vetor-green" />
                  </div>
                  <span className="text-sm text-gray-300">SEO Otimizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-vetor-green/10 flex items-center justify-center">
                    <Check className="h-4 w-4 text-vetor-green" />
                  </div>
                  <span className="text-sm text-gray-300">Alta Performance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-vetor-green/10 flex items-center justify-center">
                    <Check className="h-4 w-4 text-vetor-green" />
                  </div>
                  <span className="text-sm text-gray-300">Gestão Facilitada</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-vetor-green/20 to-vetor-green/5 rounded-2xl blur-xl opacity-70"></div>
                <div className="relative bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-md border border-vetor-green/10 rounded-2xl p-1 shadow-2xl">
                  <div className="bg-black rounded-xl overflow-hidden">
                    <div className="flex items-center bg-black/60 p-4 border-b border-white/10">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="mx-auto bg-white/5 rounded-full px-4 py-1 text-xs text-gray-400">
                        www.seusite.com.br
                      </div>
                    </div>
                    
                    <div className="p-4 relative">
                      <img 
                        src="https://placehold.co/600x400/001400/00B050/png?text=Website+Preview&font=montserrat"
                        alt="Website Preview" 
                        className="w-full rounded shadow-lg"
                      />
                      
                      <div className="absolute top-8 right-8 bg-vetor-green/10 backdrop-blur-sm border border-vetor-green/20 rounded-lg p-3 shadow-lg">
                        <div className="flex gap-2 items-center">
                          <BarChart className="w-4 h-4 text-vetor-green" />
                          <span className="text-xs text-white">Análise em tempo real</span>
                        </div>
                        <div className="mt-2 space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-400">Visitantes</span>
                            <span className="text-white">245</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-400">Conversões</span>
                            <span className="text-vetor-green">23</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-400">Taxa</span>
                            <span className="text-vetor-green">9.4%</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-12 left-8 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg p-3 shadow-lg">
                        <div className="flex gap-2 items-center mb-2">
                          <Search className="w-4 h-4 text-vetor-green" />
                          <span className="text-xs text-white">SEO Performance</span>
                        </div>
                        <div className="space-y-2">
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-gray-400">Ranking</span>
                              <span className="text-white">Top 3</span>
                            </div>
                            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-vetor-green to-vetor-lightgreen w-[85%] rounded-full"></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-gray-400">Velocidade</span>
                              <span className="text-white">95/100</span>
                            </div>
                            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-vetor-green to-vetor-lightgreen w-[95%] rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-vetor-green/20 rounded-full flex items-center justify-center animate-float">
                  <Zap className="w-6 h-6 text-vetor-green" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-vetor-green/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <Rocket className="w-4 h-4 text-vetor-green" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section ref={featuresRef} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgMHYyaC0ydi0yaDJ6bTItNGgtMnYyaC0yaC0ydjJoMnYyaC0ydjJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYtMmgtMnYtMmgydi0yaC0ydi0yaC0yek00MiAzMHYyaC0ydi0yaDJ6bS00IDRoMnYyaC0ydi0yek0zNiAyNnYyaC0ydi0yaDJ6bS00IDBoMnYyaC0ydi0yek0zMCAzMHYyaC0ydi0yaDJ6bS00IDBoMnYyaC0ydi0yek0yNiAyNnYyaC0ydi0yaDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="max-w-2xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-vetor-green/10 text-vetor-green hover:bg-vetor-green/20 mb-4 py-1.5 px-4 text-xs font-medium tracking-wider">FUNCIONALIDADES</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Websites completos para<br />seu negócio se destacar
            </h2>
            <p className="text-gray-300 text-lg">
              Desenvolvidos para oferecer uma experiência excepcional e gerar resultados, combinando design, tecnologia e estratégia.
            </p>
          </motion.div>
          
          <Tabs defaultValue="profissional" className="w-full" onValueChange={setCurrentTab}>
            <div className="flex justify-center mb-10">
              <TabsList className="bg-black border border-vetor-green/20 p-1">
                <TabsTrigger 
                  value="profissional" 
                  className={`px-8 py-2.5 ${currentTab === 'profissional' ? 'bg-vetor-green text-white data-[state=active]:bg-vetor-green data-[state=active]:text-white' : 'text-white data-[state=active]:bg-transparent'}`}
                >
                  Profissional
                </TabsTrigger>
                <TabsTrigger 
                  value="ecommerce" 
                  className={`px-8 py-2.5 ${currentTab === 'ecommerce' ? 'bg-vetor-green text-white data-[state=active]:bg-vetor-green data-[state=active]:text-white' : 'text-white data-[state=active]:bg-transparent'}`}
                >
                  E-commerce
                </TabsTrigger>
                <TabsTrigger 
                  value="institucional" 
                  className={`px-8 py-2.5 ${currentTab === 'institucional' ? 'bg-vetor-green text-white data-[state=active]:bg-vetor-green data-[state=active]:text-white' : 'text-white data-[state=active]:bg-transparent'}`}
                >
                  Institucional
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="profissional" className="mt-0">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate={isFeaturesInView ? "visible" : "hidden"}
              >
                {[
                  {
                    icon: <Palette className="w-6 h-6 text-vetor-green" />,
                    title: "Design Personalizado",
                    description: "Design exclusivo alinhado com sua identidade visual para fortalecer sua marca."
                  },
                  {
                    icon: <Smartphone className="w-6 h-6 text-vetor-green" />,
                    title: "Totalmente Responsivo",
                    description: "Adaptação perfeita para todos os dispositivos: desktops, tablets e smartphones."
                  },
                  {
                    icon: <Search className="w-6 h-6 text-vetor-green" />,
                    title: "Otimizado para SEO",
                    description: "Estrutura planejada para ranquear bem nos motores de busca e atrair visitantes."
                  },
                  {
                    icon: <Zap className="w-6 h-6 text-vetor-green" />,
                    title: "Alta Performance",
                    description: "Carregamento rápido e desempenho otimizado para melhor experiência do usuário."
                  },
                  {
                    icon: <MessageSquare className="w-6 h-6 text-vetor-green" />,
                    title: "Integração com Chat",
                    description: "Comunicação direta com seus visitantes para aumentar taxas de conversão."
                  },
                  {
                    icon: <LineChart className="w-6 h-6 text-vetor-green" />,
                    title: "Análise de Resultados",
                    description: "Acompanhamento de métricas importantes para medir o desempenho do site."
                  }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="relative group"
                    variants={fadeIn}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-b from-vetor-green/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    <Card className="h-full bg-black/50 border border-vetor-green/10 rounded-xl overflow-hidden relative z-10 group-hover:border-vetor-green/30 transition-all duration-300">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="mb-4">
                          <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center">
                            {feature.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-400 flex-grow">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="ecommerce" className="mt-0">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate={isFeaturesInView && currentTab === "ecommerce" ? "visible" : "hidden"}
              >
                {[
                  {
                    icon: <Shopping className="w-6 h-6 text-vetor-green" />,
                    title: "Catálogo de Produtos",
                    description: "Exibição organizada e atrativa dos seus produtos com categorias e filtros."
                  },
                  {
                    icon: <CreditCard className="w-6 h-6 text-vetor-green" />,
                    title: "Pagamentos Integrados",
                    description: "Integração com as principais formas de pagamento do mercado."
                  },
                  {
                    icon: <TruckFast className="w-6 h-6 text-vetor-green" />,
                    title: "Cálculo de Frete",
                    description: "Integração com serviços de entrega e cálculo automático de frete."
                  },
                  {
                    icon: <Users className="w-6 h-6 text-vetor-green" />,
                    title: "Área do Cliente",
                    description: "Portal para clientes acompanharem pedidos e histórico de compras."
                  },
                  {
                    icon: <Percent className="w-6 h-6 text-vetor-green" />,
                    title: "Cupons e Promoções",
                    description: "Sistema de descontos e promoções para aumentar suas vendas."
                  },
                  {
                    icon: <BarChart className="w-6 h-6 text-vetor-green" />,
                    title: "Relatórios de Vendas",
                    description: "Estatísticas detalhadas sobre vendas, produtos mais populares e comportamento dos clientes."
                  }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="relative group"
                    variants={fadeIn}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-b from-vetor-green/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    <Card className="h-full bg-black/50 border border-vetor-green/10 rounded-xl overflow-hidden relative z-10 group-hover:border-vetor-green/30 transition-all duration-300">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="mb-4">
                          <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center">
                            {feature.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-400 flex-grow">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="institucional" className="mt-0">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate={isFeaturesInView && currentTab === "institucional" ? "visible" : "hidden"}
              >
                {[
                  {
                    icon: <Building className="w-6 h-6 text-vetor-green" />,
                    title: "Apresentação Corporativa",
                    description: "Seções estruturadas para apresentar sua empresa, valores e diferenciais."
                  },
                  {
                    icon: <FileText className="w-6 h-6 text-vetor-green" />,
                    title: "Blog Integrado",
                    description: "Área de conteúdo para compartilhar notícias e fortalecer sua autoridade no setor."
                  },
                  {
                    icon: <Users className="w-6 h-6 text-vetor-green" />,
                    title: "Página de Equipe",
                    description: "Apresentação dos profissionais que fazem parte da sua empresa."
                  },
                  {
                    icon: <MessageSquare className="w-6 h-6 text-vetor-green" />,
                    title: "Formulários Customizados",
                    description: "Formulários específicos para captar diferentes tipos de leads e solicitações."
                  },
                  {
                    icon: <FileImage className="w-6 h-6 text-vetor-green" />,
                    title: "Galeria de Projetos",
                    description: "Exibição de trabalhos, projetos ou portfólio com visual impactante."
                  },
                  {
                    icon: <EarthIcon className="w-6 h-6 text-vetor-green" />,
                    title: "Múltiplos Idiomas",
                    description: "Possibilidade de oferecer seu conteúdo em diferentes idiomas para alcance global."
                  }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="relative group"
                    variants={fadeIn}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-b from-vetor-green/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    <Card className="h-full bg-black/50 border border-vetor-green/10 rounded-xl overflow-hidden relative z-10 group-hover:border-vetor-green/30 transition-all duration-300">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="mb-4">
                          <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center">
                            {feature.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-400 flex-grow">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Process Section */}
      <section ref={processRef} className="py-20 bg-gradient-to-b from-vetor-black/80 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] opacity-20"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="max-w-2xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-vetor-green/10 text-vetor-green hover:bg-vetor-green/20 mb-4 py-1.5 px-4 text-xs font-medium tracking-wider">PROCESSO</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Como funciona o desenvolvimento
            </h2>
            <p className="text-gray-300 text-lg">
              Processo estruturado para garantir que seu site seja entregue com qualidade, dentro do prazo e atendendo a todas as suas necessidades.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-vetor-green/30 via-vetor-green/20 to-vetor-green/5 hidden md:block"></div>
            
            <div className="space-y-24 relative">
              {[
                {
                  step: 1,
                  title: "Briefing e Planejamento",
                  description: "Entendemos seus objetivos, público-alvo e necessidades específicas para planejar a estrutura ideal para seu site.",
                  icon: <Lightbulb className="w-8 h-8 text-vetor-green" />,
                  align: "right"
                },
                {
                  step: 2,
                  title: "Design e Prototipagem",
                  description: "Criamos layouts modernos e atrativos, alinhados com sua identidade visual, incluindo wireframes e protótipos interativos.",
                  icon: <Palette className="w-8 h-8 text-vetor-green" />,
                  align: "left"
                },
                {
                  step: 3,
                  title: "Desenvolvimento",
                  description: "Programação do site com tecnologias modernas, foco em performance, responsividade e otimização para SEO.",
                  icon: <Code className="w-8 h-8 text-vetor-green" />,
                  align: "right"
                },
                {
                  step: 4,
                  title: "Testes e Refinamentos",
                  description: "Testes rigorosos em diferentes dispositivos e navegadores, ajustes finais e otimizações de performance.",
                  icon: <MousePointer className="w-8 h-8 text-vetor-green" />,
                  align: "left"
                },
                {
                  step: 5,
                  title: "Lançamento e Suporte",
                  description: "Publicação do site e treinamento da sua equipe para gerenciamento de conteúdo, com suporte contínuo pós-lançamento.",
                  icon: <Rocket className="w-8 h-8 text-vetor-green" />,
                  align: "right"
                }
              ].map((process, index) => (
                <motion.div 
                  key={index}
                  className={`flex flex-col ${process.align === "right" ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className={`md:w-1/2 ${process.align === "right" ? "md:text-right" : "md:text-left"} mb-8 md:mb-0`}>
                    <div className="inline-block bg-vetor-green/10 px-3 py-1 rounded
