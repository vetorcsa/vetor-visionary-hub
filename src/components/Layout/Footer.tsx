
import React from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const { footerData } = useAdmin();

  return (
    <footer className="bg-vetor-black text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-vetor-green flex items-center justify-center rounded-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-2xl font-bold">ETOR</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Soluções tecnológicas personalizadas para impulsionar seu negócio.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Entre em Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-vetor-green mr-2 mt-0.5" />
                <span>Torre Tóquio, Metropolitan Mall - Av. Dep. Jamel Cecílio, 2690 - Jardim Goiás, Goiânia - GO, 74810-100</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-vetor-green mr-2" />
                <a 
                  href="mailto:vetorcsa@gmail.com" 
                  className="hover:text-vetor-green transition-colors duration-200"
                >
                  vetorcsa@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-vetor-green mr-2" />
                <a 
                  href="tel:6298166-3235" 
                  className="hover:text-vetor-green transition-colors duration-200"
                >
                  62 98166-3235
                </a>
              </li>
              <li className="flex items-center">
                <MessageCircle className="w-5 h-5 text-vetor-green mr-2" />
                <a 
                  href="https://wa.me/6298166-3235" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-vetor-green transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/vetorcsa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-vetor-darkgray rounded-full flex items-center justify-center hover:bg-vetor-green transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/6298166-3235" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-vetor-darkgray rounded-full flex items-center justify-center hover:bg-vetor-green transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} VETOR CSA. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-vetor-green transition-colors duration-200"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-vetor-green transition-colors duration-200"
                >
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
