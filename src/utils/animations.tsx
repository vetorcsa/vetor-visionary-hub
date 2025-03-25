
import React, { useEffect, useRef } from 'react';

// Animação para Tecnologia Imobiliária
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

    // Criar elementos de construção
    const buildings: { x: number; y: number; width: number; height: number; color: string }[] = [];
    
    const createBuildings = () => {
      buildings.length = 0;
      const buildingCount = 6;
      const spacing = canvas.width / buildingCount;
      
      for (let i = 0; i < buildingCount; i++) {
        const height = Math.random() * (canvas.height * 0.6) + (canvas.height * 0.2);
        buildings.push({
          x: i * spacing + spacing / 4,
          y: canvas.height - height,
          width: spacing / 2,
          height: height,
          color: i % 2 === 0 ? '#00B050' : '#7ED957'
        });
      }
    };
    
    createBuildings();
    
    // Animar o skyline
    let frame = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      frame++;
      
      // Desenhar os edifícios
      buildings.forEach((building, index) => {
        let heightOffset = Math.sin(frame / 50 + index) * 5;
        
        // Edifício principal com luz pulsante
        ctx.fillStyle = building.color;
        ctx.fillRect(
          building.x, 
          building.y - heightOffset, 
          building.width, 
          building.height + heightOffset
        );
        
        // Janelas
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        const windowSize = building.width / 5;
        const windowsPerRow = Math.floor(building.width / (windowSize * 1.5));
        const windowsPerColumn = Math.floor(building.height / (windowSize * 1.5));
        
        for (let row = 0; row < windowsPerColumn; row++) {
          for (let col = 0; col < windowsPerRow; col++) {
            // Algumas janelas piscam aleatoriamente
            if (Math.random() > 0.95) {
              ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            } else {
              ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            }
            
            ctx.fillRect(
              building.x + col * windowSize * 1.5 + windowSize / 2,
              building.y + row * windowSize * 1.5 + windowSize / 2 - heightOffset,
              windowSize,
              windowSize
            );
          }
        }
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
      const documentCount = 15;
      
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
    }[] = [];
    
    const createTrucks = () => {
      trucks.length = 0;
      const truckCount = 5;
      
      for (let i = 0; i < truckCount; i++) {
        // Criar rota com vários pontos
        const routePoints = [];
        const pointCount = Math.floor(Math.random() * 3) + 3;
        
        for (let j = 0; j < pointCount; j++) {
          routePoints.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height
          });
        }
        
        trucks.push({
          x: routePoints[0].x,
          y: routePoints[0].y,
          width: 20,
          height: 10,
          speed: Math.random() * 1 + 0.5,
          route: routePoints,
          routeIndex: 0,
          color: i % 2 === 0 ? '#00B050' : '#7ED957'
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
        const currentPoint = truck.route[truck.routeIndex];
        const dx = currentPoint.x - truck.x;
        const dy = currentPoint.y - truck.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < truck.speed) {
          // Chegou ao ponto, move para o próximo
          truck.routeIndex = (truck.routeIndex + 1) % truck.route.length;
        } else {
          // Move em direção ao ponto
          const angle = Math.atan2(dy, dx);
          truck.x += Math.cos(angle) * truck.speed;
          truck.y += Math.sin(angle) * truck.speed;
        }
        
        // Calcular ângulo para rotação do caminhão
        const nextPoint = truck.route[truck.routeIndex];
        const angle = Math.atan2(nextPoint.y - truck.y, nextPoint.x - truck.x);
        
        // Desenhar caminhão
        ctx.save();
        ctx.translate(truck.x, truck.y);
        ctx.rotate(angle);
        
        // Corpo do caminhão
        ctx.fillStyle = truck.color;
        ctx.fillRect(0, -truck.height / 2, truck.width, truck.height);
        
        // Cabine
        ctx.fillStyle = '#333';
        ctx.fillRect(-truck.width * 0.3, -truck.height / 2, truck.width * 0.3, truck.height);
        
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

// Animação para Tecnologia Customizada
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
