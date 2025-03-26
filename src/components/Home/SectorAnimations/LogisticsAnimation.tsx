
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
    
    // Create connection points around the globe
    const connectionPoints = [];
    const connectionCount = 14; // More connection points
    
    // Generate connection points distributed across the globe
    for (let i = 0; i < connectionCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / connectionCount);
      const theta = Math.sqrt(connectionCount * Math.PI) * phi;
      
      const x = centerX + globeRadius * Math.cos(theta) * Math.sin(phi);
      const y = centerY + globeRadius * Math.sin(theta) * Math.sin(phi);
      
      const depthFactor = Math.sin(phi) * Math.cos(theta);
      const opacity = 0.4 + (depthFactor + 1) * 0.5; // More vibrant opacity
      
      connectionPoints.push({
        x,
        y,
        size: 2 + Math.random() * 2, // Slightly larger points
        opacity,
        connections: [],
        active: Math.random() > 0.2 // More active points
      });
    }
    
    // Create connections between points
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
    const packageCount = 8; // More packages for more activity
    
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
        speed: 0.003 + Math.random() * 0.004, // Slightly faster speed
        color: i % 2 === 0 ? '#00B050' : '#7ED957',
        size: 4 + Math.random() * 3, // Slightly larger
        rotation: Math.random() * Math.PI * 2 // Add rotation for cubes
      });
    }
    
    // Create background floating elements (numbers, symbols)
    const floatingElements = [];
    for (let i = 0; i < 40; i++) {
      floatingElements.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        size: 8 + Math.random() * 6,
        speed: 0.2 + Math.random() * 0.6,
        value: Math.random() > 0.7 ? 
          ['0', '1', '↑', '↓', '→', '←', '+', '⊗', '□', '◇'][Math.floor(Math.random() * 10)] : '',
        opacity: 0.2 + Math.random() * 0.2
      });
    }
    
    let rotationAngle = 0;
    
    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      rotationAngle += 0.001; // Slower rotation for elegance
      
      // Dark background for night-time globe effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      ctx.fillRect(0, 0, rect.width, rect.height);

      // Draw floating elements (background)
      floatingElements.forEach(element => {
        element.y -= element.speed;
        
        if (element.y < 0) {
          element.y = rect.height;
          element.x = Math.random() * rect.width;
          element.value = Math.random() > 0.7 ? 
            ['0', '1', '↑', '↓', '→', '←', '+', '⊗', '□', '◇'][Math.floor(Math.random() * 10)] : '';
        }
        
        if (element.value) {
          ctx.fillStyle = `rgba(0, 176, 80, ${element.opacity})`;
          ctx.font = `${element.size}px monospace`;
          ctx.textAlign = 'center';
          ctx.fillText(element.value, element.x, element.y);
        } else {
          // Draw small cube instead of just a symbol
          ctx.save();
          ctx.translate(element.x, element.y);
          ctx.rotate(rotationAngle * 2);
          
          const cubeSize = element.size / 2;
          
          // Front face
          ctx.fillStyle = `rgba(0, 176, 80, ${element.opacity})`;
          ctx.fillRect(-cubeSize/2, -cubeSize/2, cubeSize, cubeSize);
          
          // Top face
          ctx.beginPath();
          ctx.moveTo(-cubeSize/2, -cubeSize/2);
          ctx.lineTo(-cubeSize/2 + cubeSize/3, -cubeSize/2 - cubeSize/3);
          ctx.lineTo(cubeSize/2 + cubeSize/3, -cubeSize/2 - cubeSize/3);
          ctx.lineTo(cubeSize/2, -cubeSize/2);
          ctx.closePath();
          ctx.fillStyle = `rgba(0, 200, 100, ${element.opacity * 0.8})`;
          ctx.fill();
          
          // Right face
          ctx.beginPath();
          ctx.moveTo(cubeSize/2, -cubeSize/2);
          ctx.lineTo(cubeSize/2 + cubeSize/3, -cubeSize/2 - cubeSize/3);
          ctx.lineTo(cubeSize/2 + cubeSize/3, cubeSize/2 - cubeSize/3);
          ctx.lineTo(cubeSize/2, cubeSize/2);
          ctx.closePath();
          ctx.fillStyle = `rgba(0, 150, 80, ${element.opacity * 0.6})`;
          ctx.fill();
          
          ctx.restore();
        }
      });
      
      // Draw globe outline with more vibrant color
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.3)'; // More vibrant
      ctx.lineWidth = 0.6;
      
      // Draw longitude lines
      for (let i = 0; i < 7; i++) {
        const angle = (i / 7) * Math.PI * 2 + rotationAngle;
        
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
      
      // Draw latitude lines
      for (let i = 1; i < 4; i++) {
        const radius = globeRadius * (i / 4);
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Draw elegant glow around the globe - more vibrant
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, globeRadius * 1.2
      );
      gradient.addColorStop(0, 'rgba(0, 176, 80, 0.3)'); // More vibrant
      gradient.addColorStop(0.5, 'rgba(0, 176, 80, 0.1)');
      gradient.addColorStop(1, 'rgba(0, 176, 80, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius * 1.2, 0, Math.PI * 2);
      ctx.fill();
      
      // Update connection points
      connectionPoints.forEach((point, index) => {
        // Random activation of points
        if (Math.random() > 0.997) {
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
              ctx.strokeStyle = `rgba(0, 176, 80, ${(point.opacity + targetPoint.opacity) * 0.4})`; // More vibrant
              ctx.lineWidth = 0.8; // Slightly thicker
              ctx.stroke();
            }
          });
        }
        
        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fillStyle = point.active 
          ? `rgba(0, 176, 80, ${point.opacity * 1.3})` // More vibrant
          : `rgba(0, 176, 80, ${point.opacity * 0.6})`;
        ctx.fill();
      });
      
      // Update and draw packages as cubes
      packages.forEach(pkg => {
        // Update position
        pkg.progress += pkg.speed;
        pkg.rotation += 0.03; // Rotate the cube faster
        
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
        
        // Draw package as a cube with better 3D appearance
        const cubeSize = pkg.size * 1.8; // Larger cubes
        
        // Save context for rotation
        ctx.save();
        ctx.translate(pkg.x, pkg.y);
        ctx.rotate(pkg.rotation);
        
        // Front face
        ctx.fillStyle = pkg.color;
        ctx.fillRect(-cubeSize/2, -cubeSize/2, cubeSize, cubeSize);
        
        // Top face (with perspective)
        ctx.beginPath();
        ctx.moveTo(-cubeSize/2, -cubeSize/2);
        ctx.lineTo(-cubeSize/2 + cubeSize/3, -cubeSize/2 - cubeSize/3);
        ctx.lineTo(cubeSize/2 + cubeSize/3, -cubeSize/2 - cubeSize/3);
        ctx.lineTo(cubeSize/2, -cubeSize/2);
        ctx.closePath();
        ctx.fillStyle = pkg.color.replace(')', ', 0.9)').replace('rgb', 'rgba');
        ctx.fill();
        
        // Right face (with perspective)
        ctx.beginPath();
        ctx.moveTo(cubeSize/2, -cubeSize/2);
        ctx.lineTo(cubeSize/2 + cubeSize/3, -cubeSize/2 - cubeSize/3);
        ctx.lineTo(cubeSize/2 + cubeSize/3, cubeSize/2 - cubeSize/3);
        ctx.lineTo(cubeSize/2, cubeSize/2);
        ctx.closePath();
        ctx.fillStyle = pkg.color.replace(')', ', 0.7)').replace('rgb', 'rgba');
        ctx.fill();
        
        // Draw outline
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)'; // More visible outline
        ctx.lineWidth = 0.7;
        ctx.strokeRect(-cubeSize/2, -cubeSize/2, cubeSize, cubeSize);
        
        // Add package label or marking
        if (Math.random() > 0.7) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
          ctx.font = '4px monospace';
          ctx.textAlign = 'center';
          ctx.fillText('PKG', 0, 1);
        }
        
        // Restore context
        ctx.restore();
        
        // Add trail effect
        if (Math.random() > 0.6) {
          ctx.beginPath();
          ctx.arc(pkg.x, pkg.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 176, 80, ${0.4 + Math.random() * 0.5})`;
          ctx.fill();
        }
      });
      
      // Draw elegant center glow
      const centerGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, globeRadius * 0.15);
      centerGradient.addColorStop(0, 'rgba(0, 176, 80, 0.5)'); // More vibrant
      centerGradient.addColorStop(1, 'rgba(0, 176, 80, 0)');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius * 0.15, 0, Math.PI * 2);
      ctx.fillStyle = centerGradient;
      ctx.fill();
      
      // Add more glowing particles
      for (let i = 0; i < 5; i++) {
        if (Math.random() > 0.92) {
          const radius = Math.random() * globeRadius;
          const angle = Math.random() * Math.PI * 2;
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;
          const size = 1.5 + Math.random() * 2.5;
          
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 230, 100, ${0.6 + Math.random() * 0.4})`;
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
