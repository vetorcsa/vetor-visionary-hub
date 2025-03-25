
import React, { useEffect, useRef } from 'react';
import { Calculator, ChevronRight, ChevronLeft, Globe } from 'lucide-react';

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

// Animation for Logistics Technology - Completely redesigned
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

    // Network nodes for logistics
    const nodes: {
      x: number;
      y: number;
      size: number;
      color: string;
      connections: number[];
      pulseSize: number;
      pulseOpacity: number;
    }[] = [];
    
    // Create a more structured network of nodes
    const createNodes = () => {
      nodes.length = 0;
      const nodeCount = 8;
      const rect = canvas.getBoundingClientRect();
      
      // Create a more organized grid of nodes
      for (let i = 0; i < nodeCount; i++) {
        // Place nodes in a more structured way
        let x, y;
        
        if (i < 4) {
          // Top row
          x = rect.width * (0.2 + (i * 0.2));
          y = rect.height * 0.25;
        } else {
          // Bottom row
          x = rect.width * (0.2 + ((i - 4) * 0.2));
          y = rect.height * 0.75;
        }
        
        nodes.push({
          x: x,
          y: y,
          size: 8,
          color: i % 2 === 0 ? '#00B050' : '#008C41',
          connections: [],
          pulseSize: 0,
          pulseOpacity: 0
        });
      }
      
      // Create connections - more structured network
      for (let i = 0; i < nodes.length; i++) {
        // Connect to adjacent nodes in same row
        if (i % 4 !== 3) {
          nodes[i].connections.push(i + 1);
        }
        
        // Connect to corresponding node in other row
        nodes[i].connections.push((i + 4) % 8);
        
        // Add diagonal connections for some nodes
        if (i % 2 === 0) {
          nodes[i].connections.push((i + 5) % 8);
        }
      }
    };
    
    createNodes();
    
    // Create package/data transfer animations
    const packages: {
      startNode: number;
      endNode: number;
      progress: number;
      speed: number;
      size: number;
      color: string;
    }[] = [];
    
    const createPackage = () => {
      if (nodes.length < 2) return;
      
      // Select random start and connected end nodes
      const startNodeIndex = Math.floor(Math.random() * nodes.length);
      const startNode = nodes[startNodeIndex];
      
      if (startNode.connections.length === 0) return;
      
      const endNodeIndex = startNode.connections[Math.floor(Math.random() * startNode.connections.length)];
      
      packages.push({
        startNode: startNodeIndex,
        endNode: endNodeIndex,
        progress: 0,
        speed: Math.random() * 0.01 + 0.005,
        size: Math.random() * 4 + 3,
        color: Math.random() > 0.5 ? '#00B050' : '#ffffff'
      });
      
      // Pulse effect on start node
      startNode.pulseSize = startNode.size * 2;
      startNode.pulseOpacity = 0.8;
    };
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      // Draw connections between nodes
      ctx.lineWidth = 2;
      
      nodes.forEach((node, nodeIndex) => {
        node.connections.forEach(targetIndex => {
          const targetNode = nodes[targetIndex];
          
          // Draw connection lines with gradient
          const gradient = ctx.createLinearGradient(
            node.x, node.y, 
            targetNode.x, targetNode.y
          );
          
          gradient.addColorStop(0, `rgba(0, 176, 80, 0.3)`);
          gradient.addColorStop(1, `rgba(0, 140, 65, 0.3)`);
          
          ctx.beginPath();
          ctx.strokeStyle = gradient;
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(targetNode.x, targetNode.y);
          ctx.stroke();
        });
      });
      
      // Randomly create new packages
      if (Math.random() < 0.03 && packages.length < 15) {
        createPackage();
      }
      
      // Update and draw packages
      for (let i = packages.length - 1; i >= 0; i--) {
        const pkg = packages[i];
        
        // Update progress
        pkg.progress += pkg.speed;
        
        if (pkg.progress >= 1) {
          // Package reached destination - trigger pulse on end node
          const endNode = nodes[pkg.endNode];
          endNode.pulseSize = endNode.size * 2;
          endNode.pulseOpacity = 0.8;
          
          // Remove package
          packages.splice(i, 1);
          continue;
        }
        
        // Draw package
        const startNode = nodes[pkg.startNode];
        const endNode = nodes[pkg.endNode];
        
        const x = startNode.x + (endNode.x - startNode.x) * pkg.progress;
        const y = startNode.y + (endNode.y - startNode.y) * pkg.progress;
        
        ctx.beginPath();
        ctx.arc(x, y, pkg.size, 0, Math.PI * 2);
        ctx.fillStyle = pkg.color;
        ctx.globalAlpha = 0.8;
        ctx.fill();
        
        // Draw tail for package
        const tailLength = 5;
        
        for (let j = 1; j <= tailLength; j++) {
          const tailProgress = Math.max(0, pkg.progress - j * 0.03);
          const tailX = startNode.x + (endNode.x - startNode.x) * tailProgress;
          const tailY = startNode.y + (endNode.y - startNode.y) * tailProgress;
          
          ctx.beginPath();
          ctx.arc(tailX, tailY, pkg.size * (1 - j / tailLength), 0, Math.PI * 2);
          ctx.fillStyle = pkg.color;
          ctx.globalAlpha = 0.3 * (1 - j / tailLength);
          ctx.fill();
        }
        
        ctx.globalAlpha = 1;
      }
      
      // Draw nodes and pulse effects
      nodes.forEach(node => {
        // Draw pulse effect if active
        if (node.pulseOpacity > 0) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.pulseSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 176, 80, ${node.pulseOpacity})`;
          ctx.fill();
          
          // Animate pulse
          node.pulseSize += 0.5;
          node.pulseOpacity -= 0.03;
        }
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
        
        // Add glow effect
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size + 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 176, 80, 0.3)';
        ctx.fill();
      });
      
      // Draw a warehouse/distribution center icon in the middle
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      ctx.fillStyle = 'rgba(0, 176, 80, 0.2)';
      ctx.fillRect(centerX - 25, centerY - 20, 50, 40);
      
      // Warehouse roof
      ctx.beginPath();
      ctx.moveTo(centerX - 30, centerY - 20);
      ctx.lineTo(centerX, centerY - 35);
      ctx.lineTo(centerX + 30, centerY - 20);
      ctx.closePath();
      ctx.fillStyle = 'rgba(0, 176, 80, 0.3)';
      ctx.fill();
      
      // Door
      ctx.fillStyle = 'rgba(0, 176, 80, 0.4)';
      ctx.fillRect(centerX - 10, centerY - 5, 20, 25);
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

// Animation for Custom Technology Solutions - Improved connections
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
      connectedTo: number[]; // Store connected points indices
      lineColor: string;
    }[] = [];
    
    const createPoints = () => {
      points.length = 0;
      const pointCount = 40; // Increased point count for more connections
      
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
        const distances: {index: number, distance: number}[] = [];
        
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
    };
    
    createPoints();
    
    // Animation
    let rotation = 0;
    
    // Create data packets for transfer animation
    const dataPackets: {
      fromPointIndex: number;
      toPointIndex: number;
      progress: number;
      speed: number;
      color: string;
      size: number;
    }[] = [];
    
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
      const projectedPoints: {x: number, y: number, z: number, originalIndex: number, scale: number}[] = [];
      
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

// Create a RealEstateAnimation component using technology-inspired visuals
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

    // Create building blueprint elements
    const buildings: {
      x: number;
      y: number;
      width: number;
      height: number;
      floors: number;
      windows: number[];
      color: string;
    }[] = [];
    
    // Create grid lines for blueprint effect
    const gridLines: {
      horizontal: {y: number, opacity: number}[];
      vertical: {x: number, opacity: number}[];
    } = {
      horizontal: [],
      vertical: []
    };
    
    const createGrid = () => {
      gridLines.horizontal = [];
      gridLines.vertical = [];
      
      const rect = canvas.getBoundingClientRect();
      
      // Create horizontal grid lines
      const hStep = rect.height / 20;
      for (let i = 0; i < 21; i++) {
        gridLines.horizontal.push({
          y: i * hStep,
          opacity: i % 5 === 0 ? 0.2 : 0.1
        });
      }
      
      // Create vertical grid lines
      const vStep = rect.width / 20;
      for (let i = 0; i < 21; i++) {
        gridLines.vertical.push({
          x: i * vStep,
          opacity: i % 5 === 0 ? 0.2 : 0.1
        });
      }
    };
    
    const createBuildings = () => {
      buildings.length = 0;
      const buildingCount = 5;
      const rect = canvas.getBoundingClientRect();
      
      // Create buildings with proper spacing
      for (let i = 0; i < buildingCount; i++) {
        const width = rect.width / buildingCount * 0.6;
        const height = Math.random() * (rect.height * 0.4) + (rect.height * 0.3);
        const x = (i * rect.width / buildingCount) + (rect.width / buildingCount * 0.2);
        const y = rect.height - height;
        const floors = Math.floor(height / 25);
        
        // Generate window pattern for each floor
        const windows = [];
        for (let j = 0; j < floors; j++) {
          windows.push(Math.floor(Math.random() * 4) + 2); // 2-5 windows per floor
        }
        
        buildings.push({
          x,
          y,
          width,
          height,
          floors,
          windows,
          color: i % 2 === 0 ? '#00B050' : '#008C41'
        });
      }
    };
    
    createGrid();
    createBuildings();
    
    // Animation variables
    let frame = 0;
    let blueprintMode = true;
    let fadeTransition = 0;
    
    // Data points for smart building overlay
    const dataPoints: {
      x: number;
      y: number;
      value: string;
      icon: string;
      pulse: number;
    }[] = [];
    
    const createDataPoints = () => {
      dataPoints.length = 0;
      
      buildings.forEach(building => {
        // Add 2-3 data points per building
        const pointCount = Math.floor(Math.random() * 2) + 2;
        
        for (let i = 0; i < pointCount; i++) {
          const x = building.x + Math.random() * building.width;
          const y = building.y + Math.random() * building.height;
          
          // Generate random values for data points
          const valueTypes = ['22°C', '68%', '420W', '12kWh', 'OK'];
          const iconTypes = ['⚡', '🔒', '♨️', '💧', '📶'];
          
          dataPoints.push({
            x, 
            y,
            value: valueTypes[Math.floor(Math.random() * valueTypes.length)],
            icon: iconTypes[Math.floor(Math.random() * iconTypes.length)],
            pulse: 0
          });
        }
      });
    };
    
    createDataPoints();
    
    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      frame++;
      
      // Switch between blueprint and smart building mode
      if (frame % 300 === 0) {
        blueprintMode = !blueprintMode;
        fadeTransition = 30; // Start transition
      }
      
      // Update fade transition
      if (fadeTransition > 0) {
        fadeTransition--;
      }
      
      // Calculate opacity based on mode and transition
      const blueprintOpacity = blueprintMode ? 
                              (fadeTransition > 0 ? fadeTransition / 30 : 1) : 
                              (fadeTransition > 0 ? 1 - fadeTransition / 30 : 0);
                              
      const smartBuildingOpacity = 1 - blueprintOpacity;
      
      // Draw grid for blueprint effect
      if (blueprintOpacity > 0) {
        ctx.globalAlpha = blueprintOpacity * 0.5;
        
        // Draw horizontal grid lines
        gridLines.horizontal.forEach(line => {
          ctx.beginPath();
          ctx.moveTo(0, line.y);
          ctx.lineTo(rect.width, line.y);
          ctx.strokeStyle = `rgba(0, 176, 80, ${line.opacity})`;
          ctx.lineWidth = line.opacity === 0.2 ? 1 : 0.5;
          ctx.stroke();
        });
        
        // Draw vertical grid lines
        gridLines.vertical.forEach(line => {
          ctx.beginPath();
          ctx.moveTo(line.x, 0);
          ctx.lineTo(line.x, rect.height);
          ctx.strokeStyle = `rgba(0, 176, 80, ${line.opacity})`;
          ctx.lineWidth = line.opacity === 0.2 ? 1 : 0.5;
          ctx.stroke();
        });
        
        ctx.globalAlpha = 1;
      }
      
      // Draw buildings
      buildings.forEach((building, buildingIndex) => {
        // Blueprint mode
        if (blueprintOpacity > 0) {
          ctx.globalAlpha = blueprintOpacity;
          
          // Draw building outline
          ctx.strokeStyle = building.color;
          ctx.lineWidth = 2;
          ctx.strokeRect(building.x, building.y, building.width, building.height);
          
          // Draw floor lines
          const floorHeight = building.height / building.floors;
          for (let i = 1; i < building.floors; i++) {
            ctx.beginPath();
            ctx.moveTo(building.x, building.y + i * floorHeight);
            ctx.lineTo(building.x + building.width, building.y + i * floorHeight);
            ctx.strokeStyle = `rgba(0, 176, 80, 0.5)`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
          
          // Draw dimensions
          ctx.font = '8px Arial';
          ctx.fillStyle = '#00B050';
          ctx.fillText(`${Math.round(building.width)}m`, building.x + building.width / 2 - 10, building.y + building.height + 15);
          ctx.fillText(`${Math.round(building.height)}m`, building.x - 25, building.y + building.height / 2);
          
          // Draw building label
          ctx.font = '10px Arial';
          ctx.fillStyle = '#00B050';
          ctx.fillText(`Building ${buildingIndex + 1}`, building.x + building.width / 2 - 25, building.y - 10);
          
          ctx.globalAlpha = 1;
        }
        
        // Smart building mode
        if (smartBuildingOpacity > 0) {
          ctx.globalAlpha = smartBuildingOpacity;
          
          // Draw filled building
          ctx.fillStyle = building.color;
          ctx.fillRect(building.x, building.y, building.width, building.height);
          
          // Draw windows
          const floorHeight = building.height / building.floors;
          building.windows.forEach((windowCount, floor) => {
            const windowWidth = building.width / (windowCount * 2);
            const startX = building.x + windowWidth;
            
            for (let i = 0; i < windowCount; i++) {
              const windowX = startX + i * windowWidth * 2;
              const windowY = building.y + floor * floorHeight + floorHeight * 0.25;
              const windowHeight = floorHeight * 0.5;
              
              // Window light (some windows lit, some dark)
              if (Math.random() > 0.3) {
                ctx.fillStyle = `rgba(255, 255, 200, ${0.5 + Math.sin(frame * 0.05 + i + floor) * 0.1})`;
              } else {
                ctx.fillStyle = 'rgba(0, 30, 60, 0.8)';
              }
              
              ctx.fillRect(windowX, windowY, windowWidth, windowHeight);
            }
          });
          
          ctx.globalAlpha = 1;
        }
      });
      
      // Draw data points (in smart building mode)
      if (smartBuildingOpacity > 0) {
        ctx.globalAlpha = smartBuildingOpacity;
        
        dataPoints.forEach(point => {
          // Update pulse animation
          if (Math.random() > 0.99) {
            point.pulse = 20; // Start pulse animation
          }
          
          if (point.pulse > 0) {
            // Draw pulse circle
            ctx.beginPath();
            ctx.arc(point.x, point.y, 20 - point.pulse, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(0, 176, 80, ${point.pulse / 20})`;
            ctx.lineWidth = 2;
            ctx.stroke();
            
            point.pulse--;
          }
          
          // Draw connection lines
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(point.x + 40, point.y - 20);
          ctx.strokeStyle = 'rgba(0, 176, 80, 0.7)';
          ctx.lineWidth = 1;
          ctx.stroke();
          
          // Draw point
          ctx.beginPath();
          ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = '#00B050';
          ctx.fill();
          
          // Draw data box
          ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
          ctx.fillRect(point.x + 40 - 5, point.y - 30, 60, 20);
          ctx.strokeStyle = '#00B050';
          ctx.strokeRect(point.x + 40 - 5, point.y - 30, 60, 20);
          
          // Draw data text
          ctx.font = '12px Arial';
          ctx.fillStyle = '#FFFFFF';
          ctx.fillText(`${point.icon} ${point.value}`, point.x + 40, point.y - 15);
        });
        
        ctx.globalAlpha = 1;
      }
      
      // Draw title overlay
      ctx.font = 'bold 16px Arial';
      ctx.fillStyle = '#00B050';
      ctx.textAlign = 'center';
      ctx.fillText(
        blueprintMode ? 'Property Blueprint Technology' : 'Smart Building Management',
        rect.width / 2,
        30
      );
      
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
