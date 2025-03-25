
import React, { useEffect, useRef } from 'react';
import { Building2 } from 'lucide-react';

const RealEstateAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const rect = canvas.getBoundingClientRect();
    
    // Building models - more sophisticated and varied designs
    const buildings = [];
    const buildingCount = 10;
    
    // Define building styles - more modern, elegant designs
    const buildingStyles = [
      // Luxury Skyscraper
      (x: number, y: number, scale: number, ctx: CanvasRenderingContext2D) => {
        const width = 45 * scale;
        const height = 120 * scale;
        
        // Main tower
        const gradient = ctx.createLinearGradient(x - width/2, y - height, x + width/2, y);
        gradient.addColorStop(0, 'rgba(0, 176, 80, 0.15)');
        gradient.addColorStop(1, 'rgba(0, 176, 80, 0.25)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x - width/2, y - height, width, height);
        
        // Building crown
        ctx.beginPath();
        ctx.moveTo(x - width/2, y - height);
        ctx.lineTo(x - width/4, y - height - 20 * scale);
        ctx.lineTo(x + width/4, y - height - 20 * scale);
        ctx.lineTo(x + width/2, y - height);
        ctx.closePath();
        ctx.fillStyle = 'rgba(0, 176, 80, 0.3)';
        ctx.fill();
        
        // Glass windows pattern
        for (let floor = 0; floor < 15; floor++) {
          const floorY = y - 10 * scale - floor * 8 * scale;
          for (let window = 0; window < 4; window++) {
            const windowX = x - width/2 + 5 * scale + window * 10 * scale;
            ctx.fillStyle = 'rgba(0, 176, 80, 0.4)';
            ctx.fillRect(windowX, floorY, 6 * scale, 5 * scale);
          }
        }
      },
      
      // Modern Office Tower
      (x: number, y: number, scale: number, ctx: CanvasRenderingContext2D) => {
        const width = 40 * scale;
        const height = 100 * scale;
        
        // Main structure - glass-like appearance
        const gradient = ctx.createLinearGradient(x - width/2, y - height, x + width/2, y);
        gradient.addColorStop(0, 'rgba(0, 176, 80, 0.05)');
        gradient.addColorStop(0.5, 'rgba(0, 176, 80, 0.15)');
        gradient.addColorStop(1, 'rgba(0, 176, 80, 0.2)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x - width/2, y - height, width, height);
        
        // Glass panel grid
        ctx.strokeStyle = 'rgba(0, 176, 80, 0.3)';
        ctx.lineWidth = 1 * scale;
        
        // Horizontal lines
        for (let i = 0; i <= 12; i++) {
          ctx.beginPath();
          ctx.moveTo(x - width/2, y - height + i * (height/12));
          ctx.lineTo(x + width/2, y - height + i * (height/12));
          ctx.stroke();
        }
        
        // Vertical lines
        for (let i = 0; i <= 5; i++) {
          ctx.beginPath();
          ctx.moveTo(x - width/2 + i * (width/5), y - height);
          ctx.lineTo(x - width/2 + i * (width/5), y);
          ctx.stroke();
        }
        
        // Roof detail
        ctx.fillStyle = 'rgba(0, 176, 80, 0.25)';
        ctx.fillRect(x - width/4, y - height - 10 * scale, width/2, 10 * scale);
      },
      
      // Futuristic Twisted Tower
      (x: number, y: number, scale: number, ctx: CanvasRenderingContext2D) => {
        const width = 35 * scale;
        const baseHeight = 90 * scale;
        
        // Create twisted effect with multiple sections
        for (let i = 0; i < 15; i++) {
          const sectionHeight = baseHeight / 15;
          const offset = Math.sin(i * 0.4) * 10 * scale;
          const sectionY = y - sectionHeight * (i + 1);
          
          // Main section
          const gradient = ctx.createLinearGradient(
            x - width/2 + offset, sectionY, 
            x + width/2 + offset, sectionY + sectionHeight
          );
          gradient.addColorStop(0, 'rgba(0, 176, 80, 0.1)');
          gradient.addColorStop(1, 'rgba(0, 176, 80, 0.2)');
          
          ctx.fillStyle = gradient;
          ctx.fillRect(x - width/2 + offset, sectionY, width, sectionHeight);
          
          // Windows (alternating pattern)
          if (i % 2 === 0) {
            for (let w = 0; w < 3; w++) {
              ctx.fillStyle = 'rgba(0, 176, 80, 0.4)';
              ctx.fillRect(
                x - width/2 + 5 * scale + offset + w * 10 * scale, 
                sectionY + 2 * scale, 
                5 * scale, 
                sectionHeight - 4 * scale
              );
            }
          } else {
            for (let w = 0; w < 2; w++) {
              ctx.fillStyle = 'rgba(0, 176, 80, 0.4)';
              ctx.fillRect(
                x - width/2 + 10 * scale + offset + w * 15 * scale, 
                sectionY + 2 * scale, 
                5 * scale, 
                sectionHeight - 4 * scale
              );
            }
          }
        }
        
        // Top crown
        ctx.beginPath();
        ctx.moveTo(x - 15 * scale, y - baseHeight);
        ctx.lineTo(x, y - baseHeight - 25 * scale);
        ctx.lineTo(x + 15 * scale, y - baseHeight);
        ctx.closePath();
        ctx.fillStyle = 'rgba(0, 176, 80, 0.3)';
        ctx.fill();
      },
      
      // Premium Residential Tower
      (x: number, y: number, scale: number, ctx: CanvasRenderingContext2D) => {
        const width = 50 * scale;
        const height = 80 * scale;
        
        // Main structure with gradient
        const gradient = ctx.createLinearGradient(x - width/2, y - height, x + width/2, y);
        gradient.addColorStop(0, 'rgba(0, 176, 80, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 176, 80, 0.25)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x - width/2, y - height, width, height);
        
        // Balconies
        for (let floor = 1; floor < 10; floor++) {
          const floorY = y - height + floor * 8 * scale;
          
          // Left balcony
          ctx.fillStyle = 'rgba(0, 176, 80, 0.2)';
          ctx.fillRect(x - width/2 - 8 * scale, floorY, 8 * scale, 6 * scale);
          
          // Right balcony
          ctx.fillRect(x + width/2, floorY, 8 * scale, 6 * scale);
          
          // Railing
          ctx.strokeStyle = 'rgba(0, 176, 80, 0.4)';
          ctx.lineWidth = 1 * scale;
          
          // Left railing
          ctx.beginPath();
          ctx.moveTo(x - width/2 - 8 * scale, floorY);
          ctx.lineTo(x - width/2, floorY);
          ctx.stroke();
          
          // Right railing
          ctx.beginPath();
          ctx.moveTo(x + width/2, floorY);
          ctx.lineTo(x + width/2 + 8 * scale, floorY);
          ctx.stroke();
        }
        
        // Windows
        for (let floor = 0; floor < 10; floor++) {
          const floorY = y - height + floor * 8 * scale;
          for (let window = 0; window < 5; window++) {
            const windowX = x - width/2 + 5 * scale + window * 10 * scale;
            ctx.fillStyle = 'rgba(0, 176, 80, 0.3)';
            ctx.fillRect(windowX, floorY + 1 * scale, 6 * scale, 5 * scale);
          }
        }
      },
      
      // Sustainable Green Building
      (x: number, y: number, scale: number, ctx: CanvasRenderingContext2D) => {
        const width = 60 * scale;
        const height = 70 * scale;
        
        // Main structure
        const gradient = ctx.createLinearGradient(x - width/2, y - height, x + width/2, y);
        gradient.addColorStop(0, 'rgba(0, 176, 80, 0.15)');
        gradient.addColorStop(1, 'rgba(0, 176, 80, 0.25)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x - width/2, y - height, width, height);
        
        // Terraced gardens
        for (let i = 0; i < 5; i++) {
          const terraceSizeX = width - i * 10 * scale;
          const terraceY = y - height + i * 15 * scale;
          
          ctx.fillStyle = 'rgba(0, 176, 80, 0.3)';
          ctx.fillRect(x - terraceSizeX/2, terraceY, terraceSizeX, 3 * scale);
          
          // Plant details on each terrace
          for (let p = 0; p < terraceSizeX / (8 * scale); p++) {
            ctx.beginPath();
            ctx.arc(
              x - terraceSizeX/2 + 5 * scale + p * 8 * scale,
              terraceY - 3 * scale,
              2 * scale,
              0,
              Math.PI * 2
            );
            ctx.fillStyle = 'rgba(0, 176, 80, 0.5)';
            ctx.fill();
          }
        }
        
        // Glass panels
        for (let i = 0; i < 8; i++) {
          for (let j = 0; j < 6; j++) {
            if ((i + j) % 2 === 0) {
              ctx.fillStyle = 'rgba(0, 176, 80, 0.2)';
            } else {
              ctx.fillStyle = 'rgba(0, 176, 80, 0.3)';
            }
            
            ctx.fillRect(
              x - width/2 + i * (width/8),
              y - height + 5 * scale + j * 10 * scale,
              width/8,
              10 * scale
            );
          }
        }
      }
    ];
    
    // Create buildings with varied styles and positions
    for (let i = 0; i < buildingCount; i++) {
      const scale = 0.6 + Math.random() * 0.4;
      buildings.push({
        x: Math.random() * rect.width,
        y: rect.height * 0.9,
        scale: scale,
        styleIndex: Math.floor(Math.random() * buildingStyles.length),
        hoverEffect: 0,
        hoverDirection: 1,
        hoverSpeed: 0.003 + Math.random() * 0.005,
        pulseEffect: Math.random() * Math.PI * 2
      });
    }
    
    // Urban landscape elements
    const landscape = {
      groundLine: rect.height * 0.9,
      horizon: rect.height * 0.7,
      hillPoints: [] as {x: number, y: number}[]
    };
    
    // Generate city skyline horizon
    const horizonSegments = 50;
    for (let i = 0; i <= horizonSegments; i++) {
      const x = (rect.width / horizonSegments) * i;
      const heightVar = Math.random() * 10 - 5;
      landscape.hillPoints.push({
        x,
        y: landscape.horizon + heightVar
      });
    }
    
    // Floating data elements - metrics, measurements, property data
    const floatingElements = [];
    const elementCount = 25;
    
    for (let i = 0; i < elementCount; i++) {
      floatingElements.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height * 0.7,
        size: 1.5 + Math.random() * 2,
        opacity: 0.1 + Math.random() * 0.3,
        speed: 0.1 + Math.random() * 0.4,
        pulseSpeed: 0.01 + Math.random() * 0.03,
        pulseTime: Math.random() * Math.PI * 2
      });
    }
    
    // Connection lines between buildings
    const connections = [];
    for (let i = 0; i < buildings.length - 1; i++) {
      connections.push({
        start: i,
        end: i + 1,
        progress: 0,
        speed: 0.002 + Math.random() * 0.003,
        active: false,
        activationDelay: i * 150
      });
    }
    // Add some random connections for more interesting network
    for (let i = 0; i < 5; i++) {
      const start = Math.floor(Math.random() * buildings.length);
      let end = Math.floor(Math.random() * buildings.length);
      while (end === start) end = Math.floor(Math.random() * buildings.length);
      
      connections.push({
        start,
        end,
        progress: 0,
        speed: 0.002 + Math.random() * 0.003,
        active: false,
        activationDelay: (buildings.length + i) * 150
      });
    }
    
    // Background grid
    const grid = {
      size: 40,
      opacity: 0.03
    };
    
    // Animation
    let animationTime = 0;
    let lastTimestamp = 0;
    
    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      animationTime += deltaTime;
      
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      // Draw background with gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, rect.height);
      gradient.addColorStop(0, 'rgba(0, 8, 4, 1)');
      gradient.addColorStop(0.7, 'rgba(0, 25, 15, 1)');
      gradient.addColorStop(1, 'rgba(0, 40, 25, 1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, rect.width, rect.height);
      
      // Draw grid
      ctx.strokeStyle = `rgba(0, 176, 80, ${grid.opacity})`;
      ctx.lineWidth = 0.5;
      
      // Horizontal grid lines
      for (let y = 0; y < rect.height; y += grid.size) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(rect.width, y);
        ctx.stroke();
      }
      
      // Vertical grid lines
      for (let x = 0; x < rect.width; x += grid.size) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, rect.height);
        ctx.stroke();
      }
      
      // Draw city horizon
      ctx.beginPath();
      ctx.moveTo(landscape.hillPoints[0].x, landscape.hillPoints[0].y);
      
      for (let i = 1; i < landscape.hillPoints.length; i++) {
        const point = landscape.hillPoints[i];
        const prevPoint = landscape.hillPoints[i - 1];
        
        // Create smooth curve between points
        const xc = (prevPoint.x + point.x) / 2;
        const yc = (prevPoint.y + point.y) / 2;
        ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, xc, yc);
      }
      
      ctx.lineTo(rect.width, rect.height);
      ctx.lineTo(0, rect.height);
      ctx.closePath();
      
      const cityGlow = ctx.createLinearGradient(0, landscape.horizon, 0, rect.height);
      cityGlow.addColorStop(0, 'rgba(0, 176, 80, 0.05)');
      cityGlow.addColorStop(1, 'rgba(0, 25, 15, 0)');
      ctx.fillStyle = cityGlow;
      ctx.fill();
      
      // Draw ground
      const groundGradient = ctx.createLinearGradient(0, landscape.groundLine, 0, rect.height);
      groundGradient.addColorStop(0, 'rgba(0, 50, 30, 0.2)');
      groundGradient.addColorStop(1, 'rgba(0, 30, 20, 0.1)');
      ctx.fillStyle = groundGradient;
      ctx.fillRect(0, landscape.groundLine, rect.width, rect.height - landscape.groundLine);
      
      // Draw connection lines between buildings
      connections.forEach((connection, index) => {
        // Activate connections sequentially
        if (animationTime > connection.activationDelay) {
          connection.active = true;
        }
        
        if (connection.active) {
          const startBuilding = buildings[connection.start];
          const endBuilding = buildings[connection.end];
          
          // Update progress
          connection.progress += connection.speed;
          if (connection.progress > 1) connection.progress = 0;
          
          // Draw line - more sophisticated curved connections
          const startX = startBuilding.x;
          const startY = startBuilding.y - startBuilding.scale * 60; // Higher up the building
          const endX = endBuilding.x;
          const endY = endBuilding.y - endBuilding.scale * 60;
          
          // Create curved connection with control points
          const controlPointY = Math.min(startY, endY) - 30 - Math.random() * 40;
          const distance = Math.abs(startX - endX);
          const controlPointX1 = startX + (endX - startX) * 0.3;
          const controlPointX2 = startX + (endX - startX) * 0.7;
          
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.bezierCurveTo(
            controlPointX1, controlPointY, 
            controlPointX2, controlPointY, 
            endX, endY
          );
          
          // Line gradient
          const lineGradient = ctx.createLinearGradient(startX, startY, endX, endY);
          lineGradient.addColorStop(0, 'rgba(0, 176, 80, 0.1)');
          lineGradient.addColorStop(0.5, 'rgba(0, 176, 80, 0.2)');
          lineGradient.addColorStop(1, 'rgba(0, 176, 80, 0.1)');
          
          ctx.strokeStyle = lineGradient;
          ctx.lineWidth = 1;
          ctx.stroke();
          
          // Draw moving data packet with glow
          const t = connection.progress;
          // Bezier formula for position at t
          const mt = 1 - t;
          const packetX = mt*mt*mt*startX + 3*mt*mt*t*controlPointX1 + 3*mt*t*t*controlPointX2 + t*t*t*endX;
          const packetY = mt*mt*mt*startY + 3*mt*mt*t*controlPointY + 3*mt*t*t*controlPointY + t*t*t*endY;
          
          // Glow effect
          const glowRadius = 6;
          const glowGradient = ctx.createRadialGradient(packetX, packetY, 0, packetX, packetY, glowRadius);
          glowGradient.addColorStop(0, 'rgba(0, 176, 80, 0.8)');
          glowGradient.addColorStop(1, 'rgba(0, 176, 80, 0)');
          
          ctx.fillStyle = glowGradient;
          ctx.beginPath();
          ctx.arc(packetX, packetY, glowRadius, 0, Math.PI * 2);
          ctx.fill();
          
          // Actual data packet
          ctx.beginPath();
          ctx.arc(packetX, packetY, 2, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 250, 120, 0.9)';
          ctx.fill();
        }
      });
      
      // Draw buildings
      buildings.forEach((building, index) => {
        // Update hover effect
        building.hoverEffect += building.hoverDirection * building.hoverSpeed;
        if (building.hoverEffect > 0.5 || building.hoverEffect < 0) {
          building.hoverDirection *= -1;
        }
        
        // Update pulse effect
        building.pulseEffect += 0.02;
        const pulse = Math.sin(building.pulseEffect) * 0.5 + 0.5;
        
        ctx.save();
        // Apply slight floating effect
        ctx.translate(building.x, building.y - building.hoverEffect * 3);
        
        // Draw building shadow
        ctx.beginPath();
        ctx.ellipse(0, 5, 20 * building.scale, 5 * building.scale, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
        ctx.fill();
        
        // Draw the building using the style function
        buildingStyles[building.styleIndex](0, 0, building.scale, ctx);
        
        // Draw glow effect
        const glowRadius = 60 * building.scale;
        const glowGradient = ctx.createRadialGradient(0, -40 * building.scale, 0, 0, -40 * building.scale, glowRadius);
        glowGradient.addColorStop(0, `rgba(0, 176, 80, ${0.1 * pulse})`);
        glowGradient.addColorStop(1, 'rgba(0, 176, 80, 0)');
        
        ctx.beginPath();
        ctx.arc(0, -40 * building.scale, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();
        
        ctx.restore();
      });
      
      // Draw floating elements
      floatingElements.forEach(element => {
        // Update position
        element.y -= element.speed;
        if (element.y < 0) {
          element.y = rect.height;
          element.x = Math.random() * rect.width;
        }
        
        // Update pulse
        element.pulseTime += element.pulseSpeed;
        const pulse = Math.sin(element.pulseTime) * 0.5 + 0.5;
        
        // Draw element
        ctx.beginPath();
        ctx.arc(element.x, element.y, element.size * (0.7 + pulse * 0.3), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 176, 80, ${element.opacity * pulse})`;
        ctx.fill();
        
        // Draw connecting lines to nearby elements
        floatingElements.forEach(otherElement => {
          const dx = element.x - otherElement.x;
          const dy = element.y - otherElement.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100 && distance > 0) {
            ctx.beginPath();
            ctx.moveTo(element.x, element.y);
            ctx.lineTo(otherElement.x, otherElement.y);
            ctx.strokeStyle = `rgba(0, 176, 80, ${0.05 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      
      // Occasional floating real estate data elements
      if (Math.random() > 0.98) {
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height * 0.6;
        
        ctx.font = '10px monospace';
        ctx.fillStyle = 'rgba(0, 176, 80, 0.3)';
        
        // Random real estate metrics
        const metrics = ["AREA: 120m²", "VALOR: R$850K", "APTOS: 24", "ROI: 12%", "VGV: R$12M"];
        ctx.fillText(metrics[Math.floor(Math.random() * metrics.length)], x, y);
      }
      
      requestAnimationFrame(animate);
    };
    
    const animationFrame = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
      />
      <div className="absolute top-6 right-6 text-vetor-green/80 animate-pulse z-10">
        <Building2 className="w-8 h-8" />
      </div>
    </div>
  );
};

export default RealEstateAnimation;
