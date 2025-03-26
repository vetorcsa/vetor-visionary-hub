import React from 'react';
import { Cpu, ArrowRight, Code, Clock, BarChart, Bot, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { motion } from 'framer-motion';

const ProcessAutomation: React.FC = () => {
  const handleWhatsAppContact = (plan: string) => {
    const message = encodeURIComponent(`Olá! Estou interessado no plano de ${plan} de automação de processos. Poderia me fornecer mais informações?`);
    window.open(`https://wa.me/+5500000000000?text=${message}`, '_blank');
  };

  const handleDemoRequest = () => {
    const message = encodeURIComponent("Quero ver automações na prática");
    window.open(`https://wa.me/+5500000000000?text=${message}`, '_blank');
  };

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-black to-vetor-black pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-[30rem] h-[30rem] rounded-full bg-vetor-green/5 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[20rem] h-[20rem] rounded-full bg-vetor-green/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2">
              <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">Automação</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Automações de <span className="text-vetor-green">Processos</span> com Python
              </h1>
              <p className="text-white/80 text-lg mb-8">
                Transforme tarefas repetitivas em processos automatizados e eficientes. 
                Aumente a produtividade e reduza erros humanos com soluções personalizadas de automação.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={handleDemoRequest}
                  className="bg-gradient-to-r from-vetor-green to-vetor-darkgreen hover:from-vetor-darkgreen hover:to-vetor-green text-white px-6 py-6 rounded-lg font-medium text-lg transition-all duration-300">
                  Solicitar Demonstração <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-vetor-green/10 rounded-xl blur-xl"></div>
                <div className="relative bg-black/40 backdrop-blur-sm border border-vetor-green/20 p-4 rounded-xl overflow-hidden">
                  <pre className="text-vetor-green/80 text-sm font-mono">
                    <code>
{`# Automação de processos com Python
import pandas as pd
import schedule
import time
import os

def process_data():
    # Ler dados
    data = pd.read_excel("dados.xlsx")
    
    # Processar informações
    resultado = data.groupby('categoria').sum()
    
    # Salvar relatório
    resultado.to_excel("relatorio_diario.xlsx")
    print("Relatório gerado com sucesso!")

# Agendar execução diária
schedule.every().day.at("08:00").do(process_data)

# Loop principal
while True:
    schedule.run_pending()
    time.sleep(60)`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-vetor-black to-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">Vantagens</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Por que automatizar com Python?
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-vetor-green to-vetor-green/40 mx-auto mb-8 rounded-full"></div>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Python é uma linguagem versátil e poderosa, ideal para automatizar processos empresariais de todos os tipos.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemAnimation} className="glass-card p-8 rounded-xl hover-card">
              <div className="bg-vetor-green/10 p-4 rounded-lg inline-block mb-4">
                <Clock className="h-8 w-8 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Economia de Tempo</h3>
              <p className="text-white/70">
                Automatize tarefas repetitivas que consomem horas de trabalho manual, liberando sua equipe para atividades estratégicas.
              </p>
            </motion.div>

            <motion.div variants={itemAnimation} className="glass-card p-8 rounded-xl hover-card">
              <div className="bg-vetor-green/10 p-4 rounded-lg inline-block mb-4">
                <BarChart className="h-8 w-8 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Redução de Erros</h3>
              <p className="text-white/70">
                Elimine erros humanos em processos críticos. Automações executam tarefas com precisão e consistência.
              </p>
            </motion.div>

            <motion.div variants={itemAnimation} className="glass-card p-8 rounded-xl hover-card">
              <div className="bg-vetor-green/10 p-4 rounded-lg inline-block mb-4">
                <Bot className="h-8 w-8 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Escalabilidade</h3>
              <p className="text-white/70">
                Processe volumes maiores de dados e tarefas sem necessidade de aumento proporcional da equipe.
              </p>
            </motion.div>

            <motion.div variants={itemAnimation} className="glass-card p-8 rounded-xl hover-card">
              <div className="bg-vetor-green/10 p-4 rounded-lg inline-block mb-4">
                <Cpu className="h-8 w-8 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Integração Flexível</h3>
              <p className="text-white/70">
                Conecte sistemas diferentes que não conversam entre si, unificando dados de múltiplas fontes.
              </p>
            </motion.div>

            <motion.div variants={itemAnimation} className="glass-card p-8 rounded-xl hover-card">
              <div className="bg-vetor-green/10 p-4 rounded-lg inline-block mb-4">
                <Code className="h-8 w-8 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Soluções Customizadas</h3>
              <p className="text-white/70">
                Desenvolva automações específicas para seus processos únicos, sem depender de soluções genéricas.
              </p>
            </motion.div>

            <motion.div variants={itemAnimation} className="glass-card p-8 rounded-xl hover-card">
              <div className="bg-vetor-green/10 p-4 rounded-lg inline-block mb-4">
                <ExternalLink className="h-8 w-8 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">ROI Rápido</h3>
              <p className="text-white/70">
                Obtenha retorno sobre o investimento em poucos meses com a redução de custos operacionais e aumento de produtividade.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-black to-vetor-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[30%] right-[10%] w-[25rem] h-[25rem] rounded-full bg-vetor-green/5 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-[10%] left-[15%] w-[20rem] h-[20rem] rounded-full bg-vetor-green/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">Planos</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Escolha o plano ideal para sua empresa
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-vetor-green to-vetor-green/40 mx-auto mb-8 rounded-full"></div>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Oferecemos soluções de automação para diferentes necessidades e orçamentos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
            <Card variant="dark" className="relative overflow-hidden border-vetor-green/20 hover:border-vetor-green/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-vetor-green/10 rounded-bl-full"></div>
              <CardHeader>
                <CardTitle variant="dark" className="text-2xl">Automação Básica</CardTitle>
                <p className="text-3xl font-bold text-white mt-4">R$ 2.000<span className="text-lg text-white/60">/projeto</span></p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="rounded-full bg-vetor-green/20 p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-vetor-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-white/80">Automatização de uma tarefa repetitiva</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-vetor-green/20 p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-vetor-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-white/80">Tratamento de dados simples</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-vetor-green/20 p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-vetor-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-white/80">Geração de relatórios básicos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-vetor-green/20 p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-vetor-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-white/80">Documentação do projeto</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-vetor-green/20 p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-vetor-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-white/80">30 dias de suporte</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => handleWhatsAppContact('Básico')}
                  className="w-full bg-gradient-to-r from-vetor-green to-vetor-darkgreen hover:from-vetor-darkgreen hover:to-vetor-green text-white"
                >
                  Contratar via WhatsApp
                </Button>
              </CardFooter>
            </Card>
            
            <Card variant="dark" className="relative overflow-hidden border-vetor-green/20 hover:border-vetor-green/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-vetor-green/10 rounded-bl-full"></div>
              <CardHeader>
                <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-1 self-start">Recomendado</Badge>
                <CardTitle variant="dark" className="text-2xl">Automação Avançada</CardTitle>
                <p className="text-3xl font-bold text-white mt-4">R$ 5.000<span className="text-lg text-white/60">/projeto</span></p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="rounded-full bg-vetor-green/20 p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-vetor-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-white/80">Automatização de fluxos complexos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-vetor-green/20 p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-vetor-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-white/80">Integração com múltiplos sistemas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-vetor-green/20 p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-vetor-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-white/80">Dashboard interativo de resultados</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-vetor-green/20 p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-vetor-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-white/80">Interface personalizada</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-vetor-green/20 p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-vetor-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-white/80">Treinamento para equipe</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-vetor-green/20 p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-vetor-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-white/80">90 dias de suporte técnico</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => handleWhatsAppContact('Avançado')}
                  className="w-full bg-gradient-to-r from-vetor-green to-vetor-darkgreen hover:from-vetor-darkgreen hover:to-vetor-green text-white"
                >
                  Contratar via WhatsApp
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessAutomation;
