
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileUp, Calculator, ClipboardCheck, PiggyBank, FileSearch } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const TaxRecovery: React.FC = () => {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">Economia Real</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Recuperação Tributária
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10">
              Recupere o valor pago em excesso nos seus impostos e melhore o fluxo de caixa da sua empresa.
            </p>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-vetor-green/10 rounded-full"></div>
        <div className="absolute top-20 -right-20 w-60 h-60 border border-vetor-green/5 rounded-full"></div>
      </section>
      
      {/* Explanation Section */}
      <section className="py-20 bg-vetor-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">O Problema</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Por que as empresas pagam impostos em excesso?
              </h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  As empresas que lidam com grande fluxo de produtos enfrentam desafios significativos no gerenciamento correto de suas obrigações tributárias, principalmente devido a:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong className="text-white">Complexidade legislativa:</strong> O sistema tributário brasileiro é um dos mais complexos do mundo, com centenas de leis e regulamentos que mudam constantemente.
                  </li>
                  <li>
                    <strong className="text-white">Mudanças frequentes:</strong> As leis tributárias sofrem alterações constantes, tornando difícil para as empresas manterem-se atualizadas.
                  </li>
                  <li>
                    <strong className="text-white">Volume de operações:</strong> Empresas com alto volume de produtos processam milhares de notas fiscais mensalmente, aumentando a chance de erros nos cálculos.
                  </li>
                  <li>
                    <strong className="text-white">Falta de integração:</strong> Muitos sistemas de gestão não estão totalmente integrados com as atualizações fiscais.
                  </li>
                </ul>
                <p className="text-lg pt-4">
                  O resultado disso é que a maioria das empresas acaba pagando mais impostos do que realmente deveria, prejudicando seu fluxo de caixa e competitividade no mercado.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-black/40 border border-vetor-green/10 rounded-xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Impacto nos negócios
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <PiggyBank className="w-6 h-6 text-vetor-green" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Redução da liquidez</h4>
                      <p className="text-gray-300">
                        Dinheiro imobilizado em impostos pagos indevidamente que poderia estar sendo investido no crescimento do negócio.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calculator className="w-6 h-6 text-vetor-green" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Aumento de custos</h4>
                      <p className="text-gray-300">
                        O pagamento excessivo de tributos eleva o custo operacional, afetando margens de lucro e preços finais.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <ClipboardCheck className="w-6 h-6 text-vetor-green" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Perda de competitividade</h4>
                      <p className="text-gray-300">
                        Empresas que pagam tributos em excesso têm desvantagem competitiva em relação àquelas que gerenciam corretamente sua carga tributária.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background element */}
              <div className="absolute -z-10 w-full h-full -top-4 -right-4 border border-vetor-green/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Solution Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">Nossa Solução</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Diagnóstico Gratuito de Recuperação Tributária
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Nossa tecnologia analisa seus arquivos XML e calcula exatamente o quanto sua empresa pagou em excesso nos últimos anos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/40 border border-vetor-green/10 rounded-xl p-8 backdrop-blur-sm text-center hover:border-vetor-green/40 transition-all duration-300">
              <div className="w-16 h-16 bg-vetor-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileUp className="w-8 h-8 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">1. Envio dos XMLs</h3>
              <p className="text-gray-300">
                Envie os arquivos XML das suas notas fiscais dos últimos 5 anos (período não prescrito) para nossa análise.
              </p>
            </div>
            
            <div className="bg-black/40 border border-vetor-green/10 rounded-xl p-8 backdrop-blur-sm text-center hover:border-vetor-green/40 transition-all duration-300">
              <div className="w-16 h-16 bg-vetor-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileSearch className="w-8 h-8 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">2. Análise Detalhada</h3>
              <p className="text-gray-300">
                Nossa tecnologia analisa cada operação para identificar tributos pagos indevidamente, comparando o que foi pago com o que deveria ter sido pago.
              </p>
            </div>
            
            <div className="bg-black/40 border border-vetor-green/10 rounded-xl p-8 backdrop-blur-sm text-center hover:border-vetor-green/40 transition-all duration-300">
              <div className="w-16 h-16 bg-vetor-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calculator className="w-8 h-8 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">3. Relatório Detalhado</h3>
              <p className="text-gray-300">
                Receba um relatório completo com o valor que sua empresa pode recuperar e um plano de ação para obter essa restituição.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefit Section */}
      <section className="py-20 bg-gradient-to-b from-vetor-black to-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">Benefícios</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Vantagens da Recuperação Tributária
            </h2>
            <p className="text-white/70 text-lg">
              Ao recuperar tributos pagos em excesso, sua empresa ganha muito mais do que apenas dinheiro de volta.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black/40 border border-vetor-green/10 rounded-xl p-6 backdrop-blur-sm hover:border-vetor-green/40 transition-all duration-300">
              <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center mb-4">
                <PiggyBank className="w-6 h-6 text-vetor-green" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Aumento do Caixa</h3>
              <p className="text-gray-300">
                Injeção imediata de liquidez para sua empresa reinvestir no negócio.
              </p>
            </div>
            
            <div className="bg-black/40 border border-vetor-green/10 rounded-xl p-6 backdrop-blur-sm hover:border-vetor-green/40 transition-all duration-300">
              <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-vetor-green" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Redução de Custos</h3>
              <p className="text-gray-300">
                Otimização da carga tributária atual e futura, gerando economia contínua.
              </p>
            </div>
            
            <div className="bg-black/40 border border-vetor-green/10 rounded-xl p-6 backdrop-blur-sm hover:border-vetor-green/40 transition-all duration-300">
              <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center mb-4">
                <ClipboardCheck className="w-6 h-6 text-vetor-green" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Conformidade Fiscal</h3>
              <p className="text-gray-300">
                Identificação de processos a serem ajustados para evitar novos pagamentos em excesso.
              </p>
            </div>
            
            <div className="bg-black/40 border border-vetor-green/10 rounded-xl p-6 backdrop-blur-sm hover:border-vetor-green/40 transition-all duration-300">
              <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center mb-4">
                <FileSearch className="w-6 h-6 text-vetor-green" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Auditoria Preventiva</h3>
              <p className="text-gray-300">
                Identificação precoce de riscos fiscais, evitando futuras autuações.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section with Modal */}
      <section className="py-20 bg-vetor-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-black border border-vetor-green/10 rounded-xl p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-vetor-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
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
                <Button className="bg-vetor-green hover:bg-vetor-darkgreen text-white border-none py-6 px-8 text-lg flex items-center gap-3 mx-auto">
                  Iniciar Diagnóstico Gratuito
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-black border-vetor-green/20 text-white">
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
                      className="block w-full py-3 px-4 bg-green-500 hover:bg-green-600 text-white text-center rounded-md transition-colors"
                    >
                      Contato via WhatsApp
                    </a>
                    <a 
                      href="mailto:vetorcsa@gmail.com" 
                      className="block w-full py-3 px-4 bg-vetor-green hover:bg-vetor-darkgreen text-white text-center rounded-md transition-colors"
                    >
                      Contato via E-mail
                    </a>
                    <Link 
                      to="/contato" 
                      className="block w-full py-3 px-4 bg-vetor-black hover:bg-[#222] text-white text-center rounded-md transition-colors border border-vetor-green/30"
                    >
                      Página de Contato
                    </Link>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            
            <p className="text-gray-400 mt-4 text-sm">
              Processo 100% seguro, seus dados estarão protegidos de acordo com a LGPD.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaxRecovery;
