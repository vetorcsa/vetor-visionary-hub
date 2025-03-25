
import React, { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  FileUp, Calculator, ClipboardCheck, PiggyBank, FileSearch, 
  ArrowRight, TrendingUp, CheckCircle, Shield, ChevronRight,
  FileSpreadsheet, BarChart3, Building, DollarSign
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TaxRecovery: React.FC = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({
    stats: false,
    problem: false,
    solution: false,
    benefits: false,
    faq: false,
    cta: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['stats', 'problem', 'solution', 'benefits', 'faq', 'cta'];
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView = rect.top <= window.innerHeight * 0.75;
          
          setIsVisible(prev => ({
            ...prev,
            [section]: isInView
          }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="min-h-screen pt-36 pb-24 bg-gradient-to-b from-black via-black to-vetor-black relative overflow-hidden flex items-center">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] opacity-20"></div>
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-vetor-green/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-vetor-green/5 to-transparent"></div>
        
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-vetor-green/5 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-vetor-green/5 blur-3xl"></div>
        
        <div className="absolute inset-0 flex justify-center">
          <div className="w-full h-full max-w-6xl mx-auto">
            <div className="absolute top-1/4 left-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-vetor-green/20 to-transparent"></div>
            <div className="absolute top-1/4 left-1/2 w-px h-1/2 bg-gradient-to-b from-transparent via-vetor-green/20 to-transparent"></div>
            <div className="absolute top-1/4 left-3/4 w-px h-1/2 bg-gradient-to-b from-transparent via-vetor-green/20 to-transparent"></div>
            
            <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-vetor-green/20 to-transparent"></div>
            <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-vetor-green/20 to-transparent"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              className="lg:w-1/2 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="space-y-6">
                <Badge className="bg-vetor-green/10 text-vetor-green hover:bg-vetor-green/20 mb-4 py-1.5 px-4 text-xs font-medium tracking-wider">EXPERTISE TRIBUTÁRIA</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">
                    Recuperação Tributária
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300/90 mb-10 leading-relaxed max-w-xl">
                  Recupere o valor pago em excesso nos seus impostos e transforme perdas em oportunidades de crescimento para sua empresa.
                </p>
                <div className="inline-flex p-1 border border-vetor-green/30 rounded-full bg-black/40 backdrop-blur-sm shadow-xl hover:shadow-vetor-green/5 transition-all">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-vetor-green hover:bg-vetor-darkgreen text-white border-none py-6 px-8 text-lg gap-3 rounded-full group transition duration-300">
                        <span>Iniciar Diagnóstico Gratuito</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-black border-vetor-green/20 text-white backdrop-blur-md">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-bold text-vetor-green">Diagnóstico de Recuperação Tributária</DialogTitle>
                      </DialogHeader>
                      <div className="py-4">
                        <p className="mb-6 text-gray-300">
                          Para realizar o diagnóstico gratuito, entre em contato conosco através dos canais abaixo. Nossa equipe entrará em contato para orientar sobre o envio dos documentos necessários.
                        </p>
                        <div className="space-y-4">
                          <a 
                            href="https://wa.me/62982474117" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white text-center rounded-md transition-colors gap-2"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                            Contato via WhatsApp
                          </a>
                          <a 
                            href="mailto:vetorcsa@gmail.com" 
                            className="flex items-center justify-center w-full py-3 px-4 bg-vetor-green hover:bg-vetor-darkgreen text-white text-center rounded-md transition-colors gap-2"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                            Contato via E-mail
                          </a>
                          <Link 
                            to="/contato" 
                            className="flex items-center justify-center w-full py-3 px-4 bg-vetor-black hover:bg-[#222] text-white text-center rounded-md transition-colors border border-vetor-green/30 gap-2"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-contact"><path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"/><rect width="18" height="18" x="3" y="4" rx="2"/><circle cx="12" cy="10" r="2"/><line x1="8" x2="8" y1="2" y2="4"/><line x1="16" x2="16" y1="2" y2="4"/></svg>
                            Página de Contato
                          </Link>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-vetor-green/30 to-vetor-green/0 rounded-2xl blur-xl opacity-50"></div>
                <div className="relative bg-black/70 backdrop-blur-sm border border-vetor-green/20 rounded-2xl p-8 shadow-2xl">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-vetor-green/10 p-3 backdrop-blur-md border border-vetor-green/30 rounded-full">
                      <div className="w-12 h-12 bg-vetor-green/20 rounded-full flex items-center justify-center">
                        <FileSpreadsheet className="w-6 h-6 text-vetor-green" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-6">
                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                      <span className="text-white font-medium">Total de Tributos Pagos:</span>
                      <span className="text-white font-bold">R$ 12.540.000,00</span>
                    </div>
                    
                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                      <span className="text-white font-medium">Tributos Pagos em Excesso:</span>
                      <span className="text-vetor-green font-bold">R$ 1.880.000,00</span>
                    </div>
                    
                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                      <span className="text-white font-medium">Período de Análise:</span>
                      <span className="text-white font-bold">5 anos</span>
                    </div>
                    
                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                      <span className="text-white font-medium">Economia Anual Estimada:</span>
                      <span className="text-vetor-green font-bold">R$ 376.000,00</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">Potencial de Recuperação:</span>
                      <span className="text-white font-bold">15%</span>
                    </div>
                    
                    <div className="mt-8 pt-2">
                      <div className="bg-white/5 h-2 rounded-full overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-vetor-green to-vetor-lightgreen w-[15%] rounded-full"></div>
                      </div>
                      <div className="flex justify-between text-xs text-white/60 mt-2">
                        <span>0%</span>
                        <span>Economia Média: 15%</span>
                        <span>30%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section id="stats" className="py-16 bg-gradient-to-b from-black to-vetor-black border-y border-vetor-green/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgMHYyaC0ydi0yaDJ6bTItNGgtMnYyaC0yaC0ydjJoMnYyaC0ydjJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYtMmgtMnYtMmgydi0yaC0ydi0yaC0yek00MiAzMHYyaC0ydi0yaDJ6bS00IDRoMnYyaC0ydi0yek0zNiAyNnYyaC0ydi0yaDJ6bS00IDBoMnYyaC0ydi0yek0zMCAzMHYyaC0ydi0yaDJ6bS00IDBoMnYyaC0ydi0yek0yNiAyNnYyaC0ydi0yaDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5"></div>

        <motion.div 
          className="container mx-auto px-4 md:px-6"
          variants={fadeInUp}
          initial="hidden"
          animate={isVisible.stats ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { value: "+95%", text: "Das empresas pagam tributos em excesso" },
              { value: "5 anos", text: "Período não prescrito para recuperação" },
              { value: "+15%", text: "Economia média em impostos" },
              { value: "+5000", text: "Empresas beneficiadas" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible.stats ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="bg-gradient-to-br from-black to-black/60 border border-vetor-green/10 rounded-xl p-6 h-full shadow-lg hover:shadow-vetor-green/5 transition-all">
                  <div className="text-3xl md:text-4xl font-bold text-vetor-green mb-2">{stat.value}</div>
                  <p className="text-sm text-gray-400">{stat.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      
      {/* Explanation Section */}
      <section id="problem" className="py-20 bg-vetor-black relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isVisible.problem ? "visible" : "hidden"}
            >
              <Badge className="bg-vetor-green/10 text-vetor-green hover:bg-vetor-green/20 mb-4 py-1.5 px-4 text-xs tracking-wider">O PROBLEMA</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Por que as empresas pagam impostos em excesso?
              </h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  As empresas que lidam com grande fluxo de produtos enfrentam desafios significativos no gerenciamento correto de suas obrigações tributárias, principalmente devido a:
                </p>
                <motion.div 
                  className="space-y-6 pl-4"
                  variants={staggerChildren}
                  initial="hidden"
                  animate={isVisible.problem ? "visible" : "hidden"}
                >
                  {[
                    {
                      title: "Complexidade legislativa",
                      description: "O sistema tributário brasileiro é um dos mais complexos do mundo, com centenas de leis e regulamentos que mudam constantemente."
                    },
                    {
                      title: "Mudanças frequentes",
                      description: "As leis tributárias sofrem alterações constantes, tornando difícil para as empresas manterem-se atualizadas."
                    },
                    {
                      title: "Volume de operações",
                      description: "Empresas com alto volume de produtos processam milhares de notas fiscais mensalmente, aumentando a chance de erros nos cálculos."
                    },
                    {
                      title: "Falta de integração",
                      description: "Muitos sistemas de gestão não estão totalmente integrados com as atualizações fiscais."
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex gap-4"
                      variants={fadeInUp}
                    >
                      <div className="w-10 h-10 bg-vetor-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-vetor-green" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                <Alert className="bg-black/40 border border-vetor-green/20 mt-8">
                  <AlertDescription className="text-gray-300">
                    O resultado disso é que a maioria das empresas acaba pagando mais impostos do que realmente deveria, prejudicando seu fluxo de caixa e competitividade no mercado.
                  </AlertDescription>
                </Alert>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={fadeInUp}
              initial="hidden"
              animate={isVisible.problem ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-b from-vetor-green/20 to-transparent rounded-2xl blur-xl opacity-50"></div>
              <Card className="bg-gradient-to-br from-black to-vetor-black/90 border border-vetor-green/10 rounded-xl overflow-hidden relative z-10">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                    <TrendingUp className="w-6 h-6 text-vetor-green mr-3" />
                    Impacto nos negócios
                  </h3>
                  <div className="space-y-8">
                    {[
                      {
                        icon: <PiggyBank className="w-6 h-6 text-vetor-green" />,
                        title: "Redução da liquidez",
                        description: "Dinheiro imobilizado em impostos pagos indevidamente que poderia estar sendo investido no crescimento do negócio."
                      },
                      {
                        icon: <Calculator className="w-6 h-6 text-vetor-green" />,
                        title: "Aumento de custos",
                        description: "O pagamento excessivo de tributos eleva o custo operacional, afetando margens de lucro e preços finais."
                      },
                      {
                        icon: <ClipboardCheck className="w-6 h-6 text-vetor-green" />,
                        title: "Perda de competitividade",
                        description: "Empresas que pagam tributos em excesso têm desvantagem competitiva em relação àquelas que gerenciam corretamente sua carga tributária."
                      }
                    ].map((item, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible.problem ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.3 + (index * 0.1) }}
                      >
                        <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                          <p className="text-gray-300">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Decorative element */}
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-vetor-green/5 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Solution Section */}
      <section id="solution" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgMHYyaC0ydi0yaDJ6bTItNGgtMnYyaC0yaC0ydjJoMnYyaC0ydjJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYtMmgtMnYtMmgydi0yaC0ydi0yaC0yek00MiAzMHYyaC0ydi0yaDJ6bS00IDRoMnYyaC0ydi0yek0zNiAyNnYyaC0ydi0yaDJ6bS00IDBoMnYyaC0ydi0yek0zMCAzMHYyaC0ydi0yaDJ6bS00IDBoMnYyaC0ydi0yek0yNiAyNnYyaC0ydi0yaDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="text-center mb-16 max-w-3xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            animate={isVisible.solution ? "visible" : "hidden"}
          >
            <Badge className="bg-vetor-green/10 text-vetor-green hover:bg-vetor-green/20 mb-4 py-1.5 px-4 text-xs tracking-wider">NOSSA SOLUÇÃO</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Diagnóstico Gratuito de Recuperação Tributária
            </h2>
            <p className="text-white/70 mx-auto text-lg">
              Nossa tecnologia analisa seus arquivos XML e calcula exatamente o quanto sua empresa pagou em excesso nos últimos anos.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileUp className="w-7 h-7 text-vetor-green" />,
                title: "1. Envio dos XMLs",
                description: "Envie os arquivos XML das suas notas fiscais dos últimos 5 anos (período não prescrito) para nossa análise."
              },
              {
                icon: <FileSearch className="w-7 h-7 text-vetor-green" />,
                title: "2. Análise Detalhada",
                description: "Nossa tecnologia analisa cada operação para identificar tributos pagos indevidamente, comparando o que foi pago com o que deveria ter sido pago."
              },
              {
                icon: <Calculator className="w-7 h-7 text-vetor-green" />,
                title: "3. Relatório Detalhado",
                description: "Receba um relatório completo com o valor que sua empresa pode recuperar e um plano de ação para obter essa restituição."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible.solution ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full bg-black/40 border border-vetor-green/10 rounded-xl backdrop-blur-sm overflow-hidden hover:border-vetor-green/30 hover:transform hover:translate-y-[-5px] transition-all duration-300">
                  <div className="h-2 bg-gradient-to-r from-vetor-green to-vetor-lightgreen"></div>
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-vetor-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <div className="rounded-full bg-black/30 w-14 h-14 flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-300">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefit Section */}
      <section id="benefits" className="py-20 bg-gradient-to-b from-vetor-black to-black relative overflow-hidden">
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-1 border-b border-vetor-green/5"></div>
          <div className="flex-1"></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="h-px bg-gradient-to-r from-transparent via-vetor-green/5 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={isVisible.benefits ? "visible" : "hidden"}
          >
            <Badge className="bg-vetor-green/10 text-vetor-green hover:bg-vetor-green/20 mb-4 py-1.5 px-4 text-xs tracking-wider">BENEFÍCIOS</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Vantagens da Recuperação Tributária
            </h2>
            <p className="text-white/70 text-lg">
              Ao recuperar tributos pagos em excesso, sua empresa ganha muito mais do que apenas dinheiro de volta.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <PiggyBank className="w-6 h-6 text-vetor-green" />,
                title: "Aumento do Caixa",
                description: "Injeção imediata de liquidez para sua empresa reinvestir no negócio."
              },
              {
                icon: <Calculator className="w-6 h-6 text-vetor-green" />,
                title: "Redução de Custos",
                description: "Otimização da carga tributária atual e futura, gerando economia contínua."
              },
              {
                icon: <ClipboardCheck className="w-6 h-6 text-vetor-green" />,
                title: "Conformidade Fiscal",
                description: "Identificação de processos a serem ajustados para evitar novos pagamentos em excesso."
              },
              {
                icon: <Shield className="w-6 h-6 text-vetor-green" />,
                title: "Auditoria Preventiva",
                description: "Identificação precoce de riscos fiscais, evitando futuras autuações."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible.benefits ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-gradient-to-br from-black/80 to-black border border-vetor-green/10 rounded-xl overflow-hidden hover:border-vetor-green/30 hover:bg-black/60 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgMHYyaC0ydi0yaDJ6bTItNGgtMnYyaC0yaC0ydjJoMnYyaC0ydjJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYtMmgtMnYtMmgydi0yaC0ydi0yaC0yek00MiAzMHYyaC0ydi0yaDJ6bS00IDRoMnYyaC0ydi0yek0zNiAyNnYyaC0ydi0yaDJ6bS00IDBoMnYyaC0ydi0yek0zMCAzMHYyaC0ydi0yaDJ6bS00IDBoMnYyaC0ydi0yek0yNiAyNnYyaC0ydi0yaDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5"></div>
        
        <motion.div 
          className="container mx-auto px-4 md:px-6 relative z-10"
          variants={fadeInUp}
          initial="hidden"
          animate={isVisible.faq ? "visible" : "hidden"}
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-vetor-green/10 text-vetor-green hover:bg-vetor-green/20 mb-4 py-1.5 px-4 text-xs tracking-wider">PERGUNTAS FREQUENTES</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Dúvidas sobre Recuperação Tributária
              </h2>
            </div>
            
            <div className="bg-gradient-to-b from-black to-vetor-black/30 rounded-2xl border border-vetor-green/10 overflow-hidden p-6">
              <Accordion 
                type="single" 
                collapsible 
                className="border-b border-vetor-green/10"
              >
                {[
                  {
                    question: "Quanto minha empresa pode recuperar?",
                    answer: "O valor depende do volume de operações da sua empresa e dos tributos pagos nos últimos 5 anos. Normalmente, as empresas recuperam entre 5% e 20% do total de tributos pagos no período."
                  },
                  {
                    question: "Quais tributos podem ser recuperados?",
                    answer: "É possível recuperar créditos de ICMS, PIS, COFINS, IPI e outros tributos federais e estaduais, dependendo do setor de atuação da empresa."
                  },
                  {
                    question: "Quanto tempo leva o processo de recuperação?",
                    answer: "O diagnóstico inicial leva cerca de 30 dias. O processo completo pode levar de 3 a 12 meses, dependendo do volume de documentos e da complexidade da recuperação."
                  },
                  {
                    question: "Este processo é legal?",
                    answer: "Sim, totalmente legal. A recuperação tributária é baseada na legislação vigente e em decisões judiciais favoráveis. Não se trata de sonegação fiscal, mas sim de cobrar do governo aquilo que foi pago indevidamente."
                  }
                ].map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index+1}`} 
                    className="border-t border-vetor-green/10 py-2 overflow-hidden"
                  >
                    <AccordionTrigger className="text-white hover:text-vetor-green text-lg font-medium transition-colors">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 pr-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* CTA Section with Modal */}
      <section id="cta" className="py-20 bg-vetor-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,176,80,0.1)_0,transparent_50%)]"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-vetor-green/5 rounded-full blur-3xl"></div>
        <div className="absolute top-10 -left-20 w-72 h-72 bg-vetor-green/3 rounded-full blur-3xl"></div>
        
        <motion.div 
          className="container mx-auto px-4 md:px-6 relative z-10"
          variants={fadeInUp}
          initial="hidden" 
          animate={isVisible.cta ? "visible" : "hidden"}
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-black/70 to-black/90 backdrop-blur-md border border-vetor-green/10 rounded-xl p-8 md:p-12 text-center shadow-[0_0_80px_rgba(0,176,80,0.05)]">
            <div className="w-20 h-20 bg-gradient-to-br from-vetor-green/20 to-transparent rounded-full flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-10 h-10 text-vetor-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Faça o diagnóstico gratuito agora
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg mb-8">
              Descubra quanto sua empresa pode recuperar de tributos pagos em excesso. Nosso diagnóstico é 100% gratuito e sem compromisso.
            </p>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-vetor-green to-vetor-darkgreen hover:from-vetor-darkgreen hover:to-vetor-darkgreen text-white border-none py-6 px-8 text-lg flex items-center gap-3 mx-auto group transition-all duration-300">
                  <span>Iniciar Diagnóstico Gratuito</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-black/90 backdrop-blur-lg border-vetor-green/20 text-white">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold text-vetor-green">Diagnóstico de Recuperação Tributária</DialogTitle>
                </DialogHeader>
                <div className="py-4">
                  <p className="mb-6 text-gray-300">
                    Para realizar o diagnóstico gratuito, entre em contato conosco através dos canais abaixo. Nossa equipe entrará em contato para orientar sobre o envio dos documentos necessários.
                  </p>
                  <div className="space-y-4">
                    <a 
                      href="https://wa.me/62982474117" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white text-center rounded-md transition-colors gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                      Contato via WhatsApp
                    </a>
                    <a 
                      href="mailto:vetorcsa@gmail.com" 
                      className="flex items-center justify-center w-full py-3 px-4 bg-vetor-green hover:bg-vetor-darkgreen text-white text-center rounded-md transition-colors gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                      Contato via E-mail
                    </a>
                    <Link 
                      to="/contato" 
                      className="flex items-center justify-center w-full py-3 px-4 bg-vetor-black hover:bg-[#222] text-white text-center rounded-md transition-colors border border-vetor-green/30 gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-contact"><path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"/><rect width="18" height="18" x="3" y="4" rx="2"/><circle cx="12" cy="10" r="2"/><line x1="8" x2="8" y1="2" y2="4"/><line x1="16" x2="16" y1="2" y2="4"/></svg>
                      Página de Contato
                    </Link>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            
            <div className="flex items-center justify-center gap-2 text-gray-400 mt-6 text-sm">
              <Shield className="w-4 h-4 text-vetor-green/70" />
              <p>Processo 100% seguro, seus dados estarão protegidos de acordo com a LGPD.</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default TaxRecovery;
