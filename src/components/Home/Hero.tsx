
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Configurar o canvas para tela cheia
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Criar partículas
    const particles: {
      x: number;
      y: number;
      radius: number;
      color: string;
      velocity: { x: number; y: number };
      alpha: number;
      decreasing: boolean;
    }[] = [];
    
    // Criar partículas iniciais
    const createParticles = () => {
      const rect = canvas.getBoundingClientRect();
      const particleCount = Math.floor(rect.width * rect.height / 10000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          radius: Math.random() * 2 + 0.5,
          color: '#00B050',
          velocity: {
            x: (Math.random() - 0.5) * 0.4,
            y: (Math.random() - 0.5) * 0.4
          },
          alpha: Math.random() * 0.5 + 0.1,
          decreasing: Math.random() > 0.5
        });
      }
    };
    
    createParticles();
    
    // Desenhar e animar as partículas
    const animate = () => {
      requestAnimationFrame(animate);
      
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      // Conexões entre partículas
      ctx.lineWidth = 0.3;
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.15)';
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Atualizar e desenhar partículas
      particles.forEach(particle => {
        // Atualizar posição
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;
        
        // Rebater nas bordas
        if (particle.x < 0 || particle.x > rect.width) {
          particle.velocity.x *= -1;
        }
        
        if (particle.y < 0 || particle.y > rect.height) {
          particle.velocity.y *= -1;
        }
        
        // Pulsar o alpha
        if (particle.decreasing) {
          particle.alpha -= 0.005;
          if (particle.alpha <= 0.1) {
            particle.decreasing = false;
          }
        } else {
          particle.alpha += 0.005;
          if (particle.alpha >= 0.6) {
            particle.decreasing = true;
          }
        }
        
        // Desenhar a partícula
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 176, 80, ${particle.alpha})`;
        ctx.fill();
      });
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
      
      <div className="container mx-auto px-4 md:px-6 py-32 md:py-40 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-vetor-green bg-opacity-10 rounded-full">
            <span className="text-vetor-green font-medium text-sm">Inovação em Tecnologia</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in">
            Impulsionando Negócios com Soluções Tecnológicas Inovadoras
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Transformamos desafios em oportunidades através de soluções tecnológicas personalizadas para imobiliárias, gestão fiscal e logística.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link 
              to="/contato"
              className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Fale Conosco
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link 
              to="/sobre"
              className="btn-secondary flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Conheça a VETOR
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
