
import React, { useEffect, useRef } from 'react';

// Animação para Tecnologia Imobiliária - Casas/prédios desenhados sem sobreposição
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
    const buildings = [];
    const buildingCount = 6; // Número reduzido para evitar sobreposições
    
    // Grid para posicionar os edifícios sem sobreposição
    const gridCols = 3;
    const gridRows = 2;
    const cellWidth = canvas.width / gridCols;
    const cellHeight = canvas.height / gridRows;
    
    // Atribuir posições organizadas em grid para evitar sobreposição
    for (let i = 0; i < buildingCount; i++) {
      const row = Math.floor(i / gridCols);
      const col = i % gridCols;
      
      // Cada edifício fica em uma célula de grid com margem
      const margin = 10;
      
      buildings.push({
        x: cellWidth * col + cellWidth * 0.2 + Math.random() * (cellWidth * 0.6),
        y: cellHeight * row + cellHeight * 0.2 + Math.random() * (cellHeight * 0.6),
        size: 18 + Math.random() * 8,
        color: i % 3 === 0 ? '#00B050' : (i % 3 === 1 ? '#7ED957' : '#008C41'),
        rotation: (Math.random() - 0.5) * 0.1, // Menos rotação para melhor legibilidade
        rotationSpeed: (Math.random() - 0.5) * 0.0005,
        elevation: Math.random() * 5,
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
      
      // Atualizar e desenhar edifícios sem sobreposição
      buildings.forEach((building, idx) => {
        // Movimento suave em cada célula do grid
        building.x += Math.sin(time * 0.5 + idx) * 0.1;
        building.y += Math.cos(time * 0.7 + idx) * 0.05;
        
        // Atualizar rotação
        building.rotation += building.rotationSpeed;
        
        // Atualizar elevação para efeito flutuante
        building.elevation += 0.05 * building.elevationDirection;
        if (building.elevation > 5 || building.elevation < 0) {
          building.elevationDirection *= -1;
        }
        
        // Desenhar edifício com estilo de linha
        ctx.save();
        ctx.translate(building.x, building.y - building.elevation * 0.1);
        ctx.rotate(building.rotation);
        
        ctx.strokeStyle = building.color;
        ctx.lineWidth = 1.5;
        ctx.lineJoin = 'round';
        
        // Diferentes estilos de edifícios usando arte em linha
        if (building.style === 0) {
          // Estilo 1: Prédio moderno com vários andares
          const floors = 3 + Math.floor(Math.random() * 3);
          const buildingWidth = building.size;
          const buildingHeight = building.size * 1.5;
          const floorHeight = buildingHeight / floors;
          
          // Contorno do prédio
          ctx.strokeRect(-buildingWidth/2, -buildingHeight/2, buildingWidth, buildingHeight);
          
          // Linhas horizontais para andares
          for (let i = 1; i < floors; i++) {
            const y = -buildingHeight/2 + i * floorHeight;
            ctx.beginPath();
            ctx.moveTo(-buildingWidth/2, y);
            ctx.lineTo(buildingWidth/2, y);
            ctx.stroke();
          }
          
          // Janelas
          const windowsPerFloor = 2;
          const windowWidth = buildingWidth / (windowsPerFloor * 2);
          
          for (let floor = 0; floor < floors; floor++) {
            for (let w = 0; w < windowsPerFloor; w++) {
              const windowX = -buildingWidth/2 + (w + 0.5) * buildingWidth/windowsPerFloor;
              const windowY = -buildingHeight/2 + (floor + 0.5) * floorHeight;
              
              ctx.strokeRect(
                windowX - windowWidth/2, 
                windowY - floorHeight * 0.3, 
                windowWidth, 
                floorHeight * 0.6
              );
            }
          }
          
        } else if (building.style === 1) {
          // Estilo 2: Casa com telhado
          const houseWidth = building.size;
          const houseHeight = building.size * 0.8;
          
          // Corpo da casa
          ctx.strokeRect(-houseWidth/2, -houseHeight/2, houseWidth, houseHeight);
          
          // Telhado
          ctx.beginPath();
          ctx.moveTo(-houseWidth/2 - 3, -houseHeight/2);
          ctx.lineTo(0, -houseHeight/2 - houseHeight/2);
          ctx.lineTo(houseWidth/2 + 3, -houseHeight/2);
          ctx.stroke();
          
          // Porta
          ctx.beginPath();
          const doorWidth = houseWidth * 0.3;
          const doorHeight = houseHeight * 0.5;
          ctx.strokeRect(-doorWidth/2, houseHeight/2 - doorHeight, doorWidth, doorHeight);
          
          // Janelas
          const windowSize = houseWidth * 0.25;
          ctx.strokeRect(-houseWidth/3, -houseHeight/4, windowSize, windowSize);
          ctx.strokeRect(houseWidth/6, -houseHeight/4, windowSize, windowSize);
          
        } else {
          // Estilo 3: Torre/arranha-céu
          const towerWidth = building.size * 0.6;
          const towerHeight = building.size * 2;
          
          // Base da torre
          ctx.strokeRect(-towerWidth/2, -towerHeight/2, towerWidth, towerHeight);
          
          // Linhas horizontais de detalhes
          const detailCount = 5;
          for (let i = 1; i < detailCount; i++) {
            const y = -towerHeight/2 + (towerHeight * i / detailCount);
            ctx.beginPath();
            ctx.moveTo(-towerWidth/2, y);
            ctx.lineTo(towerWidth/2, y);
            ctx.stroke();
          }
          
          // Topo da torre
          ctx.beginPath();
          ctx.moveTo(-towerWidth/2, -towerHeight/2);
          ctx.lineTo(0, -towerHeight/2 - towerWidth/2);
          ctx.lineTo(towerWidth/2, -towerHeight/2);
          ctx.stroke();
          
          // Antena
          ctx.beginPath();
          ctx.moveTo(0, -towerHeight/2 - towerWidth/2);
          ctx.lineTo(0, -towerHeight/2 - towerWidth/2 - towerHeight * 0.2);
          ctx.stroke();
        }
        
        ctx.restore();
      });
      
      // Desenhar um hub central
      ctx.beginPath();
      ctx.arc(canvas.width/2, canvas.height/2, 12, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 176, 80, 0.1)';
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(canvas.width/2, canvas.height/2, 6, 0, Math.PI * 2);
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

// Animação para Tecnologia em Logística - com globo e pontos conectados
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

    // Define the globe radius
    const globeRadius = Math.min(canvas.width, canvas.height) * 0.35;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // Create connection points around the globe
    const connectionPoints = [];
    const connectionCount = 10; // Reduced from 12
    
    // Generate connection points distributed across the globe
    for (let i = 0; i < connectionCount; i++) {
      // Use spherical coordinates to place points around the globe
      const phi = Math.acos(-1 + (2 * i) / connectionCount);
      const theta = Math.sqrt(connectionCount * Math.PI) * phi;
      
      // Convert to cartesian coordinates
      const x = centerX + globeRadius * Math.cos(theta) * Math.sin(phi);
      const y = centerY + globeRadius * Math.sin(theta) * Math.sin(phi);
      
      // Add depth effect - points further back are more transparent
      const depthFactor = Math.sin(phi) * Math.cos(theta);
      const opacity = 0.3 + (depthFactor + 1) * 0.35;
      
      connectionPoints.push({
        x,
        y,
        size: 2 + Math.random() * 3,
        opacity,
        connections: [],
        active: Math.random() > 0.3 // Some points start active
      });
    }
    
    // Create connections between points - fewer connections
    connectionPoints.forEach((point, index) => {
      // Connect each point to 1-2 others (reduced from 2-3)
      const connectionCount = 1 + Math.floor(Math.random());
      
      for (let i = 0; i < connectionCount; i++) {
        // Choose a random point to connect to
        let targetIndex;
        do {
          targetIndex = Math.floor(Math.random() * connectionPoints.length);
        } while (targetIndex === index || point.connections.includes(targetIndex));
        
        point.connections.push(targetIndex);
      }
    });
    
    // Create moving packages between connection points
    const packages = [];
    const packageCount = 4; // Reduced from 5
    
    for (let i = 0; i < packageCount; i++) {
      // Choose random start and end points
      const startPointIndex = Math.floor(Math.random() * connectionPoints.length);
      let endPointIndex;
      
      do {
        endPointIndex = Math.floor(Math.random() * connectionPoints.length);
      } while (endPointIndex === startPointIndex);
      
      const startPoint = connectionPoints[startPointIndex];
      const endPoint = connectionPoints[endPointIndex];
      
      packages.push({
        startPointIndex,
        endPointIndex,
        x: startPoint.x,
        y: startPoint.y,
        progress: 0,
        speed: 0.002 + Math.random() * 0.003,
        color: i % 2 === 0 ? '#00B050' : '#7ED957',
        size: 4 + Math.random() * 3
      });
    }
    
    let rotationAngle = 0;
    let time = 0;
    
    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      time += 0.01;
      rotationAngle += 0.002; // Slow rotation of the globe
      
      // Draw globe outline with green grid - fewer lines
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.15)'; // More transparent lines
      ctx.lineWidth = 0.8; // Thinner lines
      
      // Draw fewer longitude lines - only 5 instead of 8
      for (let i = 0; i < 5; i++) {
        const angle = (i / 5) * Math.PI * 2 + rotationAngle;
        
        ctx.beginPath();
        ctx.ellipse(
          centerX, 
          centerY, 
          globeRadius * Math.abs(Math.cos(angle)), 
          globeRadius, 
          0, 
          0, 
          Math.PI * 2
        );
        ctx.stroke();
      }
      
      // Draw fewer latitude lines - only 3 instead of 5
      for (let i = 1; i < 3; i++) {
        const radius = globeRadius * (i / 3);
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Update connection points
      connectionPoints.forEach((point, index) => {
        // Random activation of points
        if (Math.random() > 0.995) {
          point.active = !point.active;
        }
        
        // Draw connections
        if (point.active) {
          point.connections.forEach(targetIndex => {
            const targetPoint = connectionPoints[targetIndex];
            
            if (targetPoint.active) {
              // Draw connection line
              ctx.beginPath();
              ctx.moveTo(point.x, point.y);
              ctx.lineTo(targetPoint.x, targetPoint.y);
              ctx.strokeStyle = `rgba(0, 176, 80, ${(point.opacity + targetPoint.opacity) * 0.2})`; // More transparent
              ctx.lineWidth = 0.5; // Thinner lines
              ctx.stroke();
            }
          });
        }
        
        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fillStyle = point.active 
          ? `rgba(0, 176, 80, ${point.opacity})` 
          : `rgba(0, 176, 80, ${point.opacity * 0.3})`;
        ctx.fill();
      });
      
      // Update and draw packages
      packages.forEach(pkg => {
        // Update position
        pkg.progress += pkg.speed;
        
        // Reset when reaching end point
        if (pkg.progress >= 1) {
          pkg.progress = 0;
          pkg.startPointIndex = pkg.endPointIndex;
          
          // Choose a new end point
          do {
            pkg.endPointIndex = Math.floor(Math.random() * connectionPoints.length);
          } while (pkg.endPointIndex === pkg.startPointIndex);
          
          // Activate both points
          connectionPoints[pkg.startPointIndex].active = true;
          connectionPoints[pkg.endPointIndex].active = true;
        }
        
        const startPoint = connectionPoints[pkg.startPointIndex];
        const endPoint = connectionPoints[pkg.endPointIndex];
        
        // Calculate current position (with slight arc for 3D effect)
        const dx = endPoint.x - startPoint.x;
        const dy = endPoint.y - startPoint.y;
        
        // Add a slight arc to the path
        const midX = (startPoint.x + endPoint.x) / 2;
        const midY = (startPoint.y + endPoint.y) / 2;
        const arcHeight = Math.sqrt(dx * dx + dy * dy) * 0.2;
        
        // Use quadratic bezier curve for position
        const t = pkg.progress;
        const mt = 1 - t;
        
        pkg.x = mt * mt * startPoint.x + 2 * mt * t * midX + t * t * endPoint.x;
        pkg.y = mt * mt * startPoint.y + 2 * mt * t * (midY - arcHeight * Math.sin(t * Math.PI)) + t * t * endPoint.y;
        
        // Draw package/truck
        ctx.beginPath();
        ctx.arc(pkg.x, pkg.y, pkg.size, 0, Math.PI * 2);
        ctx.fillStyle = pkg.color;
        ctx.fill();
        
        // Draw simplified package trail (fewer points)
        ctx.beginPath();
        ctx.moveTo(pkg.x, pkg.y);
        
        // Calculate trail points - reduced from 5 to 3
        for (let i = 1; i <= 3; i++) {
          const trailT = Math.max(0, t - i * 0.05);
          const trailMt = 1 - trailT;
          
          const trailX = trailMt * trailMt * startPoint.x + 2 * trailMt * trailT * midX + trailT * trailT * endPoint.x;
          const trailY = trailMt * trailMt * startPoint.y + 2 * trailMt * trailT * (midY - arcHeight * Math.sin(trailT * Math.PI)) + trailT * trailT * endPoint.y;
          
          ctx.lineTo(trailX, trailY);
        }
        
        ctx.strokeStyle = `rgba(${pkg.color.slice(1, 3)}, ${pkg.color.slice(3, 5)}, ${pkg.color.slice(5, 7)}, 0.15)`; // More transparent trail
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });
      
      // Draw globe center glow - more subtle
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, globeRadius * 0.2);
      gradient.addColorStop(0, 'rgba(0, 176, 80, 0.25)'); // More transparent
      gradient.addColorStop(1, 'rgba(0, 176, 80, 0)');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius * 0.2, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
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

// Animação para Tecnologia Customizada - Computador desenhado
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

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // Criando elementos do computador
    const computerElements = {
      monitor: {
        width: canvas.width * 0.6,
        height: canvas.height * 0.5,
        x: centerX,
        y: centerY - canvas.height * 0.1,
        borderRadius: 5,
        bezels: 8
      },
      screen: {
        codeLines: [],
        lineCount: 10
      },
      keyboard: {
        width: canvas.width * 0.5,
        height: canvas.height * 0.1,
        x: centerX,
        y: centerY + canvas.height * 0.25,
        keys: []
      },
      mouse: {
        x: centerX + canvas.width * 0.2,
        y: centerY + canvas.height * 0.25,
        width: 20,
        height: 30
      },
      particles: []
    };
    
    // Criar linhas de código para a tela
    for (let i = 0; i < computerElements.screen.lineCount; i++) {
      computerElements.screen.codeLines.push({
        width: Math.random() * 0.6 + 0.2, // Comprimento da linha como porcentagem da tela
        y: i,
        opacity: 0.3 + Math.random() * 0.5,
        animationOffset: Math.random() * Math.PI * 2
      });
    }
    
    // Criar teclas do teclado
    const keyRows = 3;
    const keysPerRow = 10;
    
    for (let row = 0; row < keyRows; row++) {
      for (let col = 0; col < keysPerRow; col++) {
        computerElements.keyboard.keys.push({
          row,
          col,
          pressed: false,
          pressTime: 0,
          pressChance: 0.01 + Math.random() * 0.03
        });
      }
    }
    
    // Criar partículas para efeito tech
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
      computerElements.particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.3 + 0.1
      });
    }
    
    let time = 0;
    
    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      time += 0.02;
      
      // Atualizar e desenhar partículas
      computerElements.particles.forEach(particle => {
        // Atualizar posição
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wraparound
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Desenhar partícula
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 176, 80, ${particle.opacity})`;
        ctx.fill();
      });
      
      // Conectar algumas partículas próximas
      for (let i = 0; i < computerElements.particles.length; i++) {
        for (let j = i + 1; j < computerElements.particles.length; j++) {
          const p1 = computerElements.particles[i];
          const p2 = computerElements.particles[j];
          
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 80) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 176, 80, ${0.05 * (1 - distance / 80)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      // Desenhar monitor
      const monitor = computerElements.monitor;
      
      // Desenhar base
      ctx.beginPath();
      ctx.moveTo(monitor.x - 20, monitor.y + monitor.height/2 + 10);
      ctx.lineTo(monitor.x + 20, monitor.y + monitor.height/2 + 10);
      ctx.lineTo(monitor.x + 15, monitor.y + monitor.height/2 + 20);
      ctx.lineTo(monitor.x - 15, monitor.y + monitor.height/2 + 20);
      ctx.closePath();
      ctx.fillStyle = '#00B050';
      ctx.fill();
      
      // Desenhar suporte
      ctx.beginPath();
      ctx.rect(monitor.x - 3, monitor.y + monitor.height/2, 6, 10);
      ctx.fillStyle = '#008C41';
      ctx.fill();
      
      // Desenhar monitor
      ctx.beginPath();
      ctx.roundRect(
        monitor.x - monitor.width/2, 
        monitor.y - monitor.height/2, 
        monitor.width, 
        monitor.height, 
        monitor.borderRadius
      );
      ctx.fillStyle = '#008C41';
      ctx.fill();
      
      // Desenhar tela
      ctx.beginPath();
      ctx.roundRect(
        monitor.x - monitor.width/2 + monitor.bezels, 
        monitor.y - monitor.height/2 + monitor.bezels, 
        monitor.width - monitor.bezels * 2, 
        monitor.height - monitor.bezels * 2, 
        monitor.borderRadius / 2
      );
      ctx.fillStyle = 'rgba(0, 30, 20, 0.9)';
      ctx.fill();
      
      // Desenhar código na tela
      const screenWidth = monitor.width - monitor.bezels * 2;
      const screenHeight = monitor.height - monitor.bezels * 2;
      const screenX = monitor.x - monitor.width/2 + monitor.bezels;
      const screenY = monitor.y - monitor.height/2 + monitor.bezels;
      const lineHeight = screenHeight / computerElements.screen.lineCount;
      
      computerElements.screen.codeLines.forEach((line, index) => {
        // Fazer algumas linhas piscarem
        const blinkingEffect = (Math.sin(time * 3 + line.animationOffset) + 1) / 2;
        const adjustedOpacity = line.opacity * (0.7 + blinkingEffect * 0.3);
        
        // Desenhar linha de código
        ctx.beginPath();
        ctx.rect(
          screenX + 10, 
          screenY + index * lineHeight + lineHeight * 0.4, 
          screenWidth * line.width - 20, 
          lineHeight * 0.2
        );
        ctx.fillStyle = `rgba(0, 176, 80, ${adjustedOpacity})`;
        ctx.fill();
        
        // Alguns detalhes (indentações e pequenos blocos)
        if (index % 2 === 0) {
          ctx.beginPath();
          ctx.rect(
            screenX + 10, 
            screenY + index * lineHeight + lineHeight * 0.7, 
            screenWidth * line.width * 0.7 - 20, 
            lineHeight * 0.2
          );
          ctx.fillStyle = `rgba(0, 176, 80, ${adjustedOpacity * 0.8})`;
          ctx.fill();
        }
        
        // Pequenos blocos extras
        if (Math.random() > 0.7) {
          for (let i = 0; i < 2; i++) {
            ctx.beginPath();
            ctx.rect(
              screenX + 10 + i * 70, 
              screenY + index * lineHeight + lineHeight * 0.7, 
              30, 
              lineHeight * 0.15
            );
            ctx.fillStyle = `rgba(0, 176, 80, ${adjustedOpacity * 0.5})`;
            ctx.fill();
          }
        }
      });
      
      // Desenhar teclado
      const keyboard = computerElements.keyboard;
      
      // Base do teclado
      ctx.beginPath();
      ctx.roundRect(
        keyboard.x - keyboard.width/2, 
        keyboard.y - keyboard.height/2, 
        keyboard.width, 
        keyboard.height, 
        3
      );
      ctx.fillStyle = '#007040';
      ctx.fill();
      
      // Desenhar teclas
      const keyWidth = keyboard.width / 12;
      const keyHeight = keyboard.height / 4;
      const keySpacing = 2;
      
      keyboard.keys.forEach(key => {
        // Verificar se a tecla deve ser pressionada
        if (Math.random() < key.pressChance) {
          key.pressed = true;
          key.pressTime = time;
        }
        
        // Soltar tecla após um curto período
        if (key.pressed && time - key.pressTime > 0.2) {
          key.pressed = false;
        }
        
        const keyX = keyboard.x - keyboard.width/2 + key.col * (keyWidth + keySpacing) + keyWidth;
        const keyY = keyboard.y - keyboard.height/2 + key.row * (keyHeight + keySpacing) + keyHeight;
        
        // Desenhar tecla
        ctx.beginPath();
        ctx.roundRect(
          keyX - keyWidth/2 + keySpacing/2, 
          keyY - keyHeight/2 + keySpacing/2, 
          keyWidth - keySpacing, 
          keyHeight - keySpacing, 
          2
        );
        
        // Tom mais escuro para teclas pressionadas
        ctx.fillStyle = key.pressed ? 'rgba(0, 80, 50, 0.9)' : 'rgba(0, 120, 70, 0.9)';
        ctx.fill();
      });
      
      // Desenhar mouse
      const mouse = computerElements.mouse;
      
      // Corpo do mouse
      ctx.beginPath();
      ctx.roundRect(
        mouse.x - mouse.width/2, 
        mouse.y - mouse.height/2, 
        mouse.width, 
        mouse.height, 
        mouse.width/2
      );
      ctx.fillStyle = '#007040';
      ctx.fill();
      
      // Botões do mouse
      ctx.beginPath();
      ctx.rect(
        mouse.x - mouse.width/2, 
        mouse.y - mouse.height/2, 
        mouse.width/2, 
        mouse.height/3
      );
      ctx.fillStyle = '#008C41';
      ctx.fill();
      
      ctx.beginPath();
      ctx.rect(
        mouse.x, 
        mouse.y - mouse.height/2, 
        mouse.width/2, 
        mouse.height/3
      );
      ctx.fillStyle = '#006030';
      ctx.fill();
      
      // Luz de scroll/sensor
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y - mouse.height/6, 2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 176, 80, 0.8)';
      ctx.fill();
      
      // Adicionar um efeito de brilho pulsante na tela
      const pulseSize = 100 + Math.sin(time) * 20;
      const gradient = ctx.createRadialGradient(centerX, centerY - 20, 0, centerX, centerY - 20, pulseSize);
      gradient.addColorStop(0, 'rgba(0, 176, 80, 0.03)');
      gradient.addColorStop(1, 'rgba(0, 176, 80, 0)');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY - 20, pulseSize, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Adicionar pequenos números binários ocasionais flutuando da tela
      if (Math.random() > 0.95) {
        const digit = Math.random() > 0.5 ? '1' : '0';
        const digitX = screenX + Math.random() * screenWidth;
        const digitY = screenY + Math.random() * (screenHeight * 0.8);
        
        ctx.fillStyle = 'rgba(0, 176, 80, 0.7)';
        ctx.font = '10px monospace';
        ctx.fillText(digit, digitX, digitY);
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
