
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 px-4">
      <div className="text-center max-w-md relative overflow-hidden p-8 rounded-xl border border-vetor-green/20">
        {/* Floating elements */}
        <div className="absolute w-20 h-20 rounded-full bg-vetor-green/5 -top-10 -right-10"></div>
        <div className="absolute w-16 h-16 rounded-full bg-vetor-green/10 bottom-10 -left-8"></div>
        <div className="absolute w-12 h-12 rounded-sm bg-vetor-green/5 bottom-20 right-10 rotate-12"></div>
        
        <div className="w-24 h-24 bg-black border-2 border-vetor-green rounded-full flex items-center justify-center mx-auto mb-8 relative z-10">
          <span className="text-4xl font-bold text-vetor-green">404</span>
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-4 relative z-10">Página não encontrada</h1>
        
        <p className="text-gray-300 mb-8 relative z-10">
          A página que você está procurando não existe ou foi movida para outro endereço.
        </p>
        
        <Link
          to="/"
          className="inline-flex items-center bg-vetor-green hover:bg-vetor-green/90 text-black font-medium px-6 py-3 rounded-md transition-all duration-300 relative z-10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para o Início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
