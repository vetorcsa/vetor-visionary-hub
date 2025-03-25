
import React, { useEffect, useRef } from 'react';

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
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create buildings
    const buildings: {
      x: number;
      y: number;
      width: number;
      height: number;
      color: string;
      windows: { x: number; y: number; width: number; height: number; lit: boolean }[];
      dataLines: { x1: number; y1: number; x2: number; y2: number; progress: number; speed: number }[];
    }[] = [];

    // Generate buildings
    const generateBuildings = () => {
      buildings.length = 0;
      const buildingCount = Math.floor(canvas.width / 60);
      
      for (let i = 0; i < buildingCount; i++) {
        const width = Math.random() * 20 + 30;
        const height = Math.random() * 60 + 40;
        const x = i * (canvas.width / buildingCount);
        const y = canvas.height - height;
        
        const building = {
          x,
          y,
          width,
          height,
          color: `rgba(0, 176, 80, ${Math.random() * 0.3 + 0.1})`,
          windows: [],
          dataLines: []
        };
        
        // Add windows to buildings
        const windowRows = Math.floor(height / 15);
        const windowCols = Math.floor(width / 12);
        
        for (let row = 0; row < windowRows; row++) {
          for (let col = 0; col < windowCols; col++) {
            building.windows.push({
              x: x + col * 12 + 3,
              y: y + row * 15 + 5,
              width: 6,
              height: 6,
              lit: Math.random() > 0.5
            });
          }
        }
        
        // Add data lines
        const lineCount = Math.floor(Math.random() * 3);
        for (let j = 0; j < lineCount; j++) {
          building.dataLines.push({
            x1: x + width / 2,
            y1: y,
            x2: x + width / 2 + (Math.random() * 100 - 50),
            y2: y - Math.random() * 50 - 20,
            progress: Math.random(),
            speed: Math.random() * 0.01 + 0.005
          });
        }
        
        buildings.push(building);
      }
    };

    generateBuildings();
    window.addEventListener('resize', generateBuildings);

    // Grid lines
    const gridLines: {
      points: { x: number; y: number }[];
      color: string;
    }[] = [];

    const generateGrid = () => {
      gridLines.length = 0;
      const gridSize = 30;
      const cols = Math.ceil(canvas.width / gridSize);
      const rows = Math.ceil(canvas.height / gridSize);
      
      // Create horizontal lines
      for (let row = 0; row <= rows; row++) {
        gridLines.push({
          points: Array.from({ length: cols + 1 }, (_, col) => ({
            x: col * gridSize,
            y: row * gridSize
          })),
          color: `rgba(0, 176, 80, ${row % 2 === 0 ? 0.15 : 0.05})`
        });
      }
      
      // Create vertical lines
      for (let col = 0; col <= cols; col++) {
        gridLines.push({
          points: Array.from({ length: rows + 1 }, (_, row) => ({
            x: col * gridSize,
            y: row * gridSize
          })),
          color: `rgba(0, 176, 80, ${col % 2 === 0 ? 0.15 : 0.05})`
        });
      }
    };

    generateGrid();
    window.addEventListener('resize', generateGrid);

    // Data particles
    const particles: {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
    }[] = [];

    const generateParticles = () => {
      particles.length = 0;
      const particleCount = Math.floor(canvas.width / 10);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speed: Math.random() * 0.5 + 0.2,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
    };

    generateParticles();
    window.addEventListener('resize', generateParticles);

    // Animation
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      for (const line of gridLines) {
        ctx.beginPath();
        ctx.moveTo(line.points[0].x, line.points[0].y);
        
        for (let i = 1; i < line.points.length; i++) {
          ctx.lineTo(line.points[i].x, line.points[i].y);
        }
        
        ctx.strokeStyle = line.color;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      
      // Draw buildings
      for (const building of buildings) {
        // Draw building
        ctx.fillStyle = building.color;
        ctx.fillRect(building.x, building.y, building.width, building.height);
        
        // Draw windows
        for (const window of building.windows) {
          if (Math.random() < 0.003) {
            window.lit = !window.lit;
          }
          
          ctx.fillStyle = window.lit ? 'rgba(0, 176, 80, 0.8)' : 'rgba(255, 255, 255, 0.1)';
          ctx.fillRect(window.x, window.y, window.width, window.height);
        }
        
        // Draw data lines
        for (const line of building.dataLines) {
          line.progress += line.speed;
          if (line.progress > 1) line.progress = 0;
          
          const progressX = line.x1 + (line.x2 - line.x1) * line.progress;
          const progressY = line.y1 + (line.y2 - line.y1) * line.progress;
          
          ctx.beginPath();
          ctx.moveTo(line.x1, line.y1);
          ctx.lineTo(progressX, progressY);
          ctx.strokeStyle = 'rgba(0, 176, 80, 0.6)';
          ctx.lineWidth = 1;
          ctx.stroke();
          
          // Draw data particle at the end of the line
          ctx.beginPath();
          ctx.arc(progressX, progressY, 2, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 176, 80, 0.8)';
          ctx.fill();
        }
      }
      
      // Draw particles
      for (const particle of particles) {
        particle.y -= particle.speed;
        if (particle.y < 0) {
          particle.y = canvas.height;
          particle.x = Math.random() * canvas.width;
        }
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 176, 80, ${particle.opacity})`;
        ctx.fill();
      }
      
      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', generateBuildings);
      window.removeEventListener('resize', generateGrid);
      window.removeEventListener('resize', generateParticles);
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

export default RealEstateAnimation;
