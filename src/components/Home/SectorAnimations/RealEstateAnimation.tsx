
import React, { useEffect, useRef } from 'react';
import { Building2 } from 'lucide-react';

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
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const rect = canvas.getBoundingClientRect();
    
    // City buildings configuration
    const gridSize = 8; // City grid size
    const buildings = [];
    
    // Create city grid of buildings
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        // Add some randomness to building positions for more natural look
        const offsetX = (Math.random() - 0.5) * 5;
        const offsetY = (Math.random() - 0.5) * 5;
        
        // Building properties
        const buildingSize = 15 + Math.random() * 20;
        const buildingHeight = 10 + Math.random() * 50;
        const buildingType = Math.floor(Math.random() * 3);
        
        // Determine building position
        const x = rect.width * 0.3 + (col * rect.width * 0.5 / gridSize) + offsetX;
        const y = rect.height * 0.3 + (row * rect.height * 0.5 / gridSize) + offsetY;
        
        buildings.push({
          x,
          y,
          size: buildingSize,
          height: buildingHeight,
          type: buildingType,
          color: Math.random() > 0.7 ? '#00B050' : '#006830',
          glowIntensity: 0.1 + Math.random() * 0.3,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.03
        });
      }
    }
    
    // Roads configuration
    const roads = [];
    const mainRoadCount = 3;
    
    // Create main horizontal roads
    for (let i = 1; i < mainRoadCount; i++) {
      roads.push({
        startX: 0,
        startY: rect.height * (i / mainRoadCount),
        endX: rect.width,
        endY: rect.height * (i / mainRoadCount),
        width: 4,
        type: 'main'
      });
    }
    
    // Create main vertical roads
    for (let i = 1; i < mainRoadCount; i++) {
      roads.push({
        startX: rect.width * (i / mainRoadCount),
        startY: 0,
        endX: rect.width * (i / mainRoadCount),
        endY: rect.height,
        width: 4,
        type: 'main'
      });
    }
    
    // Create secondary roads
    for (let i = 0; i < 5; i++) {
      // Random vertical secondary roads
      const x = rect.width * (0.2 + Math.random() * 0.6);
      roads.push({
        startX: x,
        startY: 0,
        endX: x,
        endY: rect.height,
        width: 2,
        type: 'secondary'
      });
      
      // Random horizontal secondary roads
      const y = rect.height * (0.2 + Math.random() * 0.6);
      roads.push({
        startX: 0,
        startY: y,
        endX: rect.width,
        endY: y,
        width: 2,
        type: 'secondary'
      });
    }
    
    // Moving vehicles
    const vehicles = [];
    const vehicleCount = 15;
    
    for (let i = 0; i < vehicleCount; i++) {
      // Choose a random road to place the vehicle on
      const roadIndex = Math.floor(Math.random() * roads.length);
      const road = roads[roadIndex];
      
      // Determine if vehicle moves horizontally or vertically
      const isHorizontal = road.startX !== road.endX;
      
      vehicles.push({
        x: isHorizontal ? 0 : road.startX,
        y: isHorizontal ? road.startY : 0,
        width: 4,
        height: 2,
        speed: 0.5 + Math.random() * 1,
        color: Math.random() > 0.5 ? '#00B050' : '#7ED957',
        roadIndex,
        isHorizontal
      });
    }
    
    // Animation properties
    let angle = 0;
    let scale = 1;
    let translateX = 0;
    let translateY = 0;
    
    // Create subtle camera movement
    const animate = (time) => {
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      // Update camera angle and position for subtle movement
      angle += 0.001;
      translateX = Math.sin(angle * 0.5) * 10;
      translateY = Math.cos(angle * 0.7) * 10;
      
      // Apply camera transformation
      ctx.save();
      ctx.translate(rect.width / 2, rect.height / 2);
      ctx.translate(translateX, translateY);
      ctx.rotate(angle * 0.1);
      ctx.scale(scale, scale);
      ctx.translate(-rect.width / 2, -rect.height / 2);
      
      // Draw grid background
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.05)';
      ctx.lineWidth = 0.5;
      
      // Draw grid lines
      for (let x = 0; x < rect.width; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, rect.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < rect.height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(rect.width, y);
        ctx.stroke();
      }
      
      // Draw roads
      roads.forEach(road => {
        ctx.beginPath();
        ctx.moveTo(road.startX, road.startY);
        ctx.lineTo(road.endX, road.endY);
        ctx.strokeStyle = road.type === 'main' 
          ? 'rgba(0, 176, 80, 0.3)' 
          : 'rgba(0, 176, 80, 0.15)';
        ctx.lineWidth = road.width;
        ctx.stroke();
      });
      
      // Update and draw vehicles
      vehicles.forEach(vehicle => {
        const road = roads[vehicle.roadIndex];
        
        if (vehicle.isHorizontal) {
          // Update horizontal vehicle position
          vehicle.x += vehicle.speed;
          
          // Reset vehicle position when it goes off-screen
          if (vehicle.x > rect.width) {
            vehicle.x = 0;
          }
          
          // Draw horizontal vehicle
          ctx.fillStyle = vehicle.color;
          ctx.fillRect(
            vehicle.x, 
            road.startY - vehicle.height / 2, 
            vehicle.width, 
            vehicle.height
          );
        } else {
          // Update vertical vehicle position
          vehicle.y += vehicle.speed;
          
          // Reset vehicle position when it goes off-screen
          if (vehicle.y > rect.height) {
            vehicle.y = 0;
          }
          
          // Draw vertical vehicle
          ctx.fillStyle = vehicle.color;
          ctx.fillRect(
            road.startX - vehicle.height / 2, 
            vehicle.y, 
            vehicle.height, 
            vehicle.width
          );
        }
      });
      
      // Draw buildings - sort by Y position for pseudo-3D effect
      buildings.sort((a, b) => a.y - b.y);
      
      buildings.forEach(building => {
        // Update building pulse
        building.pulse += building.pulseSpeed;
        const pulse = Math.sin(building.pulse) * 0.5 + 0.5;
        const glow = building.glowIntensity * pulse;
        
        // Draw building shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.beginPath();
        ctx.ellipse(
          building.x, 
          building.y + building.size / 4, 
          building.size / 2, 
          building.size / 4, 
          0, 0, Math.PI * 2
        );
        ctx.fill();
        
        // Draw building based on its type
        ctx.fillStyle = building.color;
        
        if (building.type === 0) {
          // Square building
          ctx.fillRect(
            building.x - building.size / 2, 
            building.y - building.size / 2, 
            building.size, 
            building.size
          );
          
          // Windows
          const windowSize = building.size / 5;
          const windowCount = Math.floor(building.size / windowSize);
          
          ctx.fillStyle = `rgba(255, 255, 200, ${0.1 + glow})`;
          
          for (let wx = 0; wx < windowCount; wx++) {
            for (let wy = 0; wy < windowCount; wy++) {
              if (Math.random() > 0.3) {
                ctx.fillRect(
                  building.x - building.size / 2 + wx * windowSize + 1, 
                  building.y - building.size / 2 + wy * windowSize + 1, 
                  windowSize - 2, 
                  windowSize - 2
                );
              }
            }
          }
        } else if (building.type === 1) {
          // Circular building
          ctx.beginPath();
          ctx.arc(
            building.x, 
            building.y, 
            building.size / 2, 
            0, Math.PI * 2
          );
          ctx.fill();
          
          // Windows
          ctx.fillStyle = `rgba(255, 255, 200, ${0.1 + glow})`;
          
          for (let w = 0; w < 8; w++) {
            const wx = Math.cos(w * Math.PI / 4) * building.size / 3;
            const wy = Math.sin(w * Math.PI / 4) * building.size / 3;
            
            ctx.beginPath();
            ctx.arc(
              building.x + wx, 
              building.y + wy, 
              building.size / 10, 
              0, Math.PI * 2
            );
            ctx.fill();
          }
        } else {
          // Triangular building
          ctx.beginPath();
          ctx.moveTo(building.x, building.y - building.size / 2);
          ctx.lineTo(building.x + building.size / 2, building.y + building.size / 2);
          ctx.lineTo(building.x - building.size / 2, building.y + building.size / 2);
          ctx.closePath();
          ctx.fill();
          
          // Windows
          ctx.fillStyle = `rgba(255, 255, 200, ${0.1 + glow})`;
          
          const windowSize = building.size / 6;
          
          for (let wy = 0; wy < 2; wy++) {
            const width = building.size - (wy * building.size / 2);
            const windowCount = Math.floor(width / windowSize);
            
            for (let wx = 0; wx < windowCount; wx++) {
              if (Math.random() > 0.3) {
                ctx.fillRect(
                  building.x - width / 2 + wx * windowSize + 1, 
                  building.y + wy * building.size / 3, 
                  windowSize - 2, 
                  windowSize - 2
                );
              }
            }
          }
        }
        
        // Draw building glow
        const gradient = ctx.createRadialGradient(
          building.x, building.y, 0,
          building.x, building.y, building.size
        );
        gradient.addColorStop(0, `rgba(0, 176, 80, ${glow})`);
        gradient.addColorStop(1, 'rgba(0, 176, 80, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(building.x, building.y, building.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Draw digital connections between buildings
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.1)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < buildings.length; i++) {
        for (let j = i + 1; j < buildings.length; j++) {
          if (Math.random() > 0.995) {
            const a = buildings[i];
            const b = buildings[j];
            
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            
            // Draw moving data packet
            const progress = Math.random();
            const packetX = a.x + (b.x - a.x) * progress;
            const packetY = a.y + (b.y - a.y) * progress;
            
            ctx.beginPath();
            ctx.arc(packetX, packetY, 2, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 176, 80, 0.8)';
            ctx.fill();
          }
        }
      }
      
      // End camera transformation
      ctx.restore();
      
      // Add subtle fog overlay
      const fogGradient = ctx.createRadialGradient(
        rect.width / 2, rect.height / 2, 0,
        rect.width / 2, rect.height / 2, rect.width / 2
      );
      fogGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      fogGradient.addColorStop(1, 'rgba(0, 0, 0, 0.2)');
      
      ctx.fillStyle = fogGradient;
      ctx.fillRect(0, 0, rect.width, rect.height);
      
      // Add digital overlay
      if (Math.random() > 0.98) {
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;
        
        ctx.fillStyle = 'rgba(0, 176, 80, 0.8)';
        ctx.font = '8px monospace';
        ctx.fillText(Math.random() > 0.5 ? '1' : '0', x, y);
      }
      
      requestAnimationFrame(animate);
    };
    
    const animationFrame = requestAnimationFrame(animate);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
      />
      <div className="absolute top-6 right-6 text-vetor-green/80 animate-pulse z-10">
        <Building2 className="w-8 h-8" />
      </div>
    </div>
  );
};

export default RealEstateAnimation;
