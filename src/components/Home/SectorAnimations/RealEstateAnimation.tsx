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
    
    // Building models - more sophisticated and varied designs
    const buildings = [];
    const buildingCount = 12;
    
    // Define building styles - more elegant and futuristic designs
    const buildingStyles = [
      // Ultra-Modern Skyscraper
      (x: number, y: number, scale: number, ctx: CanvasRenderingContext2D) => {
        const width = 45 * scale;
        const height = 160 * scale;
        
        // Main tower - twisted design
        for (let i = 0; i < 20; i++) {
          const sectionHeight = height / 20;
          const offset = Math.sin(i * 0.3) * width * 0.15;
          const sectionY = y - height + i * sectionHeight;
          
          // Gradient for each section
          const gradient = ctx.createLinearGradient(x - width/2 + offset, sectionY, x + width/2 + offset, sectionY + sectionHeight);
          gradient.addColorStop(0, 'rgba(0, 176, 80, 0.15)');
          gradient.addColorStop(1, 'rgba(0, 176, 80, 0.25)');
          
          ctx.fillStyle = gradient;
          ctx.fillRect(x - width/2 + offset, sectionY, width, sectionHeight);
          
          // Glass windows with glowing effect
          for (let w = 0; w < 6; w++) {
            if ((i + w) % 2 === 0) {
              ctx.fillStyle = `rgba(0, 220, 100, ${0.2 + Math.random() * 0.3})`;
              ctx.fillRect(
                x - width/2 + 5 * scale + offset + w * 7 * scale, 
                sectionY + 2 * scale, 
                4 * scale, 
                sectionHeight - 4 * scale
              );
            }
          }
        }
        
        // Spectacular crown with multiple layers
        ctx.beginPath();
        ctx.moveTo(x - width/2, y - height);
        ctx.lineTo(x - width/4, y - height - 15 * scale);
        ctx.lineTo(x, y - height - 30 * scale);
        ctx.lineTo(x + width/4, y - height - 15 * scale);
        ctx.lineTo(x + width/2, y - height);
        ctx.closePath();
        const crownGradient = ctx.createLinearGradient(x, y - height - 30 * scale, x, y - height);
        crownGradient.addColorStop(0, 'rgba(0, 255, 150, 0.5)');
        crownGradient.addColorStop(1, 'rgba(0, 176, 80, 0.2)');
        ctx.fillStyle = crownGradient;
        ctx.fill();
        
        // Antenna
        ctx.beginPath();
        ctx.moveTo(x, y - height - 30 * scale);
        ctx.lineTo(x, y - height - 45 * scale);
        ctx.lineWidth = 1 * scale;
        ctx.strokeStyle = 'rgba(0, 176, 80, 0.8)';
        ctx.stroke();
        
        // Antenna sphere
        ctx.beginPath();
        ctx.arc(x, y - height - 45 * scale, 2 * scale, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 250, 150, 0.9)';
        ctx.fill();
      },
      
      // Luxury Residential Complex
      (x: number, y: number, scale: number, ctx: CanvasRenderingContext2D) => {
        const baseWidth = 90 * scale;
        const baseHeight = 40 * scale;
        const towerWidth = 50 * scale;
        const towerHeight = 120 * scale;
        
        // Base structure - luxury podium
        const baseGradient = ctx.createLinearGradient(x - baseWidth/2, y - baseHeight, x + baseWidth/2, y);
        baseGradient.addColorStop(0, 'rgba(0, 176, 80, 0.1)');
        baseGradient.addColorStop(1, 'rgba(0, 176, 80, 0.2)');
        ctx.fillStyle = baseGradient;
        ctx.fillRect(x - baseWidth/2, y - baseHeight, baseWidth, baseHeight);
        
        // Swimming pool on podium
        ctx.fillStyle = 'rgba(0, 200, 255, 0.3)';
        ctx.fillRect(x - baseWidth/2 + 10 * scale, y - baseHeight - 2 * scale, 25 * scale, 15 * scale);
        
        // Main tower
        const towerGradient = ctx.createLinearGradient(x - towerWidth/2, y - baseHeight - towerHeight, x + towerWidth/2, y - baseHeight);
        towerGradient.addColorStop(0, 'rgba(0, 176, 80, 0.15)');
        towerGradient.addColorStop(1, 'rgba(0, 176, 80, 0.25)');
        ctx.fillStyle = towerGradient;
        ctx.fillRect(x - towerWidth/2, y - baseHeight - towerHeight, towerWidth, towerHeight);
        
        // Balconies - staggered pattern
        for (let floor = 0; floor < 15; floor++) {
          if (floor % 2 === 0) {
            // Left balconies
            ctx.fillStyle = 'rgba(0, 176, 80, 0.3)';
            ctx.fillRect(
              x - towerWidth/2 - 8 * scale, 
              y - baseHeight - towerHeight + 10 * scale + floor * 8 * scale, 
              8 * scale, 
              4 * scale
            );
          } else {
            // Right balconies
            ctx.fillStyle = 'rgba(0, 176, 80, 0.3)';
            ctx.fillRect(
              x + towerWidth/2, 
              y - baseHeight - towerHeight + 10 * scale + floor * 8 * scale, 
              8 * scale, 
              4 * scale
            );
          }
        }
        
        // Penthouse
        ctx.fillStyle = 'rgba(0, 176, 80, 0.4)';
        ctx.fillRect(
          x - towerWidth/2 + 5 * scale, 
          y - baseHeight - towerHeight - 15 * scale, 
          towerWidth - 10 * scale, 
          15 * scale
        );
        
        // Windows
        for (let floor = 0; floor < 15; floor++) {
          for (let window = 0; window < 5; window++) {
            ctx.fillStyle = `rgba(0, 230, 130, ${0.2 + Math.random() * 0.2})`;
            ctx.fillRect(
              x - towerWidth/2 + 5 * scale + window * 9 * scale, 
              y - baseHeight - towerHeight + 10 * scale + floor * 8 * scale, 
              5 * scale, 
              4 * scale
            );
          }
        }
        
        // Rooftop garden
        for (let i = 0; i < 5; i++) {
          ctx.beginPath();
          ctx.arc(
            x - towerWidth/4 + i * towerWidth/5, 
            y - baseHeight - towerHeight - 10 * scale,
            3 * scale,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = 'rgba(0, 220, 100, 0.6)';
          ctx.fill();
        }
      },
      
      // Futuristic Business Center
      (x: number, y: number, scale: number, ctx: CanvasRenderingContext2D) => {
        const width = 70 * scale;
        const height = 130 * scale;
        
        // Base foundation with LED lighting
        ctx.fillStyle = 'rgba(0, 176, 80, 0.3)';
        ctx.fillRect(x - width/2 - 5 * scale, y - 5 * scale, width + 10 * scale, 5 * scale);
        
        // Main structure - three connected towers
        const towerWidth = width / 3 - 5 * scale;
        
        // Left tower
        const leftTowerHeight = height * 0.8;
        const leftTowerGradient = ctx.createLinearGradient(x - width/2, y - leftTowerHeight, x - width/2 + towerWidth, y);
        leftTowerGradient.addColorStop(0, 'rgba(0, 176, 80, 0.1)');
        leftTowerGradient.addColorStop(1, 'rgba(0, 176, 80, 0.2)');
        ctx.fillStyle = leftTowerGradient;
        ctx.fillRect(x - width/2, y - leftTowerHeight, towerWidth, leftTowerHeight);
        
        // Center tower (tallest)
        const centerTowerGradient = ctx.createLinearGradient(x - towerWidth/2, y - height, x + towerWidth/2, y);
        centerTowerGradient.addColorStop(0, 'rgba(0, 176, 80, 0.2)');
        centerTowerGradient.addColorStop(1, 'rgba(0, 176, 80, 0.3)');
        ctx.fillStyle = centerTowerGradient;
        ctx.fillRect(x - towerWidth/2, y - height, towerWidth, height);
        
        // Right tower
        const rightTowerHeight = height * 0.9;
        const rightTowerGradient = ctx.createLinearGradient(x + width/2 - towerWidth, y - rightTowerHeight, x + width/2, y);
        rightTowerGradient.addColorStop(0, 'rgba(0, 176, 80, 0.15)');
        rightTowerGradient.addColorStop(1, 'rgba(0, 176, 80, 0.25)');
        ctx.fillStyle = rightTowerGradient;
        ctx.fillRect(x + width/2 - towerWidth, y - rightTowerHeight, towerWidth, rightTowerHeight);
        
        // Connecting sky bridges
        for (let i = 1; i < 5; i++) {
          const bridgeY = y - height * 0.2 * i;
          
          // Left to center bridge
          ctx.fillStyle = 'rgba(0, 176, 80, 0.3)';
          if (bridgeY > y - leftTowerHeight) {
            ctx.fillRect(
              x - width/2 + towerWidth, 
              bridgeY,
              x - towerWidth/2 - (x - width/2 + towerWidth),
              3 * scale
            );
          }
          
          // Center to right bridge
          if (bridgeY > y - rightTowerHeight) {
            ctx.fillStyle = 'rgba(0, 176, 80, 0.3)';
            ctx.fillRect(
              x + towerWidth/2, 
              bridgeY,
              x + width/2 - towerWidth - (x + towerWidth/2),
              3 * scale
            );
          }
        }
        
        // Glass windows pattern
        for (let tower = 0; tower < 3; tower++) {
          const towerX = x - width/2 + tower * (width/3);
          const towerMaxHeight = tower === 0 ? leftTowerHeight : tower === 1 ? height : rightTowerHeight;
          
          for (let floor = 0; floor < towerMaxHeight / (8 * scale); floor++) {
            for (let window = 0; window < 3; window++) {
              ctx.fillStyle = `rgba(0, 255, 150, ${0.1 + Math.random() * 0.3})`;
              ctx.fillRect(
                towerX + 3 * scale + window * 5 * scale,
                y - towerMaxHeight + 5 * scale + floor * 8 * scale,
                3 * scale,
                4 * scale
              );
            }
          }
        }
        
        // Roof features
        // Center tower crown
        ctx.beginPath();
        ctx.moveTo(x - towerWidth/2, y - height);
        ctx.lineTo(x, y - height - 15 * scale);
        ctx.lineTo(x + towerWidth/2, y - height);
        ctx.closePath();
        ctx.fillStyle = 'rgba(0, 200, 100, 0.4)';
        ctx.fill();
        
        // Antennas on side towers
        ctx.beginPath();
        ctx.moveTo(x - width/2 + towerWidth/2, y - leftTowerHeight);
        ctx.lineTo(x - width/2 + towerWidth/2, y - leftTowerHeight - 10 * scale);
        ctx.strokeStyle = 'rgba(0, 176, 80, 0.6)';
        ctx.lineWidth = 1 * scale;
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(x + width/2 - towerWidth/2, y - rightTowerHeight);
        ctx.lineTo(x + width/2 - towerWidth/2, y - rightTowerHeight - 10 * scale);
        ctx.stroke();
      },
      
      // Green Ecological Tower
      (x: number, y: number, scale: number, ctx: CanvasRenderingContext2D) => {
        const width = 60 * scale;
        const height = 120 * scale;
        
        // Main structure with slight tapers
        const baseWidth = width;
        const topWidth = width * 0.8;
        
        // Draw as trapezoid
        ctx.beginPath();
        ctx.moveTo(x - baseWidth/2, y);
        ctx.lineTo(x - topWidth/2, y - height);
        ctx.lineTo(x + topWidth/2, y - height);
        ctx.lineTo(x + baseWidth/2, y);
        ctx.closePath();
        
        const gradient = ctx.createLinearGradient(x, y - height, x, y);
        gradient.addColorStop(0, 'rgba(0, 176, 80, 0.15)');
        gradient.addColorStop(1, 'rgba(0, 176, 80, 0.25)');
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Terraced gardens - more elaborate with varying plants
        const terraceLevels = 8;
        for (let i = 0; i < terraceLevels; i++) {
          const terraceY = y - height * (i + 1) / (terraceLevels + 1);
          const terraceWidth = baseWidth - (baseWidth - topWidth) * (i + 1) / (terraceLevels + 1);
          
          // Terrace base
          ctx.fillStyle = 'rgba(0, 176, 80, 0.4)';
          ctx.fillRect(
            x - terraceWidth/2 - 5 * scale, 
            terraceY,
            terraceWidth + 10 * scale,
            5 * scale
          );
          
          // Plants on each terrace - varying sizes and types
          for (let p = 0; p < terraceWidth / (8 * scale); p++) {
            const plantSize = (1 + Math.random()) * 3 * scale;
            const plantType = Math.floor(Math.random() * 3);
            
            if (plantType === 0) {
              // Round bush
              ctx.beginPath();
              ctx.arc(
                x - terraceWidth/2 + 5 * scale + p * 8 * scale,
                terraceY - plantSize - 2 * scale,
                plantSize,
                0,
                Math.PI * 2
              );
              ctx.fillStyle = `rgba(0, ${180 + Math.floor(Math.random() * 70)}, 80, ${0.5 + Math.random() * 0.3})`;
              ctx.fill();
            } else if (plantType === 1) {
              // Triangular tree
              ctx.beginPath();
              ctx.moveTo(x - terraceWidth/2 + 5 * scale + p * 8 * scale, terraceY - 2 * scale);
              ctx.lineTo(x - terraceWidth/2 + 5 * scale + p * 8 * scale - plantSize, terraceY - 2 * scale);
              ctx.lineTo(x - terraceWidth/2 + 5 * scale + p * 8 * scale, terraceY - plantSize * 2 - 2 * scale);
              ctx.lineTo(x - terraceWidth/2 + 5 * scale + p * 8 * scale + plantSize, terraceY - 2 * scale);
              ctx.closePath();
              ctx.fillStyle = `rgba(0, ${160 + Math.floor(Math.random() * 80)}, 60, ${0.5 + Math.random() * 0.3})`;
              ctx.fill();
            } else {
              // Tall slim plant
              ctx.beginPath();
              ctx.rect(
                x - terraceWidth/2 + 5 * scale + p * 8 * scale - scale/2,
                terraceY - plantSize * 2 - 2 * scale,
                scale,
                plantSize * 2
              );
              ctx.fillStyle = `rgba(0, ${200 + Math.floor(Math.random() * 50)}, 100, ${0.6 + Math.random() * 0.3})`;
              ctx.fill();
            }
          }
        }
        
        // Vertical garden stripes
        for (let i = 0; i < 4; i++) {
          const stripeX = x - width/2 + (i + 1) * width/5;
          
          ctx.beginPath();
          ctx.moveTo(stripeX, y);
          // Calculate x position at the top based on taper
          const topStripeX = x - topWidth/2 + (i + 1) * topWidth/5;
          ctx.lineTo(topStripeX, y - height);
          ctx.lineWidth = 3 * scale;
          ctx.strokeStyle = 'rgba(0, 200, 100, 0.4)';
          ctx.stroke();
          
          // Add small plants along the stripe
          for (let p = 0; p < height / (20 * scale); p++) {
            const plantY = y - 15 * scale - p * 20 * scale;
            // Calculate x position based on height (for tapered building)
            const plantHeightRatio = (y - plantY) / height;
            const plantX = x - baseWidth/2 + (baseWidth - (baseWidth - topWidth) * plantHeightRatio) * (i + 1)/5;
            
            ctx.beginPath();
            ctx.arc(
              plantX,
              plantY,
              2 * scale,
              0,
              Math.PI * 2
            );
            ctx.fillStyle = 'rgba(0, 230, 100, 0.6)';
            ctx.fill();
          }
        }
        
        // Solar panels on roof
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 2; j++) {
            ctx.fillStyle = 'rgba(0, 150, 255, 0.3)';
            ctx.fillRect(
              x - topWidth/2 + 3 * scale + i * 10 * scale,
              y - height - 2 * scale + j * 5 * scale,
              8 * scale,
              4 * scale
            );
          }
        }
      },
      
      // Crystalline Diamond Tower
      (x: number, y: number, scale: number, ctx: CanvasRenderingContext2D) => {
        const width = 50 * scale;
        const height = 140 * scale;
        
        // Base structure
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - width/2, y - height * 0.3);
        ctx.lineTo(x - width/3, y - height);
        ctx.lineTo(x + width/3, y - height);
        ctx.lineTo(x + width/2, y - height * 0.3);
        ctx.closePath();
        
        // Crystal-like gradient
        const gradient = ctx.createLinearGradient(x, y - height, x, y);
        gradient.addColorStop(0, 'rgba(0, 255, 150, 0.2)');
        gradient.addColorStop(0.5, 'rgba(0, 176, 80, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 176, 80, 0.2)');
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Crystalline facets - reflective surfaces
        for (let i = 0; i < 8; i++) {
          const startY = y - height * i/8;
          const endY = y - height * (i+1)/8;
          const startWidthRatio = i <= 2 ? i/3 : i >= 5 ? (8-i)/3 : 1;
          const endWidthRatio = (i+1) <= 2 ? (i+1)/3 : (i+1) >= 5 ? (8-(i+1))/3 : 1;
          
          const startWidth = width * startWidthRatio;
          const endWidth = width * endWidthRatio;
          
          ctx.beginPath();
          ctx.moveTo(x - startWidth/2, startY);
          ctx.lineTo(x - endWidth/2, endY);
          ctx.lineTo(x + endWidth/2, endY);
          ctx.lineTo(x + startWidth/2, startY);
          ctx.closePath();
          
          const facetGradient = ctx.createLinearGradient(x - startWidth/2, startY, x + startWidth/2, startY);
          facetGradient.addColorStop(0, `rgba(0, ${150 + Math.floor(Math.random() * 100)}, ${80 + Math.floor(Math.random() * 50)}, ${0.1 + Math.random() * 0.2})`);
          facetGradient.addColorStop(0.5, `rgba(0, ${200 + Math.floor(Math.random() * 55)}, ${100 + Math.floor(Math.random() * 50)}, ${0.2 + Math.random() * 0.2})`);
          facetGradient.addColorStop(1, `rgba(0, ${150 + Math.floor(Math.random() * 100)}, ${80 + Math.floor(Math.random() * 50)}, ${0.1 + Math.random() * 0.2})`);
          ctx.fillStyle = facetGradient;
          ctx.fill();
        }
        
        // Glowing edges
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - width/2, y - height * 0.3);
        ctx.lineTo(x - width/3, y - height);
        ctx.lineTo(x + width/3, y - height);
        ctx.lineTo(x + width/2, y - height * 0.3);
        ctx.closePath();
        ctx.strokeStyle = 'rgba(0, 255, 150, 0.4)';
        ctx.lineWidth = 1 * scale;
        ctx.stroke();
        
        // Reflection highlights
        for (let i = 0; i < 5; i++) {
          const highlightY = y - height * (0.2 + i * 0.15);
          const highlightWidth = width * 0.15;
          
          ctx.beginPath();
          ctx.moveTo(x, highlightY);
          ctx.lineTo(x + highlightWidth, highlightY - height * 0.05);
          ctx.lineWidth = 2 * scale;
          ctx.strokeStyle = 'rgba(0, 255, 150, 0.3)';
          ctx.stroke();
        }
        
        // Spire at top
        ctx.beginPath();
        ctx.moveTo(x - width/12, y - height);
        ctx.lineTo(x, y - height - 20 * scale);
        ctx.lineTo(x + width/12, y - height);
        ctx.closePath();
        ctx.fillStyle = 'rgba(0, 255, 180, 0.4)';
        ctx.fill();
        
        // Lighting beacon
        ctx.beginPath();
        ctx.arc(x, y - height - 20 * scale, 3 * scale, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 150, 0.8)';
        ctx.fill();
        
        // Glow effect around beacon
        const beaconGlow = ctx.createRadialGradient(x, y - height - 20 * scale, 0, x, y - height - 20 * scale, 15 * scale);
        beaconGlow.addColorStop(0, 'rgba(0, 255, 150, 0.4)');
        beaconGlow.addColorStop(1, 'rgba(0, 255, 150, 0)');
        
        ctx.beginPath();
        ctx.arc(x, y - height - 20 * scale, 15 * scale, 0, Math.PI * 2);
        ctx.fillStyle = beaconGlow;
        ctx.fill();
      },
      
      // Mixed-Use Curved Tower
      (x: number, y: number, scale: number, ctx: CanvasRenderingContext2D) => {
        const width = 55 * scale;
        const height = 150 * scale;
        
        // Curved structure - S-shape
        ctx.beginPath();
        
        // Base point
        ctx.moveTo(x - width/2, y);
        
        // Complex S-curve using bezier curves
        // First curve section (bottom)
        ctx.bezierCurveTo(
          x - width/2 - 10 * scale, y - height * 0.3, // control point 1
          x, y - height * 0.3, // control point 2
          x, y - height * 0.4 // end point
        );
        
        // Middle curve section
        ctx.bezierCurveTo(
          x, y - height * 0.5, // control point 1
          x + width/2 + 10 * scale, y - height * 0.6, // control point 2
          x + width/3, y - height * 0.7 // end point
        );
        
        // Top curve section
        ctx.bezierCurveTo(
          x + width/5, y - height * 0.8, // control point 1
          x - width/3, y - height * 0.9, // control point 2
          x, y - height // end point
        );
        
        // Complete the shape
        ctx.lineTo(x - width/6, y - height);
        ctx.lineTo(x - width/4, y - height * 0.7);
        ctx.lineTo(x - width/3, y - height * 0.4);
        ctx.lineTo(x - width/2, y);
        
        // Gradient fill
        const gradient = ctx.createLinearGradient(x - width/2, y, x + width/2, y - height);
        gradient.addColorStop(0, 'rgba(0, 176, 80, 0.15)');
        gradient.addColorStop(0.5, 'rgba(0, 200, 100, 0.2)');
        gradient.addColorStop(1, 'rgba(0, 255, 150, 0.3)');
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Glass effects along the curve
        const steps = 20;
        for (let i = 0; i < steps; i++) {
          // Calculate t parameter along the Bezier curve
          const t = i / steps;
          
          // Simplified curve point calculation - just for demonstration
          // In a real Bezier calculation, we'd use the actual formula
          
          let pointX, pointY;
          if (t < 0.4) {
            // Bottom section of the S
            const localT = t / 0.4;
            pointX = x - width/2 + (width/2 + 10 * scale) * localT;
            pointY = y - height * 0.4 * localT;
          } else if (t < 0.7) {
            // Middle section
            const localT = (t - 0.4) / 0.3;
            pointX = x + (width/3 - x) * localT;
            pointY = y - height * 0.4 - height * 0.3 * localT;
          } else {
            // Top section
            const localT = (t - 0.7) / 0.3;
            pointX = x + width/3 - (width/3) * localT;
            pointY = y - height * 0.7 - height * 0.3 * localT;
          }
          
          // Draw window/glass elements
          ctx.beginPath();
          ctx.arc(pointX, pointY, 2 * scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, ${200 + Math.floor(Math.random() * 55)}, ${120 + Math.floor(Math.random() * 30)}, ${0.2 + Math.random() * 0.3})`;
          ctx.fill();
          
          // Some windows are rectangles
          if (i % 3 === 0) {
            ctx.fillRect(
              pointX - 3 * scale, 
              pointY - 1.5 * scale,
              6 * scale,
              3 * scale
            );
          }
        }
        
        // Decorative roof feature
        ctx.beginPath();
        ctx.arc(x, y - height, 5 * scale, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 220, 120, 0.5)';
        ctx.fill();
        
        // Decorative lights along the curve
        for (let i = 0; i < 10; i++) {
          const t = i / 10;
          let pointX, pointY;
          
          if (t < 0.4) {
            const localT = t / 0.4;
            pointX = x - width/2 + (width/2 + 10 * scale) * localT;
            pointY = y - height * 0.4 * localT;
          } else if (t < 0.7) {
            const localT = (t - 0.4) / 0.3;
            pointX = x + (width/3 - x) * localT;
            pointY = y - height * 0.4 - height * 0.3 * localT;
          } else {
            const localT = (t - 0.7) / 0.3;
            pointX = x + width/3 - (width/3) * localT;
            pointY = y - height * 0.7 - height * 0.3 * localT;
          }
          
          // Glow effect
          const lightGlow = ctx.createRadialGradient(pointX, pointY, 0, pointX, pointY, 5 * scale);
          lightGlow.addColorStop(0, 'rgba(0, 255, 150, 0.6)');
          lightGlow.addColorStop(1, 'rgba(0, 255, 150, 0)');
          
          ctx.beginPath();
          ctx.arc(pointX, pointY, 5 * scale, 0, Math.PI * 2);
          ctx.fillStyle = lightGlow;
          ctx.fill();
        }
      }
    ];
    
    // Create buildings with varied styles and positions
    for (let i = 0; i < buildingCount; i++) {
      const scale = 0.5 + Math.random() * 0.5;
      buildings.push({
        x: Math.random() * rect.width,
        y: rect.height + Math.random() * 10,
        scale: scale,
        styleIndex: Math.floor(Math.random() * buildingStyles.length),
        hoverEffect: 0,
        hoverDirection: 1,
        hoverSpeed: 0.003 + Math.random() * 0.005,
        pulseEffect: Math.random() * Math.PI * 2
      });
    }
    
    // Urban landscape elements
    const landscape = {
      groundLine: rect.height * 0.9,
      horizon: rect.height * 0.7,
      hillPoints: [] as {x: number, y: number}[]
    };
    
    // Generate city skyline horizon
    const horizonSegments = 50;
    for (let i = 0; i <= horizonSegments; i++) {
      const x = (rect.width / horizonSegments) * i;
      const heightVar = Math.random() * 10 - 5;
      landscape.hillPoints.push({
        x,
        y: landscape.horizon + heightVar
      });
    }
    
    // Floating data elements - metrics, measurements, property data
    const floatingElements = [];
    const elementCount = 30;
    
    for (let i = 0; i < elementCount; i++) {
      floatingElements.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height * 0.7,
        size: 1.5 + Math.random() * 2,
        opacity: 0.1 + Math.random() * 0.3,
        speed: 0.1 + Math.random() * 0.4,
        pulseSpeed: 0.01 + Math.random() * 0.03,
        pulseTime: Math.random() * Math.PI * 2
      });
    }
    
    // Connection lines between buildings
    const connections = [];
    for (let i = 0; i < buildings.length - 1; i++) {
      connections.push({
        start: i,
        end: i + 1,
        progress: 0,
        speed: 0.002 + Math.random() * 0.003,
        active: false,
        activationDelay: i * 150
      });
    }
    // Add some random connections for more interesting network
    for (let i = 0; i < 8; i++) {
      const start = Math.floor(Math.random() * buildings.length);
      let end = Math.floor(Math.random() * buildings.length);
      while (end === start) end = Math.floor(Math.random() * buildings.length);
      
      connections.push({
        start,
        end,
        progress: 0,
        speed: 0.002 + Math.random() * 0.003,
        active: false,
        activationDelay: (buildings.length + i) * 150
      });
    }
    
    // Background grid
    const grid = {
      size: 40,
      opacity: 0.03
    };
    
    // Animation
    let animationTime = 0;
    let lastTimestamp = 0;
    
    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      animationTime += deltaTime;
      
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      // Draw background with gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, rect.height);
      gradient.addColorStop(0, 'rgba(0, 8, 4, 1)');
      gradient.addColorStop(0.7, 'rgba(0, 25, 15, 1)');
      gradient.addColorStop(1, 'rgba(0, 40, 25, 1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, rect.width, rect.height);
      
      // Draw grid
      ctx.strokeStyle = `rgba(0, 176, 80, ${grid.opacity})`;
      ctx.lineWidth = 0.5;
      
      // Horizontal grid lines
      for (let y = 0; y < rect.height; y += grid.size) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(rect.width, y);
        ctx.stroke();
      }
      
      // Vertical grid lines
      for (let x = 0; x < rect.width; x += grid.size) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, rect.height);
        ctx.stroke();
      }
      
      // Draw city horizon
      ctx.beginPath();
      ctx.moveTo(landscape.hillPoints[0].x, landscape.hillPoints[0].y);
      
      for (let i = 1; i < landscape.hillPoints.length; i++) {
        const point = landscape.hillPoints[i];
        const prevPoint = landscape.hillPoints[i - 1];
        
        // Create smooth curve between points
        const xc = (prevPoint.x + point.x) / 2;
        const yc = (prevPoint.y + point.y) / 2;
        ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, xc, yc);
      }
      
      ctx.lineTo(rect.width, rect.height);
      ctx.lineTo(0, rect.height);
      ctx.closePath();
      
      const cityGlow = ctx.createLinearGradient(0, landscape.horizon, 0, rect.height);
      cityGlow.addColorStop(0, 'rgba(0, 176, 80, 0.05)');
      cityGlow.addColorStop(1, 'rgba(0, 25, 15, 0)');
      ctx.fillStyle = cityGlow;
      ctx.fill();
      
      // Draw ground
      const groundGradient = ctx.createLinearGradient(0, landscape.groundLine, 0, rect.height);
      groundGradient.addColorStop(0, 'rgba(0, 50, 30, 0.2)');
      groundGradient.addColorStop(1, 'rgba(0, 30, 20, 0.1)');
      ctx.fillStyle = groundGradient;
      ctx.fillRect(0, landscape.groundLine, rect.width, rect.height - landscape.groundLine);
      
      // Move buildings upward from below
      buildings.forEach(building => {
        // Make buildings rise from below to their final position
        if (building.y > landscape.groundLine - 10) {
          building.y -= 0.5; // Adjust speed as needed
        }
      });
      
      // Draw connection lines between buildings
      connections.forEach((connection, index) => {
        // Activate connections sequentially
        if (animationTime > connection.activationDelay) {
          connection.active = true;
        }
        
        if (connection.active) {
          const startBuilding = buildings[connection.start];
          const endBuilding = buildings[connection.end];
          
          // Update progress
          connection.progress += connection.speed;
          if (connection.progress > 1) connection.progress = 0;
          
          // Draw line - more sophisticated curved connections
          const startX = startBuilding.x;
          const startY = startBuilding.y - startBuilding.scale * 60; // Higher up the building
          const endX = endBuilding.x;
          const endY = endBuilding.y - endBuilding.scale * 60;
          
          // Create curved connection with control points
          const controlPointY = Math.min(startY, endY) - 30 - Math.random() * 40;
          const distance = Math.abs(startX - endX);
          const controlPointX1 = startX + (endX - startX) * 0.3;
          const controlPointX2 = startX + (endX - startX) * 0.7;
          
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.bezierCurveTo(
            controlPointX1, controlPointY, 
            controlPointX2, controlPointY, 
            endX, endY
          );
          
          // Line gradient
          const lineGradient = ctx.createLinearGradient(startX, startY, endX, endY);
          lineGradient.addColorStop(0, 'rgba(0, 176, 80, 0.1)');
          lineGradient.addColorStop(0.5, 'rgba(0, 176, 80, 0.2)');
          lineGradient.addColorStop(1, 'rgba(0, 176, 80, 0.1)');
          
          ctx.strokeStyle = lineGradient;
          ctx.lineWidth = 1;
          ctx.stroke();
          
          // Draw moving data packet with glow
          const t = connection.progress;
          // Bezier formula for position at t
          const mt = 1 - t;
          const packetX = mt*mt*mt*startX + 3*mt*mt*t*controlPointX1 + 3*mt*t*t*controlPointX2 + t*t*t*endX;
          const packetY = mt*mt*mt*startY + 3*mt*mt*t*controlPointY + 3*mt*t*t*controlPointY + t*t*t*endY;
          
          // Glow effect
          const glowRadius = 6;
          const glowGradient = ctx.createRadialGradient(packetX, packetY, 0, packetX, packetY, glowRadius);
          glowGradient.addColorStop(0, 'rgba(0, 176, 80, 0.8)');
          glowGradient.addColorStop(1, 'rgba(0, 176, 80, 0)');
          
          ctx.fillStyle = glowGradient;
          ctx.beginPath();
          ctx.arc(packetX, packetY, glowRadius, 0, Math.PI * 2);
          ctx.fill();
          
          // Actual data packet
          ctx.beginPath();
          ctx.arc(packetX, packetY, 2, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 250, 120, 0.9)';
          ctx.fill();
        }
      });
      
      // Draw buildings
      buildings.forEach((building, index) => {
        // Update hover effect
        building.hoverEffect += building.hoverDirection * building.hoverSpeed;
        if (building.hoverEffect > 0.5 || building.hoverEffect < 0) {
          building.hoverDirection *= -1;
        }
        
        // Update pulse effect
        building.pulseEffect += 0.02;
        const pulse = Math.sin(building.pulseEffect) * 0.5 + 0.5;
        
        ctx.save();
        // Apply slight floating effect
        ctx.translate(building.x, building.y - building.hoverEffect * 3);
        
        // Draw building shadow
        ctx.beginPath();
        ctx.ellipse(0, 5, 20 * building.scale, 5 * building.scale, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
        ctx.fill();
        
        // Draw the building using the style function
        buildingStyles[building.styleIndex](0, 0, building.scale, ctx);
        
        // Draw glow effect
        const glowRadius = 60 * building.scale;
        const glowGradient = ctx.createRadialGradient(0, -40 * building.scale, 0, 0, -40 * building.scale, glowRadius);
        glowGradient.addColorStop(0, `rgba(0, 200, 100, ${0.1 * pulse})`);
        glowGradient.addColorStop(1, 'rgba(0, 176, 80, 0)');
        
        ctx.beginPath();
        ctx.arc(0, -40 * building.scale, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();
        
        ctx.restore();
      });
      
      // Draw floating elements
      floatingElements.forEach(element => {
        // Update position
        element.y -= element.speed;
        if (element.y < 0) {
          element.y = rect.height;
          element.x = Math.random() * rect.width;
        }
        
        // Update pulse
        element.pulseTime += element.pulseSpeed;
        const pulse = Math.sin(element.pulseTime) * 0.5 + 0.5;
        
        // Draw element
        ctx.beginPath();
        ctx.arc(element.x, element.y, element.size * (0.7 + pulse * 0.3), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 200, 100, ${element.opacity * pulse})`;
        ctx.fill();
        
        // Draw connecting lines to nearby elements
        floatingElements.forEach(otherElement => {
          const dx = element.x - otherElement.x;
          const dy = element.y - otherElement.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100 && distance > 0) {
            ctx.beginPath();
            ctx.moveTo(element.x, element.y);
            ctx.lineTo(otherElement.x, otherElement.y);
            ctx.strokeStyle = `rgba(0, 200, 100, ${0.05 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      
      // Occasional floating real estate data elements
      if (Math.random() > 0.98) {
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height * 0.6;
        
        ctx.font = '10px monospace';
        ctx.fillStyle = 'rgba(0, 200, 100, 0.3)';
        
        // Random real estate metrics
        const metrics = ["AREA: 120m²", "VALOR: R$850K", "APTOS: 24", "ROI: 12%", "VGV: R$12M", "TIPO: COMERCIAL", "ESCRITURAS: 15"];
        ctx.fillText(metrics[Math.floor(Math.random() * metrics.length)], x, y);
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
