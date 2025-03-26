
import React, { useEffect, useRef } from 'react';

// Building types
interface Building {
  x: number;
  y: number;
  width: number;
  height: number;
  type: 'skyscraper' | 'apartment' | 'house' | 'duplex' | 'smartBuilding';
  windows: number[][];
  lightsOn: boolean[];
  hue: number;
  pulseOffset: number;
  pulseSpeed: number;
}

interface Cloud {
  x: number;
  y: number;
  width: number;
  speed: number;
  opacity: number;
}

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  pulseSpeed: number;
  pulseOffset: number;
}

const RealEstateAnimation: React.FC = () => {
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
    
    // City horizon will be near the bottom of the canvas
    const groundLevel = rect.height * 0.75;
    
    // Generate stars
    const stars: Star[] = [];
    for (let i = 0; i < 70; i++) {
      stars.push({
        x: Math.random() * rect.width,
        y: Math.random() * groundLevel * 0.9,
        size: 0.5 + Math.random() * 1.5,
        opacity: 0.3 + Math.random() * 0.7,
        pulseSpeed: 0.005 + Math.random() * 0.01,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }
    
    // Generate clouds
    const clouds: Cloud[] = [];
    for (let i = 0; i < 5; i++) {
      clouds.push({
        x: Math.random() * rect.width,
        y: 20 + Math.random() * 60,
        width: 30 + Math.random() * 70,
        speed: 0.1 + Math.random() * 0.2,
        opacity: 0.1 + Math.random() * 0.2
      });
    }
    
    // Generate buildings
    const buildings: Building[] = [];
    const buildingTypes = ['skyscraper', 'apartment', 'house', 'duplex', 'smartBuilding'];
    
    // Create buildings across the width of the canvas
    const buildingCount = 18; 
    const minBuildingWidth = 25;
    const maxBuildingWidth = 60;
    
    for (let i = 0; i < buildingCount; i++) {
      const buildingWidth = minBuildingWidth + Math.random() * (maxBuildingWidth - minBuildingWidth);
      
      // Distribute buildings evenly with some randomness
      const spacing = rect.width / buildingCount;
      const x = i * spacing + (Math.random() - 0.5) * spacing * 0.6;
      
      // Different heights based on building type
      const type = buildingTypes[Math.floor(Math.random() * buildingTypes.length)] as Building['type'];
      
      let height;
      switch (type) {
        case 'skyscraper':
          height = 120 + Math.random() * 180;
          break;
        case 'apartment':
          height = 80 + Math.random() * 100;
          break;
        case 'house':
          height = 40 + Math.random() * 30;
          break;
        case 'duplex':
          height = 50 + Math.random() * 40;
          break;
        case 'smartBuilding':
          height = 100 + Math.random() * 150;
          break;
        default:
          height = 80 + Math.random() * 100;
      }
      
      // Generate windows
      const windowRows = Math.floor(height / 15);
      const windowCols = Math.floor(buildingWidth / 10);
      const windows: number[][] = [];
      
      for (let row = 0; row < windowRows; row++) {
        const windowRow: number[] = [];
        for (let col = 0; col < windowCols; col++) {
          // Some windows will be "on" (lit)
          windowRow.push(Math.random() > 0.6 ? 1 : 0);
        }
        windows.push(windowRow);
      }
      
      // Generate lights on status for animation
      const lightsOn: boolean[] = [];
      for (let j = 0; j < 5; j++) {
        lightsOn.push(Math.random() > 0.5);
      }
      
      buildings.push({
        x,
        y: groundLevel,
        width: buildingWidth,
        height,
        type,
        windows,
        lightsOn,
        hue: Math.random() > 0.7 ? 130 : 200, // Most green, some blue
        pulseOffset: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02
      });
    }
    
    // Sort buildings by height for correct rendering
    buildings.sort((a, b) => b.height - a.height);
    
    // Animation loop
    let frame = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, rect.width, rect.height);
      frame++;
      
      // Night sky gradient
      const skyGradient = ctx.createLinearGradient(0, 0, 0, groundLevel);
      skyGradient.addColorStop(0, 'rgb(0, 10, 20)');
      skyGradient.addColorStop(1, 'rgb(0, 30, 40)');
      ctx.fillStyle = skyGradient;
      ctx.fillRect(0, 0, rect.width, groundLevel);
      
      // Draw stars
      stars.forEach(star => {
        star.pulseOffset += star.pulseSpeed;
        const pulse = (Math.sin(star.pulseOffset) * 0.5 + 0.5) * 0.5;
        
        // Star with glow
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 2
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity * (0.8 + pulse)})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });
      
      // Update and draw clouds
      clouds.forEach(cloud => {
        cloud.x += cloud.speed;
        if (cloud.x > rect.width + cloud.width) {
          cloud.x = -cloud.width;
          cloud.y = 20 + Math.random() * 60;
          cloud.width = 30 + Math.random() * 70;
        }
        
        ctx.fillStyle = `rgba(100, 150, 180, ${cloud.opacity})`;
        
        // Draw cloud shape
        const cloudHeight = cloud.width * 0.4;
        const segments = Math.floor(cloud.width / 15);
        
        for (let i = 0; i < segments; i++) {
          const segmentX = cloud.x + i * (cloud.width / segments);
          const segmentY = cloud.y;
          const segmentRadius = 5 + Math.random() * 10;
          
          ctx.beginPath();
          ctx.arc(segmentX, segmentY, segmentRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      
      // Moon
      const moonX = rect.width * 0.8;
      const moonY = rect.height * 0.2;
      const moonRadius = 15;
      
      // Moon glow
      const moonGlow = ctx.createRadialGradient(
        moonX, moonY, 0,
        moonX, moonY, moonRadius * 3
      );
      moonGlow.addColorStop(0, 'rgba(255, 255, 220, 0.3)');
      moonGlow.addColorStop(1, 'rgba(255, 255, 220, 0)');
      
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius * 3, 0, Math.PI * 2);
      ctx.fillStyle = moonGlow;
      ctx.fill();
      
      // Moon body
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 220, 0.9)';
      ctx.fill();
      
      // Ground gradient
      const groundGradient = ctx.createLinearGradient(0, groundLevel, 0, rect.height);
      groundGradient.addColorStop(0, 'rgb(20, 40, 30)');
      groundGradient.addColorStop(1, 'rgb(10, 20, 15)');
      ctx.fillStyle = groundGradient;
      ctx.fillRect(0, groundLevel, rect.width, rect.height - groundLevel);
      
      // Draw grid lines on ground (like streets)
      ctx.strokeStyle = 'rgba(0, 176, 80, 0.2)';
      ctx.lineWidth = 0.5;
      
      const gridSize = 30;
      for (let x = 0; x < rect.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, groundLevel);
        ctx.lineTo(x, rect.height);
        ctx.stroke();
      }
      
      for (let y = groundLevel; y < rect.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(rect.width, y);
        ctx.stroke();
      }
      
      // Draw buildings
      buildings.forEach(building => {
        building.pulseOffset += building.pulseSpeed;
        const pulse = Math.sin(building.pulseOffset) * 0.5 + 0.5;
        
        // Base building color
        const buildingColor = `hsla(${building.hue}, 70%, 40%, 0.9)`;
        const highlightColor = `hsla(${building.hue}, 80%, 60%, 0.9)`;
        
        // Draw different building types
        switch(building.type) {
          case 'skyscraper':
            // Base
            ctx.fillStyle = buildingColor;
            ctx.fillRect(building.x, building.y - building.height, building.width, building.height);
            
            // Windows
            building.windows.forEach((row, rowIndex) => {
              row.forEach((window, colIndex) => {
                // Window position
                const windowWidth = 8;
                const windowHeight = 12;
                const windowSpacingX = (building.width - row.length * windowWidth) / (row.length + 1);
                const windowX = building.x + windowSpacingX + colIndex * (windowWidth + windowSpacingX);
                const windowY = building.y - building.height + 10 + rowIndex * 15;
                
                // Window light status (some randomly turn on/off)
                if (rowIndex % 5 === 0 && colIndex % 3 === 0) {
                  if (frame % 100 === 0 && Math.random() > 0.7) {
                    window = window === 1 ? 0 : 1;
                  }
                }
                
                ctx.fillStyle = window === 1 ? 
                  `rgba(255, 255, 200, ${0.5 + pulse * 0.3})` : 
                  'rgba(30, 40, 60, 0.8)';
                  
                ctx.fillRect(windowX, windowY, windowWidth, windowHeight);
              });
            });
            
            // Top
            ctx.fillStyle = highlightColor;
            ctx.beginPath();
            ctx.moveTo(building.x, building.y - building.height);
            ctx.lineTo(building.x + building.width/2, building.y - building.height - 20);
            ctx.lineTo(building.x + building.width, building.y - building.height);
            ctx.closePath();
            ctx.fill();
            
            // Antenna
            ctx.strokeStyle = highlightColor;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(building.x + building.width/2, building.y - building.height - 20);
            ctx.lineTo(building.x + building.width/2, building.y - building.height - 35);
            ctx.stroke();
            
            // Blinking light on top
            if (pulse > 0.8) {
              ctx.beginPath();
              ctx.arc(building.x + building.width/2, building.y - building.height - 35, 2, 0, Math.PI * 2);
              ctx.fillStyle = 'rgba(255, 50, 50, 0.9)';
              ctx.fill();
            }
            break;
          
          case 'apartment':
            // Base
            ctx.fillStyle = buildingColor;
            ctx.fillRect(building.x, building.y - building.height, building.width, building.height);
            
            // Windows (more regular pattern for apartment)
            const aptRows = Math.floor(building.height / 20);
            const aptCols = Math.floor(building.width / 15);
            
            for (let row = 0; row < aptRows; row++) {
              for (let col = 0; col < aptCols; col++) {
                // Window pattern
                const isLit = (Math.floor(frame / 50) + row + col) % 5 === 0 ? 
                  !building.lightsOn[row % building.lightsOn.length] : 
                  building.lightsOn[row % building.lightsOn.length];
                
                ctx.fillStyle = isLit ? 
                  `rgba(255, 255, 180, ${0.6 + pulse * 0.2})` : 
                  'rgba(40, 50, 70, 0.7)';
                  
                ctx.fillRect(
                  building.x + 3 + col * 15, 
                  building.y - building.height + 5 + row * 20, 
                  10, 
                  15
                );
              }
            }
            
            // Balconies
            for (let row = 1; row < aptRows; row += 2) {
              ctx.fillStyle = 'rgba(50, 60, 80, 0.8)';
              
              // Left balconies on odd floors
              if (row % 2 === 1) {
                ctx.fillRect(
                  building.x - 8, 
                  building.y - building.height + 5 + row * 20, 
                  8, 
                  15
                );
                
                // Railing
                ctx.strokeStyle = 'rgba(70, 80, 100, 0.9)';
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(building.x - 8, building.y - building.height + 10 + row * 20);
                ctx.lineTo(building.x, building.y - building.height + 10 + row * 20);
                ctx.stroke();
              }
              
              // Right balconies on even floors
              if (row % 2 === 0) {
                ctx.fillRect(
                  building.x + building.width, 
                  building.y - building.height + 5 + row * 20, 
                  8, 
                  15
                );
                
                // Railing
                ctx.strokeStyle = 'rgba(70, 80, 100, 0.9)';
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(building.x + building.width, building.y - building.height + 10 + row * 20);
                ctx.lineTo(building.x + building.width + 8, building.y - building.height + 10 + row * 20);
                ctx.stroke();
              }
            }
            break;
            
          case 'house':
            // Base
            ctx.fillStyle = buildingColor;
            ctx.fillRect(building.x, building.y - building.height, building.width, building.height);
            
            // Roof
            ctx.fillStyle = highlightColor;
            ctx.beginPath();
            ctx.moveTo(building.x - 5, building.y - building.height);
            ctx.lineTo(building.x + building.width/2, building.y - building.height - 15);
            ctx.lineTo(building.x + building.width + 5, building.y - building.height);
            ctx.closePath();
            ctx.fill();
            
            // Door
            ctx.fillStyle = 'rgba(60, 40, 20, 0.9)';
            ctx.fillRect(
              building.x + building.width/2 - 5, 
              building.y - 20, 
              10, 
              20
            );
            
            // Windows
            ctx.fillStyle = building.lightsOn[0] ? 
              `rgba(255, 255, 180, ${0.7 + pulse * 0.3})` : 
              'rgba(40, 50, 70, 0.7)';
              
            // Left window
            ctx.fillRect(
              building.x + 5, 
              building.y - building.height/2 - 10, 
              10, 
              10
            );
            
            // Right window
            ctx.fillStyle = building.lightsOn[1] ? 
              `rgba(255, 255, 180, ${0.7 + pulse * 0.3})` : 
              'rgba(40, 50, 70, 0.7)';
              
            ctx.fillRect(
              building.x + building.width - 15, 
              building.y - building.height/2 - 10, 
              10, 
              10
            );
            
            // Garden
            ctx.fillStyle = 'rgba(20, 80, 40, 0.7)';
            ctx.fillRect(
              building.x - 10, 
              building.y, 
              building.width + 20, 
              5
            );
            break;
            
          case 'duplex':
            // Bottom unit
            ctx.fillStyle = buildingColor;
            ctx.fillRect(building.x, building.y - building.height/2, building.width, building.height/2);
            
            // Top unit (slightly different color)
            ctx.fillStyle = `hsla(${building.hue + 20}, 70%, 40%, 0.9)`;
            ctx.fillRect(building.x, building.y - building.height, building.width, building.height/2);
            
            // Windows - bottom unit
            ctx.fillStyle = building.lightsOn[2] ? 
              `rgba(255, 255, 180, ${0.7 + pulse * 0.3})` : 
              'rgba(40, 50, 70, 0.7)';
              
            ctx.fillRect(
              building.x + 5, 
              building.y - building.height/4 - 10, 
              10, 
              10
            );
            
            ctx.fillStyle = building.lightsOn[3] ? 
              `rgba(255, 255, 180, ${0.7 + pulse * 0.3})` : 
              'rgba(40, 50, 70, 0.7)';
              
            ctx.fillRect(
              building.x + building.width - 15, 
              building.y - building.height/4 - 10, 
              10, 
              10
            );
            
            // Windows - top unit
            ctx.fillStyle = building.lightsOn[0] ? 
              `rgba(255, 255, 180, ${0.7 + pulse * 0.3})` : 
              'rgba(40, 50, 70, 0.7)';
              
            ctx.fillRect(
              building.x + 5, 
              building.y - 3*building.height/4 - 10, 
              10, 
              10
            );
            
            ctx.fillStyle = building.lightsOn[1] ? 
              `rgba(255, 255, 180, ${0.7 + pulse * 0.3})` : 
              'rgba(40, 50, 70, 0.7)';
              
            ctx.fillRect(
              building.x + building.width - 15, 
              building.y - 3*building.height/4 - 10, 
              10, 
              10
            );
            
            // Doors
            ctx.fillStyle = 'rgba(60, 40, 20, 0.9)';
            // Bottom unit door
            ctx.fillRect(
              building.x + building.width/3 - 5, 
              building.y - 20, 
              10, 
              20
            );
            // Top unit door (with steps)
            ctx.fillRect(
              building.x + 2*building.width/3 - 5, 
              building.y - building.height/2 - 20, 
              10, 
              20
            );
            // Steps
            ctx.strokeStyle = 'rgba(70, 70, 70, 0.9)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(building.x + 2*building.width/3 - 10, building.y - building.height/2);
            ctx.lineTo(building.x + 2*building.width/3 + 10, building.y - building.height/2);
            ctx.lineTo(building.x + 2*building.width/3 + 10, building.y);
            ctx.stroke();
            break;
            
          case 'smartBuilding':
            // Base with subtle gradient
            const smartGradient = ctx.createLinearGradient(
              building.x, 0, 
              building.x + building.width, 0
            );
            smartGradient.addColorStop(0, buildingColor);
            smartGradient.addColorStop(0.5, highlightColor);
            smartGradient.addColorStop(1, buildingColor);
            
            ctx.fillStyle = smartGradient;
            
            // Building with setbacks (more modern architecture)
            const setbacks = 3;
            const setbackHeight = building.height / setbacks;
            
            for (let i = 0; i < setbacks; i++) {
              const setbackWidth = building.width - (i * 6);
              ctx.fillRect(
                building.x + (i * 3), 
                building.y - building.height + (i * setbackHeight), 
                setbackWidth, 
                setbackHeight
              );
              
              // Add some data connection lines
              if (i > 0) {
                ctx.strokeStyle = `rgba(0, 176, 80, ${0.3 + pulse * 0.4})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(building.x + setbackWidth/2, building.y - building.height + (i * setbackHeight));
                ctx.lineTo(building.x + building.width/2, building.y - building.height + ((i-1) * setbackHeight) + setbackHeight/2);
                ctx.stroke();
                
                // Data point
                ctx.beginPath();
                ctx.arc(
                  building.x + building.width/2, 
                  building.y - building.height + ((i-1) * setbackHeight) + setbackHeight/2,
                  2, 
                  0, 
                  Math.PI * 2
                );
                ctx.fillStyle = `rgba(0, 176, 80, ${0.6 + pulse * 0.4})`;
                ctx.fill();
              }
            }
            
            // Smart windows - digital pattern
            const smartRows = Math.floor(building.height / 12);
            const smartCols = Math.floor(building.width / 5);
            
            for (let s = 0; s < setbacks; s++) {
              const setbackWidth = building.width - (s * 6);
              const setbackX = building.x + (s * 3);
              const rowStart = Math.floor((s * setbackHeight) / 12);
              const rowEnd = Math.floor(((s+1) * setbackHeight) / 12);
              
              for (let row = rowStart; row < rowEnd && row < smartRows; row++) {
                const colCount = Math.floor(setbackWidth / 5);
                const colOffset = (smartCols - colCount) / 2;
                
                for (let col = 0; col < colCount; col++) {
                  // Digital pattern for windows
                  const isLit = ((row + col + Math.floor(frame / 20)) % 7 === 0) ? true : 
                               (Math.random() > 0.99); // Random flicker
                  
                  if (isLit || building.windows[row % building.windows.length][col % building.windows[0].length] === 1) {
                    ctx.fillStyle = `rgba(0, 230, 120, ${0.3 + pulse * 0.3})`;
                  } else {
                    ctx.fillStyle = 'rgba(20, 40, 50, 0.7)';
                  }
                  
                  ctx.fillRect(
                    setbackX + 2 + col * 5, 
                    building.y - building.height + 2 + row * 12, 
                    3, 
                    8
                  );
                }
              }
            }
            
            // Add digital connections/IoT elements
            const connectionCount = 2 + Math.floor(Math.random() * 4);
            const centerX = building.x + building.width/2;
            
            for (let c = 0; c < connectionCount; c++) {
              const angle = (c / connectionCount) * Math.PI * 2 + pulse;
              const distance = 20 + Math.random() * 30;
              const connX = centerX + Math.cos(angle) * distance;
              const connY = building.y - building.height/2 + Math.sin(angle) * distance;
              
              // Draw connection
              ctx.strokeStyle = `rgba(0, 176, 80, ${0.3 + pulse * 0.3})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(centerX, building.y - building.height/2);
              ctx.lineTo(connX, connY);
              ctx.stroke();
              
              // Connection point
              ctx.beginPath();
              ctx.arc(connX, connY, 2, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(0, 176, 80, ${0.5 + pulse * 0.5})`;
              ctx.fill();
              
              // Data packet
              if (Math.random() > 0.7) {
                const packetProgress = Math.random();
                const packetX = centerX + (connX - centerX) * packetProgress;
                const packetY = (building.y - building.height/2) + (connY - (building.y - building.height/2)) * packetProgress;
                
                ctx.beginPath();
                ctx.arc(packetX, packetY, 1.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 230, 120, ${0.7 + pulse * 0.3})`;
                ctx.fill();
              }
            }
            break;
        }
      });
      
      // Draw floating data elements around buildings
      if (frame % 5 === 0) {
        const dataX = Math.random() * rect.width;
        const dataY = groundLevel - 50 - Math.random() * 150;
        
        if (Math.random() > 0.5) {
          // "Smart home" or "IoT" label
          ctx.fillStyle = 'rgba(0, 176, 80, 0.4)';
          ctx.font = '8px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(Math.random() > 0.5 ? 'SMART HOME' : 'REAL ESTATE', dataX, dataY);
        } else {
          // Binary data
          ctx.fillStyle = 'rgba(0, 176, 80, 0.3)';
          ctx.font = '6px monospace';
          ctx.textAlign = 'center';
          ctx.fillText(Math.random() > 0.5 ? '10110' : '01001', dataX, dataY);
        }
      }
      
      // City glow effect
      const cityGlow = ctx.createLinearGradient(0, groundLevel - 50, 0, groundLevel);
      cityGlow.addColorStop(0, 'rgba(0, 50, 100, 0)');
      cityGlow.addColorStop(1, 'rgba(0, 50, 100, 0.2)');
      
      ctx.fillStyle = cityGlow;
      ctx.fillRect(0, groundLevel - 50, rect.width, 50);
      
      // Vignette effect
      const vignette = ctx.createRadialGradient(
        rect.width / 2, rect.height / 2, 0,
        rect.width / 2, rect.height / 2, rect.width / 1.5
      );
      vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
      vignette.addColorStop(1, 'rgba(0, 0, 0, 0.6)');
      
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, rect.width, rect.height);
      
      // Scanlines effect for digital feel
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
      for (let y = 0; y < rect.height; y += 4) {
        ctx.fillRect(0, y, rect.width, 1);
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

export default RealEstateAnimation;
