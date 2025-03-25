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
    const buildingCount = 5; // Número ainda mais reduzido para evitar sobreposições
    
    // Grid definido para posicionar os edifícios sem sobreposição
    const gridCols = 3;
    const gridRows = 2;
    const cellWidth = canvas.width / gridCols;
    const cellHeight = canvas.height / gridRows;
    
    // Atribuir posições organizadas em grid para evitar sobreposição
    for (let i = 0; i < buildingCount; i++) {
      const row = Math.floor(i / gridCols);
      const col = i % gridCols;
      
      // Cada edifício fica em uma célula de grid com margem maior
      const margin = 20;
      
      buildings.push({
        x: cellWidth * col + cellWidth * 0.25 + Math.random() * (cellWidth * 0.5),
        y: cellHeight * row + cellHeight * 0.25 + Math.random() * (cellHeight * 0.5),
        size: 20 + Math.random() * 10,
        color: i % 3 === 0 ? '#00B050' : (i % 3 === 1 ? '#7ED957' : '#008C41'),
        rotation: (Math.random() - 0.5) * 0.05, // Menos rotação para melhor legibilidade
        rotationSpeed: (Math.random() - 0.5) * 0.0002,
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
    
    const gridDensity = 10; // Ainda menos linhas
    
    for (let i = 0; i <= gridDensity; i++) {
      gridCells.horizontal.push({
        y: (canvas.height / gridDensity) * i,
        opacity: 0.05 + Math.random() * 0.05 // Mais suave
      });
      
      gridCells.vertical.push({
        x: (canvas.width / gridDensity) * i,
        opacity: 0.05 + Math.random() * 0.05 // Mais suave
      });
    }
    
    let time = 0;
    
    // Função de animação
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      time += 0.01;
      
      // Desenhar grid - mais suave
      ctx.lineWidth = 0.3;
      
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
        // Movimento muito suave em cada célula do grid
        building.x += Math.sin(time * 0.3 + idx) * 0.05;
        building.y += Math.cos(time * 0.4 + idx) * 0.03;
        
        // Atualizar rotação
        building.rotation += building.rotationSpeed;
        
        // Atualizar elevação para efeito flutuante
        building.elevation += 0.03 * building.elevationDirection;
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
      ctx.arc(canvas.width/2, canvas.height/2, 8, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 176, 80, 0.1)';
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(canvas.width/2, canvas.height/2, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#00B050';
      ctx.fill();
      
      // Efeito de pulso
      const pulseSize = 12 + Math.sin(time * 3) * 4;
      ctx.beginPath();
      ctx.arc(canvas.width/2, canvas.height/2, pulseSize, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.2)';
      ctx.lineWidth = 1;
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

// Animação para Tecnologia em Logística - com globo noturno elegante
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
    
    // Background stars
    const stars = [];
    const starCount = 40;
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.2 + 0.2,
        opacity: Math.random() * 0.5 + 0.2,
        pulse: Math.random() * 2 * Math.PI
      });
    }
    
    // Create connection points around the globe
    const connectionPoints = [];
    const connectionCount = 8; // Reduced for elegance
    
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
        size: 2 + Math.random() * 2,
        opacity,
        connections: [],
        active: Math.random() > 0.3 // Some points start active
      });
    }
    
    // Create connections between points - minimal connections for elegance
    connectionPoints.forEach((point, index) => {
      // Connect each point to 1-2 others
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
    const packageCount = 3; // Reduced for elegance
    
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
        speed: 0.001 + Math.random() * 0.002, // Slower for elegance
        color: i % 2 === 0 ? '#00B050' : '#7ED957',
        size: 3 + Math.random() * 2
      });
    }
    
    let rotationAngle = 0;
    let time = 0;
    
    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      time += 0.01;
      rotationAngle += 0.001; // Slower rotation for elegance
      
      // Draw night sky background with stars
      stars.forEach(star => {
        // Calculate pulsing effect
        star.pulse += 0.01;
        const pulseFactor = 0.5 + Math.sin(star.pulse) * 0.5;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * pulseFactor, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * pulseFactor})`;
        ctx.fill();
      });
      
      // Draw globe outline with elegant green grid - minimal lines
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.12)'; // More transparent lines
      ctx.lineWidth = 0.6; // Thinner lines
      
      // Draw fewer longitude lines - only 4 for elegance
      for (let i = 0; i < 4; i++) {
        const angle = (i / 4) * Math.PI * 2 + rotationAngle;
        
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
      
      // Draw fewer latitude lines - only 2 for minimal elegance
      for (let i = 1; i < 2; i++) {
        const radius = globeRadius * (i / 2);
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Draw continents outline - simple elegant silhouette
      ctx.beginPath();
      // Simple approximation of North America
      ctx.moveTo(centerX - globeRadius * 0.5, centerY - globeRadius * 0.2);
      ctx.bezierCurveTo(
        centerX - globeRadius * 0.4, centerY - globeRadius * 0.3,
        centerX - globeRadius * 0.3, centerY - globeRadius * 0.4,
        centerX - globeRadius * 0.2, centerY - globeRadius * 0.3
      );
      ctx.bezierCurveTo(
        centerX - globeRadius * 0.1, centerY - globeRadius * 0.2,
        centerX - globeRadius * 0.2, centerY - globeRadius * 0.1,
        centerX - globeRadius * 0.3, centerY
      );
      ctx.bezierCurveTo(
        centerX - globeRadius * 0.4, centerY + globeRadius * 0.1,
        centerX - globeRadius * 0.5, centerY + globeRadius * 0.1,
        centerX - globeRadius * 0.5, centerY - globeRadius * 0.2
      );
      ctx.closePath();
      
      // Simple approximation of Europe/Africa
      ctx.moveTo(centerX, centerY - globeRadius * 0.2);
      ctx.bezierCurveTo(
        centerX + globeRadius * 0.1, centerY - globeRadius * 0.1,
        centerX + globeRadius * 0.2, centerY,
        centerX + globeRadius * 0.1, centerY + globeRadius * 0.3
      );
      ctx.bezierCurveTo(
        centerX, centerY + globeRadius * 0.4,
        centerX - globeRadius * 0.1, centerY + globeRadius * 0.3,
        centerX - globeRadius * 0.1, centerY + globeRadius * 0.1
      );
      ctx.bezierCurveTo(
        centerX - globeRadius * 0.1, centerY,
        centerX - globeRadius * 0.1, centerY - globeRadius * 0.1,
        centerX, centerY - globeRadius * 0.2
      );
      ctx.closePath();
      
      // Simple approximation of Asia/Australia
      ctx.moveTo(centerX + globeRadius * 0.2, centerY - globeRadius * 0.3);
      ctx.bezierCurveTo(
        centerX + globeRadius * 0.3, centerY - globeRadius * 0.2,
        centerX + globeRadius * 0.4, centerY - globeRadius * 0.1,
        centerX + globeRadius * 0.4, centerY
      );
      ctx.bezierCurveTo(
        centerX + globeRadius * 0.4, centerY + globeRadius * 0.1,
        centerX + globeRadius * 0.3, centerY + globeRadius * 0.2,
        centerX + globeRadius * 0.2, centerY + globeRadius * 0.1
      );
      ctx.bezierCurveTo(
        centerX + globeRadius * 0.3, centerY,
        centerX + globeRadius * 0.3, centerY - globeRadius * 0.1,
        centerX + globeRadius * 0.2, centerY - globeRadius * 0.3
      );
      ctx.closePath();
      
      // Draw Australia
      ctx.moveTo(centerX + globeRadius * 0.3, centerY + globeRadius * 0.2);
      ctx.bezierCurveTo(
        centerX + globeRadius * 0.35, centerY + globeRadius * 0.22,
        centerX + globeRadius * 0.4, centerY + globeRadius * 0.25,
        centerX + globeRadius * 0.38, centerY + globeRadius * 0.3
      );
      ctx.bezierCurveTo(
        centerX + globeRadius * 0.36, centerY + globeRadius * 0.32,
        centerX + globeRadius * 0.32, centerY + globeRadius * 0.32,
        centerX + globeRadius * 0.3, centerY + globeRadius * 0.28
      );
      ctx.bezierCurveTo(
        centerX + globeRadius * 0.28, centerY + globeRadius * 0.25,
        centerX + globeRadius * 0.28, centerY + globeRadius * 0.22,
        centerX + globeRadius * 0.3, centerY + globeRadius * 0.2
      );
      ctx.closePath();
      
      ctx.fillStyle = 'rgba(0, 176, 80, 0.08)'; // Very subtle continents
      ctx.fill();
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.1)';
      ctx.lineWidth = 0.5;
      ctx.stroke();
      
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
              ctx.strokeStyle = `rgba(0, 176, 80, ${(point.opacity + targetPoint.opacity) * 0.15})`; // More transparent
              ctx.lineWidth = 0.4; // Thinner lines
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
        const arcHeight = Math.sqrt(dx * dx + dy * dy) * 0.15; // Smaller arc
        
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
        
        // Calculate trail points - reduced to 2 for elegance
        for (let i = 1; i <= 2; i++) {
          const trailT = Math.max(0, t - i * 0.05);
          const trailMt = 1 - trailT;
          
          const trailX = trailMt * trailMt * startPoint.x + 2 * trailMt * trailT * midX + trailT * trailT * endPoint.x;
          const trailY = trailMt * trailMt * startPoint.y + 2 * trailMt * trailT * (midY - arcHeight * Math.sin(trailT * Math.PI)) + trailT * trailT * endPoint.y;
          
          ctx.lineTo(trailX, trailY);
        }
        
        ctx.strokeStyle = `rgba(${pkg.color.slice(1, 3)}, ${pkg.color.slice(3, 5)}, ${pkg.color.slice(5, 7)}, 0.12)`; // More transparent trail
        ctx.lineWidth = 1.2;
        ctx.stroke();
      });
      
      // Add atmosphere glow effect
      const atmosGradient = ctx.createRadialGradient(centerX, centerY, globeRadius * 0.9, centerX, centerY, globeRadius * 1.2);
      atmosGradient.addColorStop(0, 'rgba(0, 176, 80, 0.03)');
      atmosGradient.addColorStop(1, 'rgba(0, 176, 80, 0)');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius * 1.2, 0, Math.PI * 2);
      ctx.fillStyle = atmosGradient;
      ctx.fill();
      
      // Draw globe center glow - more subtle
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, globeRadius * 0.2);
      gradient.addColorStop(0, 'rgba(0, 176, 80, 0.15)'); // More transparent
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

// Animação para Tecnologia Customizada - Computador elegante
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
    
    // Computer design parameters - sleek design 
    const computer = {
      // Monitor parameters
      monitor: {
        width: canvas.width * 0.5,
        height: canvas.height * 0.4,
        x: centerX,
        y: centerY - canvas.height * 0.05,
        borderRadius: 6,
        bezels: 6
      },
      // Screen with code visualization
      screen: {
        codeLines: [],
        lineCount: 8,
        glowEffect: 0
      },
      // Base and stand
      stand: {
        width: canvas.width * 0.12,
        height: canvas.height * 0.05,
        baseWidth: canvas.width * 0.25,
        baseHeight: canvas.height * 0.02
      },
      // Keyboard
      keyboard: {
        width: canvas.width * 0.4,
        height: canvas.height * 0.08,
        x: centerX,
        y: centerY + canvas.height * 0.23,
        keys: [],
        keyCount: 15 // Simplified keyboard 
      },
      // Digital particles
      particles: []
    };
    
    // Create code lines for screen
    for (let i = 0; i < computer.screen.lineCount; i++) {
      computer.screen.codeLines.push({
        width: Math.random() * 0.6 + 0.2, // Line length as percentage of screen
        y: i,
        opacity: 0.3 + Math.random() * 0.3,
        animationOffset: Math.random() * Math.PI * 2
      });
    }
    
    // Create keyboard keys
    for (let i = 0; i < computer.keyboard.keyCount; i++) {
      computer.keyboard.keys.push({
        x: (i % 5) / 5,
        y: Math.floor(i / 5) / 3,
        width: 0.15,
        height: 0.25,
        pressed: false,
        pressTime: 0,
        pressChance: 0.005 + Math.random() * 0.01 // Random key press probability
      });
    }
    
    // Create particles for tech atmosphere
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
      computer.particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.15 + 0.05
      });
    }
    
    let time = 0;
    
    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      time += 0.02;
      
      // Update screen glow effect
      computer.screen.glowEffect = Math.sin(time * 0.5) * 0.5 + 0.5;
      
      // Update and draw particles
      computer.particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 176, 80, ${particle.opacity})`;
        ctx.fill();
      });
      
      // Draw monitor
      const monitor = computer.monitor;
      
      // Stand base
      ctx.beginPath();
      ctx.roundRect(
        centerX - computer.stand.baseWidth / 2,
        monitor.y + monitor.height / 2 + computer.stand.height,
        computer.stand.baseWidth,
        computer.stand.baseHeight,
        2
      );
      ctx.fillStyle = '#006040';
      ctx.fill();
      
      // Stand pillar
      ctx.beginPath();
      ctx.rect(
        centerX - computer.stand.width / 2,
        monitor.y + monitor.height / 2,
        computer.stand.width,
        computer.stand.height
      );
      ctx.fillStyle = '#007050';
      ctx.fill();
      
      // Monitor body - modern design with rounded corners
      ctx.beginPath();
      ctx.roundRect(
        monitor.x - monitor.width / 2,
        monitor.y - monitor.height / 2,
        monitor.width,
        monitor.height,
        monitor.borderRadius
      );
      ctx.fillStyle = '#007050';
      ctx.fill();
      
      // Screen 
      ctx.beginPath();
      ctx.roundRect(
        monitor.x - monitor.width / 2 + monitor.bezels,
        monitor.y - monitor.height / 2 + monitor.bezels,
        monitor.width - monitor.bezels * 2,
        monitor.height - monitor.bezels * 2,
        monitor.borderRadius / 2
      );
      ctx.fillStyle = 'rgba(0, 25, 20, 0.95)';
      ctx.fill();
      
      // Screen glow effect
      const screenGlow = ctx.createRadialGradient(
        monitor.x,
        monitor.y,
        0,
        monitor.x,
        monitor.y,
        monitor.width / 2
      );
      screenGlow.addColorStop(0, `rgba(0, 176, 80, ${0.03 + computer.screen.glowEffect * 0.02})`);
      screenGlow.addColorStop(1, 'rgba(0, 176, 80, 0)');
      
      ctx.beginPath();
      ctx.roundRect(
        monitor.x - monitor.width / 2 + monitor.bezels,
        monitor.y - monitor.height / 2 + monitor.bezels,
        monitor.width - monitor.bezels * 2,
        monitor.height - monitor.bezels * 2,
        monitor.borderRadius / 2
      );
      ctx.fillStyle = screenGlow;
      ctx.fill();
      
      // Code on screen
      const screenWidth = monitor.width - monitor.bezels * 2;
      const screenHeight = monitor.height - monitor.bezels * 2;
      const screenX = monitor.x - monitor.width / 2 + monitor.bezels;
      const screenY = monitor.y - monitor.height / 2 + monitor.bezels;
      const lineHeight = screenHeight / computer.screen.lineCount;
      
      computer.screen.codeLines.forEach((line, index) => {
        // Create blinking effect
        const blinkEffect = (Math.sin(time * 2 + line.animationOffset) + 1) / 2;
        const adjustedOpacity = line.opacity * (0.7 + blinkEffect * 0.3);
        
        // Draw code line
        ctx.beginPath();
        ctx.rect(
          screenX + 10, 
          screenY + index * lineHeight + lineHeight * 0.4, 
          screenWidth * line.width - 20, 
          lineHeight * 0.2
        );
        ctx.fillStyle = `rgba(0, 176, 80, ${adjustedOpacity})`;
        ctx.fill();
        
        // Some code details (indentations)
        if (index % 2 === 0) {
          ctx.beginPath();
          ctx.rect(
            screenX + 20, 
            screenY + index * lineHeight + lineHeight * 0.7, 
            screenWidth * line.width * 0.6 - 20, 
            lineHeight * 0.15
          );
          ctx.fillStyle = `rgba(0, 176, 80, ${adjustedOpacity * 0.7})`;
          ctx.fill();
        }
        
        // Add occasional brackets
        if (index === 2 || index === 5) {
          ctx.fillStyle = `rgba(0, 176, 80, ${adjustedOpacity * 0.9})`;
          ctx.font = `${lineHeight * 0.4}px monospace`;
          ctx.fillText(
            '{', 
            screenX + 15, 
            screenY + index * lineHeight + lineHeight * 0.35
          );
        }
        
        if (index === 4 || index === 7) {
          ctx.fillStyle = `rgba(0, 176, 80, ${adjustedOpacity * 0.9})`;
          ctx.font = `${lineHeight * 0.4}px monospace`;
          ctx.fillText(
            '}', 
            screenX + 15, 
            screenY + index * lineHeight + lineHeight * 0.35
          );
        }
      });
      
      // Draw keyboard
      const keyboard = computer.keyboard;
      
      // Keyboard base
      ctx.beginPath();
      ctx.roundRect(
        keyboard.x - keyboard.width / 2,
        keyboard.y - keyboard.height / 2,
        keyboard.width,
        keyboard.height,
        3
      );
      ctx.fillStyle = '#006040';
      ctx.fill();
      
      // Draw keys
      keyboard.keys.forEach(key => {
        // Randomly press keys
        if (Math.random() < key.pressChance) {
          key.pressed = true;
          key.pressTime = time;
        }
        
        // Release key after a moment
        if (key.pressed && time - key.pressTime > 0.2) {
          key.pressed = false;
        }
        
        const keyWidth = keyboard.width * key.width;
        const keyHeight = keyboard.height * key.height;
        const keyX = keyboard.x - keyboard.width / 2 + keyboard.width * key.x + keyWidth / 2;
        const keyY = keyboard.y - keyboard.height / 2 + keyboard.height * key.y + keyHeight / 2;
        
        // Draw key
        ctx.beginPath();
        ctx.roundRect(
          keyX - keyWidth / 2 + 2,
          keyY - keyHeight / 2 + 2,
          keyWidth - 4,
          keyHeight - 4,
          2
        );
        
        // Darker color for pressed keys
        ctx.fillStyle = key.pressed ? 'rgba(0, 70, 40, 0.95)' : 'rgba(0, 100, 60, 0.95)';
        ctx.fill();
      });
      
      // Occasional binary digits floating from the screen
      if (Math.random() > 0.97) {
        const digit = Math.random() > 0.5 ? '1' : '0';
        const digitX = screenX + Math.random() * screenWidth;
        const digitY = screenY + Math.random() * (screenHeight * 0.8);
        
        ctx.fillStyle = 'rgba(0, 176, 80, 0.7)';
        ctx.font = '10px monospace';
        ctx.fillText(digit, digitX, digitY);
      }
      
      // Pulse effect around monitor
      const pulseSize = 30 + Math.sin(time) * 10;
      const pulseGradient = ctx.createRadialGradient(
        monitor.x,
        monitor.y,
        0,
        monitor.x,
        monitor.y,
        pulseSize
      );
      pulseGradient.addColorStop(0, 'rgba(0, 176, 80, 0.03)');
      pulseGradient.addColorStop(1, 'rgba(0, 176, 80, 0)');
      
      ctx.beginPath();
      ctx.arc(monitor.x, monitor.y, pulseSize, 0, Math.PI * 2);
      ctx.fillStyle = pulseGradient;
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
