
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
    
    // Create cityscape elements
    const buildings = [];
    const buildingCount = 40; // More buildings for a more dense cityscape
    
    // Generate buildings with different sizes and colors
    for (let i = 0; i < buildingCount; i++) {
      const width = 5 + Math.random() * 15;
      const height = 20 + Math.random() * 100;
      const x = Math.random() * rect.width;
      
      // Windows configuration for each building
      const windowRows = Math.floor(height / 10);
      const windowCols = Math.floor(width / 5);
      const windows = [];
      
      // Create windows with animation states
      for (let row = 0; row < windowRows; row++) {
        for (let col = 0; col < windowCols; col++) {
          windows.push({
            row,
            col,
            state: Math.random() > 0.5, // Some windows start on, some off
            nextToggle: Math.random() * 10000, // Random initial toggle time
            toggleInterval: 2000 + Math.random() * 8000, // Random interval between toggles
            lastUpdate: 0
          });
        }
      }
      
      // Different shades of green for buildings
      const greenValue = 80 + Math.floor(Math.random() * 120);
      buildings.push({
        x,
        width,
        height,
        windows,
        y: rect.height - height / 2, // Position buildings at the bottom
        color: `rgba(0, ${greenValue}, ${Math.floor(greenValue/3)}, ${0.6 + Math.random() * 0.4})`
      });
    }
    
    // Sort buildings by height for proper rendering
    buildings.sort((a, b) => (a.height < b.height) ? 1 : -1);
    
    // Create stars for the night sky
    const stars = [];
    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * rect.width,
        y: Math.random() * (rect.height * 0.5), // Stars only in the top half
        size: 0.5 + Math.random() * 1.5,
        twinkle: Math.random() * Math.PI * 2, // Phase for twinkling animation
        twinkleSpeed: 0.02 + Math.random() * 0.04
      });
    }
    
    // Add moon
    const moon = {
      x: rect.width * 0.8,
      y: rect.height * 0.2,
      radius: 20,
      glow: 40
    };
    
    // Add floating clouds
    const clouds = [];
    const cloudCount = 5;
    
    for (let i = 0; i < cloudCount; i++) {
      clouds.push({
        x: Math.random() * rect.width,
        y: rect.height * 0.1 + Math.random() * (rect.height * 0.2),
        width: 40 + Math.random() * 100,
        height: 20 + Math.random() * 30,
        speed: 0.1 + Math.random() * 0.2,
        opacity: 0.1 + Math.random() * 0.2
      });
    }
    
    // Animation timer
    let lastTime = 0;
    
    const animate = (currentTime) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      // Draw night sky with gradient
      const skyGradient = ctx.createLinearGradient(0, 0, 0, rect.height);
      skyGradient.addColorStop(0, 'rgba(10, 20, 40, 1)'); // Dark blue night sky
      skyGradient.addColorStop(0.6, 'rgba(20, 40, 60, 1)'); // Lighter blue near horizon
      skyGradient.addColorStop(1, 'rgba(0, 40, 30, 1)'); // Green-tinted horizon
      
      ctx.fillStyle = skyGradient;
      ctx.fillRect(0, 0, rect.width, rect.height);
      
      // Draw stars with twinkling effect
      for (const star of stars) {
        star.twinkle += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinkle) * 0.5 + 0.5; // 0-1 value for twinkling
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * (0.7 + twinkle * 0.3), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + twinkle * 0.7})`;
        ctx.fill();
      }
      
      // Draw moon with glow
      const moonGlow = ctx.createRadialGradient(
        moon.x, moon.y, moon.radius * 0.8,
        moon.x, moon.y, moon.radius + moon.glow
      );
      moonGlow.addColorStop(0, 'rgba(255, 255, 240, 0.8)');
      moonGlow.addColorStop(0.5, 'rgba(255, 255, 240, 0.2)');
      moonGlow.addColorStop(1, 'rgba(255, 255, 240, 0)');
      
      ctx.beginPath();
      ctx.arc(moon.x, moon.y, moon.radius + moon.glow, 0, Math.PI * 2);
      ctx.fillStyle = moonGlow;
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(moon.x, moon.y, moon.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 240, 1)';
      ctx.fill();
      
      // Draw moving clouds
      for (const cloud of clouds) {
        cloud.x += cloud.speed;
        if (cloud.x > rect.width + cloud.width) {
          cloud.x = -cloud.width;
        }
        
        // Draw cloud as a collection of circles
        const cloudGradient = ctx.createRadialGradient(
          cloud.x, cloud.y, 0,
          cloud.x, cloud.y, cloud.width / 2
        );
        cloudGradient.addColorStop(0, `rgba(200, 255, 240, ${cloud.opacity})`);
        cloudGradient.addColorStop(1, `rgba(200, 255, 240, 0)`);
        
        for (let i = 0; i < 5; i++) {
          const offsetX = (i - 2) * cloud.width / 5;
          const offsetY = Math.sin(i * 1.5) * cloud.height / 4;
          const size = cloud.height * (0.7 + Math.sin(i) * 0.3);
          
          ctx.beginPath();
          ctx.arc(cloud.x + offsetX, cloud.y + offsetY, size, 0, Math.PI * 2);
          ctx.fillStyle = cloudGradient;
          ctx.fill();
        }
      }
      
      // City background glow
      const cityGlow = ctx.createLinearGradient(0, rect.height * 0.5, 0, rect.height);
      cityGlow.addColorStop(0, 'rgba(0, 100, 50, 0)');
      cityGlow.addColorStop(1, 'rgba(0, 100, 50, 0.2)');
      ctx.fillStyle = cityGlow;
      ctx.fillRect(0, rect.height * 0.5, rect.width, rect.height * 0.5);
      
      // Draw distant mountains/hills
      ctx.beginPath();
      ctx.moveTo(0, rect.height * 0.7);
      
      // Create wavy mountain ridges
      for (let x = 0; x <= rect.width; x += rect.width / 20) {
        const y = rect.height * (0.7 - Math.sin(x * 0.01) * 0.05 - Math.cos(x * 0.03) * 0.03);
        ctx.lineTo(x, y);
      }
      
      ctx.lineTo(rect.width, rect.height);
      ctx.lineTo(0, rect.height);
      ctx.closePath();
      
      const mountainGradient = ctx.createLinearGradient(0, rect.height * 0.65, 0, rect.height);
      mountainGradient.addColorStop(0, 'rgba(0, 60, 30, 0.9)');
      mountainGradient.addColorStop(1, 'rgba(0, 40, 20, 0.7)');
      ctx.fillStyle = mountainGradient;
      ctx.fill();
      
      // Draw buildings
      for (const building of buildings) {
        // Create a gradient for the building
        const buildingGradient = ctx.createLinearGradient(
          building.x - building.width, 
          0, 
          building.x + building.width, 
          0
        );
        buildingGradient.addColorStop(0, building.color);
        buildingGradient.addColorStop(1, `rgba(0, ${100 + Math.floor(Math.random() * 50)}, ${30 + Math.floor(Math.random() * 30)}, 0.8)`);
        
        // Draw building main shape
        ctx.fillStyle = buildingGradient;
        ctx.fillRect(
          building.x - building.width/2, 
          building.y - building.height, 
          building.width, 
          building.height
        );
        
        // Update and draw windows
        for (const window of building.windows) {
          window.lastUpdate += deltaTime;
          
          // Check if it's time to toggle the window state
          if (window.lastUpdate > window.nextToggle) {
            window.state = !window.state;
            window.lastUpdate = 0;
            window.nextToggle = 2000 + Math.random() * 8000; // New random interval
          }
          
          // Calculate window position
          const windowX = building.x - building.width/2 + window.col * (building.width / Math.max(1, building.windows.length / window.row));
          const windowY = building.y - building.height + window.row * 10;
          const windowWidth = building.width / Math.max(2, building.windows.length / window.row) - 1;
          const windowHeight = 8;
          
          // Draw window - lit or unlit
          if (window.state) {
            // Window is lit
            ctx.fillStyle = `rgba(255, 255, 100, ${0.7 + Math.random() * 0.3})`;
            
            // Add a glow effect
            const glow = ctx.createRadialGradient(
              windowX + windowWidth/2, 
              windowY + windowHeight/2, 
              0,
              windowX + windowWidth/2, 
              windowY + windowHeight/2, 
              windowWidth
            );
            glow.addColorStop(0, 'rgba(255, 255, 100, 0.3)');
            glow.addColorStop(1, 'rgba(255, 255, 100, 0)');
            
            ctx.beginPath();
            ctx.arc(windowX + windowWidth/2, windowY + windowHeight/2, windowWidth, 0, Math.PI * 2);
            ctx.fillStyle = glow;
            ctx.fill();
          } else {
            // Window is dark
            ctx.fillStyle = 'rgba(10, 10, 30, 0.7)';
          }
          
          // Draw the actual window
          ctx.fillRect(windowX, windowY, windowWidth, windowHeight);
        }
      }
      
      // Draw a subtle ground/water reflection effect
      const reflectionGradient = ctx.createLinearGradient(0, rect.height * 0.9, 0, rect.height);
      reflectionGradient.addColorStop(0, 'rgba(0, 100, 80, 0.1)');
      reflectionGradient.addColorStop(1, 'rgba(0, 30, 50, 0.05)');
      ctx.fillStyle = reflectionGradient;
      ctx.fillRect(0, rect.height * 0.9, rect.width, rect.height * 0.1);
      
      // Add some animated reflection lines
      ctx.strokeStyle = 'rgba(0, 255, 150, 0.05)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 10; i++) {
        const y = rect.height * 0.9 + i * (rect.height * 0.1 / 10);
        const amplitude = 5 * (1 - i / 10); // Larger waves at the top, smaller at bottom
        
        ctx.beginPath();
        ctx.moveTo(0, y);
        
        for (let x = 0; x < rect.width; x += 10) {
          const offset = Math.sin(x * 0.01 + currentTime * 0.001) * amplitude;
          ctx.lineTo(x, y + offset);
        }
        
        ctx.stroke();
      }
      
      requestAnimationFrame(animate);
    };
    
    const animationFrame = requestAnimationFrame(animate);
    
    // Cleanup
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
