import React, { useEffect, useRef } from 'react';
import { Truck, Home, FileText } from 'lucide-react';

// Animation for Logistics Technology - Minimalist trucks on a path
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
      
      // Regenerate elements after resize
      initializeElements();
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Store all elements in a ref to keep them available through rerenders
    let trucks = [];
    let pathPoints = [];
    
    // Initialize all elements for the animation
    const initializeElements = () => {
      const rect = canvas.getBoundingClientRect();
      
      // Create minimalist trucks
      trucks = [];
      const truckCount = 5;
      
      for (let i = 0; i < truckCount; i++) {
        trucks.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          width: 24 + Math.random() * 12,
          height: 14 + Math.random() * 6,
          speed: 0.5 + Math.random() * 0.8,
          angle: Math.random() * Math.PI * 2,
          color: i % 2 === 0 ? '#00B050' : '#7ED957',
          turnRate: (Math.random() - 0.5) * 0.03
        });
      }
      
      // Create path points for truck routes
      const gridSize = 4;
      pathPoints = [];
      
      for (let i = 0; i <= gridSize; i++) {
        for (let j = 0; j <= gridSize; j++) {
          pathPoints.push({
            x: (rect.width / gridSize) * i,
            y: (rect.height / gridSize) * j,
            radius: 3 + Math.random() * 2,
            connections: []
          });
        }
      }
      
      // Create connections between path points (grid with some diagonals)
      pathPoints.forEach((point, index) => {
        // Connect to right point (if not last in row)
        if ((index + 1) % (gridSize + 1) !== 0 && index + 1 < pathPoints.length) {
          point.connections.push(index + 1);
        }
        
        // Connect to bottom point
        if (index + gridSize + 1 < pathPoints.length) {
          point.connections.push(index + gridSize + 1);
          
          // Some diagonal connections
          if (Math.random() > 0.5 && (index + 1) % (gridSize + 1) !== 0) {
            point.connections.push(index + gridSize + 2);
          }
        }
      });
      
      // Assign trucks to paths with safety checks
      trucks.forEach(truck => {
        truck.currentPoint = Math.floor(Math.random() * pathPoints.length);
        
        // Make sure the current point exists
        if (pathPoints[truck.currentPoint]) {
          // Make sure the target point is connected and exists
          const possibleTargets = pathPoints[truck.currentPoint].connections;
          if (possibleTargets && possibleTargets.length > 0) {
            truck.targetPoint = possibleTargets[Math.floor(Math.random() * possibleTargets.length)];
          } else {
            // Fallback if no connections
            truck.targetPoint = truck.currentPoint;
          }
        } else {
          // Fallback if current point doesn't exist
          truck.currentPoint = 0;
          truck.targetPoint = 0;
        }
      });
    };
    
    // Animation function
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      if (!canvas.isConnected) {
        cancelAnimationFrame(animationId);
        return;
      }
      
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      // Draw path connections with safety checks
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.15)';
      
      pathPoints.forEach((point, index) => {
        if (point && point.connections) {
          point.connections.forEach(targetIndex => {
            const targetPoint = pathPoints[targetIndex];
            
            if (targetPoint) {
              ctx.beginPath();
              ctx.moveTo(point.x, point.y);
              ctx.lineTo(targetPoint.x, targetPoint.y);
              ctx.stroke();
            }
          });
        }
      });
      
      // Draw path points with safety checks
      pathPoints.forEach(point => {
        if (point) {
          ctx.beginPath();
          ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 176, 80, 0.2)';
          ctx.fill();
        }
      });
      
      // Update and draw trucks with safety checks
      trucks.forEach(truck => {
        if (!truck) return;
        
        const currentPoint = pathPoints[truck.currentPoint];
        const targetPoint = pathPoints[truck.targetPoint];
        
        // Only proceed if both points exist
        if (currentPoint && targetPoint) {
          // Calculate direction to target
          const dx = targetPoint.x - truck.x;
          const dy = targetPoint.y - truck.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Adjust truck angle to face target with smooth turning
          const targetAngle = Math.atan2(dy, dx);
          const angleDiff = targetAngle - truck.angle;
          
          // Normalize angle difference
          const normalizedDiff = Math.atan2(Math.sin(angleDiff), Math.cos(angleDiff));
          truck.angle += normalizedDiff * 0.1;
          
          // Move truck
          if (distance < truck.speed) {
            // Reached the target point, select a new target
            truck.currentPoint = truck.targetPoint;
            
            // Choose next target point with safety check
            if (currentPoint.connections && currentPoint.connections.length > 0) {
              truck.targetPoint = currentPoint.connections[Math.floor(Math.random() * currentPoint.connections.length)];
            }
          } else {
            // Move toward target
            truck.x += Math.cos(truck.angle) * truck.speed;
            truck.y += Math.sin(truck.angle) * truck.speed;
          }
          
          // Draw truck (minimalist style)
          ctx.save();
          ctx.translate(truck.x, truck.y);
          ctx.rotate(truck.angle);
          
          // Draw truck body
          ctx.fillStyle = truck.color;
          ctx.fillRect(-truck.width/2, -truck.height/2, truck.width, truck.height);
          
          // Draw truck cab
          ctx.fillStyle = 'rgba(0, 50, 30, 0.7)';
          ctx.fillRect(-truck.width/2, -truck.height/2, truck.width * 0.3, truck.height);
          
          // Draw wheels
          ctx.fillStyle = '#333';
          ctx.fillRect(-truck.width/3, -truck.height/2 - 2, 4, 2);
          ctx.fillRect(-truck.width/3, truck.height/2, 4, 2);
          ctx.fillRect(truck.width/4, -truck.height/2 - 2, 4, 2);
          ctx.fillRect(truck.width/4, truck.height/2, 4, 2);
          
          ctx.restore();
        }
      });
      
      // Draw a compass or legend in the corner
      ctx.save();
      ctx.translate(rect.width - 40, rect.height - 40);
      
      // Draw compass circle
      ctx.beginPath();
      ctx.arc(0, 0, 15, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 176, 80, 0.1)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Draw N-S-E-W markers
      ctx.fillStyle = 'rgba(0, 176, 80, 0.6)';
      ctx.font = '8px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('N', 0, -8);
      ctx.fillText('S', 0, 8);
      ctx.fillText('E', 8, 0);
      ctx.fillText('W', -8, 0);
      
      ctx.restore();
    };
    
    // Start the animation
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

