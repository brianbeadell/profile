import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: undefined, y: undefined, radius: 100 });
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    // Create particles
    const initParticles = () => {
      particlesRef.current = [];
      const numberOfParticles = Math.min(Math.floor(canvas.width * canvas.height / 9000), 150);
      
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 3 + 1;
        const x = Math.random() * (canvas.width - size * 2);
        const y = Math.random() * (canvas.height - size * 2);
        const directionX = Math.random() * 0.5 - 0.25;
        const directionY = Math.random() * 0.5 - 0.25;
        const color = `rgba(${Math.floor(Math.random() * 100 + 150)}, ${Math.floor(Math.random() * 100 + 150)}, ${Math.floor(Math.random() * 100 + 150)}, ${Math.random() * 0.3 + 0.2})`;
        
        particlesRef.current.push({
          x,
          y,
          size,
          color,
          directionX,
          directionY,
          originalSize: size
        });
      }
    };
    
    // Draw particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i];
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        // Update position
        p.x += p.directionX;
        p.y += p.directionY;
        
        // Bounce off edges
        if (p.x + p.size > canvas.width || p.x - p.size < 0) {
          p.directionX = -p.directionX;
        }
        if (p.y + p.size > canvas.height || p.y - p.size < 0) {
          p.directionY = -p.directionY;
        }
        
        // Mouse interaction
        if (mouseRef.current.x !== undefined && mouseRef.current.y !== undefined) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouseRef.current.radius + p.size) {
            if (mouseRef.current.x < p.x && p.x + p.size < canvas.width) {
              p.x += 1;
            }
            if (mouseRef.current.x > p.x && p.x - p.size > 0) {
              p.x -= 1;
            }
            if (mouseRef.current.y < p.y && p.y + p.size < canvas.height) {
              p.y += 1;
            }
            if (mouseRef.current.y > p.y && p.y - p.size > 0) {
              p.y -= 1;
            }
            
            // Scale up the particle slightly
            p.size = Math.min(p.size * 1.02, p.originalSize * 1.5);
          } else {
            // Return to original size
            p.size = Math.max(p.size * 0.98, p.originalSize);
          }
        }
        
        // Draw connections between particles that are close to each other
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p2 = particlesRef.current[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(150, 150, 255, ${0.2 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    };
    
    const animate = () => {
      requestAnimationFrame(animate);
      drawParticles();
    };
    
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    
    const handleMouseLeave = () => {
      mouseRef.current.x = undefined;
      mouseRef.current.y = undefined;
    };
    
    // Initialize
    resizeCanvas();
    animate();
    
    // Event listeners
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 -z-10 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

export default ParticleBackground; 