import React, { useRef, useEffect } from "react";

interface Wave {
  amplitude: number;
  frequency: number;
  speed: number;
  offset: number;
  color: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

const HeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();
  const timeRef = useRef(0);
  const wavesRef = useRef<Wave[]>([]);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize waves with different speeds and amplitudes (only once)
    if (wavesRef.current.length === 0) {
      wavesRef.current = [
        {
          amplitude: 50,
          frequency: 0.015,
          speed: 0.002,
          offset: 0,
          color: "#00F0FF", // Neon Cyan
        },
        {
          amplitude: 35,
          frequency: 0.02,
          speed: 0.0015,
          offset: Math.PI / 2,
          color: "#00D0FF", // Lighter Cyan
        },
        {
          amplitude: 40,
          frequency: 0.012,
          speed: 0.0025,
          offset: Math.PI,
          color: "#8844FF", // Mid Purple-Cyan
        },
        {
          amplitude: 30,
          frequency: 0.018,
          speed: 0.0018,
          offset: (3 * Math.PI) / 2,
          color: "#BC13FE", // Neon Purple
        },
      ];

      // Initialize particles (only once)
      const particleCount = 50;
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    }

    const animate = () => {
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#050511"); // Deep Navy
      gradient.addColorStop(1, "#0A0A1B"); // Slightly lighter Navy
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particlesRef.current.forEach((particle) => {
        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with glow
        ctx.save();
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#00F0FF";
        ctx.fillStyle = `rgba(0, 240, 255, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw waves
      wavesRef.current.forEach((wave, index) => {
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 2;

        // Create gradient for wave stroke
        const waveGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        const opacity = 0.3 - index * 0.05;
        
        // Gradient from Cyan to Purple
        if (index < 2) {
          waveGradient.addColorStop(0, `rgba(0, 240, 255, ${opacity})`); // Cyan
          waveGradient.addColorStop(0.5, `rgba(136, 68, 255, ${opacity})`); // Mid
          waveGradient.addColorStop(1, `rgba(188, 19, 254, ${opacity})`); // Purple
        } else {
          waveGradient.addColorStop(0, `rgba(188, 19, 254, ${opacity})`); // Purple
          waveGradient.addColorStop(0.5, `rgba(136, 68, 255, ${opacity})`); // Mid
          waveGradient.addColorStop(1, `rgba(0, 240, 255, ${opacity})`); // Cyan
        }

        ctx.strokeStyle = waveGradient;

        // Add glow effect
        ctx.shadowBlur = 15 + index * 5;
        ctx.shadowColor = wave.color;

        // Draw the sine wave (optimized with step size)
        const centerY = canvas.height / 2 + (index - 1.5) * 80;
        const step = 3; // Step size for performance optimization

        for (let x = 0; x < canvas.width; x += step) {
          const y =
            centerY +
            Math.sin(x * wave.frequency + timeRef.current * wave.speed + wave.offset) *
              wave.amplitude;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        // Connect to the end of canvas for smooth edge
        const finalY = 
          centerY +
          Math.sin(canvas.width * wave.frequency + timeRef.current * wave.speed + wave.offset) *
            wave.amplitude;
        ctx.lineTo(canvas.width, finalY);

        ctx.stroke();
        ctx.restore();
      });

      timeRef.current++;
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default HeroBackground;
