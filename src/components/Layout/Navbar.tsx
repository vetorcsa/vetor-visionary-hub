
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Lock } from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isAdmin, logout } = useAdmin();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black shadow-md py-2' : 'bg-black py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="flex items-center h-10">
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
              <span className="text-2xl font-bold ml-2 text-white">ETOR</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors duration-200 hover:text-vetor-green ${
                isActive('/') ? 'text-vetor-green animated-underline after:w-full' : 'text-white animated-underline'
              }`}
            >
              Início
            </Link>
            <Link 
              to="/sobre" 
              className={`font-medium transition-colors duration-200 hover:text-vetor-green ${
                isActive('/sobre') ? 'text-vetor-green animated-underline after:w-full' : 'text-white animated-underline'
              }`}
            >
              Quem Somos
            </Link>
            <Link 
              to="/parceiros" 
              className={`font-medium transition-colors duration-200 hover:text-vetor-green ${
                isActive('/parceiros') ? 'text-vetor-green animated-underline after:w-full' : 'text-white animated-underline'
              }`}
            >
              Parceiros
            </Link>
            <Link 
              to="/contato" 
              className={`font-medium transition-colors duration-200 hover:text-vetor-green ${
                isActive('/contato') ? 'text-vetor-green animated-underline after:w-full' : 'text-white animated-underline'
              }`}
            >
              Contato
            </Link>
            {isAdmin && (
              <div className="relative group">
                <button 
                  className="flex items-center font-medium text-vetor-green group-hover:text-vetor-darkgreen transition-colors duration-200"
                >
                  <Lock className="w-4 h-4 mr-1" />
                  Admin
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-black rounded-md shadow-lg overflow-hidden z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right border border-vetor-green/20">
                  <Link 
                    to="/admin" 
                    className="block px-4 py-2 text-sm text-white hover:bg-vetor-green hover:text-white"
                  >
                    Configurações
                  </Link>
                  <button 
                    onClick={logout}
                    className="w-full text-left block px-4 py-2 text-sm text-white hover:bg-vetor-green hover:text-white"
                  >
                    Sair
                  </button>
                </div>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
        style={{ top: "60px" }}
      >
        <nav className="flex flex-col h-full p-4">
          <Link
            to="/"
            className={`py-3 px-4 rounded-md ${
              isActive('/') ? 'bg-vetor-green text-white' : 'text-white'
            }`}
            onClick={closeMenu}
          >
            Início
          </Link>
          <Link
            to="/sobre"
            className={`py-3 px-4 rounded-md ${
              isActive('/sobre') ? 'bg-vetor-green text-white' : 'text-white'
            }`}
            onClick={closeMenu}
          >
            Quem Somos
          </Link>
          <Link
            to="/parceiros"
            className={`py-3 px-4 rounded-md ${
              isActive('/parceiros') ? 'bg-vetor-green text-white' : 'text-white'
            }`}
            onClick={closeMenu}
          >
            Parceiros
          </Link>
          <Link
            to="/contato"
            className={`py-3 px-4 rounded-md ${
              isActive('/contato') ? 'bg-vetor-green text-white' : 'text-white'
            }`}
            onClick={closeMenu}
          >
            Contato
          </Link>
          {isAdmin && (
            <>
              <Link
                to="/admin"
                className={`py-3 px-4 rounded-md ${
                  isActive('/admin') ? 'bg-vetor-green text-white' : 'text-white'
                }`}
                onClick={closeMenu}
              >
                Configurações
              </Link>
              <button
                onClick={() => {
                  logout();
                  closeMenu();
                }}
                className="py-3 px-4 rounded-md text-left text-white"
              >
                Sair
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
