
import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Truck, ArrowRight, CheckCircle, Zap, BarChart3, Globe } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ErpSolutions: React.FC = () => {
  return (
    <div className="page-transition bg-black min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">
            Soluções ERP
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Sistemas ERP Personalizados
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-vetor-green to-vetor-green/40 mx-auto mb-8 rounded-full"></div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Nossas soluções ERP personalizadas para diferentes setores otimizam processos e aumentam a produtividade do seu negócio.
          </p>
        </div>

        {/* Highlighted Features */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/40 border border-vetor-green/20 p-8 rounded-lg backdrop-blur-sm text-center">
              <Zap className="w-12 h-12 text-vetor-green mx-auto mb-4" />
              <h3 className="text-vetor-green text-xl font-semibold mb-3">Aumento de Produtividade</h3>
              <p className="text-white/70">
                Automatize processos manuais e reduza erros, liberando sua equipe para tarefas estratégicas.
              </p>
            </div>
            
            <div className="bg-black/40 border border-vetor-green/20 p-8 rounded-lg backdrop-blur-sm text-center">
              <BarChart3 className="w-12 h-12 text-vetor-green mx-auto mb-4" />
              <h3 className="text-vetor-green text-xl font-semibold mb-3">Dados em Tempo Real</h3>
              <p className="text-white/70">
                Tome decisões baseadas em dados atualizados e relatórios personalizados para seu negócio.
              </p>
            </div>
            
            <div className="bg-black/40 border border-vetor-green/20 p-8 rounded-lg backdrop-blur-sm text-center">
              <Globe className="w-12 h-12 text-vetor-green mx-auto mb-4" />
              <h3 className="text-vetor-green text-xl font-semibold mb-3">Acesso Remoto</h3>
              <p className="text-white/70">
                Gerencie seu negócio de qualquer lugar com acesso seguro via web e aplicativo móvel.
              </p>
            </div>
          </div>
        </div>

        {/* Automations Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">
              Automações Inteligentes
            </Badge>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
              ERP + Automação Python
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Potencialize seu sistema ERP com automações personalizadas em Python, integrando todas as suas operações.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-black/40 border border-vetor-green/20 rounded-lg p-8">
              <h3 className="text-vetor-green text-2xl font-semibold mb-4">Automatizações Exclusivas</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-vetor-green mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">Integração com sistemas fiscais e contábeis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-vetor-green mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">Geração automática de relatórios e documentos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-vetor-green mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">Sincronização com plataformas de e-commerce</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-vetor-green mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">Processamento de dados em lote durante a noite</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/automacoes-processos">
                  <Button className="bg-vetor-green hover:bg-vetor-darkgreen text-white border-none flex items-center gap-2">
                    Conheça nossas automações <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-black/40 border border-vetor-green/20 rounded-lg p-8">
              <h3 className="text-vetor-green text-2xl font-semibold mb-4">Benefícios da Integração</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-vetor-green mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">Redução de até 70% em tarefas manuais repetitivas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-vetor-green mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">Eliminação de erros humanos em processos críticos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-vetor-green mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">Integração com sistemas legados e APIs externas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-vetor-green mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">Processamento inteligente de documentos e dados</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/crie-seu-site">
                  <Button className="bg-vetor-green hover:bg-vetor-darkgreen text-white border-none flex items-center gap-2">
                    Crie seu site integrado <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ERP Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Transportation ERP */}
          <Card variant="dark" className="overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,176,80,0.2)] group">
            <div className="relative h-60 overflow-hidden bg-gradient-to-br from-black to-vetor-black">
              <div className="absolute inset-0 opacity-20 bg-pattern-grid"></div>
              <div className="absolute top-6 left-6 z-10 bg-black/50 p-4 rounded-full backdrop-blur-sm border border-vetor-green/30">
                <Truck className="w-12 h-12 text-vetor-green" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
            </div>
            
            <CardHeader className="pb-2">
              <CardTitle variant="dark" className="text-2xl md:text-3xl">
                ERP para Transportadoras
              </CardTitle>
            </CardHeader>
            
            <CardContent className="text-white/80">
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-vetor-green mr-2">•</span>
                  <span>Gestão completa de frotas e veículos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vetor-green mr-2">•</span>
                  <span>Otimização de rotas e redução de custos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vetor-green mr-2">•</span>
                  <span>Controle de manutenção e combustível</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vetor-green mr-2">•</span>
                  <span>Rastreamento em tempo real</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vetor-green mr-2">•</span>
                  <span>Gestão financeira integrada</span>
                </li>
              </ul>
            </CardContent>
            
            <CardFooter className="flex justify-center pt-2">
              <Link to="/planos-transportadoras" className="w-full">
                <Button className="bg-vetor-green hover:bg-vetor-darkgreen text-white border-none flex items-center gap-2 w-full justify-center">
                  Ver planos <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Real Estate ERP */}
          <Card variant="dark" className="overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,176,80,0.2)] group">
            <div className="relative h-60 overflow-hidden bg-gradient-to-br from-black to-vetor-black">
              <div className="absolute inset-0 opacity-20 bg-pattern-grid"></div>
              <div className="absolute top-6 left-6 z-10 bg-black/50 p-4 rounded-full backdrop-blur-sm border border-vetor-green/30">
                <Building2 className="w-12 h-12 text-vetor-green" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
            </div>
            
            <CardHeader className="pb-2">
              <CardTitle variant="dark" className="text-2xl md:text-3xl">
                ERP para Imobiliárias
              </CardTitle>
            </CardHeader>
            
            <CardContent className="text-white/80">
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-vetor-green mr-2">•</span>
                  <span>Gestão completa de imóveis e clientes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vetor-green mr-2">•</span>
                  <span>Automação de contratos e documentos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vetor-green mr-2">•</span>
                  <span>Portal do cliente integrado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vetor-green mr-2">•</span>
                  <span>Controle financeiro de locações e vendas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vetor-green mr-2">•</span>
                  <span>Marketing digital integrado</span>
                </li>
              </ul>
            </CardContent>
            
            <CardFooter className="flex justify-center pt-2">
              <Link to="/planos-imobiliarias" className="w-full">
                <Button className="bg-vetor-green hover:bg-vetor-darkgreen text-white border-none flex items-center gap-2 w-full justify-center">
                  Ver planos <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Vantagens dos Nossos Sistemas ERP
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/40 border border-vetor-green/20 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-vetor-green/10 mb-4 mx-auto">
                <span className="text-vetor-green text-xl font-bold">1</span>
              </div>
              <h3 className="text-vetor-green text-lg font-medium mb-2 text-center">Personalização Completa</h3>
              <p className="text-white/70 text-center">
                Sistemas adaptados especificamente para as necessidades do seu negócio.
              </p>
            </div>
            
            <div className="bg-black/40 border border-vetor-green/20 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-vetor-green/10 mb-4 mx-auto">
                <span className="text-vetor-green text-xl font-bold">2</span>
              </div>
              <h3 className="text-vetor-green text-lg font-medium mb-2 text-center">Integração Total</h3>
              <p className="text-white/70 text-center">
                Conecta-se com outros sistemas e aplicativos que você já utiliza.
              </p>
            </div>
            
            <div className="bg-black/40 border border-vetor-green/20 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-vetor-green/10 mb-4 mx-auto">
                <span className="text-vetor-green text-xl font-bold">3</span>
              </div>
              <h3 className="text-vetor-green text-lg font-medium mb-2 text-center">Suporte Especializado</h3>
              <p className="text-white/70 text-center">
                Equipe técnica dedicada para garantir o funcionamento perfeito do seu sistema.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErpSolutions;