// Animation for Real Estate Technology - Minimalist houses on a digital grid
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
    
    // Create houses
    const houses = [];
    const houseCount = 12;
    
    for (let i = 0; i < houseCount; i++) {
      houses.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        size: 15 + Math.random() * 10,
        color: i % 3 === 0 ? '#00B050' : (i % 3 === 1 ? '#7ED957' : '#008C41'),
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        elevation: Math.random() * 20,
        elevationDirection: Math.random() > 0.5 ? 1 : -1
      });
    }
    
    // Draw grid for digital effect
    const gridCells = {
      horizontal: [],
      vertical: []
    };
    
    const gridDensity = 15;
    
    for (let i = 0; i <= gridDensity; i++) {
      gridCells.horizontal.push({
        y: (rect.height / gridDensity) * i,
        opacity: 0.1 + Math.random() * 0.1
      });
      
      gridCells.vertical.push({
        x: (rect.width / gridDensity) * i,
        opacity: 0.1 + Math.random() * 0.1
      });
    }
    
    // Connection points for houses
    const connectionPoints = [];
    const pointCount = 8;
    
    for (let i = 0; i < pointCount; i++) {
      connectionPoints.push({
        x: rect.width/2 + (rect.width/3) * Math.cos(i * Math.PI * 2 / pointCount),
        y: rect.height/2 + (rect.height/3) * Math.sin(i * Math.PI * 2 / pointCount),
        connections: []
      });
    }
    
    // Create a circular connection between points
    for (let i = 0; i < pointCount; i++) {
      connectionPoints[i].connections.push((i + 1) % pointCount);
      
      // Add some cross connections
      if (i < pointCount - 2) {
        connectionPoints[i].connections.push((i + 2) % pointCount);
      }
    }
    
    // Assign houses to connection points
    houses.forEach(house => {
      house.pointIndex = Math.floor(Math.random() * pointCount);
    });
    
    let time = 0;
    
    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      time += 0.01;
      
      // Draw grid
      ctx.lineWidth = 1;
      
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
      
      // Draw connection points and lines
      connectionPoints.forEach((point, index) => {
        // Draw connections
        point.connections.forEach(targetIndex => {
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(connectionPoints[targetIndex].x, connectionPoints[targetIndex].y);
          ctx.strokeStyle = 'rgba(0, 176, 80, 0.2)';
          ctx.stroke();
        });
        
        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 176, 80, 0.3)';
        ctx.fill();
      });
      
      // Update and draw houses
      houses.forEach(house => {
        // Update house position
        const pointIndex = house.pointIndex;
        const point = connectionPoints[pointIndex];
        
        // Move house along circular path around its assigned point
        const angle = time + (pointIndex * Math.PI / 4);
        const orbitRadius = 30 + Math.sin(time * 0.5) * 10;
        
        house.x = point.x + Math.cos(angle) * orbitRadius;
        house.y = point.y + Math.sin(angle) * orbitRadius;
        
        // Update rotation
        house.rotation += house.rotationSpeed;
        
        // Update elevation for floating effect
        house.elevation += 0.1 * house.elevationDirection;
        if (house.elevation > 20 || house.elevation < 0) {
          house.elevationDirection *= -1;
        }
        
        // Draw house shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.beginPath();
        ctx.ellipse(
          house.x, 
          house.y + house.size/2 + 5, 
          house.size/2, 
          house.size/6, 
          0, 0, Math.PI * 2
        );
        ctx.fill();
        
        // Draw house
        ctx.save();
        ctx.translate(house.x, house.y - house.elevation * 0.1);
        ctx.rotate(house.rotation);
        
        // House body
        ctx.fillStyle = house.color;
        ctx.fillRect(-house.size/2, -house.size/2, house.size, house.size);
        
        // Roof
        ctx.beginPath();
        ctx.moveTo(-house.size/2 - 2, -house.size/2);
        ctx.lineTo(0, -house.size/2 - house.size/3);
        ctx.lineTo(house.size/2 + 2, -house.size/2);
        ctx.closePath();
        ctx.fillStyle = 'rgba(0, 50, 30, 0.7)';
        ctx.fill();
        
        // Door
        ctx.fillStyle = 'rgba(0, 50, 30, 0.5)';
        ctx.fillRect(-house.size/6, 0, house.size/3, house.size/2);
        
        // Window
        ctx.fillStyle = 'rgba(200, 255, 220, 0.8)';
        ctx.fillRect(-house.size/3, -house.size/3, house.size/4, house.size/4);
        ctx.fillRect(house.size/10, -house.size/3, house.size/4, house.size/4);
        
        ctx.restore();
        
        // Digital data points above house
        if (Math.random() > 0.97) {
          ctx.fillStyle = 'rgba(0, 176, 80, 0.8)';
          ctx.font = '8px monospace';
          ctx.fillText('1', house.x + (Math.random() - 0.5) * 20, house.y - house.size - Math.random() * 10);
        }
        if (Math.random() > 0.97) {
          ctx.fillStyle = 'rgba(0, 176, 80, 0.8)';
          ctx.font = '8px monospace';
          ctx.fillText('0', house.x + (Math.random() - 0.5) * 20, house.y - house.size - Math.random() * 10);
        }
      });
      
      // Draw a central hub
      ctx.beginPath();
      ctx.arc(rect.width/2, rect.height/2, 15, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 176, 80, 0.2)';
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(rect.width/2, rect.height/2, 8, 0, Math.PI * 2);
      ctx.fillStyle = '#00B050';
      ctx.fill();
      
      // Pulse effect
      const pulseSize = 15 + Math.sin(time * 3) * 5;
      ctx.beginPath();
      ctx.arc(rect.width/2, rect.height/2, pulseSize, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.4)';
      ctx.lineWidth = 2;
      ctx.stroke();
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

