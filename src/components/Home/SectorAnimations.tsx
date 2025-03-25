
import React, { useEffect, useRef } from 'react';

// Updated LogisticsAnimation - Elegant night-time globe with fewer elements
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

// RealEstateAnimation - Modern digital grid with property elements
export const RealEstateAnimation: React.FC = () => {
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
    
    // Create a cleaner grid system
    const gridCells = {
      horizontal: [],
      vertical: []
    };
    
    const gridDensity = 10;
    
    for (let i = 0; i <= gridDensity; i++) {
      gridCells.horizontal.push({
        y: (rect.height / gridDensity) * i,
        opacity: 0.05 + Math.random() * 0.05
      });
      
      gridCells.vertical.push({
        x: (rect.width / gridDensity) * i,
        opacity: 0.05 + Math.random() * 0.05
      });
    }
    
    // Create building blocks - using simple geometric shapes
    const buildings = [];
    const buildingCount =
     6;
    
    for (let i = 0; i < buildingCount; i++) {
      buildings.push({
        x: (rect.width / (buildingCount + 1)) * (i + 1),
        y: rect.height / 2 + 20,
        width: 20 + Math.random() * 15,
        height: 30 + Math.random() * 40,
        style: Math.floor(Math.random() * 3),
        pulseTime: Math.random() * Math.PI * 2,
        pulseSpeed: 0.03 + Math.random() * 0.02
      });
    }
    
    // Connection points for data flow
    const connectionPoints = [];
    
    for (let i = 0; i < 8; i++) {
      connectionPoints.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        size: 2 + Math.random() * 2,
        connections: [],
        active: true
      });
    }
    
    // Create connections
    connectionPoints.forEach((point, i) => {
      const connectionCount = Math.floor(Math.random() * 2) + 1;
      for (let c = 0; c < connectionCount; c++) {
        let targetIndex = Math.floor(Math.random() * connectionPoints.length);
        if (targetIndex !== i) {
          point.connections.push(targetIndex);
        }
      }
    });
    
    let time = 0;
    
    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      time += 0.01;
      
      // Draw grid - lighter, more elegant
      ctx.lineWidth = 0.5;
      
      gridCells.horizontal.forEach(line => {
        ctx.beginPath();
        ctx.moveTo(0, line.y);
        ctx.lineTo(rect.width, line.y);
        ctx.strokeStyle = `rgba(0, 176, 80, ${line.opacity})`;
        ctx.stroke();
      });
      
      gridCells.vertical.forEach(line => {
        ctx.beginPath();
        ctx.moveTo(line.x, 0);
        ctx.lineTo(line.x, rect.height);
        ctx.strokeStyle = `rgba(0, 176, 80, ${line.opacity})`;
        ctx.stroke();
      });
      
      // Draw connections between points
      connectionPoints.forEach(point => {
        // Draw connections
        point.connections.forEach(targetIndex => {
          const targetPoint = connectionPoints[targetIndex];
          
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(targetPoint.x, targetPoint.y);
          ctx.strokeStyle = 'rgba(0, 176, 80, 0.1)';
          ctx.lineWidth = 0.8;
          ctx.stroke();
          
          // Draw moving data packet
          if (Math.random() > 0.98) {
            const progress = Math.random();
            const x = point.x + (targetPoint.x - point.x) * progress;
            const y = point.y + (targetPoint.y - point.y) * progress;
            
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 176, 80, 0.8)';
            ctx.fill();
          }
        });
        
        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 176, 80, 0.2)';
        ctx.fill();
      });
      
      // Draw buildings
      buildings.forEach(building => {
        // Update pulse
        building.pulseTime += building.pulseSpeed;
        const pulse = Math.sin(building.pulseTime) * 0.5 + 0.5;
        
        ctx.save();
        ctx.translate(building.x, building.y);
        
        // Draw building shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.beginPath();
        ctx.ellipse(0, 5, building.width/2, building.width/6, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Different building styles
        if (building.style === 0) {
          // Simple skyscraper
          ctx.strokeStyle = `rgba(0, 176, 80, ${0.4 + pulse * 0.3})`;
          ctx.lineWidth = 1;
          
          // Building body
          ctx.beginPath();
          ctx.rect(-building.width/2, -building.height, building.width, building.height);
          ctx.stroke();
          
          // Windows
          const floors = Math.floor(building.height / 8);
          const sides = 3;
          
          for (let f = 0; f < floors; f++) {
            for (let s = 0; s < sides; s++) {
              if (Math.random() > 0.3) {
                const windowWidth = building.width / (sides + 1);
                const x = -building.width/2 + (s + 1) * windowWidth - windowWidth/2;
                const y = -building.height + f * 8 + 3;
                
                ctx.fillStyle = `rgba(0, 176, 80, ${0.1 + Math.random() * 0.2})`;
                ctx.fillRect(x, y, windowWidth - 2, 3);
              }
            }
          }
          
        } else if (building.style === 1) {
          // Modern curved building
          ctx.strokeStyle = `rgba(0, 176, 80, ${0.4 + pulse * 0.3})`;
          ctx.lineWidth = 1;
          
          // Building body
          ctx.beginPath();
          ctx.moveTo(-building.width/2, 0);
          ctx.quadraticCurveTo(
            building.width/4, -building.height * 0.6,
            building.width/2, -building.height
          );
          ctx.lineTo(building.width/2, 0);
          ctx.closePath();
          ctx.stroke();
          
          // Windows
          const lines = 6;
          for (let l = 1; l < lines; l++) {
            const y = -building.height * (l / lines);
            const xStart = -building.width/2 + building.width * (l / lines) * 0.5;
            const xEnd = building.width/2;
            
            ctx.beginPath();
            ctx.moveTo(xStart, y);
            ctx.lineTo(xEnd, y);
            ctx.strokeStyle = `rgba(0, 176, 80, ${0.1 + Math.random() * 0.1})`;
            ctx.stroke();
          }
          
        } else {
          // Futuristic building
          ctx.strokeStyle = `rgba(0, 176, 80, ${0.4 + pulse * 0.3})`;
          ctx.lineWidth = 1;
          
          // Building main body
          ctx.beginPath();
          ctx.moveTo(-building.width/2, 0);
          ctx.lineTo(-building.width/2, -building.height * 0.7);
          ctx.lineTo(-building.width/4, -building.height * 0.9);
          ctx.lineTo(building.width/4, -building.height * 0.9);
          ctx.lineTo(building.width/2, -building.height * 0.7);
          ctx.lineTo(building.width/2, 0);
          ctx.closePath();
          ctx.stroke();
          
          // Building top
          ctx.beginPath();
          ctx.moveTo(-building.width/4, -building.height * 0.9);
          ctx.lineTo(0, -building.height);
          ctx.lineTo(building.width/4, -building.height * 0.9);
          ctx.stroke();
          
          // Horizontal lines
          const floors = 5;
          for (let f = 1; f < floors; f++) {
            const y = -building.height * 0.7 * (f / floors);
            
            ctx.beginPath();
            ctx.moveTo(-building.width/2, y);
            ctx.lineTo(building.width/2, y);
            ctx.strokeStyle = `rgba(0, 176, 80, ${0.1 + Math.random() * 0.1})`;
            ctx.stroke();
          }
        }
        
        // Pulse effect at top of building
        ctx.beginPath();
        ctx.arc(0, -building.height, 2 + pulse * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 176, 80, ${0.3 + pulse * 0.5})`;
        ctx.fill();
        
        ctx.restore();
      });
      
      // Occasional data points
      if (Math.random() > 0.95) {
        ctx.fillStyle = 'rgba(0, 176, 80, 0.6)';
        ctx.font = '8px monospace';
        ctx.fillText('1', Math.random() * rect.width, Math.random() * rect.height);
      }
      if (Math.random() > 0.95) {
        ctx.fillStyle = 'rgba(0, 176, 80, 0.6)';
        ctx.font = '8px monospace';
        ctx.fillText('0', Math.random() * rect.width, Math.random() * rect.height);
      }
      
      // Draw a central hub
      ctx.beginPath();
      ctx.arc(rect.width/2, rect.height/2, 10, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 176, 80, 0.1)';
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(rect.width/2, rect.height/2, 5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 176, 80, 0.4)';
      ctx.fill();
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

// FiscalAnimation - Minimalist financial data visualization
export const FiscalAnimation: React.FC = () => {
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
    
    // Create line chart points
    const lineChartPoints = [];
    const pointCount = 8;
    
    for (let i = 0; i < pointCount; i++) {
      lineChartPoints.push({
        value: 20 + Math.random() * 50,
        targetValue: 20 + Math.random() * 50,
        changeInterval: 150 + Math.random() * 200,
        lastChange: 0
      });
    }
    
    // Create bar chart data
    const barChart = {
      bars: [],
      barCount: 5
    };
    
    for (let i = 0; i < barChart.barCount; i++) {
      barChart.bars.push({
        height: 0,
        targetHeight: 20 + Math.random() * 40,
        changeInterval: 200 + Math.random() * 300,
        lastChange: 0
      });
    }
    
    // Create floating financial numbers and symbols
    const financialElements = [];
    const elementCount = 5;
    const symbols = ['$', '%', '+', '-', '='];
    
    for (let i = 0; i < elementCount; i++) {
      financialElements.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        type: Math.random() > 0.5 ? 'number' : 'symbol',
        value: Math.random() > 0.5 ? Math.floor(Math.random() * 100) : symbols[Math.floor(Math.random() * symbols.length)],
        size: 10 + Math.random() * 6,
        opacity: 0.1 + Math.random() * 0.2,
        speed: 0.2 + Math.random() * 0.3
      });
    }
    
    let frame = 0;
    
    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      frame++;
      
      // Center coordinates
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
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
      
      // Draw line chart - top half
      const lineChartWidth = 140;
      const lineChartHeight = 50;
      const lineChartX = centerX - lineChartWidth/2;
      const lineChartY = centerY - 60;
      
      // Update line chart points
      lineChartPoints.forEach((point, i) => {
        if (frame - point.lastChange > point.changeInterval) {
          point.targetValue = 20 + Math.random() * 50;
          point.lastChange = frame;
        }
        
        // Smooth transition to target value
        point.value += (point.targetValue - point.value) * 0.05;
      });
      
      // Line chart outline
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.15)';
      ctx.strokeRect(lineChartX, lineChartY, lineChartWidth, lineChartHeight);
      
      // Draw line chart
      ctx.beginPath();
      lineChartPoints.forEach((point, i) => {
        const x = lineChartX + (i * lineChartWidth / (pointCount - 1));
        const y = lineChartY + lineChartHeight - (point.value * lineChartHeight / 100);
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
        
        // Draw point
        ctx.fillStyle = '#00B050';
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });
      
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.5)';
      ctx.lineWidth = 1.2;
      ctx.stroke();
      
      // Fill area below line chart
      ctx.beginPath();
      lineChartPoints.forEach((point, i) => {
        const x = lineChartX + (i * lineChartWidth / (pointCount - 1));
        const y = lineChartY + lineChartHeight - (point.value * lineChartHeight / 100);
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      ctx.lineTo(lineChartX + lineChartWidth, lineChartY + lineChartHeight);
      ctx.lineTo(lineChartX, lineChartY + lineChartHeight);
      ctx.closePath();
      
      const gradient = ctx.createLinearGradient(0, lineChartY, 0, lineChartY + lineChartHeight);
      gradient.addColorStop(0, 'rgba(0, 176, 80, 0.15)');
      gradient.addColorStop(1, 'rgba(0, 176, 80, 0.01)');
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Draw bar chart - bottom half
      const barWidth = 8;
      const barSpacing = 12;
      const barChartWidth = (barWidth + barSpacing) * barChart.barCount;
      const barChartX = centerX - barChartWidth/2;
      const barChartY = centerY + 40;
      
      // Bar chart base line
      ctx.beginPath();
      ctx.moveTo(barChartX - 10, barChartY);
      ctx.lineTo(barChartX + barChartWidth + 10, barChartY);
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Update and draw bars
      barChart.bars.forEach((bar, i) => {
        if (frame - bar.lastChange > bar.changeInterval) {
          bar.targetHeight = 15 + Math.random() * 35;
          bar.lastChange = frame;
        }
        
        // Smooth transition to target height
        bar.height += (bar.targetHeight - bar.height) * 0.05;
        
        const x = barChartX + i * (barWidth + barSpacing);
        const y = barChartY - bar.height;
        
        // Draw bar outline
        ctx.strokeStyle = i % 2 === 0 ? 'rgba(0, 176, 80, 0.5)' : 'rgba(126, 217, 87, 0.5)';
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, barWidth, bar.height);
        
        // Draw bar fill
        ctx.fillStyle = i % 2 === 0 ? 'rgba(0, 176, 80, 0.1)' : 'rgba(126, 217, 87, 0.1)';
        ctx.fillRect(x, y, barWidth, bar.height);
      });
      
      // Draw and update floating financial elements
      financialElements.forEach(element => {
        // Move element upward
        element.y -= element.speed;
        
        // Reset position when off screen
        if (element.y < 0) {
          element.y = rect.height;
          element.x = Math.random() * rect.width;
          element.value = element.type === 'number' 
            ? Math.floor(Math.random() * 100) 
            : symbols[Math.floor(Math.random() * symbols.length)];
        }
        
        // Draw element
        ctx.fillStyle = `rgba(0, 176, 80, ${element.opacity})`;
        ctx.font = `${element.size}px monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(element.value.toString(), element.x, element.y);
      });
      
      // Draw central dollar sign
      if (Math.random() > 0.01) {
        ctx.fillStyle = 'rgba(0, 176, 80, 0.1)';
        ctx.font = '60px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('$', centerX, centerY);
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

// CustomTechAnimation - Computer and code-based visualization
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
