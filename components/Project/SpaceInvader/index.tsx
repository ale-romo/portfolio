import React, { useRef, useEffect } from 'react';

interface SpaceInvaderProps {
  size?: number;
  color?: string;
}

const SpaceInvader: React.FC<SpaceInvaderProps> = ({ size, color }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const invaderSize = size || 20;
  const invaderColor = color || '#000000';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawInvader = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw invader body
      ctx.fillStyle = invaderColor;
      ctx.fillRect(0, 0, invaderSize, invaderSize);
      ctx.fillRect(3 * invaderSize, 0, invaderSize, invaderSize);
      ctx.fillRect(invaderSize, invaderSize, invaderSize, invaderSize);
      ctx.fillRect(2 * invaderSize, invaderSize, invaderSize, invaderSize);

      // Draw eyes
      ctx.clearRect(2 * invaderSize, 2 * invaderSize, invaderSize, invaderSize);
      ctx.clearRect(invaderSize, 2 * invaderSize, invaderSize, invaderSize);
    };

    drawInvader();
  }, [canvasRef, invaderColor, invaderSize]);

  return <canvas ref={canvasRef} width={4 * invaderSize} height={3 * invaderSize} />;
};

export default SpaceInvader;