// Animation for Fiscal Technology - Minimalist financial data
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
    
    // Create documents with financial data
    const documents = [];
    const documentCount = 8;
    
    for (let i = 0; i < documentCount; i++) {
      documents.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        width: 30 + Math.random() * 20,
        height: 40 + Math.random() * 20,
        rotation: (Math.random() - 0.5) * 0.4,
        color: i % 3 === 0 ? '#00B050' : (i % 3 === 1 ? '#7ED957' : '#008C41'),
        speed: 0.2 + Math.random() * 0.3,
        dataLines: Math.floor(Math.random() * 3) + 3,
        scale: 0.7 + Math.random() * 0.6
      });
    }
    
    // Create graph bars (for minimalist bar chart)
    const graphBars = [];
    const barCount = 6;
    
    for (let i = 0; i < barCount; i++) {
      graphBars.push({
        height: 0,
        targetHeight: 20 + Math.random() * 60,
        changeInterval: 200 + Math.random() * 300,
        lastChange: 0
      });
    }
    
    // Create data points for line chart
    const lineChartPoints = [];
    const pointCount = 8;
    
    for (let i = 0; i < pointCount; i++) {
      lineChartPoints.push({
        value: 20 + Math.random() * 60,
        targetValue: 20 + Math.random() * 60,
        changeInterval: 100 + Math.random() * 200,
        lastChange: 0
      });
    }
    
    // Data numbers floating around
    const dataNumbers = [];
    const numberCount = 15;
    
    for (let i = 0; i < numberCount; i++) {
      dataNumbers.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        value: Math.floor(Math.random() * 100),
        size: 8 + Math.random() * 6,
        opacity: 0.3 + Math.random() * 0.4,
        speed: 0.2 + Math.random() * 0.3
      });
    }
    
    let time = 0;
    let frame = 0;
    
    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      time += 0.01;
      frame++;
      
      // Draw background grid
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.1)';
      
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
      
      // Draw and update floating documents
      documents.forEach(doc => {
        // Move document upward
        doc.y -= doc.speed;
        
        // Reset position when off screen
        if (doc.y + doc.height < 0) {
          doc.y = rect.height;
          doc.x = Math.random() * rect.width;
        }
        
        // Draw document
        ctx.save();
        ctx.translate(doc.x + doc.width/2, doc.y + doc.height/2);
        ctx.rotate(doc.rotation);
        ctx.scale(doc.scale, doc.scale);
        
        // Document background
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fillRect(-doc.width/2, -doc.height/2, doc.width, doc.height);
        ctx.strokeStyle = doc.color;
        ctx.lineWidth = 1;
        ctx.strokeRect(-doc.width/2, -doc.height/2, doc.width, doc.height);
        
        // Document header line
        ctx.fillStyle = doc.color;
        ctx.fillRect(-doc.width/2, -doc.height/2, doc.width, 5);
        
        // Document data lines
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        for (let i = 0; i < doc.dataLines; i++) {
          const lineY = -doc.height/2 + 10 + i * 7;
          const lineWidth = doc.width - 10 - Math.random() * 20;
          ctx.fillRect(-doc.width/2 + 5, lineY, lineWidth, 2);
        }
        
        // Document $ symbol
        ctx.fillStyle = doc.color;
        ctx.font = '10px Arial';
        ctx.fillText('$', -doc.width/4, doc.height/6);
        
        ctx.restore();
      });
      
      // Draw and update bar chart - centered at bottom
      const barWidth = 10;
      const barSpacing = 15;
      const barChartWidth = (barWidth + barSpacing) * barCount;
      const barChartX = rect.width/2 - barChartWidth/2;
      const barChartY = rect.height - 50;
      
      // Bar chart base line
      ctx.beginPath();
      ctx.moveTo(barChartX - 10, barChartY);
      ctx.lineTo(barChartX + barChartWidth + 10, barChartY);
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.5)';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Update and draw bars
      graphBars.forEach((bar, i) => {
        if (frame - bar.lastChange > bar.changeInterval) {
          bar.targetHeight = 20 + Math.random() * 60;
          bar.lastChange = frame;
        }
        
        // Smooth transition to target height
        bar.height += (bar.targetHeight - bar.height) * 0.05;
        
        const x = barChartX + i * (barWidth + barSpacing);
        const y = barChartY - bar.height;
        
        // Draw bar
        ctx.fillStyle = i % 2 === 0 ? '#00B050' : '#7ED957';
        ctx.fillRect(x, y, barWidth, bar.height);
        
        // Bar value
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.font = '8px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(Math.round(bar.height).toString(), x + barWidth/2, y - 5);
      });
      
      // Draw line chart - centered at top
      const lineChartWidth = 150;
      const lineChartHeight = 60;
      const lineChartX = rect.width/2 - lineChartWidth/2;
      const lineChartY = 40;
      
      // Line chart background
      ctx.fillStyle = 'rgba(0, 176, 80, 0.05)';
      ctx.fillRect(lineChartX, lineChartY, lineChartWidth, lineChartHeight);
      
      // Update line chart points
      lineChartPoints.forEach((point, i) => {
        if (frame - point.lastChange > point.changeInterval) {
          point.targetValue = 20 + Math.random() * 60;
          point.lastChange = frame;
        }
        
        // Smooth transition to target value
        point.value += (point.targetValue - point.value) * 0.05;
      });
      
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
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      });
      
      ctx.strokeStyle = '#00B050';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      
      // Draw and update floating numbers
      dataNumbers.forEach(num => {
        // Move number upward
        num.y -= num.speed;
        
        // Reset position when off screen
        if (num.y < 0) {
          num.y = rect.height;
          num.x = Math.random() * rect.width;
          num.value = Math.floor(Math.random() * 100);
        }
        
        // Draw number
        ctx.fillStyle = `rgba(0, 176, 80, ${num.opacity})`;
        ctx.font = `${num.size}px monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(num.value.toString(), num.x, num.y);
        
        // Randomly add $ or % signs
        if (Math.random() > 0.98) {
          ctx.fillText('$', num.x + 15, num.y);
        }
        if (Math.random() > 0.98) {
          ctx.fillText('%', num.x + 15, num.y);
        }
      });
      
      // Draw large $ symbol in center
      ctx.save();
      ctx.translate(rect.width/2, rect.height/2);
      ctx.rotate(Math.sin(time * 0.5) * 0.1);
      
      ctx.fillStyle = 'rgba(0, 176, 80, 0.1)';
      ctx.font = '80px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('$', 0, 0);
      
      ctx.restore();
      
      // Reset text alignment
      ctx.textAlign = 'left';
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

// Keep CustomTechAnimation from the previous implementation
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
    const points = [];
    const pointCount = 40;
    
    for (let i = 0; i < pointCount; i++) {
      // Create points on a sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 80;
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      const pointColor = i % 4 === 0 ? '#00B050' : 
                          i % 4 === 1 ? '#008C41' : 
                          i % 4 === 2 ? '#7ED957' : '#FFFFFF';
      
      points.push({
        x: x,
        y: y,
        z: z,
        size: Math.random() * 2 + 1,
        speed: {
          x: (Math.random() - 0.5) * 0.1,
          y: (Math.random() - 0.5) * 0.1,
          z: (Math.random() - 0.5) * 0.1
        },
        color: pointColor,
        connectedTo: [],
        lineColor: `rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 100}, ${Math.random() * 50}, 0.3)`
      });
    }
    
    // Create smart connections between points
    for (let i = 0; i < points.length; i++) {
      // Each point connects to 2-4 other points
      const connectionCount = Math.floor(Math.random() * 3) + 2;
      
      // Find nearest points
      const distances = [];
      
      for (let j = 0; j < points.length; j++) {
        if (i === j) continue;
        
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const dz = points[i].z - points[j].z;
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        distances.push({index: j, distance});
      }
      
      // Sort by distance and select the closest points
      distances.sort((a, b) => a.distance - b.distance);
      
      for (let k = 0; k < Math.min(connectionCount, distances.length); k++) {
        points[i].connectedTo.push(distances[k].index);
      }
    }
    
    // Animation
    let rotation = 0;
    
    // Create data packets for transfer animation
    const dataPackets = [];
    
    const animate = () => {
      requestAnimationFrame(animate);
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      // Slowly rotate the entire system
      rotation += 0.003;
      
      // Calculate center of the canvas
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Draw globe outline with gradient
      const gradientBg = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, 100
      );
      
      gradientBg.addColorStop(0, 'rgba(0, 176, 80, 0.05)');
      gradientBg.addColorStop(0.8, 'rgba(0, 176, 80, 0.02)');
      gradientBg.addColorStop(1, 'rgba(0, 176, 80, 0)');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, 85, 0, Math.PI * 2);
      ctx.fillStyle = gradientBg;
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, 80, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Draw a few circles to represent latitude/longitude lines
      for (let i = 1; i <= 3; i++) {
        const latRadius = 80 * Math.sin(i * Math.PI / 8);
        const latHeight = 80 * Math.cos(i * Math.PI / 8);
        
        // Latitude circles
        ctx.beginPath();
        ctx.ellipse(
          centerX, 
          centerY, 
          latRadius, 
          latRadius, 
          0, 0, Math.PI * 2
        );
        ctx.strokeStyle = 'rgba(0, 176, 80, 0.1)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
        
        // Longitude arcs
        for (let j = 0; j < 8; j++) {
          const angle = j * Math.PI / 4 + rotation;
          
          ctx.beginPath();
          ctx.moveTo(
            centerX + 80 * Math.cos(angle) * Math.sin(0),
            centerY + 80 * Math.sin(angle) * Math.sin(0)
          );
          
          for (let k = 1; k <= 10; k++) {
            const arcAngle = k * Math.PI / 10;
            ctx.lineTo(
              centerX + 80 * Math.cos(angle) * Math.sin(arcAngle),
              centerY + 80 * Math.sin(angle) * Math.sin(arcAngle) + 80 * Math.cos(arcAngle)
            );
          }
          
          ctx.strokeStyle = 'rgba(0, 176, 80, 0.05)';
          ctx.stroke();
        }
      }
      
      // Store 2D projected points for connections
      const projectedPoints = [];
      
      // Update and draw points
      points.forEach((point, index) => {
        // Apply rotation
        const rotX = point.x * Math.cos(rotation) - point.z * Math.sin(rotation);
        const rotZ = point.x * Math.sin(rotation) + point.z * Math.cos(rotation);
        
        // Calculate 2D position with perspective
        const scale = 400 / (400 + rotZ); // Perspective scale
        const x2d = centerX + rotX * scale;
        const y2d = centerY + point.y * scale;
        
        // Store projected point
        projectedPoints.push({
          x: x2d,
          y: y2d,
          z: rotZ,
          originalIndex: index,
          scale: scale
        });
      });
      
      // Sort points by Z for proper depth rendering
      projectedPoints.sort((a, b) => a.z - b.z);
      
      // Draw connections first (behind points)
      points.forEach((point, i) => {
        const fromPoint = projectedPoints.find(p => p.originalIndex === i);
        if (!fromPoint) return;
        
        point.connectedTo.forEach(toIndex => {
          const toPoint = projectedPoints.find(p => p.originalIndex === toIndex);
          if (!toPoint) return;
          
          // Only draw connection from one direction
          if (i < toIndex) {
            // Calculate distance for opacity
            const dx = point.x - points[toIndex].x;
            const dy = point.y - points[toIndex].y;
            const dz = point.z - points[toIndex].z;
            const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
            
            // Draw line with gradient and depth-based opacity
            const gradient = ctx.createLinearGradient(
              fromPoint.x, fromPoint.y,
              toPoint.x, toPoint.y
            );
            
            gradient.addColorStop(0, `rgba(0, 176, 80, ${0.3 * fromPoint.scale})`);
            gradient.addColorStop(1, `rgba(0, 140, 65, ${0.3 * toPoint.scale})`);
            
            ctx.beginPath();
            ctx.moveTo(fromPoint.x, fromPoint.y);
            ctx.lineTo(toPoint.x, toPoint.y);
            
            // Line width based on depth
            ctx.lineWidth = 0.5 * Math.min(fromPoint.scale, toPoint.scale);
            
            ctx.strokeStyle = gradient;
            ctx.stroke();
          }
        });
      });
      
      // Randomly create data packets
      if (Math.random() < 0.03 && dataPackets.length < 10) {
        const fromPointIndex = Math.floor(Math.random() * points.length);
        const fromPoint = points[fromPointIndex];
        
        if (fromPoint.connectedTo.length > 0) {
          const toPointIndex = fromPoint.connectedTo[Math.floor(Math.random() * fromPoint.connectedTo.length)];
          
          dataPackets.push({
            fromPointIndex,
            toPointIndex,
            progress: 0,
            speed: Math.random() * 0.03 + 0.01,
            color: Math.random() > 0.5 ? '#00B050' : '#FFFFFF',
            size: Math.random() * 2 + 1
          });
        }
      }
      
      // Update and draw data packets
      for (let i = dataPackets.length - 1; i >= 0; i--) {
        const packet = dataPackets[i];
        packet.progress += packet.speed;
        
        if (packet.progress >= 1) {
          // Packet reached destination - remove it
          dataPackets.splice(i, 1);
          continue;
        }
        
        const fromPoint = projectedPoints.find(p => p.originalIndex === packet.fromPointIndex);
        const toPoint = projectedPoints.find(p => p.originalIndex === packet.toPointIndex);
        
        if (fromPoint && toPoint) {
          // Calculate position along the line
          const x = fromPoint.x + (toPoint.x - fromPoint.x) * packet.progress;
          const y = fromPoint.y + (toPoint.y - fromPoint.y) * packet.progress;
          
          // Draw packet
          ctx.beginPath();
          ctx.arc(x, y, packet.size, 0, Math.PI * 2);
          ctx.fillStyle = packet.color;
          ctx.globalAlpha = 0.8;
          ctx.fill();
          
          // Draw tail
          const tailLength = 5;
          for (let j = 1; j <= tailLength; j++) {
            const tailProgress = Math.max(0, packet.progress - j * 0.05);
            const tailX = fromPoint.x + (toPoint.x - fromPoint.x) * tailProgress;
            const tailY = fromPoint.y + (toPoint.y - fromPoint.y) * tailProgress;
            
            ctx.beginPath();
            ctx.arc(tailX, tailY, packet.size * (1 - j / tailLength), 0, Math.PI * 2);
            ctx.fillStyle = packet.color;
            ctx.globalAlpha = 0.4 * (1 - j / tailLength);
            ctx.fill();
          }
          
          ctx.globalAlpha = 1;
        }
      }
      
      // Draw points in correct depth order (front to back)
      projectedPoints.forEach(projPoint => {
        const point = points[projPoint.originalIndex];
        
        // Draw the point
        ctx.beginPath();
        ctx.arc(projPoint.x, projPoint.y, point.size * projPoint.scale, 0, Math.PI * 2);
        ctx.fillStyle = point.color;
        ctx.globalAlpha = 0.9 * projPoint.scale;
        ctx.fill();
        
        // Add glow effect for some points
        if (projPoint.originalIndex % 3 === 0) {
          ctx.beginPath();
          ctx.arc(projPoint.x, projPoint.y, point.size * projPoint.scale * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 176, 80, ${0.2 * projPoint.scale})`;
          ctx.fill();
        }
        
        ctx.globalAlpha = 1;
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
