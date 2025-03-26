
import React, { useCallback } from 'react';
import { Cpu, ArrowRight, Code, Clock, BarChart, Bot, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import BenefitCard from '@/components/ProcessAutomation/BenefitCard';
import PricingCard from '@/components/ProcessAutomation/PricingCard';

const ProcessAutomation: React.FC = () => {
  const handleWhatsAppContact = useCallback((plan: string) => {
    const message = encodeURIComponent(`Olá! Estou interessado no plano de ${plan} de automação de processos. Poderia me fornecer mais informações?`);
    window.open(`https://wa.me/+5500000000000?text=${message}`, '_blank');
  }, []);

  const handleDemoRequest = useCallback(() => {
    const message = encodeURIComponent("Quero ver automações na prática");
    window.open(`https://wa.me/+5500000000000?text=${message}`, '_blank');
  }, []);

  // Pre-define benefit cards content
  const benefitCards = React.useMemo(() => [
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Automatize tarefas repetitivas que consomem horas de trabalho manual, liberando sua equipe para atividades estratégicas."
    },
    {
      icon: BarChart,
      title: "Redução de Erros",
      description: "Elimine erros humanos em processos críticos. Automações executam tarefas com precisão e consistência."
    },
    {
      icon: Bot,
      title: "Escalabilidade",
      description: "Processe volumes maiores de dados e tarefas sem necessidade de aumento proporcional da equipe."
    },
    {
      icon: Cpu,
      title: "Integração Flexível",
      description: "Conecte sistemas diferentes que não conversam entre si, unificando dados de múltiplas fontes."
    },
    {
      icon: Code,
      title: "Soluções Customizadas",
      description: "Desenvolva automações específicas para seus processos únicos, sem depender de soluções genéricas."
    },
    {
      icon: ExternalLink,
      title: "ROI Rápido",
      description: "Obtenha retorno sobre o investimento em poucos meses com a redução de custos operacionais e aumento de produtividade."
    }
  ], []);

  // Pre-define pricing cards content
  const basicPlanFeatures = React.useMemo(() => [
    { text: "Automatização de uma tarefa repetitiva" },
    { text: "Tratamento de dados simples" },
    { text: "Geração de relatórios básicos" },
    { text: "Documentação do projeto" },
    { text: "30 dias de suporte" }
  ], []);

  const advancedPlanFeatures = React.useMemo(() => [
    { text: "Automatização de fluxos complexos" },
    { text: "Integração com múltiplos sistemas" },
    { text: "Dashboard interativo de resultados" },
    { text: "Interface personalizada" },
    { text: "Treinamento para equipe" },
    { text: "90 dias de suporte técnico" }
  ], []);

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitCards.map((card, index) => (
              <BenefitCard 
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
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
            <PricingCard
              title="Automação Básica"
              price="3.000"
              features={basicPlanFeatures}
              onContact={() => handleWhatsAppContact('Básico')}
            />
            
            <PricingCard
              title="Automação Avançada"
              price="10.000"
              features={advancedPlanFeatures}
              recommended={true}
              onContact={() => handleWhatsAppContact('Avançado')}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(ProcessAutomation);
