
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 bg-vetor-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-bold text-vetor-green">404</span>
        </div>
        <h1 className="text-3xl font-bold text-vetor-black mb-4">Página não encontrada</h1>
        <p className="text-vetor-darkgray mb-8">
          A página que você está procurando não existe ou foi movida para outro endereço.
        </p>
        <Link
          to="/"
          className="btn-primary inline-flex items-center"
        >
          Voltar para o Início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
