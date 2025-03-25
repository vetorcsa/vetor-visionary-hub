
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
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create documents
    const documents: {
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
      pulseDirection: number;
      pulseSpeed: number;
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
      
      // Create circular paths
      const pathCount = 5;
      for (let i = 0; i < pathCount; i++) {
        const radius = maxRadius * (0.3 + (i / pathCount) * 0.7);
        paths.push({
          startAngle: Math.random() * Math.PI * 2,
          endAngle: Math.random() * Math.PI * 2,
          radius,
          width: 1 + Math.random() * 2,
          speed: 0.003 + Math.random() * 0.005,
          progress: Math.random(),
          color: `rgba(0, 176, 80, ${0.2 + Math.random() * 0.4})`
        });
      }
      
      // Create documents
      const docCount = 12;
      for (let i = 0; i < docCount; i++) {
        const angle = (i / docCount) * Math.PI * 2;
        const distance = maxRadius * (0.2 + Math.random() * 0.6);
        
        documents.push({
          x: centerX + Math.cos(angle) * distance,
          y: centerY + Math.sin(angle) * distance,
          size: 10 + Math.random() * 10,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() * 0.01 - 0.005) * (Math.random() > 0.5 ? 1 : -1),
          opacity: 0.3 + Math.random() * 0.4,
          pulseDirection: 1,
          pulseSpeed: 0.005 + Math.random() * 0.01
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
      const particleCount = 15;
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
          size: 1 + Math.random() * 2,
          speed: 0.01 + Math.random() * 0.02,
          progress: Math.random(),
          color: `rgba(0, 176, 80, ${0.4 + Math.random() * 0.6})`
        });
      }
    };

    generateParticles();
    setInterval(generateParticles, 2000);

    // Animation
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Draw center node
      ctx.beginPath();
      ctx.arc(centerX, centerY, 15, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 176, 80, 0.8)';
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, 25, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.4)';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Draw circular paths
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
        
        // Draw endpoint of path
        const endX = centerX + Math.cos(endAngle) * path.radius;
        const endY = centerY + Math.sin(endAngle) * path.radius;
        ctx.beginPath();
        ctx.arc(endX, endY, 3, 0, Math.PI * 2);
        ctx.fillStyle = path.color;
        ctx.fill();
      }
      
      // Draw documents
      for (const doc of documents) {
        // Update document
        doc.rotation += doc.rotationSpeed;
        doc.opacity += doc.pulseDirection * doc.pulseSpeed;
        
        if (doc.opacity > 0.7) {
          doc.opacity = 0.7;
          doc.pulseDirection = -1;
        } else if (doc.opacity < 0.3) {
          doc.opacity = 0.3;
          doc.pulseDirection = 1;
        }
        
        // Draw document
        ctx.save();
        ctx.translate(doc.x, doc.y);
        ctx.rotate(doc.rotation);
        
        // Document body
        ctx.fillStyle = `rgba(0, 176, 80, ${doc.opacity * 0.7})`;
        ctx.fillRect(-doc.size/2, -doc.size/2, doc.size, doc.size * 1.3);
        
        // Document lines
        ctx.fillStyle = `rgba(255, 255, 255, ${doc.opacity * 0.5})`;
        const lineHeight = doc.size * 0.15;
        const lineWidth = doc.size * 0.7;
        const lineSpacing = doc.size * 0.25;
        
        for (let i = 0; i < 3; i++) {
          ctx.fillRect(-lineWidth/2, -doc.size/3 + i * lineSpacing, lineWidth, lineHeight);
        }
        
        ctx.restore();
        
        // Draw connection to center
        ctx.beginPath();
        ctx.moveTo(doc.x, doc.y);
        ctx.lineTo(centerX, centerY);
        ctx.strokeStyle = `rgba(0, 176, 80, ${doc.opacity * 0.2})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      
      // Draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        
        particle.progress += particle.speed;
        
        if (particle.progress >= 1) {
          particles.splice(i, 1);
          continue;
        }
        
        const x = particle.x + (particle.targetX - particle.x) * particle.progress;
        const y = particle.y + (particle.targetY - particle.y) * particle.progress;
        
        ctx.beginPath();
        ctx.arc(x, y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
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
