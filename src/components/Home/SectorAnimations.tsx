
import React, { useEffect, useRef } from 'react';
import { Calculator, ChevronRight, ChevronLeft, World } from 'lucide-react';

// Animation for Fiscal Technology
export const FiscalAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configure canvas
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Create calculators and documents
    const calculators: {
      x: number;
      y: number;
      size: number;
      rotation: number;
      color: string;
      rotationSpeed: number;
      opacity: number;
    }[] = [];

    const createCalculators = () => {
      calculators.length = 0;
      const calculatorCount = 15;
      
      for (let i = 0; i < calculatorCount; i++) {
        calculators.push({
          x: Math.random() * canvas.width / 2,
          y: Math.random() * canvas.height / 2,
          size: Math.random() * 15 + 10,
          rotation: Math.random() * Math.PI * 2,
          color: '#00B050',
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    };
    
    createCalculators();
    
    // Create documents/receipts
    const documents: {
      x: number;
      y: number;
      width: number;
      height: number;
      speed: number;
      color: string;
    }[] = [];
    
    const createDocuments = () => {
      documents.length = 0;
      const documentCount = 8;
      
      for (let i = 0; i < documentCount; i++) {
        documents.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          width: Math.random() * 30 + 30,
          height: Math.random() * 20 + 40,
          speed: Math.random() * 0.5 + 0.2,
          color: i % 2 === 0 ? '#00B050' : '#008C41'
        });
      }
    };
    
    createDocuments();
    
    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      // Draw documents floating in background
      documents.forEach(doc => {
        doc.y -= doc.speed;
        
        if (doc.y + doc.height < 0) {
          doc.y = rect.height;
          doc.x = Math.random() * rect.width;
        }
        
        ctx.fillStyle = doc.color;
        ctx.globalAlpha = 0.2;
        ctx.fillRect(doc.x, doc.y, doc.width, doc.height);
        
        // Lines on document
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = '#ffffff';
        for (let i = 0; i < 3; i++) {
          ctx.fillRect(doc.x + 5, doc.y + 8 + i * 7, doc.width - 10, 2);
        }
        
        ctx.globalAlpha = 1;
      });
      
      // Draw calculators
      calculators.forEach(calc => {
        calc.rotation += calc.rotationSpeed;
        
        ctx.save();
        ctx.translate(calc.x, calc.y);
        ctx.rotate(calc.rotation);
        
        // Draw calculator
        ctx.globalAlpha = calc.opacity;
        
        // Calculator body
        ctx.fillStyle = calc.color;
        ctx.fillRect(-calc.size / 2, -calc.size / 2, calc.size, calc.size);
        
        // Calculator display
        ctx.fillStyle = '#000000';
        ctx.fillRect(-calc.size / 2 + 2, -calc.size / 2 + 2, calc.size - 4, calc.size / 3);
        
        // Calculator buttons
        ctx.fillStyle = '#ffffff';
        const buttonSize = calc.size / 5;
        const startX = -calc.size / 2 + 2;
        const startY = -calc.size / 2 + calc.size / 3 + 4;
        
        for (let row = 0; row < 3; row++) {
          for (let col = 0; col < 3; col++) {
            ctx.fillRect(
              startX + col * (buttonSize + 2), 
              startY + row * (buttonSize + 2), 
              buttonSize, 
              buttonSize
            );
          }
        }
        
        ctx.restore();
      });
      
      // Draw a central feature
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const radius = Math.min(rect.width, rect.height) / 5;
      
      // Draw rotating dollar sign
      const time = Date.now() / 1000;
      
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(time * 0.5);
      
      // Green circle background
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 176, 80, 0.3)';
      ctx.fill();
      
      // Dollar sign
      ctx.fillStyle = '#00B050';
      ctx.font = `bold ${radius}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('$', 0, 0);
      
      ctx.restore();
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-0"
    />
  );
};

// Animation for Logistics Technology
export const LogisticsAnimation: React.FC = () => {
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

    // Create trucks
    const trucks: {
      x: number;
      y: number;
      width: number;
      height: number;
      speed: number;
      directionX: number;
      color: string;
    }[] = [];
    
    const createTrucks = () => {
      trucks.length = 0;
      const truckCount = 8;
      const rect = canvas.getBoundingClientRect();
      
      for (let i = 0; i < truckCount; i++) {
        const truckWidth = Math.random() * 30 + 20;
        const directionX = Math.random() > 0.5 ? 1 : -1;
        
        trucks.push({
          x: directionX > 0 ? -truckWidth - Math.random() * 100 : rect.width + Math.random() * 100,
          y: Math.random() * (rect.height - 40) + 20,
          width: truckWidth,
          height: truckWidth / 2,
          speed: Math.random() * 1 + 0.5,
          directionX: directionX,
          color: i % 2 === 0 ? '#00B050' : '#008C41'
        });
      }
    };
    
    createTrucks();
    
    // Create routes (roads)
    const routes: {
      y: number;
      dashOffset: number;
    }[] = [];
    
    const createRoutes = () => {
      routes.length = 0;
      const routeCount = 5;
      const rect = canvas.getBoundingClientRect();
      
      const step = rect.height / (routeCount + 1);
      
      for (let i = 0; i < routeCount; i++) {
        routes.push({
          y: step * (i + 1),
          dashOffset: Math.random() * 20
        });
      }
    };
    
    createRoutes();
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      // Draw routes
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.3)';
      ctx.lineWidth = 2;
      
      routes.forEach(route => {
        // Update dash offset for animation
        route.dashOffset -= 0.5;
        if (route.dashOffset < 0) {
          route.dashOffset = 20;
        }
        
        ctx.beginPath();
        ctx.setLineDash([15, 5]);
        ctx.lineDashOffset = route.dashOffset;
        ctx.moveTo(0, route.y);
        ctx.lineTo(rect.width, route.y);
        ctx.stroke();
      });
      
      ctx.setLineDash([]);
      
      // Draw trucks
      trucks.forEach(truck => {
        // Move truck
        truck.x += truck.speed * truck.directionX;
        
        // Reset truck position when it goes off canvas
        if ((truck.directionX > 0 && truck.x > rect.width + truck.width) || 
            (truck.directionX < 0 && truck.x < -truck.width)) {
          truck.directionX = Math.random() > 0.5 ? 1 : -1;
          truck.x = truck.directionX > 0 ? -truck.width : rect.width;
          truck.y = Math.random() * (rect.height - 40) + 20;
          truck.speed = Math.random() * 1 + 0.5;
        }
        
        // Draw truck
        ctx.save();
        
        // Face the truck in the direction of movement
        if (truck.directionX < 0) {
          ctx.translate(truck.x + truck.width, truck.y);
          ctx.scale(-1, 1);
        } else {
          ctx.translate(truck.x, truck.y);
        }
        
        // Truck body
        ctx.fillStyle = truck.color;
        ctx.fillRect(0, 0, truck.width * 0.7, truck.height);
        
        // Truck cabin
        ctx.fillStyle = 'rgba(0, 176, 80, 0.8)';
        ctx.fillRect(truck.width * 0.7, truck.height * 0.2, truck.width * 0.3, truck.height * 0.8);
        
        // Wheels
        ctx.fillStyle = '#000000';
        const wheelRadius = truck.height * 0.3;
        
        // Front wheels
        ctx.beginPath();
        ctx.arc(truck.width * 0.8, truck.height + wheelRadius * 0.2, wheelRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // Back wheels
        ctx.beginPath();
        ctx.arc(truck.width * 0.2, truck.height + wheelRadius * 0.2, wheelRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // Window
        ctx.fillStyle = '#333333';
        ctx.fillRect(truck.width * 0.75, truck.height * 0.3, truck.width * 0.2, truck.height * 0.3);
        
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
      className="absolute inset-0 w-full h-full z-0"
    />
  );
};

// Animation for Custom Technology Solutions - World with connected points
export const CustomTechAnimation: React.FC = () => {
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

    // Create points for connections
    const points: {
      x: number;
      y: number;
      z: number;
      size: number;
      speed: { x: number; y: number; z: number };
      color: string;
    }[] = [];
    
    const createPoints = () => {
      points.length = 0;
      const pointCount = 30;
      
      for (let i = 0; i < pointCount; i++) {
        // Create points on a sphere
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const radius = 80;
        
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
        
        points.push({
          x: x,
          y: y,
          z: z,
          size: Math.random() * 2 + 1,
          speed: {
            x: (Math.random() - 0.5) * 0.2,
            y: (Math.random() - 0.5) * 0.2,
            z: (Math.random() - 0.5) * 0.2
          },
          color: i % 3 === 0 ? '#00B050' : (i % 3 === 1 ? '#008C41' : '#FFFFFF')
        });
      }
    };
    
    createPoints();
    
    // Animation
    let rotation = 0;
    
    const animate = () => {
      requestAnimationFrame(animate);
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      // Slowly rotate the entire system
      rotation += 0.002;
      
      // Calculate center of the canvas
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Draw globe outline
      ctx.beginPath();
      ctx.arc(centerX, centerY, 80, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Draw a few circles to represent latitude lines
      for (let i = 1; i <= 3; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, 80 * (i/4), 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 176, 80, 0.1)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
      
      // Update and draw points
      points.forEach(point => {
        // Apply rotation
        const rotX = point.x * Math.cos(rotation) - point.z * Math.sin(rotation);
        const rotZ = point.x * Math.sin(rotation) + point.z * Math.cos(rotation);
        
        // Calculate 2D position
        const scale = 400 / (400 + rotZ); // Perspective scale
        const x2d = centerX + rotX * scale;
        const y2d = centerY + point.y * scale;
        
        // Draw the point
        ctx.beginPath();
        ctx.arc(x2d, y2d, point.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = point.color;
        ctx.globalAlpha = 0.7 * scale;
        ctx.fill();
        ctx.globalAlpha = 1;
      });
      
      // Draw connections between points
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.2)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const p1 = points[i];
          const p2 = points[j];
          
          // Calculate rotated positions
          const p1RotX = p1.x * Math.cos(rotation) - p1.z * Math.sin(rotation);
          const p1RotZ = p1.x * Math.sin(rotation) + p1.z * Math.cos(rotation);
          
          const p2RotX = p2.x * Math.cos(rotation) - p2.z * Math.sin(rotation);
          const p2RotZ = p2.x * Math.sin(rotation) + p2.z * Math.cos(rotation);
          
          // Calculate 2D positions
          const scale1 = 400 / (400 + p1RotZ);
          const scale2 = 400 / (400 + p2RotZ);
          
          const x1 = centerX + p1RotX * scale1;
          const y1 = centerY + p1.y * scale1;
          
          const x2 = centerX + p2RotX * scale2;
          const y2 = centerY + p2.y * scale2;
          
          // Calculate 3D distance
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = p1.z - p2.z;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          // Only connect close points
          if (distance < 50) {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            
            // Fade lines based on distance
            const opacity = 0.3 * (1 - distance / 50);
            ctx.strokeStyle = `rgba(0, 176, 80, ${opacity})`;
            
            ctx.stroke();
          }
        }
      }
      
      // Draw pulses
      if (Math.random() < 0.02) {
        const sourceIndex = Math.floor(Math.random() * points.length);
        const targetIndex = Math.floor(Math.random() * points.length);
        
        if (sourceIndex !== targetIndex) {
          const source = points[sourceIndex];
          const target = points[targetIndex];
          
          // Animation for packet transfer would go here
          // For simplicity, we'll just make the target point briefly bigger
          target.size *= 2;
          
          // Reset size after a delay
          setTimeout(() => {
            target.size /= 2;
          }, 300);
        }
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
      className="absolute inset-0 w-full h-full z-0"
    />
  );
};
