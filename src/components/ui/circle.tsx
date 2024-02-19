import { CircleDot } from 'lucide-react';
import * as React from 'react';

export interface CircleProps {
  x: number;
  y: number;
  id: number;
}

const Circle = React.forwardRef<HTMLDivElement, CircleProps>(({ y, x }, ref) => (
  <div ref={ref}>
    <CircleDot
      size="20"
      className="absolute h-[30px] w-[30px] animate-pulse cursor-pointer rounded-full bg-pink-600 p-2 text-white transition-all duration-1000"
      style={{ top: y - 15, left: x - 15 }}
    />
  </div>
));

Circle.displayName = 'Circle';

export { Circle };
