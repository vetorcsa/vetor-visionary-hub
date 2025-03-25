
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

    // Store all elements in a ref to keep them available through rerenders
    let trucks = [];
    let pathPoints = [];
    
    // Initialize all elements for the animation
    const initializeElements = () => {
      const rect = canvas.getBoundingClientRect();
      
      // Create minimalist trucks
      trucks = [];
      const truckCount = 4; // Reduced number of trucks
      
      for (let i = 0; i < truckCount; i++) {
        trucks.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          width: 24 + Math.random() * 8,
          height: 14 + Math.random() * 4,
          speed: 0.4 + Math.random() * 0.4, // More consistent speed
          angle: Math.random() * Math.PI * 2,
          color: i % 2 === 0 ? '#00B050' : '#7ED957',
          turnRate: (Math.random() - 0.5) * 0.02,
          visible: true // Make sure all trucks are visible
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

    // Resize canvas - with initializeElements defined before it's called
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
          truck.angle += normalizedDiff * 0.05; // Smoother turning
          
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
          
          // Draw truck (improved minimalist style)
          ctx.save();
          ctx.translate(truck.x, truck.y);
          ctx.rotate(truck.angle);
          
          // Draw truck body
          ctx.fillStyle = truck.color;
          ctx.fillRect(-truck.width/2, -truck.height/2, truck.width, truck.height);
          
          // Draw truck cab
          ctx.fillStyle = 'rgba(0, 50, 30, 0.7)';
          ctx.fillRect(-truck.width/2, -truck.height/2, truck.width * 0.3, truck.height);
          
          // Draw wheels (improved)
          ctx.fillStyle = '#333';
          // Front wheels
          ctx.fillRect(-truck.width/3, -truck.height/2 - 2, 5, 3);
          ctx.fillRect(-truck.width/3, truck.height/2 - 1, 5, 3);
          // Back wheels
          ctx.fillRect(truck.width/4, -truck.height/2 - 2, 5, 3);
          ctx.fillRect(truck.width/4, truck.height/2 - 1, 5, 3);
          
          // Draw headlights
          ctx.fillStyle = 'rgba(255, 255, 200, 0.8)';
          ctx.fillRect(-truck.width/2 + 1, -truck.height/4, 2, 2);
          ctx.fillRect(-truck.width/2 + 1, truck.height/4 - 2, 2, 2);
          
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

// Animation for Real Estate Technology - Line-drawing houses on a digital grid
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
    
    // Create houses - using line drawing style
    const houses = [];
    const houseCount = 8; // Reduced number for cleaner look
    
    for (let i = 0; i < houseCount; i++) {
      houses.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        size: 18 + Math.random() * 8, // Slightly larger for better line visibility
        color: i % 3 === 0 ? '#00B050' : (i % 3 === 1 ? '#7ED957' : '#008C41'),
        rotation: Math.random() * Math.PI * 0.1, // Less rotation for better readability
        rotationSpeed: (Math.random() - 0.5) * 0.005,
        elevation: Math.random() * 10,
        elevationDirection: Math.random() > 0.5 ? 1 : -1,
        style: Math.floor(Math.random() * 3) // Different house styles
      });
    }
    
    // Draw grid for digital effect - simplified
    const gridCells = {
      horizontal: [],
      vertical: []
    };
    
    const gridDensity = 12; // Reduced density
    
    for (let i = 0; i <= gridDensity; i++) {
      gridCells.horizontal.push({
        y: (rect.height / gridDensity) * i,
        opacity: 0.07 + Math.random() * 0.08 // Lighter lines
      });
      
      gridCells.vertical.push({
        x: (rect.width / gridDensity) * i,
        opacity: 0.07 + Math.random() * 0.08 // Lighter lines
      });
    }
    
    // Connection points for houses
    const connectionPoints = [];
    const pointCount = 6; // Reduced for cleaner look
    
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
      ctx.lineWidth = 0.5; // Thinner lines
      
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
          ctx.strokeStyle = 'rgba(0, 176, 80, 0.1)'; // Lighter connections
          ctx.stroke();
        });
        
        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 176, 80, 0.2)';
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
        if (house.elevation > 10 || house.elevation < 0) {
          house.elevationDirection *= -1;
        }
        
        // Draw house shadow (subtle)
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.beginPath();
        ctx.ellipse(
          house.x, 
          house.y + house.size/2 + 5, 
          house.size/2, 
          house.size/6, 
          0, 0, Math.PI * 2
        );
        ctx.fill();
        
        // Draw house with line style
        ctx.save();
        ctx.translate(house.x, house.y - house.elevation * 0.1);
        ctx.rotate(house.rotation);
        
        ctx.strokeStyle = house.color;
        ctx.lineWidth = 1.5;
        ctx.lineJoin = 'round';
        
        // Different house styles using line art
        if (house.style === 0) {
          // Style 1: Simple house with roof
          
          // House body outline
          ctx.beginPath();
          ctx.strokeRect(-house.size/2, -house.size/2, house.size, house.size);
          
          // Roof
          ctx.beginPath();
          ctx.moveTo(-house.size/2 - 2, -house.size/2);
          ctx.lineTo(0, -house.size/2 - house.size/3);
          ctx.lineTo(house.size/2 + 2, -house.size/2);
          ctx.stroke();
          
          // Door
          ctx.beginPath();
          ctx.moveTo(-house.size/6, house.size/2);
          ctx.lineTo(-house.size/6, 0);
          ctx.lineTo(house.size/6, 0);
          ctx.lineTo(house.size/6, house.size/2);
          ctx.stroke();
          
          // Windows
          ctx.strokeRect(-house.size/3, -house.size/3, house.size/4, house.size/4);
          ctx.strokeRect(house.size/10, -house.size/3, house.size/4, house.size/4);
          
        } else if (house.style === 1) {
          // Style 2: Modern house
          
          // House body - two connected rectangles
          ctx.beginPath();
          ctx.strokeRect(-house.size/2, -house.size/3, house.size * 0.6, house.size * 0.8);
          ctx.strokeRect(-house.size/2 + house.size * 0.6, -house.size/2, house.size * 0.4, house.size);
          
          // Windows - horizontal lines
          for (let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.moveTo(-house.size/2 + 2, -house.size/4 + i * house.size/6);
            ctx.lineTo(-house.size/2 + house.size * 0.6 - 2, -house.size/4 + i * house.size/6);
            ctx.stroke();
          }
          
          // Windows - vertical lines on second section
          for (let i = 0; i < 2; i++) {
            ctx.beginPath();
            ctx.moveTo(-house.size/2 + house.size * 0.6 + house.size * 0.2, -house.size/2 + i * house.size/3);
            ctx.lineTo(-house.size/2 + house.size * 0.6 + house.size * 0.2, -house.size/2 + house.size/4 + i * house.size/3);
            ctx.stroke();
          }
          
        } else {
          // Style 3: Circular house
          
          // Circular main structure
          ctx.beginPath();
          ctx.arc(0, 0, house.size/2, 0, Math.PI * 2);
          ctx.stroke();
          
          // Dome roof
          ctx.beginPath();
          ctx.arc(0, -house.size/2, house.size/3, 0, Math.PI, true);
          ctx.stroke();
          
          // Door
          ctx.beginPath();
          ctx.moveTo(-house.size/6, house.size/2);
          ctx.lineTo(-house.size/6, house.size/6);
          ctx.arc(0, house.size/6, house.size/6, Math.PI, 0, true);
          ctx.lineTo(house.size/6, house.size/2);
          ctx.stroke();
          
          // Windows
          ctx.beginPath();
          ctx.arc(-house.size/4, -house.size/6, house.size/8, 0, Math.PI * 2);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.arc(house.size/4, -house.size/6, house.size/8, 0, Math.PI * 2);
          ctx.stroke();
        }
        
        ctx.restore();
        
        // Digital data points above house (reduced frequency)
        if (Math.random() > 0.99) {
          ctx.fillStyle = 'rgba(0, 176, 80, 0.8)';
          ctx.font = '8px monospace';
          ctx.fillText('1', house.x + (Math.random() - 0.5) * 20, house.y - house.size - Math.random() * 10);
        }
        if (Math.random() > 0.99) {
          ctx.fillStyle = 'rgba(0, 176, 80, 0.8)';
          ctx.font = '8px monospace';
          ctx.fillText('0', house.x + (Math.random() - 0.5) * 20, house.y - house.size - Math.random() * 10);
        }
      });
      
      // Draw a central hub
      ctx.beginPath();
      ctx.arc(rect.width/2, rect.height/2, 15, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 176, 80, 0.1)';
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(rect.width/2, rect.height/2, 8, 0, Math.PI * 2);
      ctx.fillStyle = '#00B050';
      ctx.fill();
      
      // Pulse effect
      const pulseSize = 15 + Math.sin(time * 3) * 5;
      ctx.beginPath();
      ctx.arc(rect.width/2, rect.height/2, pulseSize, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.3)';
      ctx.lineWidth = 1.5;
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

