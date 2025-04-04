
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TransportationPlans: React.FC = () => {
  // Memoize static content to prevent unnecessary re-renders
  const planCards = React.useMemo(() => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Básico */}
        <div className="bg-black/40 border border-vetor-green/20 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,176,80,0.2)] hover:scale-105">
          <div className="p-6 border-b border-vetor-green/20">
            <h3 className="text-xl font-semibold text-white">Plano Básico</h3>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-extrabold text-white">R$500</span>
              <span className="ml-1 text-xl text-white/70">/mês</span>
            </div>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-vetor-green mr-2">✓</span>
                <span className="text-white/80">Até 10 embarcadores</span>
              </li>
              <li className="flex items-start">
                <span className="text-vetor-green mr-2">✓</span>
                <span className="text-white/80">Gestão de rotas</span>
              </li>
              <li className="flex items-start">
                <span className="text-vetor-green mr-2">✓</span>
                <span className="text-white/80">Controle de manutenção</span>
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
            <h3 className="text-xl font-semibold text-white">Plano Intermediário</h3>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-extrabold text-white">R$900</span>
              <span className="ml-1 text-xl text-white/70">/mês</span>
            </div>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-vetor-green mr-2">✓</span>
                <span className="text-white/80">Até 30 embarcadores</span>
              </li>
              <li className="flex items-start">
                <span className="text-vetor-green mr-2">✓</span>
                <span className="text-white/80">Gestão de rotas avançada</span>
              </li>
              <li className="flex items-start">
                <span className="text-vetor-green mr-2">✓</span>
                <span className="text-white/80">Controle de combustível</span>
              </li>
              <li className="flex items-start">
                <span className="text-vetor-green mr-2">✓</span>
                <span className="text-white/80">Rastreamento em tempo real</span>
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
            <h3 className="text-xl font-semibold text-white">Plano Avançado</h3>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-extrabold text-white">R$1.400</span>
              <span className="ml-1 text-xl text-white/70">/mês</span>
            </div>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-vetor-green mr-2">✓</span>
                <span className="text-white/80">Embarcadores ilimitados</span>
              </li>
              <li className="flex items-start">
                <span className="text-vetor-green mr-2">✓</span>
                <span className="text-white/80">Integração com sistemas externos</span>
              </li>
              <li className="flex items-start">
                <span className="text-vetor-green mr-2">✓</span>
                <span className="text-white/80">BI e relatórios avançados</span>
              </li>
              <li className="flex items-start">
                <span className="text-vetor-green mr-2">✓</span>
                <span className="text-white/80">App para motoristas</span>
              </li>
              <li className="flex items-start">
                <span className="text-vetor-green mr-2">✓</span>
                <span className="text-white/80">Suporte premium 24/7</span>
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
    );
  }, []);

  return (
    <div className="page-transition bg-black min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">
            Planos para Transportadoras
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Escolha o Plano Ideal para sua Transportadora
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-vetor-green to-vetor-green/40 mx-auto mb-8 rounded-full"></div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Oferecemos diferentes planos para atender às necessidades específicas do seu negócio de transporte e logística.
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
        {planCards}
      </div>
    </div>
  );
};

export default React.memo(TransportationPlans);
