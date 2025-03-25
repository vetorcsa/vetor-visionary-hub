
import React, { createContext, useState, useContext, useEffect } from 'react';

// Tipos para os dados editáveis
interface FooterData {
  address: string;
  email: string;
  phone: string;
  socialLinks: { platform: string; url: string }[];
}

interface AboutData {
  title: string;
  description: string;
  mission: string;
  vision: string;
  values: string[];
  team: {
    id: string;
    name: string;
    position: string;
    photo: string;
    bio: string;
  }[];
}

interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string;
}

interface PartnerData {
  id: string;
  name: string;
  logo: string;
  description: string;
  website?: string;
}

interface CaseStudyData {
  id: string;
  title: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  images: string[];
  partnerId?: string;
}

interface AdminContextType {
  // Dados editáveis
  footerData: FooterData;
  aboutData: AboutData;
  services: ServiceData[];
  partners: PartnerData[];
  caseStudies: CaseStudyData[];
  
  // Funções para atualizar os dados
  updateFooterData: (data: Partial<FooterData>) => void;
  updateAboutData: (data: Partial<AboutData>) => void;
  updateService: (id: string, data: Partial<ServiceData>) => void;
  addService: (service: ServiceData) => void;
  removeService: (id: string) => void;
  updatePartner: (id: string, data: Partial<PartnerData>) => void;
  addPartner: (partner: PartnerData) => void;
  removePartner: (id: string) => void;
  updateCaseStudy: (id: string, data: Partial<CaseStudyData>) => void;
  addCaseStudy: (caseStudy: CaseStudyData) => void;
  removeCaseStudy: (id: string) => void;
  
  // Estado de autenticação admin
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

// Cria o contexto
const AdminContext = createContext<AdminContextType | undefined>(undefined);

// Dados iniciais
const initialFooterData: FooterData = {
  address: 'Torre Tóquio, Metropolitan Mall - Av. Dep. Jamel Cecílio, 2690 - Jardim Goiás, Goiânia - GO, 74810-100',
  email: 'vetorcsa@gmail.com',
  phone: '(11) 3333-4444',
  socialLinks: [
    { platform: 'instagram', url: 'https://instagram.com/vetorcsa' },
  ],
};

const initialAboutData: AboutData = {
  title: 'Sobre a VETOR CSA',
  description: 'Somos uma empresa especializada em soluções tecnológicas para diversos segmentos, trazendo inovação e eficiência para nossos clientes.',
  mission: 'Nossa missão é transformar negócios através da tecnologia, proporcionando soluções inovadoras que geram resultados concretos.',
  vision: 'Ser referência nacional em soluções tecnológicas, reconhecida pela excelência e inovação em nossos serviços.',
  values: ['Inovação', 'Excelência', 'Comprometimento', 'Ética', 'Foco no cliente'],
  team: [
    {
      id: '1',
      name: 'João Silva',
      position: 'CEO & Fundador',
      photo: '/placeholder.svg',
      bio: 'Com mais de 15 anos de experiência em tecnologia, João lidera a VETOR CSA com visão estratégica e inovadora.'
    },
    {
      id: '2',
      name: 'Maria Oliveira',
      position: 'CTO',
      photo: '/placeholder.svg',
      bio: 'Especialista em arquitetura de sistemas, Maria é responsável por toda a infraestrutura tecnológica da empresa.'
    }
  ]
};

const initialServices: ServiceData[] = [
  {
    id: '1',
    title: 'Tecnologia Imobiliária',
    description: 'Soluções tecnológicas para o setor imobiliário, automatizando processos e otimizando resultados.',
    icon: 'building',
    details: 'Nossa plataforma integra todos os processos do setor imobiliário, desde a captação de imóveis até a gestão de contratos, proporcionando mais agilidade e segurança para imobiliárias e corretores.'
  },
  {
    id: '2',
    title: 'Tecnologia Fiscal',
    description: 'Sistemas inteligentes para gestão fiscal e tributária, garantindo conformidade e redução de custos.',
    icon: 'file-text',
    details: 'Automatize sua gestão fiscal com nossas soluções que mantêm sua empresa em conformidade com a legislação, evitando multas e otimizando a carga tributária.'
  },
  {
    id: '3',
    title: 'Tecnologia em Logística',
    description: 'Otimização de rotas, gestão de frotas e controle de entregas para maximizar a eficiência logística.',
    icon: 'truck',
    details: 'Nossa plataforma de logística permite o rastreamento em tempo real, otimização inteligente de rotas e gestão completa da cadeia de suprimentos, reduzindo custos e aumentando a satisfação do cliente.'
  },
  {
    id: '4',
    title: 'Soluções Personalizadas',
    description: 'Desenvolvimento de sistemas sob medida para necessidades específicas do seu negócio.',
    icon: 'code',
    details: 'Criamos soluções tecnológicas personalizadas que atendem às necessidades específicas do seu negócio, integrando sistemas existentes e desenvolvendo novas funcionalidades.'
  }
];

const initialPartners: PartnerData[] = [
  {
    id: '1',
    name: 'TechCorp',
    logo: '/placeholder.svg',
    description: 'Empresa líder em soluções de infraestrutura de TI.',
    website: 'https://techcorp.com'
  },
  {
    id: '2',
    name: 'InnovateSoft',
    logo: '/placeholder.svg',
    description: 'Especialista em desenvolvimento de software inovador.',
    website: 'https://innovatesoft.com'
  },
  {
    id: '3',
    name: 'LogisTech',
    logo: '/placeholder.svg',
    description: 'Soluções tecnológicas para o setor de logística.',
    website: 'https://logistech.com'
  }
];

const initialCaseStudies: CaseStudyData[] = [
  {
    id: '1',
    title: 'Transformação Digital para Imobiliária',
    client: 'Imobiliária Real',
    description: 'Implementação de sistema completo de gestão imobiliária.',
    challenge: 'A Imobiliária Real enfrentava dificuldades com processos manuais e falta de integração entre departamentos.',
    solution: 'Desenvolvemos um sistema integrado que automatizou todos os processos, desde a captação até o pós-venda.',
    result: 'Redução de 40% no tempo de fechamento de contratos e aumento de 25% nas vendas após 6 meses.',
    images: ['/placeholder.svg', '/placeholder.svg'],
    partnerId: '1'
  },
  {
    id: '2',
    title: 'Otimização de Rotas para Transportadora',
    client: 'Express Logística',
    description: 'Sistema de otimização de rotas em tempo real para frota de caminhões.',
    challenge: 'Custos elevados com combustível e atrasos nas entregas devido a rotas ineficientes.',
    solution: 'Implementação de sistema inteligente com IA para otimização de rotas em tempo real.',
    result: 'Redução de 30% nos custos com combustível e melhoria de 45% no tempo médio de entrega.',
    images: ['/placeholder.svg', '/placeholder.svg'],
    partnerId: '3'
  }
];

// Provedor do contexto
export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Recuperar dados do localStorage, se disponíveis
  const getStoredData = <T,>(key: string, initialData: T): T => {
    if (typeof window === 'undefined') return initialData;
    
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : initialData;
  };

