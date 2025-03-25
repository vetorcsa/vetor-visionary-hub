
import React, { useEffect, useRef } from 'react';
import { House } from 'lucide-react';

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
    
    // House models - more elegant and varied designs
    const houses = [];
    const houseCount = 6;
    
    // House styles - more premium, elegant designs
    const houseStyles = [
      // Modern House
      (x: number, y: number, scale: number, ctx: CanvasRenderingContext2D) => {
        const width = 35 * scale;
        const height = 25 * scale;
        
        // House body
        ctx.fillStyle = 'rgba(0, 176, 80, 0.15)';
        ctx.fillRect(x - width/2, y - height, width, height);
        
        // Roof
        ctx.beginPath();
        ctx.moveTo(x - width/2 - 5 * scale, y - height);
        ctx.lineTo(x + width/2 + 5 * scale, y - height);
        ctx.lineTo(x + width/2 + 5 * scale, y - height - 5 * scale);
        ctx.lineTo(x - width/2 - 5 * scale, y - height - 5 * scale);
        ctx.closePath();
        ctx.fillStyle = 'rgba(0, 176, 80, 0.25)';
        ctx.fill();
        
        // Windows
        ctx.fillStyle = 'rgba(0, 176, 80, 0.3)';
        ctx.fillRect(x - width/4, y - height + height/4, width/6, height/4);
        ctx.fillRect(x + width/8, y - height + height/4, width/6, height/4);
        
        // Door
        ctx.fillStyle = 'rgba(0, 176, 80, 0.25)';
        ctx.fillRect(x - width/8, y - height/2, width/4, height/2);
      },
      
      // Luxury Villa
      (x: number, y: number, scale: number, ctx: CanvasRenderingContext2D) => {
        const width = 40 * scale;
        const height = 28 * scale;
        
        // Main building
        ctx.fillStyle = 'rgba(0, 176, 80, 0.15)';
        ctx.fillRect(x - width/2, y - height, width, height);
        
        // Roof (sloped)
        ctx.beginPath();
        ctx.moveTo(x - width/2 - 8 * scale, y - height);
        ctx.lineTo(x + width/2 + 8 * scale, y - height);
        ctx.lineTo(x, y - height - 15 * scale);
        ctx.closePath();
        ctx.fillStyle = 'rgba(0, 176, 80, 0.25)';
        ctx.fill();
        
        // Windows
        ctx.fillStyle = 'rgba(0, 176, 80, 0.3)';
        const windowWidth = width / 8;
        const windowHeight = height / 6;
        const windowSpacing = width / 4;
        
        // First floor windows
        for (let i = 0; i < 3; i++) {
          ctx.fillRect(
            x - width/3 + i * windowSpacing, 
            y - height/1.5, 
            windowWidth, 
            windowHeight
          );
        }
        
        // Second floor windows
        for (let i = 0; i < 3; i++) {
          ctx.fillRect(
            x - width/3 + i * windowSpacing, 
            y - height + height/5, 
            windowWidth, 
            windowHeight
          );
        }
        
        // Door
        ctx.fillStyle = 'rgba(0, 176, 80, 0.25)';
        ctx.fillRect(x - width/8, y - height/3, width/4, height/3);
      },
      
      // Contemporary House
      (x: number, y: number, scale: number, ctx: CanvasRenderingContext2D) => {
        const width = 38 * scale;
        const height = 22 * scale;
        
        // Main structure
        ctx.fillStyle = 'rgba(0, 176, 80, 0.15)';
        ctx.fillRect(x - width/2, y - height, width, height);
        
        // Second floor extension
        ctx.fillStyle = 'rgba(0, 176, 80, 0.2)';
        ctx.fillRect(x - width/2, y - height, width/2, height/2);
        
        // Windows (large panoramic)
        ctx.fillStyle = 'rgba(0, 176, 80, 0.3)';
        ctx.fillRect(x, y - height + height/6, width/2 - 5 * scale, height/2);
        
        // Additional windows
        ctx.fillRect(x - width/2 + width/10, y - height + height/4, width/5, height/6);
        
        // Door
        ctx.fillStyle = 'rgba(0, 176, 80, 0.25)';
        ctx.fillRect(x - width/4, y - height/3, width/6, height/3);
      }
    ];
    
    // Create houses with varied styles and positions
    for (let i = 0; i < houseCount; i++) {
      const scale = 0.8 + Math.random() * 0.6;
      houses.push({
        x: (rect.width / (houseCount + 1)) * (i + 1),
        y: rect.height * 0.75,
        scale: scale,
        styleIndex: Math.floor(Math.random() * houseStyles.length),
        hoverEffect: 0,
        hoverDirection: 1,
        hoverSpeed: 0.005 + Math.random() * 0.01,
        pulseEffect: Math.random() * Math.PI * 2
      });
    }
    
    // Landscape elements
    const landscape = {
      groundLine: rect.height * 0.75,
      hillPoints: [] as {x: number, y: number}[]
    };
    
    // Generate smooth hills
    const hillSegments = 10;
    for (let i = 0; i <= hillSegments; i++) {
      const x = (rect.width / hillSegments) * i;
      const hillHeight = Math.sin(i / hillSegments * Math.PI) * 20;
      landscape.hillPoints.push({
        x,
        y: landscape.groundLine + hillHeight
      });
    }
    
    // Floating UI elements - data points, measurements, etc.
    const floatingElements = [];
    const elementCount = 15;
    
    for (let i = 0; i < elementCount; i++) {
      floatingElements.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height * 0.6,
        size: 2 + Math.random() * 3,
        opacity: 0.1 + Math.random() * 0.2,
        speed: 0.2 + Math.random() * 0.5,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        pulseTime: Math.random() * Math.PI * 2
      });
    }
    
    // Connection lines between houses
    const connections = [];
    for (let i = 0; i < houses.length - 1; i++) {
      connections.push({
        start: i,
        end: i + 1,
        progress: 0,
        speed: 0.003 + Math.random() * 0.002,
        active: false,
        activationDelay: i * 100
      });
    }
    // Add one connection from last to first house to complete the circle
    connections.push({
      start: houses.length - 1,
      end: 0,
      progress: 0,
      speed: 0.003 + Math.random() * 0.002,
      active: false,
      activationDelay: houses.length * 100
    });
    
    // Background grid
    const grid = {
      size: 30,
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
      gradient.addColorStop(0, 'rgba(0, 10, 5, 1)');
      gradient.addColorStop(1, 'rgba(0, 30, 15, 1)');
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
      
      // Draw landscape
      // Ground base
      const groundGradient = ctx.createLinearGradient(0, landscape.groundLine, 0, rect.height);
      groundGradient.addColorStop(0, 'rgba(0, 80, 40, 0.2)');
      groundGradient.addColorStop(1, 'rgba(0, 60, 30, 0.05)');
      ctx.fillStyle = groundGradient;
      ctx.beginPath();
      ctx.moveTo(0, landscape.groundLine);
      ctx.lineTo(rect.width, landscape.groundLine);
      ctx.lineTo(rect.width, rect.height);
      ctx.lineTo(0, rect.height);
      ctx.closePath();
      ctx.fill();
      
      // Draw hills
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
      
      const hillGradient = ctx.createLinearGradient(0, landscape.groundLine, 0, rect.height);
      hillGradient.addColorStop(0, 'rgba(0, 100, 50, 0.1)');
      hillGradient.addColorStop(1, 'rgba(0, 80, 40, 0)');
      ctx.fillStyle = hillGradient;
      ctx.fill();
      
      // Draw connection lines between houses
      connections.forEach((connection, index) => {
        // Activate connections sequentially
        if (animationTime > connection.activationDelay) {
          connection.active = true;
        }
        
        if (connection.active) {
          const startHouse = houses[connection.start];
          const endHouse = houses[connection.end];
          
          // Update progress
          connection.progress += connection.speed;
          if (connection.progress > 1) connection.progress = 0;
          
          // Draw line
          const startX = startHouse.x;
          const startY = startHouse.y - startHouse.scale * 30;
          const endX = endHouse.x;
          const endY = endHouse.y - endHouse.scale * 30;
          
          // Create curved connection
          const midX = (startX + endX) / 2;
          const midY = Math.min(startY, endY) - 50;
          
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.quadraticCurveTo(midX, midY, endX, endY);
          ctx.strokeStyle = 'rgba(0, 176, 80, 0.15)';
          ctx.lineWidth = 1;
          ctx.stroke();
          
          // Draw moving data packet
          const t = connection.progress;
          // Quadratic bezier formula for position at t
          const packetX = (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * midX + t * t * endX;
          const packetY = (1 - t) * (1 - t) * startY + 2 * (1 - t) * t * midY + t * t * endY;
          
          ctx.beginPath();
          ctx.arc(packetX, packetY, 3, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 176, 80, 0.8)';
          ctx.fill();
        }
      });
      
      // Draw houses
      houses.forEach((house, index) => {
        // Update hover effect
        house.hoverEffect += house.hoverDirection * house.hoverSpeed;
        if (house.hoverEffect > 0.5 || house.hoverEffect < 0) {
          house.hoverDirection *= -1;
        }
        
        // Update pulse effect
        house.pulseEffect += 0.03;
        const pulse = Math.sin(house.pulseEffect) * 0.5 + 0.5;
        
        ctx.save();
        // Apply slight floating effect
        ctx.translate(house.x, house.y - house.hoverEffect * 5);
        
        // Draw house shadow
        ctx.beginPath();
        ctx.ellipse(0, 5, 30 * house.scale, 10 * house.scale, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fill();
        
        // Draw the house using the style function
        houseStyles[house.styleIndex](0, 0, house.scale, ctx);
        
        // Draw glow effect
        const glowRadius = 40 * house.scale;
        const glowGradient = ctx.createRadialGradient(0, -15 * house.scale, 0, 0, -15 * house.scale, glowRadius);
        glowGradient.addColorStop(0, `rgba(0, 176, 80, ${0.1 * pulse})`);
        glowGradient.addColorStop(1, 'rgba(0, 176, 80, 0)');
        
        ctx.beginPath();
        ctx.arc(0, -15 * house.scale, glowRadius, 0, Math.PI * 2);
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
          
          if (distance < 80 && distance > 0) {
            ctx.beginPath();
            ctx.moveTo(element.x, element.y);
            ctx.lineTo(otherElement.x, otherElement.y);
            ctx.strokeStyle = `rgba(0, 176, 80, ${0.05 * (1 - distance / 80)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      
      // Occasional floating text elements
      if (Math.random() > 0.99) {
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height * 0.5;
        
        ctx.font = '10px monospace';
        ctx.fillStyle = 'rgba(0, 176, 80, 0.3)';
        ctx.fillText('IMOB', x, y);
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
        <House className="w-6 h-6" />
      </div>
    </div>
  );
};

export default RealEstateAnimation;
