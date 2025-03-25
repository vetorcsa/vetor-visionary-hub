
import React, { useEffect, useRef } from 'react';

// Animação para Tecnologia Imobiliária - Casas desenhadas em linha sem sobreposição
export const RealEstateAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Ajustar o tamanho do canvas
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Criar elementos de construção - usando estilo de desenho de linha
    const houses = [];
    const houseCount = 6; // Número reduzido para melhor claridade
    
    // Atribuir posições iniciais distantes umas das outras
    for (let i = 0; i < houseCount; i++) {
      // Distribuir casas uniformemente pela tela
      const row = Math.floor(i / 3);
      const col = i % 3;
      
      houses.push({
        x: canvas.width * (0.25 + col * 0.25),
        y: canvas.height * (0.3 + row * 0.4),
        size: 20 + Math.random() * 8,
        color: i % 3 === 0 ? '#00B050' : (i % 3 === 1 ? '#7ED957' : '#008C41'),
        rotation: Math.random() * Math.PI * 0.1,
        rotationSpeed: (Math.random() - 0.5) * 0.005,
        elevation: Math.random() * 10,
        elevationDirection: Math.random() > 0.5 ? 1 : -1,
        style: Math.floor(Math.random() * 3) // Diferentes estilos de casa
      });
    }
    
    // Grid para efeito digital - simplificado
    const gridCells = {
      horizontal: [],
      vertical: []
    };
    
    const gridDensity = 12;
    
    for (let i = 0; i <= gridDensity; i++) {
      gridCells.horizontal.push({
        y: (canvas.height / gridDensity) * i,
        opacity: 0.07 + Math.random() * 0.08
      });
      
      gridCells.vertical.push({
        x: (canvas.width / gridDensity) * i,
        opacity: 0.07 + Math.random() * 0.08
      });
    }
    
    let time = 0;
    
    // Função de animação
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      time += 0.01;
      
      // Desenhar grid
      ctx.lineWidth = 0.5;
      
      gridCells.horizontal.forEach(line => {
        ctx.beginPath();
        ctx.moveTo(0, line.y);
        ctx.lineTo(canvas.width, line.y);
        ctx.strokeStyle = `rgba(0, 176, 80, ${line.opacity})`;
        ctx.stroke();
      });
      
      gridCells.vertical.forEach(line => {
        ctx.beginPath();
        ctx.moveTo(line.x, 0);
        ctx.lineTo(line.x, canvas.height);
        ctx.strokeStyle = `rgba(0, 176, 80, ${line.opacity})`;
        ctx.stroke();
      });
      
      // Atualizar e desenhar casas com verificações de posição
      houses.forEach((house, idx) => {
        // Mover suavemente as casas
        house.x += Math.sin(time * 0.5 + idx) * 0.2;
        house.y += Math.cos(time * 0.7 + idx) * 0.15;
        
        // Atualizar rotação
        house.rotation += house.rotationSpeed;
        
        // Atualizar elevação para efeito flutuante
        house.elevation += 0.1 * house.elevationDirection;
        if (house.elevation > 10 || house.elevation < 0) {
          house.elevationDirection *= -1;
        }
        
        // Desenhar sombra da casa (sutil)
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.beginPath();
        ctx.ellipse(
          house.x, 
          house.y + house.size/2 + 5, 
          house.size/2, 
          house.size/6, 
          0, 0, Math.PI * 2
        );
        ctx.fill();
        
        // Desenhar casa com estilo de linha
        ctx.save();
        ctx.translate(house.x, house.y - house.elevation * 0.1);
        ctx.rotate(house.rotation);
        
        ctx.strokeStyle = house.color;
        ctx.lineWidth = 1.5;
        ctx.lineJoin = 'round';
        
        // Diferentes estilos de casa usando arte em linha
        if (house.style === 0) {
          // Estilo 1: Casa simples com telhado
          
          // Contorno do corpo da casa
          ctx.beginPath();
          ctx.strokeRect(-house.size/2, -house.size/2, house.size, house.size);
          
          // Telhado
          ctx.beginPath();
          ctx.moveTo(-house.size/2 - 2, -house.size/2);
          ctx.lineTo(0, -house.size/2 - house.size/3);
          ctx.lineTo(house.size/2 + 2, -house.size/2);
          ctx.stroke();
          
          // Porta
          ctx.beginPath();
          ctx.moveTo(-house.size/6, house.size/2);
          ctx.lineTo(-house.size/6, 0);
          ctx.lineTo(house.size/6, 0);
          ctx.lineTo(house.size/6, house.size/2);
          ctx.stroke();
          
          // Janelas
          ctx.strokeRect(-house.size/3, -house.size/3, house.size/4, house.size/4);
          ctx.strokeRect(house.size/10, -house.size/3, house.size/4, house.size/4);
          
        } else if (house.style === 1) {
          // Estilo 2: Casa moderna
          
          // Corpo da casa - dois retângulos conectados
          ctx.beginPath();
          ctx.strokeRect(-house.size/2, -house.size/3, house.size * 0.6, house.size * 0.8);
          ctx.strokeRect(-house.size/2 + house.size * 0.6, -house.size/2, house.size * 0.4, house.size);
          
          // Janelas - linhas horizontais
          for (let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.moveTo(-house.size/2 + 2, -house.size/4 + i * house.size/6);
            ctx.lineTo(-house.size/2 + house.size * 0.6 - 2, -house.size/4 + i * house.size/6);
            ctx.stroke();
          }
          
          // Janelas - linhas verticais na segunda seção
          for (let i = 0; i < 2; i++) {
            ctx.beginPath();
            ctx.moveTo(-house.size/2 + house.size * 0.6 + house.size * 0.2, -house.size/2 + i * house.size/3);
            ctx.lineTo(-house.size/2 + house.size * 0.6 + house.size * 0.2, -house.size/2 + house.size/4 + i * house.size/3);
            ctx.stroke();
          }
          
        } else {
          // Estilo 3: Casa circular
          
          // Estrutura principal circular
          ctx.beginPath();
          ctx.arc(0, 0, house.size/2, 0, Math.PI * 2);
          ctx.stroke();
          
          // Telhado em domo
          ctx.beginPath();
          ctx.arc(0, -house.size/2, house.size/3, 0, Math.PI, true);
          ctx.stroke();
          
          // Porta
          ctx.beginPath();
          ctx.moveTo(-house.size/6, house.size/2);
          ctx.lineTo(-house.size/6, house.size/6);
          ctx.arc(0, house.size/6, house.size/6, Math.PI, 0, true);
          ctx.lineTo(house.size/6, house.size/2);
          ctx.stroke();
          
          // Janelas
          ctx.beginPath();
          ctx.arc(-house.size/4, -house.size/6, house.size/8, 0, Math.PI * 2);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.arc(house.size/4, -house.size/6, house.size/8, 0, Math.PI * 2);
          ctx.stroke();
        }
        
        ctx.restore();
        
        // Pontos de dados digitais acima da casa (frequência reduzida)
        if (Math.random() > 0.99) {
          ctx.fillStyle = 'rgba(0, 176, 80, 0.8)';
          ctx.font = '8px monospace';
          ctx.fillText('1', house.x + (Math.random() - 0.5) * 20, house.y - house.size - Math.random() * 10);
        }
        if (Math.random() > 0.99) {
          ctx.fillStyle = 'rgba(0, 176, 80, 0.8)';
          ctx.font = '8px monospace';
          ctx.fillText('0', house.x + (Math.random() - 0.5) * 20, house.y - house.size - Math.random() * 10);
        }
      });
      
      // Desenhar um hub central
      ctx.beginPath();
      ctx.arc(canvas.width/2, canvas.height/2, 15, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 176, 80, 0.1)';
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(canvas.width/2, canvas.height/2, 8, 0, Math.PI * 2);
      ctx.fillStyle = '#00B050';
      ctx.fill();
      
      // Efeito de pulso
      const pulseSize = 15 + Math.sin(time * 3) * 5;
      ctx.beginPath();
      ctx.arc(canvas.width/2, canvas.height/2, pulseSize, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.3)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full"
    />
  );
};