// Animation for Fiscal Technology - Simplified financial data
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
    
    // Create documents with financial data - reduced number
    const documents = [];
    const documentCount = 5; // Reduced from 8
    
    for (let i = 0; i < documentCount; i++) {
      documents.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        width: 30 + Math.random() * 20,
        height: 40 + Math.random() * 20,
        rotation: (Math.random() - 0.5) * 0.2, // Less rotation
        color: i % 3 === 0 ? '#00B050' : (i % 3 === 1 ? '#7ED957' : '#008C41'),
        speed: 0.15 + Math.random() * 0.2, // Slower movement
        dataLines: Math.floor(Math.random() * 3) + 2,
        scale: 0.7 + Math.random() * 0.4
      });
    }
    
    // Create graph bars (for minimalist bar chart)
    const graphBars = [];
    const barCount = 5; // Reduced from 6
    
    for (let i = 0; i < barCount; i++) {
      graphBars.push({
        height: 0,
        targetHeight: 20 + Math.random() * 40, // Lower bars
        changeInterval: 250 + Math.random() * 300, // Slower changes
        lastChange: 0
      });
    }
    
    // Create data points for line chart
    const lineChartPoints = [];
    const pointCount = 6; // Reduced from 8
    
    for (let i = 0; i < pointCount; i++) {
      lineChartPoints.push({
        value: 20 + Math.random() * 50,
        targetValue: 20 + Math.random() * 50,
        changeInterval: 150 + Math.random() * 200,
        lastChange: 0
      });
    }
    
    // Data numbers floating around - significantly reduced
    const dataNumbers = [];
    const numberCount = 6; // Reduced from 15
    
    for (let i = 0; i < numberCount; i++) {
      dataNumbers.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        value: Math.floor(Math.random() * 100),
        size: 8 + Math.random() * 4,
        opacity: 0.2 + Math.random() * 0.3, // More transparent
        speed: 0.15 + Math.random() * 0.2 // Slower movement
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
      
      // Draw background grid - sparser grid
      ctx.lineWidth = 0.3; // Thinner lines
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.05)'; // More transparent
      
      const gridSize = 60; // Larger grid cells
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
        
        // Document outline only (minimalist style)
        ctx.strokeStyle = doc.color;
        ctx.lineWidth = 1;
        ctx.strokeRect(-doc.width/2, -doc.height/2, doc.width, doc.height);
        
        // Document header line
        ctx.beginPath();
        ctx.moveTo(-doc.width/2, -doc.height/2 + 5);
        ctx.lineTo(doc.width/2, -doc.height/2 + 5);
        ctx.stroke();
        
        // Document data lines - just outlines
        for (let i = 0; i < doc.dataLines; i++) {
          const lineY = -doc.height/2 + 12 + i * 8;
          const lineWidth = doc.width - 14 - Math.random() * 10;
          
          ctx.beginPath();
          ctx.moveTo(-doc.width/2 + 7, lineY);
          ctx.lineTo(-doc.width/2 + 7 + lineWidth, lineY);
          ctx.stroke();
        }
        
        // Document $ symbol
        ctx.fillStyle = doc.color;
        ctx.font = '10px Arial';
        ctx.fillText('$', -doc.width/4, doc.height/6);
        
        ctx.restore();
      });
      
      // Center everything for better organization
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Draw line chart - top half
      const lineChartWidth = 140;
      const lineChartHeight = 50;
      const lineChartX = centerX - lineChartWidth/2;
      const lineChartY = centerY - 80;
      
      // Line chart background - just outline
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.2)';
      ctx.strokeRect(lineChartX, lineChartY, lineChartWidth, lineChartHeight);
      
      // Update line chart points
      lineChartPoints.forEach((point, i) => {
        if (frame - point.lastChange > point.changeInterval) {
          point.targetValue = 20 + Math.random() * 50;
          point.lastChange = frame;
        }
        
        // Smooth transition to target value
        point.value += (point.targetValue - point.value) * 0.04;
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
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });
      
      ctx.strokeStyle = '#00B050';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      
      // Draw and update bar chart - bottom half
      const barWidth = 8;
      const barSpacing = 15;
      const barChartWidth = (barWidth + barSpacing) * barCount;
      const barChartX = centerX - barChartWidth/2;
      const barChartY = centerY + 50;
      
      // Bar chart base line
      ctx.beginPath();
      ctx.moveTo(barChartX - 10, barChartY);
      ctx.lineTo(barChartX + barChartWidth + 10, barChartY);
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Update and draw bars
      graphBars.forEach((bar, i) => {
        if (frame - bar.lastChange > bar.changeInterval) {
          bar.targetHeight = 15 + Math.random() * 40;
          bar.lastChange = frame;
        }
        
        // Smooth transition to target height
        bar.height += (bar.targetHeight - bar.height) * 0.05;
        
        const x = barChartX + i * (barWidth + barSpacing);
        const y = barChartY - bar.height;
        
        // Draw bar - outline only for minimalist style
        ctx.strokeStyle = i % 2 === 0 ? '#00B050' : '#7ED957';
        ctx.beginPath();
        ctx.rect(x, y, barWidth, bar.height);
        ctx.stroke();
      });
      
      // Draw and update floating numbers (very reduced)
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

