"use client";

import { useEffect, useState } from "react";
import { ELEMENT_NAMES, ELEMENTS } from "@/data/five-elements";

interface RadarChartProps {
  scores: Record<string, number>;
  size?: number;
}

export default function RadarChart({ scores, size = 300 }: RadarChartProps) {
  const [animated, setAnimated] = useState(false);
  const center = size / 2;
  const maxRadius = size * 0.35;
  const levels = 3;

  const angleFor = (i: number) => (Math.PI * 2 * i) / 5 - Math.PI / 2;

  const pointOnAxis = (i: number, r: number) => ({
    x: center + r * Math.cos(angleFor(i)),
    y: center + r * Math.sin(angleFor(i)),
  });

  const polygonPoints = (r: number) =>
    Array.from({ length: 5 }, (_, i) => pointOnAxis(i, r))
      .map((p) => `${p.x},${p.y}`)
      .join(" ");

  const maxScore = Math.max(...Object.values(scores), 1);

  const dataPoints = ELEMENT_NAMES.map((name, i) => {
    const ratio = maxScore > 0 ? scores[name] / maxScore : 0;
    const r = animated ? ratio * maxRadius : 0;
    return pointOnAxis(i, r);
  });

  const dataPolygon = dataPoints.map((p) => `${p.x},${p.y}`).join(" ");

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="drop-shadow-lg"
      >
        {/* Background grid levels */}
        {Array.from({ length: levels }, (_, level) => (
          <polygon
            key={level}
            points={polygonPoints((maxRadius * (level + 1)) / levels)}
            fill="none"
            stroke="rgba(148,163,184,0.25)"
            strokeWidth="1"
          />
        ))}

        {/* Axis lines */}
        {Array.from({ length: 5 }, (_, i) => {
          const end = pointOnAxis(i, maxRadius);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={end.x}
              y2={end.y}
              stroke="rgba(148,163,184,0.25)"
              strokeWidth="1"
            />
          );
        })}

        {/* Data fill area */}
        <polygon
          points={dataPolygon}
          fill="rgba(16,185,129,0.2)"
          stroke="#10B981"
          strokeWidth="2"
          style={{
            transition: "all 0.8s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        />

        {/* Data points */}
        {dataPoints.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="4"
            fill={ELEMENTS[ELEMENT_NAMES[i]].color}
            style={{ transition: "all 0.8s cubic-bezier(0.34,1.56,0.64,1)" }}
          />
        ))}

        {/* Element labels */}
        {ELEMENT_NAMES.map((name, i) => {
          const labelR = maxRadius + 28;
          const p = pointOnAxis(i, labelR);
          const element = ELEMENTS[name];
          return (
            <text
              key={i}
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-xs font-semibold"
              fill="currentColor"
            >
              {element.emoji} {name}
            </text>
          );
        })}

        {/* Score numbers */}
        {ELEMENT_NAMES.map((name, i) => {
          const labelR = maxRadius + 44;
          const p = pointOnAxis(i, labelR);
          return (
            <text
              key={`score-${i}`}
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-xs"
              fill="rgba(148,163,184,0.8)"
            >
              {scores[name]}/{15}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