// Animação para Tecnologia Fiscal
export const FiscalAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Ajustar o tamanho do canvas
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Criar elementos de documentos
    const documents: {
      x: number;
      y: number;
      width: number;
      height: number;
      rotation: number;
      color: string;
      speed: number;
    }[] = [];
    
    const createDocuments = () => {
      documents.length = 0;
      const documentCount = 5; // Reduzido para menos sobreposição
      
      for (let i = 0; i < documentCount; i++) {
        documents.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          width: Math.random() * 50 + 20,
          height: Math.random() * 30 + 40,
          rotation: Math.random() * Math.PI * 2,
          color: i % 3 === 0 ? '#00B050' : (i % 3 === 1 ? '#7ED957' : '#E2F2E4'),
          speed: Math.random() * 0.5 + 0.2
        });
      }
    };
    
    createDocuments();
    
    // Animar os documentos flutuando
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      documents.forEach(doc => {
        // Atualizar posição
        doc.y += doc.speed;
        doc.rotation += 0.01;
        
        // Reposicionar quando sair da tela
        if (doc.y > canvas.height) {
          doc.y = -doc.height;
          doc.x = Math.random() * canvas.width;
        }
        
        // Desenhar documento
        ctx.save();
        ctx.translate(doc.x + doc.width / 2, doc.y + doc.height / 2);
        ctx.rotate(doc.rotation);
        
        // Documento principal
        ctx.fillStyle = doc.color;
        ctx.fillRect(-doc.width / 2, -doc.height / 2, doc.width, doc.height);
        
        // Linhas de texto
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        for (let i = 0; i < 4; i++) {
          ctx.fillRect(
            -doc.width / 2 + 5,
            -doc.height / 2 + 10 + i * 8,
            doc.width - 10,
            2
          );
        }
        
        ctx.restore();
      });
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full"
    />
  );
};

