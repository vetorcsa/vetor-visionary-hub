
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, FileSearch, FileCheck, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RealEstatePlans: React.FC = () => {
  return (
    <div className="page-transition bg-black min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">
            ERP Imobiliário
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Sistema Completo para Gestão Imobiliária
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-vetor-green to-vetor-green/40 mx-auto mb-8 rounded-full"></div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Otimize sua operação imobiliária com nosso sistema ERP completo, desenvolvido especificamente para o setor imobiliário.
          </p>
        </div>

        {/* ERP Features Section */}
        <div className="mb-20 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/40 border border-vetor-green/20 rounded-xl p-6 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(0,176,80,0.15)] transition-all duration-300">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-vetor-green mr-3" />
                <h3 className="text-xl font-semibold text-white">Controle Financeiro</h3>
              </div>
              <p className="text-white/70">
                Gerencie receitas, despesas, comissões e fluxo de caixa. Relatórios detalhados e dashboards personalizados para uma visão completa do seu negócio.
              </p>
            </div>

            <div className="bg-black/40 border border-vetor-green/20 rounded-xl p-6 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(0,176,80,0.15)] transition-all duration-300">
              <div className="flex items-center mb-4">
                <Building2 className="h-6 w-6 text-vetor-green mr-3" />
                <h3 className="text-xl font-semibold text-white">Controle de Imóveis</h3>
              </div>
              <p className="text-white/70">
                Cadastro completo de imóveis com fotos, documentação, histórico de manutenção e acompanhamento de status. Organize e acesse todas as informações em um só lugar.
              </p>
            </div>

            <div className="bg-black/40 border border-vetor-green/20 rounded-xl p-6 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(0,176,80,0.15)] transition-all duration-300">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-vetor-green mr-3" />
                <h3 className="text-xl font-semibold text-white">Módulo de Contratos</h3>
              </div>
              <p className="text-white/70">
                Gere contratos automaticamente com base em modelos personalizáveis. Economize tempo e garanta consistência nos seus documentos com assinatura digital integrada.
              </p>
            </div>

            <div className="bg-black/40 border border-vetor-green/20 rounded-xl p-6 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(0,176,80,0.15)] transition-all duration-300">
              <div className="flex items-center mb-4">
                <FileCheck className="h-6 w-6 text-vetor-green mr-3" />
                <h3 className="text-xl font-semibold text-white">Conferência de Pagamentos</h3>
              </div>
              <p className="text-white/70">
                Acompanhamento automático de contas a pagar como energia, IPTU e água. O sistema avisa sobre pendências, evitando esforços repetitivos e prevenindo atrasos.
              </p>
            </div>

            <div className="bg-black/40 border border-vetor-green/20 rounded-xl p-6 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(0,176,80,0.15)] transition-all duration-300">
              <div className="flex items-center mb-4">
                <FileSearch className="h-6 w-6 text-vetor-green mr-3" />
                <h3 className="text-xl font-semibold text-white">Gestão de Leads</h3>
              </div>
              <p className="text-white/70">
                Capture e organize leads automaticamente. O sistema indica imóveis compatíveis com os interesses dos clientes, aumentando as chances de fechamento de negócios.
              </p>
            </div>

            <div className="bg-black/40 border border-vetor-green/20 rounded-xl p-6 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(0,176,80,0.15)] transition-all duration-300">
              <div className="flex items-center mb-4">
                <FileCheck className="h-6 w-6 text-vetor-green mr-3" />
                <h3 className="text-xl font-semibold text-white">Visitas e Agendamentos</h3>
              </div>
              <p className="text-white/70">
                Sistema integrado para agendamento de visitas com notificações automáticas e controle de feedback. Otimize seu tempo e melhore a experiência do cliente.
              </p>
            </div>
          </div>

          <div className="mt-10 bg-vetor-green/10 border border-vetor-green/20 rounded-xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-vetor-green mb-4">Site White Label Personalizado</h3>
            <p className="text-white/70 mb-4">
              Cada cliente recebe um site personalizado para exibir seu portfólio imobiliário. Altamente ajustável, com cores e layout adaptados à sua marca, facilitando a divulgação dos seus imóveis online.
            </p>
            <Link to="/crie-seu-site">
              <Button variant="outline" className="border-vetor-green/50 text-vetor-green hover:bg-vetor-green/20">
                Saiba mais sobre nossos sites
              </Button>
            </Link>
          </div>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Escolha o Plano Ideal para sua Imobiliária
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Oferecemos diferentes planos para atender às necessidades específicas do seu negócio imobiliário.
          </p>
          <div className="mt-6">
            <Link to="/solucoes-erp">
              <Button variant="outline" className="border-vetor-green/50 text-vetor-green hover:bg-vetor-green/20">
                <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Soluções ERP
              </Button>
            </Link>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Básico */}
          <div className="bg-black/40 border border-vetor-green/20 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,176,80,0.2)] hover:scale-105">
            <div className="p-6 border-b border-vetor-green/20">
              <h3 className="text-xl font-semibold text-white">Plano Essencial</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold text-white">R$249</span>
                <span className="ml-1 text-xl text-white/70">/mês</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-vetor-green mr-2">✓</span>
                  <span className="text-white/80">Até 100 imóveis cadastrados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vetor-green mr-2">✓</span>
                  <span className="text-white/80">Gestão de clientes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vetor-green mr-2">✓</span>
                  <span className="text-white/80">Controle de visitas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vetor-green mr-2">✓</span>
                  <span className="text-white/80">Suporte por e-mail</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button className="w-full bg-vetor-green hover:bg-vetor-darkgreen">
                  Contratar
                </Button>
              </div>
            </div>
          </div>

          {/* Intermediário */}
          <div className="bg-black/40 border-2 border-vetor-green rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,176,80,0.3)] relative hover:scale-105">
            <div className="absolute top-0 right-0 bg-vetor-green text-black px-4 py-1 text-sm font-semibold">
              Popular
            </div>
            <div className="p-6 border-b border-vetor-green/20">
              <h3 className="text-xl font-semibold text-white">Plano Profissional</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold text-white">R$499</span>
                <span className="ml-1 text-xl text-white/70">/mês</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-vetor-green mr-2">✓</span>
                  <span className="text-white/80">Até 500 imóveis cadastrados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vetor-green mr-2">✓</span>
                  <span className="text-white/80">Portal do cliente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vetor-green mr-2">✓</span>
                  <span className="text-white/80">Automação de contratos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vetor-green mr-2">✓</span>
                  <span className="text-white/80">Integração com portais imobiliários</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vetor-green mr-2">✓</span>
                  <span className="text-white/80">Suporte por telefone e e-mail</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button className="w-full bg-vetor-green hover:bg-vetor-darkgreen">
                  Contratar
                </Button>
              </div>
            </div>
          </div>

          {/* Avançado */}
          <div className="bg-black/40 border border-vetor-green/20 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,176,80,0.2)] hover:scale-105">
            <div className="p-6 border-b border-vetor-green/20">
              <h3 className="text-xl font-semibold text-white">Plano Enterprise</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold text-white">R$899</span>
                <span className="ml-1 text-xl text-white/70">/mês</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-vetor-green mr-2">✓</span>
                  <span className="text-white/80">Imóveis ilimitados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vetor-green mr-2">✓</span>
                  <span className="text-white/80">Sistema financeiro completo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vetor-green mr-2">✓</span>
                  <span className="text-white/80">CRM imobiliário avançado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vetor-green mr-2">✓</span>
                  <span className="text-white/80">Marketing digital integrado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vetor-green mr-2">✓</span>
                  <span className="text-white/80">Suporte premium 24/7</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vetor-green mr-2">✓</span>
                  <span className="text-white/80">Personalização completa</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button className="w-full bg-vetor-green hover:bg-vetor-darkgreen">
                  Contratar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstatePlans;
