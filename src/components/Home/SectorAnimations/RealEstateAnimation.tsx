
import React, { useEffect, useRef } from 'react';
import { Building2 } from 'lucide-react';

const RealEstateAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions with device pixel ratio for sharp rendering
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
    
    // Animation properties
    let frame = 0;
    const cityHorizon = rect.height * 0.55;
    
    // Create modern building designs with variety
    const buildings = [];
    const buildingCount = 12; // Fewer, more detailed buildings
    const buildingTypes = [
      // Modern skyscraper
      (x, y, width, height) => {
        return {
          x, y, width, height,
          draw: (ctx, pulse) => {
            // Building body
            ctx.fillStyle = `rgba(0, 176, 80, ${0.2 + pulse * 0.1})`;
            ctx.strokeStyle = `rgba(0, 176, 80, ${0.6 + pulse * 0.2})`;
            ctx.lineWidth = 1;
            
            // Main tower
            ctx.beginPath();
            ctx.rect(x - width/2, y - height, width, height);
            ctx.fill();
            ctx.stroke();
            
            // Glass windows pattern
            const floorHeight = 8;
            const floors = Math.floor(height / floorHeight);
            const windowWidth = width / 4;
            
            for (let f = 0; f < floors; f++) {
              for (let w = 0; w < 3; w++) {
                if (Math.random() > 0.2) {
                  ctx.fillStyle = `rgba(255, 255, 255, ${0.1 + Math.random() * 0.2})`;
                  ctx.fillRect(
                    x - width/2 + width/6 + w * windowWidth, 
                    y - height + f * floorHeight + 1, 
                    windowWidth - 2, 
                    floorHeight - 2
                  );
                }
              }
            }
            
            // Rooftop details
            ctx.beginPath();
            ctx.moveTo(x - width/2, y - height);
            ctx.lineTo(x - width/4, y - height - width/4);
            ctx.lineTo(x + width/4, y - height - width/4);
            ctx.lineTo(x + width/2, y - height);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            
            // Rooftop antenna with pulsing light
            ctx.beginPath();
            ctx.moveTo(x, y - height - width/4);
            ctx.lineTo(x, y - height - width/4 - height/8);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.arc(x, y - height - width/4 - height/8, 2 + pulse * 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 176, 80, ${0.5 + pulse * 0.5})`;
            ctx.fill();
          }
        };
      },
      
      // Modern residential building
      (x, y, width, height) => {
        return {
          x, y, width, height,
          draw: (ctx, pulse) => {
            // Building base
            ctx.fillStyle = `rgba(0, 176, 80, ${0.15 + pulse * 0.05})`;
            ctx.strokeStyle = `rgba(0, 176, 80, ${0.5 + pulse * 0.2})`;
            ctx.lineWidth = 1;
            
            // Main structure
            const balconyDepth = width / 6;
            
            // Main facade
            ctx.beginPath();
            ctx.rect(x - width/2, y - height, width, height);
            ctx.fill();
            ctx.stroke();
            
            // Balconies
            const floorHeight = 12;
            const floors = Math.floor(height / floorHeight) - 1;
            
            for (let f = 1; f < floors; f += 2) {
              // Left balcony
              ctx.beginPath();
              ctx.rect(
                x - width/2 - balconyDepth, 
                y - height + f * floorHeight, 
                balconyDepth, 
                floorHeight
              );
              ctx.fill();
              ctx.stroke();
              
              // Rail
              ctx.beginPath();
              ctx.moveTo(x - width/2 - balconyDepth, y - height + f * floorHeight + 3);
              ctx.lineTo(x - width/2, y - height + f * floorHeight + 3);
              ctx.stroke();
              
              // Right balcony
              ctx.beginPath();
              ctx.rect(
                x + width/2, 
                y - height + (f+1) * floorHeight, 
                balconyDepth, 
                floorHeight
              );
              ctx.fill();
              ctx.stroke();
              
              // Rail
              ctx.beginPath();
              ctx.moveTo(x + width/2, y - height + (f+1) * floorHeight + 3);
              ctx.lineTo(x + width/2 + balconyDepth, y - height + (f+1) * floorHeight + 3);
              ctx.stroke();
            }
            
            // Windows
            const windowRows = Math.floor(height / floorHeight);
            const windowCols = 3;
            const windowWidth = width / (windowCols + 1);
            const windowHeight = floorHeight - 4;
            
            for (let r = 0; r < windowRows; r++) {
              for (let c = 0; c < windowCols; c++) {
                if (Math.random() > 0.3) {
                  ctx.fillStyle = `rgba(255, 255, 255, ${0.1 + Math.random() * 0.15})`;
                  ctx.fillRect(
                    x - width/2 + (c+1) * (width/(windowCols+1)) - windowWidth/2,
                    y - height + r * floorHeight + 2,
                    windowWidth,
                    windowHeight
                  );
                }
              }
            }
            
            // Rooftop garden
            ctx.fillStyle = `rgba(20, 190, 100, ${0.3 + pulse * 0.2})`;
            ctx.beginPath();
            ctx.rect(x - width/3, y - height - 4, width/1.5, 4);
            ctx.fill();
            ctx.stroke();
          }
        };
      },
      
      // Luxury villa/house
      (x, y, width, height) => {
        return {
          x, y, width, height,
          draw: (ctx, pulse) => {
            const houseHeight = height * 0.6; // Smaller than skyscrapers
            
            // Main house structure
            ctx.fillStyle = `rgba(0, 176, 80, ${0.2 + pulse * 0.05})`;
            ctx.strokeStyle = `rgba(0, 176, 80, ${0.5 + pulse * 0.1})`;
            ctx.lineWidth = 1;
            
            // House body
            ctx.beginPath();
            ctx.rect(x - width/2, y - houseHeight, width, houseHeight);
            ctx.fill();
            ctx.stroke();
            
            // Roof
            ctx.beginPath();
            ctx.moveTo(x - width/2 - width/6, y - houseHeight);
            ctx.lineTo(x, y - houseHeight - width/3);
            ctx.lineTo(x + width/2 + width/6, y - houseHeight);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            
            // Windows
            const windowSize = width / 5;
            
            // First floor windows
            ctx.fillStyle = `rgba(255, 255, 255, ${0.15 + Math.random() * 0.1})`;
            ctx.fillRect(x - width/3, y - houseHeight + houseHeight/3, windowSize, windowSize);
            ctx.strokeRect(x - width/3, y - houseHeight + houseHeight/3, windowSize, windowSize);
            
            ctx.fillStyle = `rgba(255, 255, 255, ${0.15 + Math.random() * 0.1})`;
            ctx.fillRect(x + width/3 - windowSize, y - houseHeight + houseHeight/3, windowSize, windowSize);
            ctx.strokeRect(x + width/3 - windowSize, y - houseHeight + houseHeight/3, windowSize, windowSize);
            
            // Door
            ctx.fillStyle = `rgba(0, 120, 60, ${0.3 + pulse * 0.1})`;
            ctx.fillRect(x - windowSize/2, y - houseHeight/2, windowSize, houseHeight/2);
            ctx.strokeRect(x - windowSize/2, y - houseHeight/2, windowSize, houseHeight/2);
            
            // Garden/yard
            ctx.fillStyle = `rgba(20, 200, 100, ${0.2 + pulse * 0.1})`;
            ctx.beginPath();
            ctx.rect(x - width*0.8, y, width*1.6, 5);
            ctx.fill();
            
            // Tree
            const treeX = x + width*0.6;
            ctx.fillStyle = `rgba(100, 180, 70, ${0.4 + pulse * 0.2})`;
            ctx.beginPath();
            ctx.arc(treeX, y - houseHeight/2, width/6, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.fillStyle = `rgba(80, 50, 20, ${0.5})`;
            ctx.fillRect(treeX - 2, y - houseHeight/4, 4, houseHeight/4);
          }
        };
      },
      
      // Smart building with IoT visualization
      (x, y, width, height) => {
        return {
          x, y, width, height,
          draw: (ctx, pulse) => {
            // Building shape
            ctx.fillStyle = `rgba(0, 176, 80, ${0.15 + pulse * 0.08})`;
            ctx.strokeStyle = `rgba(0, 176, 80, ${0.6 + pulse * 0.2})`;
            ctx.lineWidth = 1;
            
            const segments = 3;
            const segmentHeight = height / segments;
            
            // Draw tiered building
            for (let i = 0; i < segments; i++) {
              const tierWidth = width - (i * width/5);
              const tierX = x - tierWidth/2;
              const tierY = y - segmentHeight * (segments - i);
              
              ctx.beginPath();
              ctx.rect(tierX, tierY, tierWidth, segmentHeight);
              ctx.fill();
              ctx.stroke();
              
              // Add windows to each tier
              const windowCount = Math.floor(tierWidth / 10);
              const windowWidth = tierWidth / (windowCount * 1.5);
              
              for (let w = 0; w < windowCount; w++) {
                if (Math.random() > 0.3) {
                  ctx.fillStyle = `rgba(255, 255, 255, ${0.1 + Math.random() * 0.2})`;
                  ctx.fillRect(
                    tierX + (w + 0.5) * (tierWidth / windowCount),
                    tierY + segmentHeight/4,
                    windowWidth,
                    segmentHeight/2
                  );
                }
              }
            }
            
            // IoT connections and data
            const dataPoints = 3;
            for (let d = 0; d < dataPoints; d++) {
              // Data point
              const dpX = x - width/2 + width * Math.random();
              const dpY = y - height * Math.random() * 0.8;
              
              ctx.beginPath();
              ctx.arc(dpX, dpY, 2, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(0, 230, 100, ${0.7 + pulse * 0.3})`;
              ctx.fill();
              
              // Connection line to main hub
              ctx.beginPath();
              ctx.moveTo(dpX, dpY);
              ctx.lineTo(x, y - height/2);
              ctx.strokeStyle = `rgba(0, 230, 100, ${0.1 + pulse * 0.2})`;
              ctx.stroke();
            }
            
            // Central hub
            ctx.beginPath();
            ctx.arc(x, y - height/2, 4 + pulse * 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 230, 100, ${0.6 + pulse * 0.4})`;
            ctx.fill();
          }
        };
      },
      
      // Modern office tower
      (x, y, width, height) => {
        return {
          x, y, width, height,
          draw: (ctx, pulse) => {
            // Building body
            ctx.fillStyle = `rgba(0, 176, 80, ${0.2 + pulse * 0.05})`;
            ctx.strokeStyle = `rgba(0, 176, 80, ${0.5 + pulse * 0.2})`;
            ctx.lineWidth = 1;
            
            // Glass curtain wall effect
            ctx.beginPath();
            ctx.rect(x - width/2, y - height, width, height);
            ctx.fill();
            ctx.stroke();
            
            // Glass facade pattern
            const rowHeight = 6;
            const rows = Math.floor(height / rowHeight);
            const colWidth = width / 5;
            const cols = Math.floor(width / colWidth);
            
            for (let r = 0; r < rows; r++) {
              for (let c = 0; c < cols; c++) {
                if (Math.random() > 0.3) { // Some windows lit
                  ctx.fillStyle = `rgba(255, 255, 255, ${0.05 + Math.random() * 0.15})`;
                  ctx.fillRect(
                    x - width/2 + c * colWidth + 1,
                    y - height + r * rowHeight + 1,
                    colWidth - 2,
                    rowHeight - 1
                  );
                }
              }
            }
            
            // Top architectural features - tapered top
            ctx.beginPath();
            ctx.moveTo(x - width/2, y - height);
            ctx.lineTo(x - width/3, y - height - height/10);
            ctx.lineTo(x + width/3, y - height - height/10);
            ctx.lineTo(x + width/2, y - height);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            
            // Spire
            ctx.beginPath();
            ctx.moveTo(x, y - height - height/10);
            ctx.lineTo(x, y - height - height/10 - height/8);
            ctx.stroke();
            
            // Pulsing light at top
            ctx.beginPath();
            ctx.arc(x, y - height - height/10 - height/8, 2 + pulse * 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 176, 80, ${0.6 + pulse * 0.4})`;
            ctx.fill();
          }
        };
      }
    ];
    
    // Distribute buildings across the horizon
    for (let i = 0; i < buildingCount; i++) {
      // Create varied building types
      const typeIndex = Math.floor(Math.random() * buildingTypes.length);
      const buildingWidth = 15 + Math.random() * 35;
      const buildingHeight = 30 + Math.random() * 120;
      const xPosition = (rect.width * 0.1) + (rect.width * 0.8 * (i / buildingCount));
      const xJitter = (Math.random() - 0.5) * (rect.width * 0.05);
      
      const building = buildingTypes[typeIndex](
        xPosition + xJitter, 
        cityHorizon, 
        buildingWidth, 
        buildingHeight
      );
      
      building.pulseOffset = Math.random() * Math.PI * 2;
      building.pulseSpeed = 0.02 + Math.random() * 0.03;
      
      buildings.push(building);
    }
    
    // Create city infrastructure
    const roads = [];
    
    // Main horizontal road
    roads.push({
      type: 'horizontal',
      y: cityHorizon + 5,
      width: rect.width,
      lanes: 2,
      vehicles: []
    });
    
    // Add vertical connecting roads
    const verticalRoadCount = 5;
    for (let i = 0; i < verticalRoadCount; i++) {
      const x = rect.width * (0.1 + 0.8 * (i / (verticalRoadCount - 1)));
      roads.push({
        type: 'vertical',
        x: x,
        height: rect.height - cityHorizon - 5,
        lanes: 1,
        vehicles: []
      });
    }
    
    // Create vehicles
    roads.forEach(road => {
      const vehicleCount = road.type === 'horizontal' ? 8 : 3;
      
      for (let i = 0; i < vehicleCount; i++) {
        if (road.type === 'horizontal') {
          road.vehicles.push({
            position: Math.random() * road.width,
            lane: Math.floor(Math.random() * road.lanes),
            speed: 0.5 + Math.random() * 1.5,
            direction: Math.random() > 0.5 ? 1 : -1,
            color: Math.random() > 0.5 ? 'rgba(0, 176, 80, 0.8)' : 'rgba(120, 220, 120, 0.6)',
            size: 4 + Math.random() * 4
          });
        } else {
          road.vehicles.push({
            position: Math.random() * road.height,
            lane: 0,
            speed: 0.3 + Math.random() * 0.8,
            direction: Math.random() > 0.5 ? 1 : -1,
            color: Math.random() > 0.5 ? 'rgba(0, 176, 80, 0.8)' : 'rgba(120, 220, 120, 0.6)',
            size: 3 + Math.random() * 3
          });
        }
      }
    });
    
    // Create floating IoT/data elements
    const dataElements = [];
    const dataElementCount = 30;
    
    for (let i = 0; i < dataElementCount; i++) {
      dataElements.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        size: 1 + Math.random() * 2,
        speed: 0.2 + Math.random() * 0.8,
        opacity: 0.3 + Math.random() * 0.7,
        symbol: Math.random() > 0.7 ? (Math.random() > 0.5 ? '1' : '0') : ''
      });
    }
    
    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      frame++;
      
      // Subtle background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, rect.height);
      gradient.addColorStop(0, 'rgba(0, 20, 10, 1)');
      gradient.addColorStop(0.5, 'rgba(0, 30, 15, 1)');
      gradient.addColorStop(1, 'rgba(0, 10, 5, 1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, rect.width, rect.height);
      
      // Draw subtle grid
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.03)';
      ctx.lineWidth = 0.5;
      
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
      
      // Ground/horizon
      ctx.fillStyle = 'rgba(0, 50, 25, 0.3)';
      ctx.beginPath();
      ctx.rect(0, cityHorizon, rect.width, rect.height - cityHorizon);
      ctx.fill();
      
      // Draw roads
      roads.forEach(road => {
        if (road.type === 'horizontal') {
          // Draw horizontal road
          ctx.fillStyle = 'rgba(20, 25, 20, 0.9)';
          ctx.fillRect(0, road.y, road.width, road.lanes * 8);
          
          // Lane markings
          ctx.strokeStyle = 'rgba(0, 176, 80, 0.4)';
          ctx.setLineDash([5, 10]);
          ctx.beginPath();
          ctx.moveTo(0, road.y + (road.lanes * 8) / 2);
          ctx.lineTo(road.width, road.y + (road.lanes * 8) / 2);
          ctx.stroke();
          ctx.setLineDash([]);
          
          // Update and draw vehicles
          road.vehicles.forEach(vehicle => {
            // Update position
            vehicle.position += vehicle.speed * vehicle.direction;
            
            // Reset if off screen
            if (vehicle.direction > 0 && vehicle.position > road.width) {
              vehicle.position = 0;
            } else if (vehicle.direction < 0 && vehicle.position < 0) {
              vehicle.position = road.width;
            }
            
            // Draw vehicle
            const yOffset = road.y + 3 + vehicle.lane * 8;
            
            ctx.fillStyle = vehicle.color;
            if (vehicle.direction > 0) {
              // Right-facing vehicle
              ctx.beginPath();
              ctx.rect(vehicle.position, yOffset, vehicle.size, 3);
              ctx.fill();
            } else {
              // Left-facing vehicle
              ctx.beginPath();
              ctx.rect(vehicle.position - vehicle.size, yOffset, vehicle.size, 3);
              ctx.fill();
            }
          });
        } else {
          // Draw vertical road
          ctx.fillStyle = 'rgba(20, 25, 20, 0.9)';
          ctx.fillRect(road.x - 3, road.y, 6, road.height);
          
          // Update and draw vehicles
          road.vehicles.forEach(vehicle => {
            // Update position
            vehicle.position += vehicle.speed * vehicle.direction;
            
            // Reset if off screen
            if (vehicle.direction > 0 && vehicle.position > road.height) {
              vehicle.position = 0;
            } else if (vehicle.direction < 0 && vehicle.position < 0) {
              vehicle.position = road.height;
            }
            
            // Draw vehicle
            const yPos = road.y + vehicle.position;
            
            ctx.fillStyle = vehicle.color;
            ctx.beginPath();
            ctx.rect(road.x - 2, yPos, 4, vehicle.size);
            ctx.fill();
          });
        }
      });
      
      // Sort buildings by y-position for correct overlap rendering
      buildings.sort((a, b) => a.y - b.y);
      
      // Draw buildings
      buildings.forEach(building => {
        // Update pulse
        building.pulseOffset += building.pulseSpeed;
        const pulse = Math.sin(building.pulseOffset) * 0.5 + 0.5;
        
        // Draw the building using its custom draw method
        building.draw(ctx, pulse);
        
        // Occasionally draw data connections between buildings
        if (Math.random() > 0.992) {
          const targetBuilding = buildings[Math.floor(Math.random() * buildings.length)];
          
          if (targetBuilding !== building) {
            ctx.beginPath();
            ctx.moveTo(building.x, building.y - building.height / 2);
            ctx.lineTo(targetBuilding.x, targetBuilding.y - targetBuilding.height / 2);
            ctx.strokeStyle = `rgba(0, 176, 80, ${0.1 + pulse * 0.1})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            
            // Data packet moving along connection
            const progress = Math.random();
            const packetX = building.x + (targetBuilding.x - building.x) * progress;
            const packetY = (building.y - building.height / 2) + 
                           ((targetBuilding.y - targetBuilding.height / 2) - 
                            (building.y - building.height / 2)) * progress;
            
            ctx.beginPath();
            ctx.arc(packetX, packetY, 2, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 226, 130, 0.8)';
            ctx.fill();
          }
        }
      });
      
      // Update and draw floating data elements
      dataElements.forEach(element => {
        // Move element upward
        element.y -= element.speed;
        
        // Reset position when off screen
        if (element.y < 0) {
          element.y = rect.height;
          element.x = Math.random() * rect.width;
        }
        
        // Draw element
        if (element.symbol) {
          ctx.fillStyle = `rgba(0, 176, 80, ${element.opacity})`;
          ctx.font = `${element.size * 5}px monospace`;
          ctx.textAlign = 'center';
          ctx.fillText(element.symbol, element.x, element.y);
        } else {
          ctx.beginPath();
          ctx.arc(element.x, element.y, element.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 176, 80, ${element.opacity})`;
          ctx.fill();
        }
      });
      
      // Draw central feature - smart city hub
      const centerX = rect.width / 2;
      const centerY = rect.height * 0.7;
      const pulseRadius = 15 + Math.sin(frame * 0.02) * 5;
      
      // Pulsing glow
      const centerGlow = ctx.createRadialGradient(
        centerX, centerY, 0, 
        centerX, centerY, pulseRadius * 3
      );
      centerGlow.addColorStop(0, 'rgba(0, 176, 80, 0.2)');
      centerGlow.addColorStop(1, 'rgba(0, 176, 80, 0)');
      
      ctx.fillStyle = centerGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulseRadius * 3, 0, Math.PI * 2);
      ctx.fill();
      
      // Add holographic effect
      if (Math.random() > 0.9) {
        const holoX = centerX + (Math.random() - 0.5) * 30;
        const holoY = centerY - 40 + (Math.random() - 0.5) * 20;
        
        ctx.fillStyle = 'rgba(0, 226, 130, 0.7)';
        ctx.font = '8px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(Math.random() > 0.5 ? 'PROPERTY' : 'SMART HOME', holoX, holoY);
      }
      
      // Add scanlines effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
      for (let y = 0; y < rect.height; y += 4) {
        ctx.fillRect(0, y, rect.width, 1);
      }
      
      // Vignette effect
      const vignette = ctx.createRadialGradient(
        rect.width / 2, rect.height / 2, 0,
        rect.width / 2, rect.height / 2, rect.width / 1.5
      );
      vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
      vignette.addColorStop(1, 'rgba(0, 0, 0, 0.4)');
      
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, rect.width, rect.height);
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