// Animação para Tecnologia em Logística
export const LogisticsAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Ajustar o tamanho do canvas
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Criar elementos de caminhões e rotas
    const trucks: {
      x: number;
      y: number;
      width: number;
      height: number;
      speed: number;
      route: { x: number; y: number }[];
      routeIndex: number;
      color: string;
      angle: number;
      visible: boolean;
    }[] = [];
    
    const createTrucks = () => {
      trucks.length = 0;
      const truckCount = 4; // Reduzido para melhor visualização
      
      for (let i = 0; i < truckCount; i++) {
        // Criar rota com vários pontos
        const routePoints = [];
        const pointCount = Math.floor(Math.random() * 3) + 3;
        
        // Dividir a tela em 4 quadrantes e criar rotas que não se sobreponham muito
        const quadrantWidth = canvas.width / 2;
        const quadrantHeight = canvas.height / 2;
        const quadrantX = i % 2;
        const quadrantY = Math.floor(i / 2);
        
        for (let j = 0; j < pointCount; j++) {
          routePoints.push({
            x: quadrantX * quadrantWidth + Math.random() * quadrantWidth,
            y: quadrantY * quadrantHeight + Math.random() * quadrantHeight
          });
        }
        
        const startPoint = routePoints[0];
        
        trucks.push({
          x: startPoint.x,
          y: startPoint.y,
          width: 20,
          height: 10,
          speed: 0.5 + Math.random() * 0.3, // Velocidade mais consistente
          route: routePoints,
          routeIndex: 0,
          color: i % 2 === 0 ? '#00B050' : '#7ED957',
          angle: 0,
          visible: true // Garantir que todos os caminhões sejam visíveis
        });
      }
    };
    
    createTrucks();
    
    // Animar os caminhões nas rotas
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Desenhar rotas
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 3]);
      
      trucks.forEach(truck => {
        if (!truck.visible) return;
        
        // Desenhar a rota
        ctx.strokeStyle = `rgba(0, 176, 80, 0.3)`;
        ctx.beginPath();
        ctx.moveTo(truck.route[0].x, truck.route[0].y);
        
        for (let i = 1; i < truck.route.length; i++) {
          ctx.lineTo(truck.route[i].x, truck.route[i].y);
        }
        
        ctx.stroke();
        
        // Desenhar pontos de rota
        truck.route.forEach((point, i) => {
          ctx.beginPath();
          ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = i === truck.routeIndex ? '#00B050' : 'rgba(0, 176, 80, 0.3)';
          ctx.fill();
        });
      });
      
      ctx.setLineDash([]);
      
      // Atualizar e desenhar caminhões
      trucks.forEach(truck => {
        if (!truck.visible) return;
        
        const currentPoint = truck.route[truck.routeIndex];
        const dx = currentPoint.x - truck.x;
        const dy = currentPoint.y - truck.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < truck.speed) {
          // Chegou ao ponto, move para o próximo
          truck.routeIndex = (truck.routeIndex + 1) % truck.route.length;
        } else {
          // Move em direção ao ponto
          truck.angle = Math.atan2(dy, dx);
          truck.x += Math.cos(truck.angle) * truck.speed;
          truck.y += Math.sin(truck.angle) * truck.speed;
        }
        
        // Desenhar caminhão
        ctx.save();
        ctx.translate(truck.x, truck.y);
        ctx.rotate(truck.angle);
        
        // Corpo do caminhão
        ctx.fillStyle = truck.color;
        ctx.fillRect(0, -truck.height / 2, truck.width, truck.height);
        
        // Cabine
        ctx.fillStyle = '#333';
        ctx.fillRect(-truck.width * 0.3, -truck.height / 2, truck.width * 0.3, truck.height);
        
        // Rodas
        ctx.fillStyle = '#111';
        ctx.fillRect(-truck.width * 0.2, -truck.height / 2 - 2, 4, 2);
        ctx.fillRect(-truck.width * 0.2, truck.height / 2, 4, 2);
        ctx.fillRect(truck.width * 0.6, -truck.height / 2 - 2, 4, 2);
        ctx.fillRect(truck.width * 0.6, truck.height / 2, 4, 2);
        
        ctx.restore();
      });
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full"
    />
  );
};

