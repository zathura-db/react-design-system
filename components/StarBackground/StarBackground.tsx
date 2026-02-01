// @ts-ignore
import "./StarBackground.css";
import { useMemo, useRef, useLayoutEffect, useState } from "react";

/**
 * Generates a random RGB color between two hex colors.
 */
function randomColorInRange(colorStart: string, colorEnd: string) {
  const start = parseInt(colorStart.replace("#", ""), 16);
  const end = parseInt(colorEnd.replace("#", ""), 16);

  const r =
    ((start >> 16) & 0xff) +
    Math.random() * (((end >> 16) & 0xff) - ((start >> 16) & 0xff));
  const g =
    ((start >> 8) & 0xff) +
    Math.random() * (((end >> 8) & 0xff) - ((start >> 8) & 0xff));
  const b = (start & 0xff) + Math.random() * ((end & 0xff) - (start & 0xff));

  return `rgb(${r | 0}, ${g | 0}, ${b | 0})`;
}

type LayerConfig = {
  count: number;
  size: number;
  duration: number;
  colorRange: [string, string];
};

type Props = {
  children?: React.ReactNode;
  layerConfigs?: LayerConfig[];
};
/**
 * StarBackground component to display a starfield background with three layers of random stars.
 * Each layer has configurable number of stars, size, animation duration, and color range.
 * This component is based on https://codepen.io/sarazond/pen/LYGbwj
 */
export default function StarBackground({
  children,
  layerConfigs = [
    { count: 500, size: 1, duration: 50, colorRange: ["#ffffff", "#ffcccc"] },
    { count: 250, size: 2, duration: 100, colorRange: ["#ffffff", "#99ccff"] },
    { count: 120, size: 3, duration: 200, colorRange: ["#ffffff", "#ff99ff"] },
  ],
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const resize = () => {
      const rect = containerRef.current!.getBoundingClientRect();
      setSize({ width: rect.width, height: rect.height });
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const layers = useMemo(() => {
    if (!size.width || !size.height) return [];

    return layerConfigs.map(({ count, colorRange }) => {
      const shadows = [];
      for (let i = 0; i < count; i++) {
        const x = Math.random() * size.width;
        const y = Math.random() * size.height * 3;
        const color = randomColorInRange(colorRange[0], colorRange[1]);
        shadows.push(`${x}px ${y}px ${color}`);
      }
      return shadows.join(", ");
    });
  }, [layerConfigs, size]);

  const starStyles = (i: number): React.CSSProperties => {
    const layer = layerConfigs[i];
    return {
      width: layer.size,
      height: layer.size,
      boxShadow: layers[i],
      animationDuration: `${layer.duration}s`,
    };
  };

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[radial-gradient(ellipse_at_bottom,#1b2735_0%,#090a0f_100%)]"
    >
      {/* Star layers */}
      <div
        className="absolute inset-0 pointer-events-none will-change-transform animate-[animStar_linear_infinite]"
        style={starStyles(0)}
      />
      <div
        className="absolute inset-0 pointer-events-none will-change-transform animate-[animStar_linear_infinite]"
        style={starStyles(1)}
      />
      <div
        className="absolute inset-0 pointer-events-none will-change-transform animate-[animStar_linear_infinite]"
        style={starStyles(2)}
      />

      {/* Children container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white gap-6 h-full px-4">
        {children}
      </div>
    </div>
  );
}
