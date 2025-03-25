
import React, { useEffect, useRef } from 'react';

const LogisticsAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas
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

    // Define the globe radius and center
    const globeRadius = Math.min(rect.width, rect.height) * 0.3;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Create connection points around the globe - fewer points for elegance
    const connectionPoints = [];
    const connectionCount = 10;
    
    // Generate connection points distributed across the globe
    for (let i = 0; i < connectionCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / connectionCount);
      const theta = Math.sqrt(connectionCount * Math.PI) * phi;
      
      const x = centerX + globeRadius * Math.cos(theta) * Math.sin(phi);
      const y = centerY + globeRadius * Math.sin(theta) * Math.sin(phi);
      
      const depthFactor = Math.sin(phi) * Math.cos(theta);
      const opacity = 0.2 + (depthFactor + 1) * 0.3;
      
      connectionPoints.push({
        x,
        y,
        size: 1.5 + Math.random() * 1.5,
        opacity,
        connections: [],
        active: Math.random() > 0.4
      });
    }
    
    // Create connections between points - fewer connections for cleaner look
    connectionPoints.forEach((point, index) => {
      const connectionCount = 1 + Math.floor(Math.random() * 2);
      
      for (let i = 0; i < connectionCount; i++) {
        let targetIndex;
        do {
          targetIndex = Math.floor(Math.random() * connectionPoints.length);
        } while (targetIndex === index || point.connections.includes(targetIndex));
        
        point.connections.push(targetIndex);
      }
    });
    
    // Create moving packages/data points between connection points
    const packages = [];
    const packageCount = 4; // Fewer packages for elegance
    
    for (let i = 0; i < packageCount; i++) {
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
        speed: 0.002 + Math.random() * 0.002,
        color: i % 2 === 0 ? '#00B050' : '#7ED957',
        size: 2 + Math.random() * 2
      });
    }
    
    let rotationAngle = 0;
    
    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      rotationAngle += 0.001; // Slower rotation for elegance
      
      // Dark background for night-time globe effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      ctx.fillRect(0, 0, rect.width, rect.height);
      
      // Draw globe outline
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.15)';
      ctx.lineWidth = 0.5;
      
      // Draw fewer longitude lines for cleaner look
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2 + rotationAngle;
        
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
      
      // Draw fewer latitude lines for cleaner look
      for (let i = 1; i < 4; i++) {
        const radius = globeRadius * (i / 4);
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Draw elegant glow around the globe
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, globeRadius * 1.2
      );
      gradient.addColorStop(0, 'rgba(0, 176, 80, 0.15)');
      gradient.addColorStop(0.5, 'rgba(0, 176, 80, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 176, 80, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius * 1.2, 0, Math.PI * 2);
      ctx.fill();
      
      // Update connection points
      connectionPoints.forEach((point, index) => {
        // Random activation of points
        if (Math.random() > 0.998) {
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
              ctx.strokeStyle = `rgba(0, 176, 80, ${(point.opacity + targetPoint.opacity) * 0.2})`;
              ctx.lineWidth = 0.5;
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
          
          do {
            pkg.endPointIndex = Math.floor(Math.random() * connectionPoints.length);
          } while (pkg.endPointIndex === pkg.startPointIndex);
          
          connectionPoints[pkg.startPointIndex].active = true;
          connectionPoints[pkg.endPointIndex].active = true;
        }
        
        const startPoint = connectionPoints[pkg.startPointIndex];
        const endPoint = connectionPoints[pkg.endPointIndex];
        
        // Calculate current position with slight arc
        const dx = endPoint.x - startPoint.x;
        const dy = endPoint.y - startPoint.y;
        
        const midX = (startPoint.x + endPoint.x) / 2;
        const midY = (startPoint.y + endPoint.y) / 2;
        const arcHeight = Math.sqrt(dx * dx + dy * dy) * 0.1;
        
        const t = pkg.progress;
        const mt = 1 - t;
        
        pkg.x = mt * mt * startPoint.x + 2 * mt * t * midX + t * t * endPoint.x;
        pkg.y = mt * mt * startPoint.y + 2 * mt * t * (midY - arcHeight * Math.sin(t * Math.PI)) + t * t * endPoint.y;
        
        // Draw package/data packet
        ctx.beginPath();
        ctx.arc(pkg.x, pkg.y, pkg.size, 0, Math.PI * 2);
        ctx.fillStyle = pkg.color;
        ctx.fill();
      });
      
      // Draw elegant center glow
      const centerGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, globeRadius * 0.15);
      centerGradient.addColorStop(0, 'rgba(0, 176, 80, 0.3)');
      centerGradient.addColorStop(1, 'rgba(0, 176, 80, 0)');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius * 0.15, 0, Math.PI * 2);
      ctx.fillStyle = centerGradient;
      ctx.fill();
      
      // Draw stars for night-time effect
      for (let i = 0; i < 50; i++) {
        if (Math.random() > 0.99) {
          const x = Math.random() * rect.width;
          const y = Math.random() * rect.height;
          const size = Math.random() * 1;
          
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2})`;
          ctx.fill();
        }
      }
    };
    
    const animationFrame = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-0"
    />
  );
};

export default LogisticsAnimation;
