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
      ctx.fillStyle =  invaderColor;
      ctx.fillRect(invaderSize * 1, invaderSize * 1, invaderSize, invaderSize);
      ctx.fillStyle =  'red';
      ctx.fillRect(invaderSize * 2, invaderSize * 1, invaderSize, invaderSize);
      // for(let i = 0; i < 6; i++) {
      //   console.log(ctx.fillStyle)
      //   for (let j = 0; j < 8; j++) {
      //     ctx.fillStyle =  Math.random() < 0.5 ? invaderColor : '#ffffff';
      //     ctx.fillRect(invaderSize * j, invaderSize * i, invaderSize, invaderSize);
      //   }
      // }
    };

    drawInvader();
  }, [canvasRef, invaderColor, invaderSize]);

  return <canvas ref={canvasRef} width={11 * invaderSize} height={8 * invaderSize} />;
};

export default SpaceInvader;
