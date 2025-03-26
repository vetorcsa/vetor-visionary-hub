
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
        blinkInterval: 70 + Math.random() * 150, // Faster blinking
        lastBlink: Math.floor(Math.random() * 100)
      });
    }
    
    // Create floating binary/code elements - more of them
    const codeElements = [];
    const elementCount = 60; // Even more elements for more activity
    
    for (let i = 0; i < elementCount; i++) {
      codeElements.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        type: Math.random() > 0.3 ? 'binary' : 'symbol', // More binary numbers
        value: Math.random() > 0.5 ? '1' : '0',
        size: 9 + Math.random() * 7, // Larger text
        opacity: 0.15 + Math.random() * 0.25, // More visible
        speed: 0.4 + Math.random() * 0.6 // Faster movement
      });
    }
    
    // Create connection nodes
    const nodes = [];
    const nodeCount = 12; // More nodes
    
    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 120; // Slightly larger radius
      
      nodes.push({
        x: computer.x + Math.cos(angle) * radius,
        y: computer.y + Math.sin(angle) * radius,
        size: 2.5 + Math.random() * 3, // Larger nodes
        connections: [computer],
        pulseTime: Math.random() * Math.PI * 2,
        pulseSpeed: 0.04 + Math.random() * 0.05 // Faster pulsing
      });
    }
    
    let frame = 0;
    
    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      frame++;
      computer.pulseTime += 0.07; // Faster pulsing
      
      // Draw background grid
      ctx.lineWidth = 0.3;
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.1)'; // More visible grid
      
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
        ctx.strokeStyle = `rgba(0, 176, 80, ${0.2 + pulse * 0.2})`; // More vibrant connections
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Draw data packet moving along connection
        if (Math.random() > 0.8) { // More frequent data packets
          const progress = Math.random();
          const x = node.x + (computer.x - node.x) * progress;
          const y = node.y + (computer.y - node.y) * progress;
          
          // Packet with glow
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, 4);
          gradient.addColorStop(0, 'rgba(0, 230, 100, 0.9)');
          gradient.addColorStop(1, 'rgba(0, 176, 80, 0)');
          
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
          
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 230, 100, 1)';
          ctx.fill();
        }
        
        // Draw node with glow
        const nodeGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.size * 2
        );
        nodeGradient.addColorStop(0, `rgba(0, 200, 100, ${0.5 + pulse * 0.5})`);
        nodeGradient.addColorStop(1, 'rgba(0, 176, 80, 0)');
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = nodeGradient;
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 176, 80, ${0.4 + pulse * 0.6})`; // More vibrant
        ctx.fill();
      });
      
      // Draw computer
      const computerGlow = Math.sin(computer.pulseTime) * 0.5 + 0.5;
      
      // Computer glow effect
      const compGradient = ctx.createRadialGradient(
        computer.x, computer.y - 5, 0,
        computer.x, computer.y - 5, computer.width
      );
      compGradient.addColorStop(0, `rgba(0, 200, 100, ${0.15 + computerGlow * 0.15})`);
      compGradient.addColorStop(1, 'rgba(0, 176, 80, 0)');
      
      ctx.beginPath();
      ctx.arc(computer.x, computer.y - 5, computer.width, 0, Math.PI * 2);
      ctx.fillStyle = compGradient;
      ctx.fill();
      
      // Monitor body
      ctx.beginPath();
      ctx.rect(
        computer.x - computer.width/2, 
        computer.y - computer.height/2 - 5, 
        computer.width, 
        computer.height
      );
      ctx.strokeStyle = `rgba(0, 200, 100, ${0.7 + computerGlow * 0.3})`; // More vibrant
      ctx.lineWidth = 1.8;
      ctx.stroke();
      
      // Monitor screen
      ctx.fillStyle = 'rgba(0, 20, 5, 0.8)';
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
        if (isBlinking && Math.random() > 0.5) { // More frequent updates
          line.lastBlink = frame;
          line.width = 10 + Math.random() * 40;
        }
        
        const y = computer.y - computer.screenHeight/2 + 8 + i * 7 - 5;
        const x = computer.x - computer.screenWidth/2 + 5 + line.indent;
        
        ctx.fillStyle = `rgba(0, 230, 120, ${0.7 + computerGlow * 0.3})`; // More vibrant
        ctx.fillRect(x, y, line.width, 2);
      });
      
      // Add binary code to screen more frequently
      if (Math.random() > 0.7) {
        const x = computer.x - computer.screenWidth/2 + 5 + Math.random() * (computer.screenWidth - 10);
        const y = computer.y - computer.screenHeight/2 + 5 + Math.random() * (computer.screenHeight - 10);
        
        ctx.fillStyle = `rgba(0, 230, 120, ${0.7 + computerGlow * 0.3})`;
        ctx.font = '6px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(Math.random() > 0.5 ? '1' : '0', x, y);
      }
      
      // Draw screen glow
      const screenGradient = ctx.createRadialGradient(
        computer.x, computer.y - 5, 0,
        computer.x, computer.y - 5, computer.screenWidth/1.5
      );
      screenGradient.addColorStop(0, `rgba(0, 176, 80, ${0.07 + computerGlow * 0.05})`);
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
            : ['<', '>', '{', '}', '(', ')', ';', '=', '0', '1'][Math.floor(Math.random() * 10)];
        }
        
        // Draw element with glow effect for some elements
        if (Math.random() > 0.6) {
          ctx.shadowColor = 'rgba(0, 176, 80, 0.6)';
          ctx.shadowBlur = 6;
        } else {
          ctx.shadowColor = 'transparent';
          ctx.shadowBlur = 0;
        }
        
        ctx.fillStyle = `rgba(0, 200, 100, ${element.opacity})`; // More vibrant color
        ctx.font = `${element.size}px monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(element.value.toString(), element.x, element.y);
        
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
      });
      
      // Add occasional larger binary numbers - more frequently
      if (Math.random() > 0.95) {
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;
        const value = Math.random() > 0.5 ? '1' : '0';
        
        ctx.fillStyle = 'rgba(0, 230, 100, 0.2)';
        ctx.font = '42px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(value, x, y);
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

export default CustomTechAnimation;