  // Estados
  const [footerData, setFooterData] = useState<FooterData>(() => 
    getStoredData('footerData', initialFooterData)
  );
  
  const [aboutData, setAboutData] = useState<AboutData>(() => 
    getStoredData('aboutData', initialAboutData)
  );
  
  const [services, setServices] = useState<ServiceData[]>(() => 
    getStoredData('services', initialServices)
  );
  
  const [partners, setPartners] = useState<PartnerData[]>(() => 
    getStoredData('partners', initialPartners)
  );
  
  const [caseStudies, setCaseStudies] = useState<CaseStudyData[]>(() => 
    getStoredData('caseStudies', initialCaseStudies)
  );
  
  const [isAdmin, setIsAdmin] = useState<boolean>(() => 
    getStoredData('isAdmin', false)
  );

  // Salvar mudanças no localStorage
  useEffect(() => {
    localStorage.setItem('footerData', JSON.stringify(footerData));
  }, [footerData]);

  useEffect(() => {
    localStorage.setItem('aboutData', JSON.stringify(aboutData));
  }, [aboutData]);

  useEffect(() => {
    localStorage.setItem('services', JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem('partners', JSON.stringify(partners));
  }, [partners]);

  useEffect(() => {
    localStorage.setItem('caseStudies', JSON.stringify(caseStudies));
  }, [caseStudies]);

  useEffect(() => {
    localStorage.setItem('isAdmin', JSON.stringify(isAdmin));
  }, [isAdmin]);

  // Funções para manipular os dados
  const updateFooterData = (data: Partial<FooterData>) => {
    setFooterData(prev => ({ ...prev, ...data }));
  };

  const updateAboutData = (data: Partial<AboutData>) => {
    setAboutData(prev => ({ ...prev, ...data }));
  };

  const updateService = (id: string, data: Partial<ServiceData>) => {
    setServices(prev => 
      prev.map(service => service.id === id ? { ...service, ...data } : service)
    );
  };

  const addService = (service: ServiceData) => {
    setServices(prev => [...prev, service]);
  };

  const removeService = (id: string) => {
    setServices(prev => prev.filter(service => service.id !== id));
  };

  const updatePartner = (id: string, data: Partial<PartnerData>) => {
    setPartners(prev => 
      prev.map(partner => partner.id === id ? { ...partner, ...data } : partner)
    );
  };

  const addPartner = (partner: PartnerData) => {
    setPartners(prev => [...prev, partner]);
  };

  const removePartner = (id: string) => {
    setPartners(prev => prev.filter(partner => partner.id !== id));
  };

  const updateCaseStudy = (id: string, data: Partial<CaseStudyData>) => {
    setCaseStudies(prev => 
      prev.map(caseStudy => caseStudy.id === id ? { ...caseStudy, ...data } : caseStudy)
    );
  };

  const addCaseStudy = (caseStudy: CaseStudyData) => {
    setCaseStudies(prev => [...prev, caseStudy]);
  };

  const removeCaseStudy = (id: string) => {
    setCaseStudies(prev => prev.filter(caseStudy => caseStudy.id !== id));
  };

  // Login e logout de admin (simplificado)
  const login = (password: string) => {
    // Senha padrão para demonstração (em produção usar autenticação segura)
    if (password === 'admin123') {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
  };

  // Valor do contexto
  const value = {
    footerData,
    aboutData,
    services,
    partners,
    caseStudies,
    updateFooterData,
    updateAboutData,
    updateService,
    addService,
    removeService,
    updatePartner,
    addPartner,
    removePartner,
    updateCaseStudy,
    addCaseStudy,
    removeCaseStudy,
    isAdmin,
    login,
    logout
  };

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};

// Hook para usar o contexto
export const useAdmin = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
