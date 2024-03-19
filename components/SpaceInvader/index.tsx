import React, { useRef, useEffect } from 'react';

interface Props {
  size?: number;
  color?: string;
  slug: string;
}

const pseudoRandom = (slug: string, index: number) => {
  const charCode1 = slug.charCodeAt(index % slug.length);
  const charCode2 = slug.charCodeAt((index + 1) % slug.length);
  return charCode1 >= charCode2;
};

const SpaceInvader = ({ size, color, slug }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const invaderSize = size || 20;
  const invaderColor = color || '#000000';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawInvader = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = invaderColor;
      for(let i = 0; i < 6; i++) {
        for (let j = 0; j < 8; j++) {
          const shouldFill = pseudoRandom(slug, i * (10) + j)
          if (!(i === 3 && j === 3 || i === 7 && j == 3)) {
            if (i >= 2 && i <= 8 && j >= 2 && j <= 5) {
              ctx.fillRect(invaderSize * i, invaderSize * j, invaderSize, invaderSize);
              if (i !== 5) {
                ctx.fillRect(invaderSize * (10 - i), invaderSize * j, invaderSize, invaderSize);
              }
            } else if (shouldFill) {
              ctx.fillRect(invaderSize * i, invaderSize * j, invaderSize, invaderSize);
              if (i !== 5) {
                ctx.fillRect(invaderSize * (10 - i), invaderSize * j, invaderSize, invaderSize);
              }
            }
          }
        }
      }
    };

    drawInvader();
  }, []);

  return <canvas ref={canvasRef} width={11 * invaderSize} height={8 * invaderSize} />;
};

export default SpaceInvader;
