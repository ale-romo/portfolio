import { useEffect, useRef } from 'react';

interface Props {
  size: number;
}

const FractalCanopy = ({ size }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = canvas.offsetHeight;

    const colors =['#b5179e', '#7209b7', '#560bad', '#480ca8', '#3f37c9', '#4361ee', '#4cc9f0'];

    function drawLine(x1: number, y1: number, x2: number, y2: number, color: string, width: number) {
      ctx.lineWidth = width;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = color;
      ctx.stroke();
    }

    function drawFractal(x1: number, y1: number, angle: number, length: number, depth: number) {
      if (depth === 0) return;

      const x2 = x1 + Math.cos(angle) * length;
      const y2 = y1 + Math.sin(angle) * length;

      const colorIndex = colors.length - depth;
      const color = colors[colorIndex] || colors[colors.length - 1];

      drawLine(x1, y1, x2, y2, color, 2 * Math.sqrt(depth));

      drawFractal(x2, y2, angle - Math.PI / 6, length * .8, depth - 1);
      drawFractal(x2, y2, angle + Math.PI / 6, length * .8, depth - 1);
    }

    drawFractal(width / 2, height, -Math.PI / 2, height / 4, 7);

    // Cleanup function
    return () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
    };
  }, []);

  return (
    <canvas ref={canvasRef} width={12 * size} height={10 * size} />
  );
};

export default FractalCanopy;