// Animation for Technology Customization - Simple digital code patterns
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
    
    // Create code lines
    const codeLines = [];
    const lineCount = 30; // Moderate number of lines
    
    for (let i = 0; i < lineCount; i++) {
      codeLines.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        width: 20 + Math.random() * 80,
        segments: Math.floor(Math.random() * 5) + 2,
        speed: 0.2 + Math.random() * 0.3,
        color: `rgba(0, ${Math.floor(150 + Math.random() * 50)}, ${Math.floor(50 + Math.random() * 30)}, ${0.2 + Math.random() * 0.3})`,
        blink: 0
      });
    }
    
    // Create binary particles
    const particles = [];
    const particleCount = 40; // Moderate number of particles
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        size: 4 + Math.random() * 4,
        value: Math.random() > 0.5 ? '1' : '0',
        opacity: 0.1 + Math.random() * 0.2,
        speed: 0.1 + Math.random() * 0.2
      });
    }
    
    // Create connection nodes
    const nodes = [];
    const nodeCount = 8; // Small number of nodes
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        size: 3 + Math.random() * 3,
        connections: []
      });
    }
    
    // Create some connections between nodes
    nodes.forEach((node, i) => {
      const connectionCount = Math.floor(Math.random() * 2) + 1;
      const indices = [...Array(nodeCount).keys()].filter(j => j !== i);
      
      for (let c = 0; c < connectionCount; c++) {
        if (indices.length > 0) {
          const randomIndex = Math.floor(Math.random() * indices.length);
          const targetIndex = indices[randomIndex];
          
          node.connections.push(targetIndex);
          indices.splice(randomIndex, 1);
        }
      }
    });
    
    let frame = 0;
    
    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      frame++;
      
      // Draw grid - very subtle
      ctx.lineWidth = 0.3;
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.03)';
      
      const gridSize = 40;
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
      
      // Draw connections between nodes
      nodes.forEach((node, i) => {
        node.connections.forEach(targetIndex => {
          const targetNode = nodes[targetIndex];
          
          // Draw line
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(targetNode.x, targetNode.y);
          ctx.strokeStyle = 'rgba(0, 176, 80, 0.1)';
          ctx.lineWidth = 0.5;
          ctx.stroke();
          
          // Draw data packet moving along the line
          if (frame % 30 === i % 30) {
            const progress = (frame % 120) / 120;
            const packetX = node.x + (targetNode.x - node.x) * progress;
            const packetY = node.y + (targetNode.y - node.y) * progress;
            
            ctx.beginPath();
            ctx.arc(packetX, packetY, 2, 0, Math.PI * 2);
            ctx.fillStyle = '#00B050';
            ctx.fill();
          }
        });
      });
      
      // Draw nodes
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 176, 80, 0.3)';
        ctx.fill();
        
        // Pulse effect
        if (Math.random() > 0.95) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 176, 80, 0.1)';
          ctx.fill();
        }
      });
      
      // Update and draw code lines
      codeLines.forEach(line => {
        // Move line upward
        line.y -= line.speed;
        
        // Reset position when off screen
        if (line.y < -10) {
          line.y = rect.height + 10;
          line.x = Math.random() * rect.width;
          line.width = 20 + Math.random() * 80;
          line.segments = Math.floor(Math.random() * 5) + 2;
        }
        
        // Draw line
        const segmentWidth = line.width / line.segments;
        
        for (let i = 0; i < line.segments; i++) {
          // Random chance to leave gaps between segments
          if (Math.random() > 0.3) {
            const x = line.x + i * segmentWidth;
            const width = segmentWidth * 0.8;
            
            // Randomize blink effect
            if (Math.random() > 0.997) {
              line.blink = 5;
            }
            
            const color = line.blink > 0 ? 'rgba(0, 255, 100, 0.4)' : line.color;
            
            ctx.fillStyle = color;
            ctx.fillRect(x, line.y, width, 1);
          }
        }
        
        // Reduce blink counter
        if (line.blink > 0) {
          line.blink--;
        }
      });
      
      // Update and draw particles
      particles.forEach(particle => {
        // Move particle upward
        particle.y -= particle.speed;
        
        // Reset position when off screen
        if (particle.y < -10) {
          particle.y = rect.height + 10;
          particle.x = Math.random() * rect.width;
          particle.value = Math.random() > 0.5 ? '1' : '0';
        }
        
        // Draw particle
        ctx.fillStyle = `rgba(0, 176, 80, ${particle.opacity})`;
        ctx.font = `${particle.size}px monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(particle.value, particle.x, particle.y);
      });
      
      // Draw code brackets occasionally
      if (frame % 60 === 0) {
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;
        
        ctx.fillStyle = 'rgba(0, 176, 80, 0.2)';
        ctx.font = '16px monospace';
        ctx.fillText('{', x, y);
        
        if (Math.random() > 0.5) {
          ctx.fillText('}', x + 20, y);
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
