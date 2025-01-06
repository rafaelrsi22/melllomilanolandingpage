import { useEffect, useRef } from "react";

interface StarsProps {
  numberOfStars: number;
}

export default function Stars({ numberOfStars }: StarsProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const starX = new Float32Array(numberOfStars);
    const starY = new Float32Array(numberOfStars);
    const starSize = new Float32Array(numberOfStars);
    const starSpeed = new Float32Array(numberOfStars);
    const starSides = new Int8Array(numberOfStars);
    const starColor: string[] = new Array(numberOfStars);

    const starVX = new Float32Array(numberOfStars); 
    const starVY = new Float32Array(numberOfStars);

    function generateColor() {
      const base = 30 + Math.floor(Math.random() * 75);
      const alpha = 0.2 + Math.random() * 0.5;
      return `rgba(${base},${base},${base},${alpha})`;
    }

    for (let i = 0; i < numberOfStars; i++) {
      starX[i] = Math.random() * canvas.width;
      starY[i] = Math.random() * canvas.height;
      starSize[i] = Math.random() * 2 + 1;
      starSpeed[i] = Math.random() * 0.5 + 0.1;
      starSides[i] = Math.floor(Math.random() * 4) + 3;
      starColor[i] = generateColor();

      starVX[i] = 0;
      starVY[i] = 0;
    }

    const mouse = { x: 0, y: 0 };
    let mouseActive = false;

    function handleMouseMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouseActive = true;
    }
    function handleMouseLeave() {
      mouseActive = false;
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    function drawDustyShape(
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      baseRadius: number,
      sides: number
    ) {
      const angleStep = (2 * Math.PI) / sides;
      ctx.beginPath();
      for (let i = 0; i < sides; i++) {
        const angle = angleStep * i;
        const radiusFactor = 0.5 + Math.random() * 0.4;
        const rx = x + baseRadius * radiusFactor * Math.cos(angle);
        const ry = y + baseRadius * radiusFactor * Math.sin(angle);

        if (i === 0) ctx.moveTo(rx, ry);
        else ctx.lineTo(rx, ry);
      }
      ctx.closePath();
      ctx.fill();
    }

    let animationId = 0;
    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const forceRadius = 100;
      const forceStrength = 0.5;

      for (let i = 0; i < numberOfStars; i++) {
        if (mouseActive) {
          const dx = starX[i] - mouse.x;
          const dy = starY[i] - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < forceRadius) {
            const force = (forceStrength * (forceRadius - dist)) / forceRadius;
            const nx = dx / dist;
            const ny = dy / dist;

            starVX[i] += nx * force;
            starVY[i] += ny * force;
          }
        }

        const baseScroll = starSpeed[i];

        starX[i] -= baseScroll;
        starX[i] += starVX[i];
        starY[i] += starVY[i];

        starVX[i] *= 0.9;
        starVY[i] *= 0.9;

        if (starX[i] < -starSize[i] * 2) {
          starX[i] = canvas.width + starSize[i] * 2;
          starY[i] = Math.random() * canvas.height;
          starVX[i] = 0;
          starVY[i] = 0;
        }

        ctx.fillStyle = starColor[i];
        drawDustyShape(ctx, starX[i], starY[i], starSize[i], starSides[i]);
      }

      animationId = requestAnimationFrame(animate);
    }

    function handleResize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", handleResize);

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [numberOfStars]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", top: 0, left: 0 }}
    />
  );
}
