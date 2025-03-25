
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FileUp, Calculator, ClipboardCheck, PiggyBank, FileSearch, ArrowRight, TrendingUp, CheckCircle, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const TaxRecovery: React.FC = () => {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-vetor-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-vetor-green/10 text-vetor-green hover:bg-vetor-green/20 mb-4 py-1.5 px-4 text-xs font-medium tracking-wider">EXPERTISE TRIBUTÁRIA</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">
              Recuperação Tributária
            </h1>
            <p className="text-lg md:text-xl text-gray-300/90 mb-10 leading-relaxed">
              Recupere o valor pago em excesso nos seus impostos e transforme perdas em oportunidades de crescimento para sua empresa.
            </p>
            <div className="inline-flex p-1 border border-vetor-green/30 rounded-full bg-black/40 backdrop-blur-sm">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-vetor-green hover:bg-vetor-darkgreen text-white border-none py-6 px-8 text-lg gap-3 rounded-full">
                    Iniciar Diagnóstico Gratuito <ArrowRight className="h-5 w-5" />
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
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] border border-vetor-green/5 rounded-full opacity-30"></div>
        <div className="absolute top-40 left-10 w-40 h-40 border border-vetor-green/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-60 right-20 w-60 h-60 border border-vetor-green/5 rounded-full"></div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 bg-black border-y border-vetor-green/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center p-4">
              <div className="text-3xl md:text-4xl font-bold text-vetor-green mb-2">+95%</div>
              <p className="text-sm text-gray-400">Das empresas pagam tributos em excesso</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl md:text-4xl font-bold text-vetor-green mb-2">5 anos</div>
              <p className="text-sm text-gray-400">Período não prescrito para recuperação</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl md:text-4xl font-bold text-vetor-green mb-2">+15%</div>
              <p className="text-sm text-gray-400">Economia média em impostos</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl md:text-4xl font-bold text-vetor-green mb-2">+5000</div>
              <p className="text-sm text-gray-400">Empresas beneficiadas</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Explanation Section */}
      <section className="py-20 bg-vetor-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-vetor-green/10 text-vetor-green hover:bg-vetor-green/20 mb-4 py-1.5 px-4 text-xs tracking-wider">O PROBLEMA</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Por que as empresas pagam impostos em excesso?
              </h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  As empresas que lidam com grande fluxo de produtos enfrentam desafios significativos no gerenciamento correto de suas obrigações tributárias, principalmente devido a:
                </p>
                <div className="space-y-6 pl-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-vetor-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-vetor-green" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Complexidade legislativa</h4>
                      <p className="text-gray-400">O sistema tributário brasileiro é um dos mais complexos do mundo, com centenas de leis e regulamentos que mudam constantemente.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-vetor-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-vetor-green" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Mudanças frequentes</h4>
                      <p className="text-gray-400">As leis tributárias sofrem alterações constantes, tornando difícil para as empresas manterem-se atualizadas.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-vetor-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-vetor-green" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Volume de operações</h4>
                      <p className="text-gray-400">Empresas com alto volume de produtos processam milhares de notas fiscais mensalmente, aumentando a chance de erros nos cálculos.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-vetor-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-vetor-green" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Falta de integração</h4>
                      <p className="text-gray-400">Muitos sistemas de gestão não estão totalmente integrados com as atualizações fiscais.</p>
                    </div>
                  </div>
                </div>
                <Alert className="bg-black/40 border border-vetor-green/20 mt-8">
                  <AlertDescription className="text-gray-300">
                    O resultado disso é que a maioria das empresas acaba pagando mais impostos do que realmente deveria, prejudicando seu fluxo de caixa e competitividade no mercado.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-gradient-to-br from-black to-vetor-black border border-vetor-green/10 rounded-xl overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                    <TrendingUp className="w-6 h-6 text-vetor-green mr-3" />
                    Impacto nos negócios
                  </h3>
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <PiggyBank className="w-6 h-6 text-vetor-green" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Redução da liquidez</h4>
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
                        <h4 className="text-lg font-semibold text-white mb-2">Aumento de custos</h4>
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
                        <h4 className="text-lg font-semibold text-white mb-2">Perda de competitividade</h4>
                        <p className="text-gray-300">
                          Empresas que pagam tributos em excesso têm desvantagem competitiva em relação àquelas que gerenciam corretamente sua carga tributária.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Background element */}
              <div className="absolute -z-10 w-full h-full -top-4 -right-4 border border-vetor-green/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Solution Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgMHYyaC0ydi0yaDJ6bTItNGgtMnYyaC0yaC0ydjJoMnYyaC0ydjJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYtMmgtMnYtMmgydi0yaC0ydi0yaC0yek00MiAzMHYyaC0ydi0yaDJ6bS00IDRoMnYyaC0ydi0yek0zNiAyNnYyaC0ydi0yaDJ6bS00IDBoMnYyaC0ydi0yek0zMCAzMHYyaC0ydi0yaDJ6bS00IDBoMnYyaC0ydi0yek0yNiAyNnYyaC0ydi0yaDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge className="bg-vetor-green/10 text-vetor-green hover:bg-vetor-green/20 mb-4 py-1.5 px-4 text-xs tracking-wider">NOSSA SOLUÇÃO</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Diagnóstico Gratuito de Recuperação Tributária
            </h2>
            <p className="text-white/70 mx-auto text-lg">
              Nossa tecnologia analisa seus arquivos XML e calcula exatamente o quanto sua empresa pagou em excesso nos últimos anos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black/40 border border-vetor-green/10 rounded-xl backdrop-blur-sm overflow-hidden hover:border-vetor-green/30 hover:transform hover:translate-y-[-5px] transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-vetor-green to-vetor-lightgreen"></div>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-vetor-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="rounded-full bg-black/30 w-14 h-14 flex items-center justify-center">
                    <FileUp className="w-7 h-7 text-vetor-green" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">1. Envio dos XMLs</h3>
                <p className="text-gray-300">
                  Envie os arquivos XML das suas notas fiscais dos últimos 5 anos (período não prescrito) para nossa análise.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-black/40 border border-vetor-green/10 rounded-xl backdrop-blur-sm overflow-hidden hover:border-vetor-green/30 hover:transform hover:translate-y-[-5px] transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-vetor-green to-vetor-lightgreen"></div>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-vetor-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="rounded-full bg-black/30 w-14 h-14 flex items-center justify-center">
                    <FileSearch className="w-7 h-7 text-vetor-green" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">2. Análise Detalhada</h3>
                <p className="text-gray-300">
                  Nossa tecnologia analisa cada operação para identificar tributos pagos indevidamente, comparando o que foi pago com o que deveria ter sido pago.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-black/40 border border-vetor-green/10 rounded-xl backdrop-blur-sm overflow-hidden hover:border-vetor-green/30 hover:transform hover:translate-y-[-5px] transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-vetor-green to-vetor-lightgreen"></div>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-vetor-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="rounded-full bg-black/30 w-14 h-14 flex items-center justify-center">
                    <Calculator className="w-7 h-7 text-vetor-green" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">3. Relatório Detalhado</h3>
                <p className="text-gray-300">
                  Receba um relatório completo com o valor que sua empresa pode recuperar e um plano de ação para obter essa restituição.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Benefit Section */}
      <section className="py-20 bg-gradient-to-b from-vetor-black to-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="bg-vetor-green/10 text-vetor-green hover:bg-vetor-green/20 mb-4 py-1.5 px-4 text-xs tracking-wider">BENEFÍCIOS</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Vantagens da Recuperação Tributária
            </h2>
            <p className="text-white/70 text-lg">
              Ao recuperar tributos pagos em excesso, sua empresa ganha muito mais do que apenas dinheiro de volta.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-black/40 border border-vetor-green/10 rounded-xl overflow-hidden hover:border-vetor-green/30 hover:bg-black/60 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center mb-4">
                  <PiggyBank className="w-6 h-6 text-vetor-green" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Aumento do Caixa</h3>
                <p className="text-gray-300">
                  Injeção imediata de liquidez para sua empresa reinvestir no negócio.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-black/40 border border-vetor-green/10 rounded-xl overflow-hidden hover:border-vetor-green/30 hover:bg-black/60 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center mb-4">
                  <Calculator className="w-6 h-6 text-vetor-green" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Redução de Custos</h3>
                <p className="text-gray-300">
                  Otimização da carga tributária atual e futura, gerando economia contínua.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-black/40 border border-vetor-green/10 rounded-xl overflow-hidden hover:border-vetor-green/30 hover:bg-black/60 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center mb-4">
                  <ClipboardCheck className="w-6 h-6 text-vetor-green" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Conformidade Fiscal</h3>
                <p className="text-gray-300">
                  Identificação de processos a serem ajustados para evitar novos pagamentos em excesso.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-black/40 border border-vetor-green/10 rounded-xl overflow-hidden hover:border-vetor-green/30 hover:bg-black/60 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-vetor-green" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Auditoria Preventiva</h3>
                <p className="text-gray-300">
                  Identificação precoce de riscos fiscais, evitando futuras autuações.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-vetor-green/10 text-vetor-green hover:bg-vetor-green/20 mb-4 py-1.5 px-4 text-xs tracking-wider">PERGUNTAS FREQUENTES</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Dúvidas sobre Recuperação Tributária
              </h2>
            </div>
            
            <Accordion type="single" collapsible className="border-b border-vetor-green/10">
              <AccordionItem value="item-1" className="border-t border-vetor-green/10 py-2">
                <AccordionTrigger className="text-white hover:text-vetor-green text-lg font-medium">
                  Quanto minha empresa pode recuperar?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  O valor depende do volume de operações da sua empresa e dos tributos pagos nos últimos 5 anos. Normalmente, as empresas recuperam entre 5% e 20% do total de tributos pagos no período.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-t border-vetor-green/10 py-2">
                <AccordionTrigger className="text-white hover:text-vetor-green text-lg font-medium">
                  Quais tributos podem ser recuperados?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  É possível recuperar créditos de ICMS, PIS, COFINS, IPI e outros tributos federais e estaduais, dependendo do setor de atuação da empresa.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-t border-vetor-green/10 py-2">
                <AccordionTrigger className="text-white hover:text-vetor-green text-lg font-medium">
                  Quanto tempo leva o processo de recuperação?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  O diagnóstico inicial leva cerca de 30 dias. O processo completo pode levar de 3 a 12 meses, dependendo do volume de documentos e da complexidade da recuperação.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-t border-vetor-green/10 py-2">
                <AccordionTrigger className="text-white hover:text-vetor-green text-lg font-medium">
                  Este processo é legal?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Sim, totalmente legal. A recuperação tributária é baseada na legislação vigente e em decisões judiciais favoráveis. Não se trata de sonegação fiscal, mas sim de cobrar do governo aquilo que foi pago indevidamente.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* CTA Section with Modal */}
      <section className="py-20 bg-vetor-black relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-black to-black/80 border border-vetor-green/10 rounded-xl p-8 md:p-12 text-center">
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
                <Button className="bg-gradient-to-r from-vetor-green to-vetor-darkgreen hover:from-vetor-darkgreen hover:to-vetor-darkgreen text-white border-none py-6 px-8 text-lg flex items-center gap-3 mx-auto">
                  Iniciar Diagnóstico Gratuito <ArrowRight className="ml-2" />
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
        
        {/* Background decorative elements */}
        <div className="absolute -bottom-40 -right-40 w-80 h-80 border border-vetor-green/5 rounded-full"></div>
        <div className="absolute top-20 -left-20 w-60 h-60 border border-vetor-green/5 rounded-full"></div>
      </section>
    </div>
  );
};

export default TaxRecovery;
