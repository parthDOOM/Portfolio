import React, { useEffect, useRef } from 'react';
import './AnimatedBackground.css';

interface AnimatedBackgroundProps {
  className?: string;
  particleCount?: number;
  particleColor?: string;
  connectionColor?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  className = '',
  particleCount = 25,
  particleColor = '#f97316',
  connectionColor = '#6366f1'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let burstParticles: BurstParticle[] = [];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2.5 + 1; // Reduced size for better performance
        this.speedX = (Math.random() - 0.5) * 0.2; // Slower for smoother animation
        this.speedY = (Math.random() - 0.5) * 0.2;
        this.opacity = Math.random() * 0.5 + 0.4; // Reduced opacity calculation
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas!.width) this.x = 0;
        if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        if (this.y < 0) this.y = canvas!.height;
      }

      draw() {
        ctx!.save();
        ctx!.globalAlpha = this.opacity;
        
        // Add subtle glow effect (reduced for performance)
        ctx!.shadowColor = particleColor;
        ctx!.shadowBlur = 2; // Further reduced for performance
        ctx!.shadowOffsetX = 0;
        ctx!.shadowOffsetY = 0;
        
        ctx!.fillStyle = particleColor;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
        
        // Draw a brighter inner circle for more visibility
        ctx!.shadowBlur = 0;
        ctx!.globalAlpha = this.opacity * 1.3; // Reduced from 1.5 to 1.3
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size * 0.6, 0, Math.PI * 2);
        ctx!.fill();
        
        ctx!.restore();
      }
    }

    class BurstParticle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      life: number;
      maxLife: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 4 + 2;
        this.speedX = (Math.random() - 0.5) * 8;
        this.speedY = (Math.random() - 0.5) * 8;
        this.opacity = 1;
        this.life = 60;
        this.maxLife = 60;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedX *= 0.98; // Slow down over time
        this.speedY *= 0.98;
        this.life--;
        this.opacity = this.life / this.maxLife;
        this.size *= 0.99; // Shrink over time
      }

      draw() {
        ctx!.save();
        ctx!.globalAlpha = this.opacity * 0.8;
        
        // Add glow effect for burst particles
        ctx!.shadowColor = particleColor;
        ctx!.shadowBlur = 10;
        ctx!.shadowOffsetX = 0;
        ctx!.shadowOffsetY = 0;
        
        ctx!.fillStyle = particleColor;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
        
        ctx!.restore();
      }

      isDead() {
        return this.life <= 0;
      }
    }

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      
      // Recreate particles for new canvas size
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) { // Reduced for better performance
            ctx.save();
            ctx.globalAlpha = (100 - distance) / 100 * 0.2; // Reduced for performance
            ctx.strokeStyle = connectionColor;
            ctx.lineWidth = 0.8; // Reduced for performance
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Update and draw burst particles
      burstParticles = burstParticles.filter(burstParticle => {
        burstParticle.update();
        burstParticle.draw();
        return !burstParticle.isDead();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleClick = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      // Create 8 burst particles at click location
      for (let i = 0; i < 8; i++) {
        burstParticles.push(new BurstParticle(x, y));
      }
    };

    // Initial setup
    resizeCanvas();
    animate();

    // Handle resize with throttling for better performance
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 150);
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('click', handleClick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('click', handleClick);
      clearTimeout(resizeTimeout);
    };
  }, [particleCount, particleColor, connectionColor]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`animated-background ${className}`}
    />
  );
};

export default AnimatedBackground;