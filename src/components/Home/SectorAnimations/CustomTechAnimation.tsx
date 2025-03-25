
import React, { useEffect, useRef } from 'react';

const CustomTechAnimation: React.FC = () => {
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
    
    // Draw computer in the center
    const computer = {
      x: rect.width / 2,
      y: rect.height / 2,
      width: 80,
      height: 60,
      screenWidth: 70,
      screenHeight: 45,
      pulseTime: 0,
      codeLines: []
    };
    
    // Generate simulated code lines for the screen
    for (let i = 0; i < 6; i++) {
      computer.codeLines.push({
        width: 10 + Math.random() * 40,
        indent: Math.floor(Math.random() * 3) * 8,
        blinkInterval: 100 + Math.random() * 200,
        lastBlink: Math.floor(Math.random() * 100)
      });
    }
    
    // Create floating binary/code elements
    const codeElements = [];
    const elementCount = 20;
    
    for (let i = 0; i < elementCount; i++) {
      codeElements.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        type: Math.random() > 0.6 ? 'symbol' : 'binary',
        value: Math.random() > 0.5 ? '1' : '0',
        size: 8 + Math.random() * 4,
        opacity: 0.05 + Math.random() * 0.15,
        speed: 0.2 + Math.random() * 0.3
      });
    }
    
    // Create connection nodes
    const nodes = [];
    const nodeCount = 8;
    
    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 100;
      
      nodes.push({
        x: computer.x + Math.cos(angle) * radius,
        y: computer.y + Math.sin(angle) * radius,
        size: 2 + Math.random() * 2,
        connections: [computer],
        pulseTime: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03
      });
    }
    
    let frame = 0;
    
    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      frame++;
      computer.pulseTime += 0.05;
      
      // Draw background grid
      ctx.lineWidth = 0.2;
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.05)';
      
      const gridSize = 30;
      for (let x = 0; x < rect.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, rect.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < rect.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(rect.width, y);
        ctx.stroke();
      }
      
      // Draw nodes and connections
      nodes.forEach(node => {
        // Update pulse
        node.pulseTime += node.pulseSpeed;
        const pulse = Math.sin(node.pulseTime) * 0.5 + 0.5;
        
        // Draw connection to computer
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(computer.x, computer.y);
        ctx.strokeStyle = `rgba(0, 176, 80, ${0.1 + pulse * 0.1})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
        
        // Draw data packet moving along connection
        if (Math.random() > 0.95) {
          const progress = Math.random();
          const x = node.x + (computer.x - node.x) * progress;
          const y = node.y + (computer.y - node.y) * progress;
          
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 176, 80, 0.8)';
          ctx.fill();
        }
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 176, 80, ${0.2 + pulse * 0.3})`;
        ctx.fill();
      });
      
      // Draw computer
      const computerGlow = Math.sin(computer.pulseTime) * 0.5 + 0.5;
      
      // Monitor body
      ctx.beginPath();
      ctx.rect(
        computer.x - computer.width/2, 
        computer.y - computer.height/2 - 5, 
        computer.width, 
        computer.height
      );
      ctx.strokeStyle = `rgba(0, 176, 80, ${0.5 + computerGlow * 0.3})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      
      // Monitor screen
      ctx.fillStyle = 'rgba(0, 20, 5, 0.6)';
      ctx.fillRect(
        computer.x - computer.screenWidth/2, 
        computer.y - computer.screenHeight/2 - 5, 
        computer.screenWidth, 
        computer.screenHeight
      );
      
      // Monitor base/stand
      ctx.beginPath();
      ctx.moveTo(computer.x - 15, computer.y + computer.height/2 - 5);
      ctx.lineTo(computer.x + 15, computer.y + computer.height/2 - 5);
      ctx.lineTo(computer.x + 10, computer.y + computer.height/2 + 10);
      ctx.lineTo(computer.x - 10, computer.y + computer.height/2 + 10);
      ctx.closePath();
      ctx.stroke();
      
      // Monitor base platform
      ctx.beginPath();
      ctx.rect(computer.x - 20, computer.y + computer.height/2 + 10, 40, 3);
      ctx.stroke();
      
      // Draw code lines on screen
      computer.codeLines.forEach((line, i) => {
        const isBlinking = (frame - line.lastBlink) > line.blinkInterval;
        if (isBlinking && Math.random() > 0.7) {
          line.lastBlink = frame;
          line.width = 10 + Math.random() * 40;
        }
        
        const y = computer.y - computer.screenHeight/2 + 8 + i * 7 - 5;
        const x = computer.x - computer.screenWidth/2 + 5 + line.indent;
        
        ctx.fillStyle = `rgba(0, 176, 80, ${0.5 + computerGlow * 0.3})`;
        ctx.fillRect(x, y, line.width, 2);
      });
      
      // Draw screen glow
      const screenGradient = ctx.createRadialGradient(
        computer.x, computer.y - 5, 0,
        computer.x, computer.y - 5, computer.screenWidth/1.5
      );
      screenGradient.addColorStop(0, `rgba(0, 176, 80, ${0.03 + computerGlow * 0.02})`);
      screenGradient.addColorStop(1, 'rgba(0, 176, 80, 0)');
      
      ctx.fillStyle = screenGradient;
      ctx.beginPath();
      ctx.arc(computer.x, computer.y - 5, computer.screenWidth/1.5, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw floating code elements
      codeElements.forEach(element => {
        // Move element upward
        element.y -= element.speed;
        
        // Reset position when off screen
        if (element.y < 0) {
          element.y = rect.height;
          element.x = Math.random() * rect.width;
          element.value = element.type === 'binary' 
            ? (Math.random() > 0.5 ? '1' : '0')
            : ['<', '>', '{', '}', '(', ')', ';', '='][Math.floor(Math.random() * 8)];
        }
        
        // Draw element
        ctx.fillStyle = `rgba(0, 176, 80, ${element.opacity})`;
        ctx.font = `${element.size}px monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(element.value.toString(), element.x, element.y);
      });
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

export default CustomTechAnimation;
