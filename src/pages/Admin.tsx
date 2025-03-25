
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '@/contexts/AdminContext';
import { Lock, User, LogOut, Settings, Briefcase, Users, FileText, Image } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const { 
    isAdmin, 
    login, 
    logout, 
    aboutData, 
    footerData, 
    services, 
    partners, 
    caseStudies, 
    updateAboutData, 
    updateFooterData, 
    updateService, 
    addService, 
    removeService, 
    updatePartner, 
    addPartner, 
    removePartner, 
    updateCaseStudy, 
    addCaseStudy, 
    removeCaseStudy 
  } = useAdmin();
  
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'footer' | 'about' | 'services' | 'partners' | 'cases'>('footer');
  
  const [editingService, setEditingService] = useState<string | null>(null);
  const [newService, setNewService] = useState({
    title: '',
    description: '',
    icon: 'code',
    details: ''
  });
  
  const [editingPartner, setEditingPartner] = useState<string | null>(null);
  const [newPartner, setNewPartner] = useState({
    name: '',
    logo: '/placeholder.svg',
    description: '',
    website: ''
  });
  
  const [editingCase, setEditingCase] = useState<string | null>(null);
  const [newCase, setNewCase] = useState({
    title: '',
    client: '',
    description: '',
    challenge: '',
    solution: '',
    result: '',
    images: ['/placeholder.svg'],
    partnerId: ''
  });
  
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const success = login(password);
    
    if (success) {
      toast({
        title: "Login bem-sucedido",
        description: "Bem-vindo ao painel de administração.",
        variant: "default",
      });
    } else {
      toast({
        title: "Falha no login",
        description: "Senha incorreta. Tente novamente.",
        variant: "destructive",
      });
    }
  };
  
  const handleLogout = () => {
    logout();
    navigate('/');
    toast({
      title: "Logout realizado",
      description: "Você saiu do painel de administração.",
      variant: "default",
    });
  };
  
  const handleSaveFooter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Coletar dados do formulário
    const form = e.currentTarget;
    const address = (form.elements.namedItem('address') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    
    // Atualizar os dados
    updateFooterData({
      address,
      email,
      phone
    });
    
    toast({
      title: "Alterações salvas",
      description: "As informações de contato foram atualizadas.",
      variant: "default",
    });
  };
  
  const handleServiceSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Coletar dados do formulário
    const form = e.currentTarget;
    const title = (form.elements.namedItem('title') as HTMLInputElement).value;
    const description = (form.elements.namedItem('description') as HTMLTextAreaElement).value;
    const icon = (form.elements.namedItem('icon') as HTMLSelectElement).value;
    const details = (form.elements.namedItem('details') as HTMLTextAreaElement).value;
    
    if (editingService) {
      // Atualizar serviço existente
      updateService(editingService, {
        title,
        description,
        icon,
        details
      });
      
      toast({
        title: "Serviço atualizado",
        description: "As informações do serviço foram atualizadas.",
        variant: "default",
      });
    } else {
      // Adicionar novo serviço
      addService({
        id: Date.now().toString(),
        title,
        description,
        icon,
        details
      });
      
      toast({
        title: "Serviço adicionado",
        description: "O novo serviço foi adicionado com sucesso.",
        variant: "default",
      });
    }
    
    // Limpar formulário
    setNewService({
      title: '',
      description: '',
      icon: 'code',
      details: ''
    });
    setEditingService(null);
  };
  
  const handleEditService = (id: string) => {
    const service = services.find(s => s.id === id);
    if (service) {
      setNewService({
        title: service.title,
        description: service.description,
        icon: service.icon,
        details: service.details
      });
      setEditingService(id);
    }
  };
  
  const handlePartnerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Coletar dados do formulário
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const logo = (form.elements.namedItem('logo') as HTMLInputElement).value;
    const description = (form.elements.namedItem('description') as HTMLTextAreaElement).value;
    const website = (form.elements.namedItem('website') as HTMLInputElement).value;
    
    if (editingPartner) {
      // Atualizar parceiro existente
      updatePartner(editingPartner, {
        name,
        logo,
        description,
        website
      });
      
      toast({
        title: "Parceiro atualizado",
        description: "As informações do parceiro foram atualizadas.",
        variant: "default",
      });
    } else {
      // Adicionar novo parceiro
      addPartner({
        id: Date.now().toString(),
        name,
        logo,
        description,
        website
      });
      
      toast({
        title: "Parceiro adicionado",
        description: "O novo parceiro foi adicionado com sucesso.",
        variant: "default",
      });
    }
    
    // Limpar formulário
    setNewPartner({
      name: '',
      logo: '/placeholder.svg',
      description: '',
      website: ''
    });
    setEditingPartner(null);
  };
  
  const handleEditPartner = (id: string) => {
    const partner = partners.find(p => p.id === id);
    if (partner) {
      setNewPartner({
        name: partner.name,
        logo: partner.logo,
        description: partner.description,
        website: partner.website || ''
      });
      setEditingPartner(id);
    }
  };
  
  const handleCaseSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Coletar dados do formulário
    const form = e.currentTarget;
    const title = (form.elements.namedItem('title') as HTMLInputElement).value;
    const client = (form.elements.namedItem('client') as HTMLInputElement).value;
    const description = (form.elements.namedItem('description') as HTMLTextAreaElement).value;
    const challenge = (form.elements.namedItem('challenge') as HTMLTextAreaElement).value;
    const solution = (form.elements.namedItem('solution') as HTMLTextAreaElement).value;
    const result = (form.elements.namedItem('result') as HTMLTextAreaElement).value;
    const partnerId = (form.elements.namedItem('partnerId') as HTMLSelectElement).value;
    
    // Para simplificar, estamos mantendo a imagem como placeholder
    // Em um sistema real, seria implementado um upload de imagem
    const images = ['/placeholder.svg'];
    
    if (editingCase) {
      // Atualizar case existente
      updateCaseStudy(editingCase, {
        title,
        client,
        description,
        challenge,
        solution,
        result,
        images,
        partnerId: partnerId || undefined
      });
      
      toast({
        title: "Case atualizado",
        description: "As informações do case foram atualizadas.",
        variant: "default",
      });
    } else {
      // Adicionar novo case
      addCaseStudy({
        id: Date.now().toString(),
        title,
        client,
        description,
        challenge,
        solution,
        result,
        images,
        partnerId: partnerId || undefined
      });
      
      toast({
        title: "Case adicionado",
        description: "O novo case foi adicionado com sucesso.",
        variant: "default",
      });
    }
    
    // Limpar formulário
    setNewCase({
      title: '',
      client: '',
      description: '',
      challenge: '',
      solution: '',
      result: '',
      images: ['/placeholder.svg'],
      partnerId: ''
    });
    setEditingCase(null);
  };
  
  const handleEditCase = (id: string) => {
    const caseStudy = caseStudies.find(c => c.id === id);
    if (caseStudy) {
      setNewCase({
        title: caseStudy.title,
        client: caseStudy.client,
        description: caseStudy.description,
        challenge: caseStudy.challenge,
        solution: caseStudy.solution,
        result: caseStudy.result,
        images: caseStudy.images,
        partnerId: caseStudy.partnerId || ''
      });
      setEditingCase(id);
    }
  };
  
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-20">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-vetor-green bg-opacity-10 rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 text-vetor-green" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-vetor-black text-center mb-6">
            Acesso Administrativo
          </h1>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-vetor-darkgray mb-1">
                Senha
              </label>
              <input 
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green"
                placeholder="Digite a senha de administrador"
              />
              <p className="text-xs text-gray-400 mt-1">
                Dica: A senha é "admin123"
              </p>
            </div>
            
            <button 
              type="submit"
              className="w-full py-2 px-4 bg-vetor-green text-white rounded-md font-medium hover:bg-vetor-darkgreen transition-colors"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  return (
    <div className="page-transition pt-16">
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 flex-shrink-0 shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-vetor-green rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-vetor-black">Administrador</h3>
                <p className="text-sm text-gray-500">Painel de controle</p>
              </div>
            </div>
          </div>
          
          <nav className="p-4 space-y-1">
            <button 
              onClick={() => setActiveTab('footer')}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                activeTab === 'footer' 
                  ? 'bg-vetor-green bg-opacity-10 text-vetor-green' 
                  : 'text-vetor-darkgray hover:bg-gray-100'
              }`}
            >
              <Settings className="w-5 h-5" />
              <span>Rodapé/Contato</span>
            </button>
            
            <button 
              onClick={() => setActiveTab('about')}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                activeTab === 'about' 
                  ? 'bg-vetor-green bg-opacity-10 text-vetor-green' 
                  : 'text-vetor-darkgray hover:bg-gray-100'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>Sobre Nós</span>
            </button>
            
            <button 
              onClick={() => setActiveTab('services')}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                activeTab === 'services' 
                  ? 'bg-vetor-green bg-opacity-10 text-vetor-green' 
                  : 'text-vetor-darkgray hover:bg-gray-100'
              }`}
            >
              <Briefcase className="w-5 h-5" />
              <span>Serviços</span>
            </button>
            
            <button 
              onClick={() => setActiveTab('partners')}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                activeTab === 'partners' 
                  ? 'bg-vetor-green bg-opacity-10 text-vetor-green' 
                  : 'text-vetor-darkgray hover:bg-gray-100'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>Parceiros</span>
            </button>
            
            <button 
              onClick={() => setActiveTab('cases')}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                activeTab === 'cases' 
                  ? 'bg-vetor-green bg-opacity-10 text-vetor-green' 
                  : 'text-vetor-darkgray hover:bg-gray-100'
              }`}
            >
              <FileText className="w-5 h-5" />
              <span>Cases de Sucesso</span>
            </button>
            
            <button 
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-3 py-2 rounded-md text-red-500 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Sair</span>
            </button>
          </nav>
        </div>
        
        {/* Main Content */}
        <div className="flex-grow p-8">
          {/* Footer/Contact Settings */}
          {activeTab === 'footer' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-vetor-black mb-6">
                Configurações de Rodapé e Contato
              </h2>
              
              <form onSubmit={handleSaveFooter} className="space-y-6">
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-vetor-darkgray mb-1">
                    Endereço
                  </label>
                  <input 
                    type="text"
                    id="address"
                    name="address"
                    defaultValue={footerData.address}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-vetor-darkgray mb-1">
                    Email
                  </label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    defaultValue={footerData.email}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-vetor-darkgray mb-1">
                    Telefone
                  </label>
                  <input 
                    type="text"
                    id="phone"
                    name="phone"
                    defaultValue={footerData.phone}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green"
                  />
                </div>
                
                <div className="pt-4">
                  <button 
                    type="submit"
                    className="px-6 py-2 bg-vetor-green text-white rounded-md font-medium hover:bg-vetor-darkgreen transition-colors"
                  >
                    Salvar Alterações
                  </button>
                </div>
              </form>
            </div>
          )}
          
          {/* About Settings */}
          {activeTab === 'about' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-vetor-black mb-6">
                Configurações da Página Sobre
              </h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="about-title" className="block text-sm font-medium text-vetor-darkgray mb-1">
                    Título
                  </label>
                  <input 
                    type="text"
                    id="about-title"
                    defaultValue={aboutData.title}
                    onChange={(e) => updateAboutData({ title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green"
                  />
                </div>
                
                <div>
                  <label htmlFor="about-description" className="block text-sm font-medium text-vetor-darkgray mb-1">
                    Descrição
                  </label>
                  <textarea 
                    id="about-description"
                    rows={4}
                    defaultValue={aboutData.description}
                    onChange={(e) => updateAboutData({ description: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green resize-none"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="about-mission" className="block text-sm font-medium text-vetor-darkgray mb-1">
                    Missão
                  </label>
                  <textarea 
                    id="about-mission"
                    rows={3}
                    defaultValue={aboutData.mission}
                    onChange={(e) => updateAboutData({ mission: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green resize-none"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="about-vision" className="block text-sm font-medium text-vetor-darkgray mb-1">
                    Visão
                  </label>
                  <textarea 
                    id="about-vision"
                    rows={3}
                    defaultValue={aboutData.vision}
                    onChange={(e) => updateAboutData({ vision: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green resize-none"
                  ></textarea>
                </div>
              </form>
            </div>
          )}
          
          {/* Services Settings */}
          {activeTab === 'services' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-vetor-black mb-6">
                Configurações de Serviços
              </h2>
              
              <div className="mb-6 overflow-x-auto">
                <h3 className="text-lg font-medium text-vetor-black mb-3">
                  Serviços Atuais
                </h3>
                
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Título
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Descrição
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {services.map((service) => (
                      <tr key={service.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">{service.title}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500 truncate max-w-xs">{service.description}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button 
                            onClick={() => handleEditService(service.id)}
                            className="text-vetor-green hover:text-vetor-darkgreen mr-4"
                          >
                            Editar
                          </button>
                          <button 
                            onClick={() => {
                              if (window.confirm('Tem certeza que deseja remover este serviço?')) {
                                removeService(service.id);
                                toast({
                                  title: "Serviço removido",
                                  description: "O serviço foi removido com sucesso.",
                                  variant: "default",
                                });
                              }
                            }}
                            className="text-red-500 hover:text-red-700"
                          >
                            Remover
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-md">
                <h3 className="text-lg font-medium text-vetor-black mb-4">
                  {editingService ? 'Editar Serviço' : 'Adicionar Novo Serviço'}
                </h3>
                
                <form onSubmit={handleServiceSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-vetor-darkgray mb-1">
                      Título
                    </label>
                    <input 
                      type="text"
                      id="title"
                      name="title"
                      value={newService.title}
                      onChange={(e) => setNewService({...newService, title: e.target.value})}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-vetor-darkgray mb-1">
                      Descrição Curta
                    </label>
                    <textarea 
                      id="description"
                      name="description"
                      value={newService.description}
                      onChange={(e) => setNewService({...newService, description: e.target.value})}
                      required
                      rows={2}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green resize-none"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="icon" className="block text-sm font-medium text-vetor-darkgray mb-1">
                      Ícone
                    </label>
                    <select 
                      id="icon"
                      name="icon"
                      value={newService.icon}
                      onChange={(e) => setNewService({...newService, icon: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green"
                    >
                      <option value="building">Prédio (Imobiliário)</option>
                      <option value="file-text">Documento (Fiscal)</option>
                      <option value="truck">Caminhão (Logística)</option>
                      <option value="code">Código (Tecnologia)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="details" className="block text-sm font-medium text-vetor-darkgray mb-1">
                      Detalhes
                    </label>
                    <textarea 
                      id="details"
                      name="details"
                      value={newService.details}
                      onChange={(e) => setNewService({...newService, details: e.target.value})}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green resize-none"
                    ></textarea>
                  </div>
                  
                  <div className="flex space-x-3 pt-2">
                    <button 
                      type="submit"
                      className="px-4 py-2 bg-vetor-green text-white rounded-md font-medium hover:bg-vetor-darkgreen transition-colors"
                    >
                      {editingService ? 'Salvar Alterações' : 'Adicionar Serviço'}
                    </button>
                    
                    {editingService && (
                      <button 
                        type="button"
                        onClick={() => {
                          setNewService({
                            title: '',
                            description: '',
                            icon: 'code',
                            details: ''
                          });
                          setEditingService(null);
                        }}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors"
                      >
                        Cancelar
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          )}
          
          {/* Partners Settings */}
          {activeTab === 'partners' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-vetor-black mb-6">
                Configurações de Parceiros
              </h2>
              
              <div className="mb-6 overflow-x-auto">
                <h3 className="text-lg font-medium text-vetor-black mb-3">
                  Parceiros Atuais
                </h3>
                
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Nome
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Website
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {partners.map((partner) => (
                      <tr key={partner.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-full overflow-hidden">
                              <img src={partner.logo} alt={partner.name} className="h-10 w-10 object-contain" />
                            </div>
                            <div className="ml-4">
                              <div className="font-medium text-gray-900">{partner.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {partner.website ? (
                            <a 
                              href={partner.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-vetor-green hover:text-vetor-darkgreen"
                            >
                              {partner.website}
                            </a>
                          ) : (
                            <span className="text-gray-400">Não informado</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button 
                            onClick={() => handleEditPartner(partner.id)}
                            className="text-vetor-green hover:text-vetor-darkgreen mr-4"
                          >
                            Editar
                          </button>
                          <button 
                            onClick={() => {
                              if (window.confirm('Tem certeza que deseja remover este parceiro?')) {
                                removePartner(partner.id);
                                toast({
                                  title: "Parceiro removido",
                                  description: "O parceiro foi removido com sucesso.",
                                  variant: "default",
                                });
                              }
                            }}
                            className="text-red-500 hover:text-red-700"
                          >
                            Remover
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-md">
                <h3 className="text-lg font-medium text-vetor-black mb-4">
                  {editingPartner ? 'Editar Parceiro' : 'Adicionar Novo Parceiro'}
                </h3>
                
                <form onSubmit={handlePartnerSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-vetor-darkgray mb-1">
                      Nome
                    </label>
                    <input 
                      type="text"
                      id="name"
                      name="name"
                      value={newPartner.name}
                      onChange={(e) => setNewPartner({...newPartner, name: e.target.value})}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="logo" className="block text-sm font-medium text-vetor-darkgray mb-1">
                      Logo (URL)
                    </label>
                    <input 
                      type="text"
                      id="logo"
                      name="logo"
                      value={newPartner.logo}
                      onChange={(e) => setNewPartner({...newPartner, logo: e.target.value})}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green"
                    />
                    <p className="text-xs text-gray-400 mt-1">
                      Para demonstração, use "/placeholder.svg" ou outra URL de imagem
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-vetor-darkgray mb-1">
                      Descrição
                    </label>
                    <textarea 
                      id="description"
                      name="description"
                      value={newPartner.description}
                      onChange={(e) => setNewPartner({...newPartner, description: e.target.value})}
                      required
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green resize-none"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-vetor-darkgray mb-1">
                      Website
                    </label>
                    <input 
                      type="url"
                      id="website"
                      name="website"
                      value={newPartner.website}
                      onChange={(e) => setNewPartner({...newPartner, website: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green"
                      placeholder="https://example.com"
                    />
                  </div>
                  
                  <div className="flex space-x-3 pt-2">
                    <button 
                      type="submit"
                      className="px-4 py-2 bg-vetor-green text-white rounded-md font-medium hover:bg-vetor-darkgreen transition-colors"
                    >
                      {editingPartner ? 'Salvar Alterações' : 'Adicionar Parceiro'}
                    </button>
                    
                    {editingPartner && (
                      <button 
                        type="button"
                        onClick={() => {
                          setNewPartner({
                            name: '',
                            logo: '/placeholder.svg',
                            description: '',
                            website: ''
                          });
                          setEditingPartner(null);
                        }}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors"
                      >
                        Cancelar
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          )}
          
          {/* Cases Settings */}
          {activeTab === 'cases' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-vetor-black mb-6">
                Configurações de Cases de Sucesso
              </h2>
              
              <div className="mb-6 overflow-x-auto">
                <h3 className="text-lg font-medium text-vetor-black mb-3">
                  Cases Atuais
                </h3>
                
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Título
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Cliente
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Parceiro
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {caseStudies.map((caseStudy) => {
                      const partner = caseStudy.partnerId ? partners.find(p => p.id === caseStudy.partnerId) : null;
                      
                      return (
                        <tr key={caseStudy.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">{caseStudy.title}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-gray-700">{caseStudy.client}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {partner ? (
                              <div className="text-gray-700">{partner.name}</div>
                            ) : (
                              <span className="text-gray-400">Nenhum</span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button 
                              onClick={() => handleEditCase(caseStudy.id)}
                              className="text-vetor-green hover:text-vetor-darkgreen mr-4"
                            >
                              Editar
                            </button>
                            <button 
                              onClick={() => {
                                if (window.confirm('Tem certeza que deseja remover este case?')) {
                                  removeCaseStudy(caseStudy.id);
                                  toast({
                                    title: "Case removido",
                                    description: "O case foi removido com sucesso.",
                                    variant: "default",
                                  });
                                }
                              }}
                              className="text-red-500 hover:text-red-700"
                            >
                              Remover
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-md">
                <h3 className="text-lg font-medium text-vetor-black mb-4">
                  {editingCase ? 'Editar Case' : 'Adicionar Novo Case'}
                </h3>
                
                <form onSubmit={handleCaseSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-vetor-darkgray mb-1">
                        Título
                      </label>
                      <input 
                        type="text"
                        id="title"
                        name="title"
                        value={newCase.title}
                        onChange={(e) => setNewCase({...newCase, title: e.target.value})}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="client" className="block text-sm font-medium text-vetor-darkgray mb-1">
                        Cliente
                      </label>
                      <input 
                        type="text"
                        id="client"
                        name="client"
                        value={newCase.client}
                        onChange={(e) => setNewCase({...newCase, client: e.target.value})}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-vetor-darkgray mb-1">
                      Descrição
                    </label>
                    <textarea 
                      id="description"
                      name="description"
                      value={newCase.description}
                      onChange={(e) => setNewCase({...newCase, description: e.target.value})}
                      required
                      rows={2}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green resize-none"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="challenge" className="block text-sm font-medium text-vetor-darkgray mb-1">
                      Desafio
                    </label>
                    <textarea 
                      id="challenge"
                      name="challenge"
                      value={newCase.challenge}
                      onChange={(e) => setNewCase({...newCase, challenge: e.target.value})}
                      required
                      rows={2}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green resize-none"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="solution" className="block text-sm font-medium text-vetor-darkgray mb-1">
                      Solução
                    </label>
                    <textarea 
                      id="solution"
                      name="solution"
                      value={newCase.solution}
                      onChange={(e) => setNewCase({...newCase, solution: e.target.value})}
                      required
                      rows={2}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green resize-none"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="result" className="block text-sm font-medium text-vetor-darkgray mb-1">
                      Resultado
                    </label>
                    <textarea 
                      id="result"
                      name="result"
                      value={newCase.result}
                      onChange={(e) => setNewCase({...newCase, result: e.target.value})}
                      required
                      rows={2}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green resize-none"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="partnerId" className="block text-sm font-medium text-vetor-darkgray mb-1">
                      Parceiro (opcional)
                    </label>
                    <select 
                      id="partnerId"
                      name="partnerId"
                      value={newCase.partnerId}
                      onChange={(e) => setNewCase({...newCase, partnerId: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green"
                    >
                      <option value="">Nenhum</option>
                      {partners.map(partner => (
                        <option key={partner.id} value={partner.id}>
                          {partner.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-vetor-darkgray mb-1">
                      Imagens
                    </label>
                    <div className="flex items-center space-x-4 bg-white p-4 border border-gray-300 rounded-md">
                      <div className="h-20 w-20 bg-gray-100 flex items-center justify-center rounded-md overflow-hidden">
                        <Image className="w-8 h-8 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">
                          No sistema atual, estamos usando imagens de placeholder.
                        </p>
                        <p className="text-sm text-gray-600">
                          Em um sistema completo, seria implementado um sistema de upload de imagens.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 pt-2">
                    <button 
                      type="submit"
                      className="px-4 py-2 bg-vetor-green text-white rounded-md font-medium hover:bg-vetor-darkgreen transition-colors"
                    >
                      {editingCase ? 'Salvar Alterações' : 'Adicionar Case'}
                    </button>
                    
                    {editingCase && (
                      <button 
                        type="button"
                        onClick={() => {
                          setNewCase({
                            title: '',
                            client: '',
                            description: '',
                            challenge: '',
                            solution: '',
                            result: '',
                            images: ['/placeholder.svg'],
                            partnerId: ''
                          });
                          setEditingCase(null);
                        }}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors"
                      >
                        Cancelar
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