// Animação para Tecnologia Customizada - Restaurado para a versão original que estava funcionando bem
export const CustomTechAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Ajustar o tamanho do canvas
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Criar elementos de código
    const codeLines: {
      x: number;
      y: number;
      width: number;
      opacity: number;
      speed: number;
    }[] = [];
    
    const createCodeLines = () => {
      codeLines.length = 0;
      const lineCount = 20;
      
      for (let i = 0; i < lineCount; i++) {
        codeLines.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          width: Math.random() * 100 + 50,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.5 + 0.1
        });
      }
    };
    
    createCodeLines();
    
    // Animar as linhas de código
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      codeLines.forEach(line => {
        // Atualizar posição
        line.y += line.speed;
        
        // Reposicionar quando sair da tela
        if (line.y > canvas.height) {
          line.y = -10;
          line.x = Math.random() * canvas.width;
          line.width = Math.random() * 100 + 50;
        }
        
        // Desenhar linha de código
        ctx.fillStyle = `rgba(0, 176, 80, ${line.opacity})`;
        ctx.fillRect(line.x, line.y, line.width, 2);
        
        // Adicionar alguns detalhes para simular código
        const segmentCount = Math.floor(line.width / 15);
        for (let i = 0; i < segmentCount; i++) {
          if (Math.random() > 0.7) {
            ctx.fillRect(line.x + i * 15, line.y - 4, 8, 2);
          }
          if (Math.random() > 0.8) {
            ctx.fillRect(line.x + i * 15 + 5, line.y + 4, 5, 2);
          }
        }
      });
      
      // Adicionar alguns elementos binários flutuando
      for (let i = 0; i < 10; i++) {
        ctx.fillStyle = `rgba(0, 176, 80, ${Math.random() * 0.3 + 0.1})`;
        ctx.font = `${Math.random() * 14 + 10}px monospace`;
        ctx.fillText(
          Math.random() > 0.5 ? '1' : '0',
          Math.random() * canvas.width,
          Math.random() * canvas.height
        );
      }
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full"
    />
  );
};
