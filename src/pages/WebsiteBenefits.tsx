
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const WebsiteBenefits: React.FC = () => {
  // WhatsApp contact link with pre-filled message
  const whatsappLink = "https://wa.me/5599999999999?text=Olá,%20estou%20interessado%20em%20";
  const portfolioMessage = encodeURIComponent("criar um site de portfólio por R$1000.");
  const advancedMessage = encodeURIComponent("saber mais sobre sistemas avançados.");

  return (
    <div className="page-transition py-16 bg-gradient-to-b from-black to-vetor-black min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">Site Profissional</Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Transforme sua presença digital com um site profissional
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto text-lg md:text-xl">
            Destaque-se da concorrência e alcance novos clientes com um site moderno e responsivo.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Por que ter um site é essencial para o seu negócio?
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-black/50 border border-vetor-green/20 rounded-xl p-6 hover:border-vetor-green/40 transition-all">
              <CheckCircle2 className="w-10 h-10 text-vetor-green mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Credibilidade</h3>
              <p className="text-white/70">Um site profissional aumenta a confiança dos clientes em sua marca e serviços.</p>
            </div>
            
            <div className="bg-black/50 border border-vetor-green/20 rounded-xl p-6 hover:border-vetor-green/40 transition-all">
              <CheckCircle2 className="w-10 h-10 text-vetor-green mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Visibilidade</h3>
              <p className="text-white/70">Seja encontrado facilmente nos mecanismos de busca e alcance novos clientes.</p>
            </div>
            
            <div className="bg-black/50 border border-vetor-green/20 rounded-xl p-6 hover:border-vetor-green/40 transition-all">
              <CheckCircle2 className="w-10 h-10 text-vetor-green mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Disponibilidade</h3>
              <p className="text-white/70">Seu negócio fica disponível 24/7, mesmo quando você não está trabalhando.</p>
            </div>
            
            <div className="bg-black/50 border border-vetor-green/20 rounded-xl p-6 hover:border-vetor-green/40 transition-all">
              <CheckCircle2 className="w-10 h-10 text-vetor-green mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Marketing Digital</h3>
              <p className="text-white/70">Integre-se a estratégias de marketing digital e amplie seu alcance.</p>
            </div>
            
            <div className="bg-black/50 border border-vetor-green/20 rounded-xl p-6 hover:border-vetor-green/40 transition-all">
              <CheckCircle2 className="w-10 h-10 text-vetor-green mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Diferencial Competitivo</h3>
              <p className="text-white/70">Destaque-se da concorrência com uma presença online profissional.</p>
            </div>
            
            <div className="bg-black/50 border border-vetor-green/20 rounded-xl p-6 hover:border-vetor-green/40 transition-all">
              <CheckCircle2 className="w-10 h-10 text-vetor-green mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Comunicação Direta</h3>
              <p className="text-white/70">Estabeleça um canal direto de comunicação com seus clientes e parceiros.</p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Escolha a solução ideal para o seu negócio
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            {/* Portfolio Site Card */}
            <Card className="border-vetor-green/20 bg-black hover:border-vetor-green/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-vetor-green text-2xl">Site de Portfólio</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/80">Perfeito para profissionais liberais, pequenas empresas e empreendedores que precisam de uma presença online profissional.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-vetor-green mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Design responsivo (mobile-friendly)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-vetor-green mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Até 5 páginas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-vetor-green mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Otimização para SEO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-vetor-green mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Formulário de contato</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-vetor-green mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Integração com redes sociais</span>
                  </li>
                </ul>
                <p className="text-2xl font-bold text-vetor-green pt-4">R$ 1.000,00</p>
              </CardContent>
              <CardFooter>
                <a 
                  href={`${whatsappLink}${portfolioMessage}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full"
                >
                  <Button className="w-full bg-vetor-green hover:bg-vetor-darkgreen text-white">
                    Contratar Agora <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
            
            {/* Advanced Systems Card */}
            <Card className="border-vetor-green/20 bg-black hover:border-vetor-green/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-vetor-green text-2xl">Sistemas Avançados</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/80">Soluções personalizadas para empresas que necessitam de sistemas complexos e integrações avançadas.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-vetor-green mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">E-commerce completo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-vetor-green mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Sistemas de gestão empresarial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-vetor-green mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Integrações com APIs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-vetor-green mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Dashboards personalizados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-vetor-green mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Soluções sob medida</span>
                  </li>
                </ul>
                <p className="text-xl font-bold text-vetor-green pt-4">Consulte preços</p>
              </CardContent>
              <CardFooter>
                <a 
                  href={`${whatsappLink}${advancedMessage}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-vetor-green hover:bg-vetor-darkgreen text-white">
                    Entrar em Contato <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Pronto para dar o próximo passo?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Não perca mais tempo. Tenha o site que seu negócio merece e comece a colher os frutos de uma presença digital eficiente.
          </p>
          <a 
            href={whatsappLink + encodeURIComponent("obter mais informações sobre criação de sites e sistemas.")}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-vetor-green hover:bg-vetor-darkgreen text-white">
              Fale com um Especialista <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebsiteBenefits;
