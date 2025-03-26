
import React, { useEffect, useRef } from 'react';

const FiscalAnimation: React.FC = () => {
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

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const rect = canvas.getBoundingClientRect();

    // Create documents - more of them
    const documents: {
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
      pulseDirection: number;
      pulseSpeed: number;
      symbol?: string; // Optional fiscal symbols
    }[] = [];

    // Create data flow paths
    const paths: {
      startAngle: number;
      endAngle: number;
      radius: number;
      width: number;
      speed: number;
      progress: number;
      color: string;
    }[] = [];

    // Generate documents and paths
    const generateElements = () => {
      documents.length = 0;
      paths.length = 0;
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = Math.min(centerX, centerY) * 0.8;
      
      // Create more circular paths for more dynamic appearance
      const pathCount = 8;
      for (let i = 0; i < pathCount; i++) {
        const radius = maxRadius * (0.3 + (i / pathCount) * 0.7);
        paths.push({
          startAngle: Math.random() * Math.PI * 2,
          endAngle: Math.random() * Math.PI * 2,
          radius,
          width: 1 + Math.random() * 2,
          speed: 0.004 + Math.random() * 0.006, // Faster movement
          progress: Math.random(),
          color: `rgba(0, 176, 80, ${0.3 + Math.random() * 0.5})` // More vibrant colors
        });
      }
      
      // Create documents - more of them and with fiscal symbols
      const docCount = 16;
      const fiscalSymbols = ['$', '%', '§', '€', '£', '¥', 'R$', '+', '-', '='];
      
      for (let i = 0; i < docCount; i++) {
        const angle = (i / docCount) * Math.PI * 2;
        const distance = maxRadius * (0.2 + Math.random() * 0.6);
        
        documents.push({
          x: centerX + Math.cos(angle) * distance,
          y: centerY + Math.sin(angle) * distance,
          size: 10 + Math.random() * 12,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() * 0.015 - 0.0075) * (Math.random() > 0.5 ? 1 : -1),
          opacity: 0.35 + Math.random() * 0.45, // More vibrant
          pulseDirection: 1,
          pulseSpeed: 0.005 + Math.random() * 0.01,
          symbol: Math.random() > 0.7 ? fiscalSymbols[Math.floor(Math.random() * fiscalSymbols.length)] : undefined
        });
      }
    };

    generateElements();
    window.addEventListener('resize', generateElements);

    // Data particles
    const particles: {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      size: number;
      speed: number;
      progress: number;
      color: string;
    }[] = [];

    const generateParticles = () => {
      const particleCount = 25; // More particles
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      for (let i = 0; i < particleCount; i++) {
        const startAngle = Math.random() * Math.PI * 2;
        const endAngle = (startAngle + Math.PI) + Math.random() * Math.PI;
        const startRadius = (0.2 + Math.random() * 0.3) * Math.min(centerX, centerY);
        const endRadius = (0.6 + Math.random() * 0.3) * Math.min(centerX, centerY);
        
        particles.push({
          x: centerX + Math.cos(startAngle) * startRadius,
          y: centerY + Math.sin(startAngle) * startRadius,
          targetX: centerX + Math.cos(endAngle) * endRadius,
          targetY: centerY + Math.sin(endAngle) * endRadius,
          size: 1 + Math.random() * 2.5, // Larger particles
          speed: 0.01 + Math.random() * 0.03, // Faster movement
          progress: Math.random(),
          color: `rgba(0, 176, 80, ${0.5 + Math.random() * 0.5})` // More vibrant
        });
      }
    };

    generateParticles();
    setInterval(generateParticles, 1500); // Generate particles more frequently

    // Animation
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Draw subtle grid for financial data visualization
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.1)';
      ctx.lineWidth = 0.5;
      
      const gridSize = 30;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Draw center node
      ctx.beginPath();
      ctx.arc(centerX, centerY, 15, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 176, 80, 0.9)'; // More vibrant
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, 25, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.6)'; // More vibrant
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Draw circular paths with more vibrant colors
      for (const path of paths) {
        path.progress += path.speed;
        if (path.progress > 1) path.progress = 0;
        
        const startAngle = path.startAngle;
        const endAngle = startAngle + Math.PI * 2 * path.progress;
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, path.radius, startAngle, endAngle);
        ctx.strokeStyle = path.color;
        ctx.lineWidth = path.width;
        ctx.stroke();
        
        // Draw endpoint of path with glow effect
        const endX = centerX + Math.cos(endAngle) * path.radius;
        const endY = centerY + Math.sin(endAngle) * path.radius;
        
        // Add glow
        const gradient = ctx.createRadialGradient(endX, endY, 0, endX, endY, 6);
        gradient.addColorStop(0, path.color);
        gradient.addColorStop(1, 'rgba(0, 176, 80, 0)');
        
        ctx.beginPath();
        ctx.arc(endX, endY, 6, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(endX, endY, 3, 0, Math.PI * 2);
        ctx.fillStyle = path.color.replace(')', ', 1)').replace('rgba', 'rgba');
        ctx.fill();
      }
      
      // Draw documents
      for (const doc of documents) {
        // Update document
        doc.rotation += doc.rotationSpeed;
        doc.opacity += doc.pulseDirection * doc.pulseSpeed;
        
        if (doc.opacity > 0.8) { // More vibrant max opacity
          doc.opacity = 0.8;
          doc.pulseDirection = -1;
        } else if (doc.opacity < 0.35) {
          doc.opacity = 0.35;
          doc.pulseDirection = 1;
        }
        
        // Draw document
        ctx.save();
        ctx.translate(doc.x, doc.y);
        ctx.rotate(doc.rotation);
        
        // Document body with glow effect
        const glowSize = doc.size * 1.2;
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, glowSize);
        gradient.addColorStop(0, `rgba(0, 200, 100, ${doc.opacity * 0.2})`);
        gradient.addColorStop(1, 'rgba(0, 176, 80, 0)');
        
        ctx.beginPath();
        ctx.rect(-glowSize/2, -glowSize/2, glowSize, glowSize * 1.3);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Document body
        ctx.fillStyle = `rgba(0, 176, 80, ${doc.opacity * 0.8})`;
        ctx.fillRect(-doc.size/2, -doc.size/2, doc.size, doc.size * 1.3);
        ctx.strokeStyle = `rgba(0, 230, 120, ${doc.opacity})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(-doc.size/2, -doc.size/2, doc.size, doc.size * 1.3);
        
        // Document lines
        ctx.fillStyle = `rgba(255, 255, 255, ${doc.opacity * 0.7})`;
        const lineHeight = doc.size * 0.15;
        const lineWidth = doc.size * 0.7;
        const lineSpacing = doc.size * 0.25;
        
        for (let i = 0; i < 3; i++) {
          ctx.fillRect(-lineWidth/2, -doc.size/3 + i * lineSpacing, lineWidth, lineHeight);
        }
        
        // Draw fiscal symbol if present
        if (doc.symbol) {
          ctx.fillStyle = `rgba(255, 255, 255, ${doc.opacity})`;
          ctx.font = `bold ${doc.size * 0.6}px Arial`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(doc.symbol, 0, 0);
        }
        
        ctx.restore();
        
        // Draw connection to center
        ctx.beginPath();
        ctx.moveTo(doc.x, doc.y);
        ctx.lineTo(centerX, centerY);
        ctx.strokeStyle = `rgba(0, 176, 80, ${doc.opacity * 0.3})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      
      // Draw particles with trailing effect
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        
        particle.progress += particle.speed;
        
        if (particle.progress >= 1) {
          particles.splice(i, 1);
          continue;
        }
        
        const x = particle.x + (particle.targetX - particle.x) * particle.progress;
        const y = particle.y + (particle.targetY - particle.y) * particle.progress;
        
        // Draw particle with glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, particle.size * 2);
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'rgba(0, 176, 80, 0)');
        
        ctx.beginPath();
        ctx.arc(x, y, particle.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(x, y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Add trailing effect
        if (Math.random() > 0.7) {
          const trailX = particle.x + (particle.targetX - particle.x) * (particle.progress - 0.05);
          const trailY = particle.y + (particle.targetY - particle.y) * (particle.progress - 0.05);
          
          ctx.beginPath();
          ctx.arc(trailX, trailY, particle.size * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = particle.color.replace(')', ', 0.3)').replace('rgba', 'rgba');
          ctx.fill();
        }
      }
      
      // Add fiscal numbers floating around
      for (let i = 0; i < 2; i++) {
        if (Math.random() > 0.97) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '$', '%'];
          const num = numbers[Math.floor(Math.random() * numbers.length)];
          
          ctx.fillStyle = `rgba(0, 176, 80, ${0.4 + Math.random() * 0.2})`;
          ctx.font = `${12 + Math.random() * 8}px monospace`;
          ctx.textAlign = 'center';
          ctx.fillText(num, x, y);
        }
      }
      
      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', generateElements);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{ background: 'black' }}
    />
  );
};

export default FiscalAnimation;
