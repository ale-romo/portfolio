import { useEffect, useRef } from 'react';

const FractalCanopy: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = canvas.offsetHeight;

    const colors = ['#663300', '#996633', '#cc9933', '#ffcc66', '#009933', '#00cc66'];

    function drawLine(x1: number, y1: number, x2: number, y2: number, color: string) {
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = color;
      ctx.stroke();
    }

    function drawFractal(x1: number, y1: number, angle: number, depth: number) {
      if (depth === 0) return;

      const x2 = x1 + Math.cos(angle) * depth * 10;
      const y2 = y1 + Math.sin(angle) * depth * 10;

      const colorIndex = colors.length - depth;
      const color = colors[colorIndex] || colors[colors.length - 1];

      drawLine(x1, y1, x2, y2, color);

      drawFractal(x2, y2, angle - Math.PI / 3, depth - 1);
      drawFractal(x2, y2, angle + Math.PI / 3, depth - 1);
    }

    drawFractal(width / 2, height, -Math.PI / 2, 8);

    // Cleanup function
    return () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
    };
  }, []);

  return (
    <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
  );
};

export default FractalCanopy;
