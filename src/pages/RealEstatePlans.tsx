
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RealEstatePlans: React.FC = () => {
  return (
    <div className="page-transition bg-black min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">
            Planos para Imobiliárias
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Escolha o Plano Ideal para sua Imobiliária
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-vetor-green to-vetor-green/40 mx-auto mb-8 rounded-full"></div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Oferecemos diferentes planos para atender às necessidades específicas do seu negócio imobiliário.
          </p>
          <div className="mt-8">
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
