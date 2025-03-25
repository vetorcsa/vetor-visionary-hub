import React, { useEffect, useRef } from 'react';

// Completely redesigned animation for Real Estate Technology - Modern digital property visualization
export const RealEstateAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Adjust canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Digital city properties
    const buildingData = [];
    const buildingCount = 12;
    
    // Grid layout with proper spacing
    const cols = 4;
    const rows = 3;
    const cellWidth = canvas.width / cols;
    const cellHeight = canvas.height / rows;
    
    // Create buildings in a grid pattern
    for (let i = 0; i < buildingCount; i++) {
      const row = Math.floor(i / cols);
      const col = i % cols;
      
      const centerX = cellWidth * (col + 0.5);
      const centerY = cellHeight * (row + 0.5);
      
      // Building properties
      buildingData.push({
        x: centerX,
        y: centerY,
        width: 5 + Math.random() * 15,
        height: 15 + Math.random() * 30,
        color: i % 3 === 0 ? '#00B050' : i % 3 === 1 ? '#7ED957' : '#008C41',
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.01,
        floors: 2 + Math.floor(Math.random() * 5),
        connected: Math.random() > 0.5,
        connectionTarget: Math.floor(Math.random() * buildingCount)
      });
    }
    
    // Add digital network nodes
    const nodes = [];
    const nodeCount = 8;
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 1 + Math.random() * 2,
        speed: {
          x: (Math.random() - 0.5) * 0.3,
          y: (Math.random() - 0.5) * 0.3
        },
        connections: []
      });
    }
    
    // Create network connections
    nodes.forEach((node, index) => {
      // Connect each node to 1-2 others
      const connectionCount = 1 + Math.floor(Math.random());
      
      for (let i = 0; i < connectionCount; i++) {
        let targetIndex;
        do {
          targetIndex = Math.floor(Math.random() * nodes.length);
        } while (targetIndex === index);
        
        node.connections.push(targetIndex);
      }
    });
    
    // Data packets flowing between buildings
    const dataPackets = [];
    
    // Create initial data packets
    const createPacket = () => {
      const sourceIndex = Math.floor(Math.random() * buildingCount);
      let targetIndex;
      
      do {
        targetIndex = Math.floor(Math.random() * buildingCount);
      } while (targetIndex === sourceIndex);
      
      const source = buildingData[sourceIndex];
      const target = buildingData[targetIndex];
      
      dataPackets.push({
        sourceX: source.x,
        sourceY: source.y,
        targetX: target.x,
        targetY: target.y,
        x: source.x,
        y: source.y,
        progress: 0,
        speed: 0.005 + Math.random() * 0.005,
        color: Math.random() > 0.5 ? '#00B050' : '#7ED957',
        size: 1.5 + Math.random() * 1.5
      });
    };
    
    // Create initial packets
    for (let i = 0; i < 5; i++) {
      createPacket();
    }
    
    // Animation variables
    let time = 0;
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      time += 0.01;
      
      // Draw subtle grid background
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.05)';
      ctx.lineWidth = 0.2;
      
      // Horizontal grid lines
      for (let y = 0; y < canvas.height; y += cellHeight / 2) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Vertical grid lines
      for (let x = 0; x < canvas.width; x += cellWidth / 2) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Update and draw nodes
      nodes.forEach(node => {
        // Move nodes slowly
        node.x += node.speed.x;
        node.y += node.speed.y;
        
        // Wrap around edges
        if (node.x < 0) node.x = canvas.width;
        if (node.x > canvas.width) node.x = 0;
        if (node.y < 0) node.y = canvas.height;
        if (node.y > canvas.height) node.y = 0;
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 176, 80, 0.4)';
        ctx.fill();
        
        // Draw connections
        node.connections.forEach(targetIndex => {
          const target = nodes[targetIndex];
          
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          ctx.strokeStyle = 'rgba(0, 176, 80, 0.1)';
          ctx.lineWidth = 0.3;
          ctx.stroke();
        });
      });
      
      // Update and draw buildings
      buildingData.forEach((building, index) => {
        // Pulsing effect for "active" buildings
        building.pulse += building.pulseSpeed;
        const pulseFactor = 1 + Math.sin(building.pulse) * 0.1;
        
        // Draw building - modern digital style
        const width = building.width * pulseFactor;
        const height = building.height * pulseFactor;
        
        // Shadow for 3D effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(
          building.x - width / 2 + 2,
          building.y - height / 2 + 2,
          width,
          height
        );
        
        // Main building
        ctx.fillStyle = building.color;
        ctx.fillRect(
          building.x - width / 2,
          building.y - height / 2,
          width,
          height
        );
        
        // Building windows - digital grid pattern
        const floorHeight = height / building.floors;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        
        for (let floor = 0; floor < building.floors; floor++) {
          // Windows on each floor
          const windowCount = 2;
          const windowWidth = width / (windowCount * 2);
          
          for (let w = 0; w < windowCount; w++) {
            // Window position
            const windowX = building.x - width / 2 + width * (w + 0.5) / windowCount;
            const windowY = building.y - height / 2 + floor * floorHeight + floorHeight / 2;
            
            // Random window lighting effect
            if (Math.random() > 0.7) {
              ctx.fillRect(
                windowX - windowWidth / 2,
                windowY - floorHeight * 0.3,
                windowWidth,
                floorHeight * 0.6
              );
            }
          }
        }
        
        // Building connections - digital network
        if (building.connected && Math.random() > 0.99) {
          const target = buildingData[building.connectionTarget];
          
          // Draw data flowing between buildings
          ctx.beginPath();
          ctx.moveTo(building.x, building.y);
          ctx.lineTo(target.x, target.y);
          ctx.strokeStyle = `rgba(0, 176, 80, ${0.1 + Math.sin(time * 3) * 0.05})`;
          ctx.lineWidth = 0.3;
          ctx.stroke();
          
          // Pulse effect along the connection
          const pulsePosition = (time * 2) % 1;
          const pulseX = building.x + (target.x - building.x) * pulsePosition;
          const pulseY = building.y + (target.y - building.y) * pulsePosition;
          
          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = '#00B050';
          ctx.fill();
        }
      });
      
      // Update and draw data packets
      dataPackets.forEach((packet, index) => {
        // Update packet position
        packet.progress += packet.speed;
        
        if (packet.progress >= 1) {
          // Reset packet or remove it
          if (Math.random() > 0.3) {
            // Create a new path
            const sourceIndex = Math.floor(Math.random() * buildingCount);
            let targetIndex;
            
            do {
              targetIndex = Math.floor(Math.random() * buildingCount);
            } while (targetIndex === sourceIndex);
            
            const source = buildingData[sourceIndex];
            const target = buildingData[targetIndex];
            
            packet.sourceX = source.x;
            packet.sourceY = source.y;
            packet.targetX = target.x;
            packet.targetY = target.y;
            packet.x = source.x;
            packet.y = source.y;
            packet.progress = 0;
          } else {
            // Remove packet
            dataPackets.splice(index, 1);
            // Create a new one
            if (Math.random() > 0.5) {
              createPacket();
            }
          }
        } else {
          // Lerp between source and target with slight arc for 3D effect
          const t = packet.progress;
          const mt = 1 - t;
          
          // Add slight curve to path
          const midX = (packet.sourceX + packet.targetX) / 2;
          const midY = (packet.sourceY + packet.targetY) / 2 - 15 * Math.sin(Math.PI * t);
          
          // Quadratic bezier for position
          packet.x = mt * mt * packet.sourceX + 2 * mt * t * midX + t * t * packet.targetX;
          packet.y = mt * mt * packet.sourceY + 2 * mt * t * midY + t * t * packet.targetY;
          
          // Draw packet
          ctx.beginPath();
          ctx.arc(packet.x, packet.y, packet.size, 0, Math.PI * 2);
          ctx.fillStyle = packet.color;
          ctx.fill();
          
          // Draw packet trail
          ctx.beginPath();
          ctx.moveTo(packet.x, packet.y);
          
          // Calculate trail points
          for (let i = 1; i <= 3; i++) {
            const trailT = Math.max(0, t - i * 0.05);
            const trailMt = 1 - trailT;
            
            const trailX = trailMt * trailMt * packet.sourceX + 2 * trailMt * trailT * midX + trailT * trailT * packet.targetX;
            const trailY = trailMt * trailMt * packet.sourceY + 2 * trailMt * trailT * midY + trailT * trailT * packet.targetY;
            
            ctx.lineTo(trailX, trailY);
          }
          
          ctx.strokeStyle = `rgba(${packet.color.slice(1, 3)}, ${packet.color.slice(3, 5)}, ${packet.color.slice(5, 7)}, 0.2)`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
      
      // Occasionally create new packets
      if (Math.random() > 0.995 && dataPackets.length < 8) {
        createPacket();
      }
      
      // Draw central hub
      const hubX = canvas.width / 2;
      const hubY = canvas.height / 2;
      const hubRadius = 6 + Math.sin(time * 2) * 1;
      
      // Hub glow
      const gradient = ctx.createRadialGradient(hubX, hubY, 0, hubX, hubY, hubRadius * 3);
      gradient.addColorStop(0, 'rgba(0, 176, 80, 0.2)');
      gradient.addColorStop(1, 'rgba(0, 176, 80, 0)');
      
      ctx.beginPath();
      ctx.arc(hubX, hubY, hubRadius * 3, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Hub core
      ctx.beginPath();
      ctx.arc(hubX, hubY, hubRadius, 0, Math.PI * 2);
      ctx.fillStyle = '#00B050';
      ctx.fill();
      
      // Hub ring
      ctx.beginPath();
      ctx.arc(hubX, hubY, hubRadius * 1.5, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.5)';
      ctx.lineWidth = 1;
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
      className="w-full h-full"
    />
  );
};

// Completely redesigned animation for Fiscal Technology - Digital document flow and analysis
export const FiscalAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Adjust canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Digital documents
    const documents = [];
    const documentCount = 15;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // Create documents
    for (let i = 0; i < documentCount; i++) {
      // Document types
      const isInvoice = Math.random() > 0.6;
      const isForm = !isInvoice && Math.random() > 0.5;
      const isReport = !isInvoice && !isForm;
      
      // Document starting position - circular arrangement
      const angle = (i / documentCount) * Math.PI * 2;
      const radius = canvas.width * 0.3 * (0.8 + Math.random() * 0.4);
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      
      documents.push({
        x,
        y,
        width: 30 + Math.random() * 20,
        height: 40 + Math.random() * 10,
        rotation: Math.random() * Math.PI * 0.1 - Math.PI * 0.05,
        color: isInvoice ? '#00B050' : isForm ? '#7ED957' : '#E2F4E8',
        type: isInvoice ? 'invoice' : isForm ? 'form' : 'report',
        processed: false,
        processing: false,
        processingProgress: 0,
        processingSpeed: 0.01 + Math.random() * 0.02,
        movingToCenter: false,
        moveProgress: 0,
        moveSpeed: 0.01 + Math.random() * 0.01,
        originalX: x,
        originalY: y,
        pulseEffect: 0,
        pulseSpeed: 0.02 + Math.random() * 0.02
      });
    }
    
    // Data bits - small particles moving around
    const dataBits = [];
    const dataBitCount = 30;
    
    for (let i = 0; i < dataBitCount; i++) {
      dataBits.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 0.5 + Math.random() * 1,
        speed: {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5
        },
        color: i % 3 === 0 ? '#00B050' : i % 3 === 1 ? '#7ED957' : '#E2F4E8',
        opacity: 0.3 + Math.random() * 0.4
      });
    }
    
    // Animation variables
    let time = 0;
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      time += 0.01;
      
      // Update and draw data bits
      dataBits.forEach(bit => {
        // Move bits
        bit.x += bit.speed.x;
        bit.y += bit.speed.y;
        
        // Wrap around edges
        if (bit.x < 0) bit.x = canvas.width;
        if (bit.x > canvas.width) bit.x = 0;
        if (bit.y < 0) bit.y = canvas.height;
        if (bit.y > canvas.height) bit.y = 0;
        
        // Draw bit
        ctx.beginPath();
        ctx.arc(bit.x, bit.y, bit.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${bit.color.slice(1, 3)}, ${bit.color.slice(3, 5)}, ${bit.color.slice(5, 7)}, ${bit.opacity})`;
        ctx.fill();
      });
      
      // Draw processing center
      const processingRadius = 30 + Math.sin(time * 2) * 5;
      
      // Processing center glow
      const centerGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, processingRadius * 2);
      centerGradient.addColorStop(0, 'rgba(0, 176, 80, 0.1)');
      centerGradient.addColorStop(1, 'rgba(0, 176, 80, 0)');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, processingRadius * 2, 0, Math.PI * 2);
      ctx.fillStyle = centerGradient;
      ctx.fill();
      
      // Processing center rings
      for (let i = 0; i < 2; i++) {
        const ringRadius = processingRadius * (0.7 + i * 0.3);
        const ringProgress = (time * (0.5 - i * 0.2)) % 1;
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, ringRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 176, 80, ${0.2 + Math.sin(time * 3) * 0.1})`;
        ctx.lineWidth = 1 - ringProgress * 0.8;
        ctx.stroke();
      }
      
      // Update and draw documents
      documents.forEach((doc, index) => {
        // Update pulse effect
        doc.pulseEffect += doc.pulseSpeed;
        const pulseFactor = 1 + Math.sin(doc.pulseEffect) * 0.05;
        
        // Decide if document should move to center for processing
        if (!doc.processed && !doc.processing && !doc.movingToCenter && Math.random() > 0.995) {
          doc.movingToCenter = true;
          doc.moveProgress = 0;
        }
        
        // Move document to center
        if (doc.movingToCenter) {
          doc.moveProgress += doc.moveSpeed;
          
          if (doc.moveProgress >= 1) {
            doc.movingToCenter = false;
            doc.processing = true;
            doc.processingProgress = 0;
          } else {
            // Interpolate position
            doc.x = doc.originalX + (centerX - doc.originalX) * doc.moveProgress;
            doc.y = doc.originalY + (centerY - doc.originalY) * doc.moveProgress;
            
            // Scale down as it moves to center
            const scale = 1 - doc.moveProgress * 0.5;
            doc.width *= scale;
            doc.height *= scale;
          }
        }
        
        // Process document
        if (doc.processing) {
          doc.processingProgress += doc.processingSpeed;
          
          if (doc.processingProgress >= 1) {
            doc.processing = false;
            doc.processed = true;
            
            // Move back to original position
            doc.x = doc.originalX;
            doc.y = doc.originalY;
            
            // Restore original size
            doc.width = 30 + Math.random() * 20;
            doc.height = 40 + Math.random() * 10;
          } else {
            // Spin around center during processing
            const processingAngle = doc.processingProgress * Math.PI * 4;
            const processingRadius = 20 - doc.processingProgress * 15; // Spiral inward
            
            doc.x = centerX + Math.cos(processingAngle) * processingRadius;
            doc.y = centerY + Math.sin(processingAngle) * processingRadius;
            
            // Shrink as it's being processed
            doc.width = (30 + Math.random() * 20) * (1 - doc.processingProgress * 0.8);
            doc.height = (40 + Math.random() * 10) * (1 - doc.processingProgress * 0.8);
          }
        }
        
        // Draw document
        ctx.save();
        ctx.translate(doc.x, doc.y);
        ctx.rotate(doc.rotation);
        
        // Document
        const finalWidth = doc.width * pulseFactor;
        const finalHeight = doc.height * pulseFactor;
        
        // Draw document shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(-finalWidth / 2 + 2, -finalHeight / 2 + 2, finalWidth, finalHeight);
        
        // Main document
        ctx.fillStyle = doc.processed ? '#E2F4E8' : doc.color;
        ctx.fillRect(-finalWidth / 2, -finalHeight / 2, finalWidth, finalHeight);
        
        // Document content - lines of text
        const lineCount = Math.floor(finalHeight / 10);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        
        for (let i = 0; i < lineCount; i++) {
          const lineWidth = finalWidth * (0.6 + Math.random() * 0.3);
          
          ctx.fillRect(
            -finalWidth / 2 + 5,
            -finalHeight / 2 + 8 + i * 8,
            lineWidth,
            2
          );
        }
        
        // Document type icon
        if (doc.type === 'invoice') {
          // Invoice icon - $ symbol
          ctx.fillStyle = doc.processed ? 'rgba(0, 176, 80, 0.2)' : 'rgba(255, 255, 255, 0.2)';
          ctx.font = `${finalHeight * 0.3}px Arial`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('$', 0, 0);
        } else if (doc.type === 'form') {
          // Form icon - checkbox
          ctx.strokeStyle = doc.processed ? 'rgba(0, 176, 80, 0.2)' : 'rgba(255, 255, 255, 0.2)';
          ctx.lineWidth = 2;
          ctx.strokeRect(-finalHeight * 0.15, -finalHeight * 0.15, finalHeight * 0.3, finalHeight * 0.3);
          
          if (doc.processed) {
            // Checkmark
            ctx.beginPath();
            ctx.moveTo(-finalHeight * 0.1, 0);
            ctx.lineTo(-finalHeight * 0.05, finalHeight * 0.1);
            ctx.lineTo(finalHeight * 0.1, -finalHeight * 0.1);
            ctx.stroke();
          }
        } else if (doc.type === 'report') {
          // Report icon - pie chart
          ctx.beginPath();
          ctx.arc(0, 0, finalHeight * 0.15, 0, Math.PI * 1.5);
          ctx.lineTo(0, 0);
          ctx.closePath();
          ctx.fillStyle = doc.processed ? 'rgba(0, 176, 80, 0.2)' : 'rgba(255, 255, 255, 0.2)';
          ctx.fill();
        }
        
        // Processing status indicator
        if (doc.processed) {
          // Checkmark for processed documents
          ctx.strokeStyle = 'rgba(0, 176, 80, 0.7)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(finalWidth / 2 - 8, -finalHeight / 2 + 8, 6, 0, Math.PI * 2);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(finalWidth / 2 - 11, -finalHeight / 2 + 8);
          ctx.lineTo(finalWidth / 2 - 8, -finalHeight / 2 + 11);
          ctx.lineTo(finalWidth / 2 - 5, -finalHeight / 2 + 5);
          ctx.stroke();
        }
        
        ctx.restore();
        
        // Draw connection to center for documents being processed or moving
        if (doc.processing || doc.movingToCenter) {
          ctx.beginPath();
          ctx.moveTo(doc.x, doc.y);
          ctx.lineTo(centerX, centerY);
          
          // Gradient line
          const gradient = ctx.createLinearGradient(doc.x, doc.y, centerX, centerY);
          gradient.addColorStop(0, `rgba(${doc.color.slice(1, 3)}, ${doc.color.slice(3, 5)}, ${doc.color.slice(5, 7)}, 0.2)`);
          gradient.addColorStop(1, 'rgba(0, 176, 80, 0.3)');
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 0.5;
          ctx.stroke();
          
          // Data particles moving along the line
          if (doc.processing) {
            const particleCount = 3;
            
            for (let i = 0; i < particleCount; i++) {
              const particleProgress = (doc.processingProgress + i / particleCount) % 1;
              
              const particleX = doc.x + (centerX - doc.x) * particleProgress;
              const particleY = doc.y + (centerY - doc.y) * particleProgress;
              
              ctx.beginPath();
              ctx.arc(particleX, particleY, 1.5, 0, Math.PI * 2);
              ctx.fillStyle = i % 2 === 0 ? '#00B050' : '#7ED957';
              ctx.fill();
            }
          }
        }
      });
      
      // Processing center core
      ctx.beginPath();
      ctx.arc(centerX, centerY, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#00B050';
      ctx.fill();
      
      // Add floating binary data occasionally
      if (Math.random() > 0.95) {
        const digit = Math.random() > 0.7 ? '1' : '0';
        const digitX = centerX + (Math.random() - 0.5) * 80;
        const digitY = centerY + (Math.random() - 0.5) * 80;
        
        ctx.fillStyle = 'rgba(0, 176, 80, 0.4)';
        ctx.font = '10px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(digit, digitX, digitY);
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
      className="w-full h-full"
    />
  );
};

// Animação para Tecnologia em Logística - com globo noturno elegante
export const LogisticsAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Ajustar o tamanho do canvas
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Define the globe radius
    const globeRadius = Math.min(canvas.width, canvas.height) * 0.35;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // Background stars
    const stars = [];
    const starCount = 40;
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.2 + 0.2,
        opacity: Math.random() * 0.5 + 0.2,
        pulse: Math.random() * 2 * Math.PI
      });
    }
    
    // Create connection points around the globe
    const connectionPoints = [];
    const connectionCount = 8; // Reduced for elegance
    
    // Generate connection points distributed across the globe
    for (let i = 0; i < connectionCount; i++) {
      // Use spherical coordinates to place points around the globe
      const phi = Math.acos(-1 + (2 * i) / connectionCount);
      const theta = Math.sqrt(connectionCount * Math.PI) * phi;
      
      // Convert to cartesian coordinates
      const x = centerX + globeRadius * Math.cos(theta) * Math.sin(phi);
      const y = centerY + globeRadius * Math.sin(theta) * Math.sin(phi);
      
      // Add depth effect - points further back are more transparent
      const depthFactor = Math.sin(phi) * Math.cos(theta);
      const opacity = 0.3 + (depthFactor + 1) * 0.35;
      
      connectionPoints.push({
        x,
        y,
        size: 2 + Math.random() * 2,
        opacity,
        connections: [],
        active: Math.random() > 0.3 // Some points start active
      });
    }
    
    // Create connections between points - minimal connections for elegance
    connectionPoints.forEach((point, index) => {
      // Connect each point to 1-2 others
      const connectionCount = 1 + Math.floor(Math.random());
      
      for (let i = 0; i < connectionCount; i++) {
        // Choose a random point to connect to
        let targetIndex;
        do {
          targetIndex = Math.floor(Math.random() * connectionPoints.length);
        } while (targetIndex === index || point.connections.includes(targetIndex));
        
        point.connections.push(targetIndex);
      }
    });
    
    // Create moving packages between connection points
    const packages = [];
    const packageCount = 3; // Reduced for elegance
    
    for (let i = 0; i < packageCount; i++) {
      // Choose random start and end points
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
        speed: 0.001 + Math.random() * 0.002, // Slower for elegance
        color: i % 2 === 0 ? '#00B050' : '#7ED957',
        size: 3 + Math.random() * 2
      });
    }
    
    let rotationAngle = 0;
    let time = 0;
    
    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      time += 0.01;
      rotationAngle += 0.001; // Slower rotation for elegance
      
      // Draw night sky background with stars
      stars.forEach(star => {
        // Calculate pulsing effect
        star.pulse += 0.01;
        const pulseFactor = 0.5 + Math.sin(star.pulse) * 0.5;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * pulseFactor, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * pulseFactor})`;
        ctx.fill();
      });
      
      // Draw globe outline with elegant green grid - minimal lines
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.12)'; // More transparent lines
      ctx.lineWidth = 0.6; // Thinner lines
      
      // Draw fewer longitude lines - only 4 for elegance
      for (let i = 0; i < 4; i++) {
        const angle = (i / 4) * Math.PI * 2 + rotationAngle;
        
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
      
      // Draw fewer latitude lines - only 2 for minimal elegance
      for (let i = 1; i < 2; i++) {
        const radius = globeRadius * (i / 2);
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Draw continents outline - simple elegant silhouette
      ctx.beginPath();
      // Simple approximation of North America
      ctx.moveTo(centerX - globeRadius * 0.5, centerY - globeRadius * 0.2);
      ctx.bezierCurveTo(
        centerX - globeRadius * 0.4, centerY - globeRadius * 0.3,
        centerX - globeRadius * 0.3, centerY - globeRadius * 0.4,
        centerX - globeRadius * 0.2, centerY - globeRadius * 0.3
      );
      ctx.bezierCurveTo(
        centerX - globeRadius * 0.1, centerY - globeRadius * 0.2,
        centerX - globeRadius * 0.2, centerY - globeRadius * 0.1,
        centerX - globeRadius * 0.3, centerY
      );
      ctx.bezierCurveTo(
        centerX - globeRadius * 0.4, centerY + globeRadius * 0.1,
        centerX - globeRadius * 0.5, centerY + globeRadius * 0.1,
        centerX - globeRadius * 0.5, centerY - globeRadius * 0.2
      );
      ctx.closePath();
      
      // Simple approximation of Europe/Africa
      ctx.moveTo(centerX, centerY - globeRadius * 0.2);
      ctx.bezierCurveTo(
        centerX + globeRadius * 0.1, centerY - globeRadius * 0.1,
        centerX + globeRadius * 0.2, centerY,
        centerX + globeRadius * 0.1, centerY + globeRadius * 0.3
      );
      ctx.bezierCurveTo(
        centerX, centerY + globeRadius * 0.4,
        centerX - globeRadius * 0.1, centerY + globeRadius * 0.3,
        centerX - globeRadius * 0.1, centerY + globeRadius * 0.1
      );
      ctx.bezierCurveTo(
        centerX - globeRadius * 0.1, centerY,
        centerX - globeRadius * 0.1, centerY - globeRadius * 0.1,
        centerX, centerY - globeRadius * 0.2
      );
      ctx.closePath();
      
      // Simple approximation of Asia/Australia
      ctx.moveTo(centerX + globeRadius * 0.2, centerY - globeRadius * 0.3);
      ctx.bezierCurveTo(
        centerX + globeRadius * 0.3, centerY - globeRadius * 0.2,
        centerX + globeRadius * 0.4, centerY - globeRadius * 0.1,
        centerX + globeRadius * 0.4, centerY
      );
      ctx.bezierCurveTo(
        centerX + globeRadius * 0.4, centerY + globeRadius * 0.1,
        centerX + globeRadius * 0.3, centerY + globeRadius * 0.2,
        centerX + globeRadius * 0.2, centerY + globeRadius * 0.1
      );
      ctx.bezierCurveTo(
        centerX + globeRadius * 0.3, centerY,
        centerX + globeRadius * 0.3, centerY - globeRadius * 0.1,
        centerX + globeRadius * 0.2, centerY - globeRadius * 0.3
      );
      ctx.closePath();
      
      // Draw Australia
      ctx.moveTo(centerX + globeRadius * 0.3, centerY + globeRadius * 0.2);
      ctx.bezierCurveTo(
        centerX + globeRadius * 0.35, centerY + globeRadius * 0.22,
        centerX + globeRadius * 0.4, centerY + globeRadius * 0.25,
        centerX + globeRadius * 0.38, centerY + globeRadius * 0.3
      );
      ctx.bezierCurveTo(
        centerX + globeRadius * 0.36, centerY + globeRadius * 0.32,
        centerX + globeRadius * 0.32, centerY + globeRadius * 0.32,
        centerX + globeRadius * 0.3, centerY + globeRadius * 0.28
      );
      ctx.bezierCurveTo(
        centerX + globeRadius * 0.28, centerY + globeRadius * 0.25,
        centerX + globeRadius * 0.28, centerY + globeRadius * 0.22,
        centerX + globeRadius * 0.3, centerY + globeRadius * 0.2
      );
      ctx.closePath();
      
      ctx.fillStyle = 'rgba(0, 176, 80, 0.08)'; // Very subtle continents
      ctx.fill();
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.1)';
      ctx.lineWidth = 0.5;
      ctx.stroke();
      
      // Update connection points
      connectionPoints.forEach((point, index) => {
        // Random activation of points
        if (Math.random() > 0.995) {
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
              ctx.strokeStyle = `rgba(0, 176, 80, ${(point.opacity + targetPoint.opacity) * 0.15})`; // More transparent
              ctx.lineWidth = 0.4; // Thinner lines
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
          
          // Choose a new end point
          do {
            pkg.endPointIndex = Math.floor(Math.random() * connectionPoints.length);
          } while (pkg.endPointIndex === pkg.startPointIndex);
          
          // Activate both points
          connectionPoints[pkg.startPointIndex].active = true;
          connectionPoints[pkg.endPointIndex].active = true;
        }
        
        const startPoint = connectionPoints[pkg.startPointIndex];
        const endPoint = connectionPoints[pkg.endPointIndex];
        
        // Calculate current position (with slight arc for 3D effect)
        const dx = endPoint.x - startPoint.x;
        const dy = endPoint.y - startPoint.y;
        
        // Add a slight arc to the path
        const midX = (startPoint.x + endPoint.x) / 2;
        const midY = (startPoint.y + endPoint.y) / 2;
        const arcHeight = Math.sqrt(dx * dx + dy * dy) * 0.15; // Smaller arc
        
        // Use quadratic bezier curve for position
        const t = pkg.progress;
        const mt = 1 - t;
        
        pkg.x = mt * mt * startPoint.x + 2 * mt * t * midX + t * t * endPoint.x;
        pkg.y = mt * mt * startPoint.y + 2 * mt * t * (midY - arcHeight * Math.sin(t * Math.PI)) + t * t * endPoint.y;
        
        // Draw package/truck
        ctx.beginPath();
        ctx.arc(pkg.x, pkg.y, pkg.size, 0, Math.PI * 2);
        ctx.fillStyle = pkg.color;
        ctx.fill();
        
        // Draw simplified package trail (fewer points)
        ctx.beginPath();
        ctx.moveTo(pkg.x, pkg.y);
        
        // Calculate trail points - reduced to 2 for elegance
        for (let i = 1; i <= 2; i++) {
          const trailT = Math.max(0, t - i * 0.05);
          const trailMt = 1 - trailT;
          
          const trailX = trailMt * trailMt * startPoint.x + 2 * trailMt * trailT * midX + trailT * trailT * endPoint.x;
          const trailY = trailMt * trailMt * startPoint.y + 2 * trailMt * trailT * (midY - arcHeight * Math.sin(trailT * Math.PI)) + trailT * trailT * endPoint.y;
          
          ctx.lineTo(trailX, trailY);
        }
        
        ctx.strokeStyle = `rgba(${pkg.color.slice(1, 3)}, ${pkg.color.slice(3, 5)}, ${pkg.color.slice(5, 7)}, 0.12)`; // More transparent trail
        ctx.lineWidth = 1.2;
        ctx.stroke();
      });
      
      // Add atmosphere glow effect
      const atmosGradient = ctx.createRadialGradient(centerX, centerY, globeRadius * 0.9, centerX, centerY, globeRadius * 1.2);
      atmosGradient.addColorStop(0, 'rgba(0, 176, 80, 0.03)');
      atmosGradient.addColorStop(1, 'rgba(0, 176, 80, 0)');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius * 1.2, 0, Math.PI * 2);
      ctx.fillStyle = atmosGradient;
      ctx.fill();
      
      // Draw globe center glow - more subtle
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, globeRadius * 0.2);
      gradient.addColorStop(0, 'rgba(0, 176, 80, 0.15)'); // More transparent
      gradient.addColorStop(1, 'rgba(0, 176, 80, 0)');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius * 0.2, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full"
    />
  );
};

// Animação para Tecnologia Customizada - Computador elegante
export const CustomTechAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Ajustar o tamanho do canvas
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // Computer design parameters - sleek design 
    const computer = {
      // Monitor parameters
      monitor: {
        width: canvas.width * 0.5,
        height: canvas.height * 0.4,
        x: centerX,
        y: centerY - canvas.height * 0.05,
        borderRadius: 6,
        bezels: 6
      },
      // Screen with code visualization
      screen: {
        codeLines: [],
        lineCount: 8,
        glowEffect: 0
      },
      // Base and stand
      stand: {
        width: canvas.width * 0.12,
        height: canvas.height * 0.05,
        baseWidth: canvas.width * 0.25,
        baseHeight: canvas.height * 0.02
      },
      // Keyboard
      keyboard: {
        width: canvas.width * 0.4,
        height: canvas.height * 0.08,
        x: centerX,
        y: centerY + canvas.height * 0.23,
        keys: [],
        keyCount: 15 // Simplified keyboard 
      },
      // Digital particles
      particles: []
    };
    
    // Create code lines for screen
    for (let i = 0; i < computer.screen.lineCount; i++) {
      computer.screen.codeLines.push({
        width: Math.random() * 0.6 + 0.2, // Line length as percentage of screen
        y: i,
        opacity: 0.3 + Math.random() * 0.3,
        animationOffset: Math.random() * Math.PI * 2
      });
    }
    
    // Create keyboard keys
    for (let i = 0; i < computer.keyboard.keyCount; i++) {
      computer.keyboard.keys.push({
        x: (i % 5) / 5,
        y: Math.floor(i / 5) / 3,
        width: 0.15,
        height: 0.25,
        pressed: false,
        pressTime: 0,
        pressChance: 0.005 + Math.random() * 0.01 // Random key press probability
      });
    }
    
    // Create particles for tech atmosphere
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
      computer.particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.15 + 0.05
      });
    }
    
    let time = 0;
    
    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      time += 0.02;
      
      // Update screen glow effect
      computer.screen.glowEffect = Math.sin(time * 0.5) * 0.5 + 0.5;
      
      // Update and draw particles
      computer.particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 176, 80, ${particle.opacity})`;
        ctx.fill();
      });
      
      // Draw monitor
      const monitor = computer.monitor;
      
      // Stand base
      ctx.beginPath();
      ctx.roundRect(
        centerX - computer.stand.baseWidth / 2,
        monitor.y + monitor.height / 2 + computer.stand.height,
        computer.stand.baseWidth,
        computer.stand.baseHeight,
        2
      );
      ctx.fillStyle = '#006040';
      ctx.fill();
      
      // Stand pillar
      ctx.beginPath();
      ctx.rect(
        centerX - computer.stand.width / 2,
        monitor.y + monitor.height / 2,
        computer.stand.width,
        computer.stand.height
      );
      ctx.fillStyle = '#007050';
      ctx.fill();
      
      // Monitor body - modern design with rounded corners
      ctx.beginPath();
      ctx.roundRect(
        monitor.x - monitor.width / 2,
        monitor.y - monitor.height / 2,
        monitor.width,
        monitor.height,
        monitor.borderRadius
      );
      ctx.fillStyle = '#007050';
      ctx.fill();
      
      // Screen 
      ctx.beginPath();
      ctx.roundRect(
        monitor.x - monitor.width / 2 + monitor.bezels,
        monitor.y - monitor.height / 2 + monitor.bezels,
        monitor.width - monitor.bezels * 2,
        monitor.height - monitor.bezels * 2,
        monitor.borderRadius / 2
      );
      ctx.fillStyle = 'rgba(0, 25, 20, 0.95)';
      ctx.fill();
      
      // Screen glow effect
      const screenGlow = ctx.createRadialGradient(
        monitor.x,
        monitor.y,
        0,
        monitor.x,
        monitor.y,
        monitor.width / 2
      );
      screenGlow.addColorStop(0, `rgba(0, 176, 80, ${0.03 + computer.screen.glowEffect * 0.02})`);
      screenGlow.addColorStop(1, 'rgba(0, 176, 80, 0)');
      
      ctx.beginPath();
      ctx.roundRect(
        monitor.x - monitor.width / 2 + monitor.bezels,
        monitor.y - monitor.height / 2 + monitor.bezels,
        monitor.width - monitor.bezels * 2,
        monitor.height - monitor.bezels * 2,
        monitor.borderRadius / 2
      );
      ctx.fillStyle = screenGlow;
      ctx.fill();
      
      // Code on screen
      const screenWidth = monitor.width - monitor.bezels * 2;
      const screenHeight = monitor.height - monitor.bezels * 2;
      const screenX = monitor.x - monitor.width / 2 + monitor.bezels;
      const screenY = monitor.y - monitor.height / 2 + monitor.bezels;
      const lineHeight = screenHeight / computer.screen.lineCount;
      
      computer.screen.codeLines.forEach((line, index) => {
        // Create blinking effect
        const blinkEffect = (Math.sin(time * 2 + line.animationOffset) + 1) / 2;
        const adjustedOpacity = line.opacity * (0.7 + blinkEffect * 0.3);
        
        // Draw code line
        ctx.beginPath();
        ctx.rect(
          screenX + 10, 
          screenY + index * lineHeight + lineHeight * 0.4, 
          screenWidth * line.width - 20, 
          lineHeight * 0.2
        );
        ctx.fillStyle = `rgba(0, 176, 80, ${adjustedOpacity})`;
        ctx.fill();
        
        // Some code details (indentations)
        if (index % 2 === 0) {
          ctx.beginPath();
          ctx.rect(
            screenX + 20, 
            screenY + index * lineHeight + lineHeight * 0.7, 
            screenWidth * line.width * 0.6 - 20, 
            lineHeight * 0.15
          );
          ctx.fillStyle = `rgba(0, 176, 80, ${adjustedOpacity * 0.7})`;
          ctx.fill();
        }
        
        // Add occasional brackets
        if (index === 2 || index === 5) {
          ctx.fillStyle = `rgba(0, 176, 80, ${adjustedOpacity * 0.9})`;
          ctx.font = `${lineHeight * 0.4}px monospace`;
          ctx.fillText(
            '{', 
            screenX + 15, 
            screenY + index * lineHeight + lineHeight * 0.35
          );
        }
        
        if (index === 4 || index === 7) {
          ctx.fillStyle = `rgba(0, 176, 80, ${adjustedOpacity * 0.9})`;
          ctx.font = `${lineHeight * 0.4}px monospace`;
          ctx.fillText(
            '}', 
            screenX + 15, 
            screenY + index * lineHeight + lineHeight * 0.35
          );
        }
      });
      
      // Draw keyboard
      const keyboard = computer.keyboard;
      
      // Keyboard base
      ctx.beginPath();
      ctx.roundRect(
        keyboard.x - keyboard.width / 2,
        keyboard.y - keyboard.height / 2,
        keyboard.width,
        keyboard.height,
        3
      );
      ctx.fillStyle = '#006040';
      ctx.fill();
      
      // Draw keys
      keyboard.keys.forEach(key => {
        // Randomly press keys
        if (Math.random() < key.pressChance) {
          key.pressed = true;
          key.pressTime = time;
        }
        
        // Release key after a moment
        if (key.pressed && time - key.pressTime > 0.2) {
          key.pressed = false;
        }
        
        const keyWidth = keyboard.width * key.width;
        const keyHeight = keyboard.height * key.height;
        const keyX = keyboard.x - keyboard.width / 2 + keyboard.width * key.x + keyWidth / 2;
        const keyY = keyboard.y - keyboard.height / 2 + keyboard.height * key.y + keyHeight / 2;
        
        // Draw key
        ctx.beginPath();
        ctx.roundRect(
          keyX - keyWidth / 2 + 2,
          keyY - keyHeight / 2 + 2,
          keyWidth - 4,
          keyHeight - 4,
          2
        );
        
        // Darker color for pressed keys
        ctx.fillStyle = key.pressed ? 'rgba(0, 70, 40, 0.95)' : 'rgba(0, 100, 60, 0.95)';
        ctx.fill();
      });
      
      // Occasional binary digits floating from the screen
      if (Math.random() > 0.97) {
        const digit = Math.random() > 0.5 ? '1' : '0';
        const digitX = screenX + Math.random() * screenWidth;
        const digitY = screenY + Math.random() * (screenHeight * 0.8);
        
        ctx.fillStyle = 'rgba(0, 176, 80, 0.7)';
        ctx.font = '10px monospace';
        ctx.fillText(digit, digitX, digitY);
      }
      
      // Pulse effect around monitor
      const pulseSize = 30 + Math.sin(time) * 10;
      const pulseGradient = ctx.createRadialGradient(
        monitor.x,
        monitor.y,
        0,
        monitor.x,
        monitor.y,
        pulseSize
      );
      pulseGradient.addColorStop(0, 'rgba(0, 176, 80, 0.03)');
      pulseGradient.addColorStop(1, 'rgba(0, 176, 80, 0)');
      
      ctx.beginPath();
      ctx.arc(monitor.x, monitor.y, pulseSize, 0, Math.PI * 2);
      ctx.fillStyle = pulseGradient;
      ctx.fill();
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full"
    />
  );
};
