import { useEffect, useMemo, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import './DataGrid.css';

// Animated "data grid" background — a field of small rounded cells that pulse
// their opacity at random, masked with a radial gradient. Tuned to brand
// white + orange. Inspired by the 21st.dev data-grid-hero pattern.

const BASE_CELL = 34; // target px per cell (incl. gap)
const MAX_CELLS = 1100; // cap DOM nodes / active animations
const COLORS = ['#F47920', '#FF9A3C', '#F8A055'];

const rand = (min, max) => Math.random() * (max - min) + min;

export default function DataGrid({ className = '' }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const [grid, setGrid] = useState({ cols: 0, rows: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const compute = () => {
      const { width, height } = el.getBoundingClientRect();
      if (!width || !height) return;
      let cell = BASE_CELL;
      let cols = Math.floor(width / cell);
      let rows = Math.floor(height / cell);
      // Grow the cell size until we're under the node budget.
      while (cols * rows > MAX_CELLS) {
        cell += 6;
        cols = Math.floor(width / cell);
        rows = Math.floor(height / cell);
      }
      cols = Math.max(6, cols);
      rows = Math.max(4, rows);
      setGrid((g) => (g.cols === cols && g.rows === rows ? g : { cols, rows }));
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const cells = useMemo(() => {
    const count = grid.cols * grid.rows;
    return Array.from({ length: count }, () => ({
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      opacityMin: rand(0.04, 0.12),
      opacityMax: rand(0.35, 0.85),
      duration: rand(1.6, 4.2),
      delay: rand(0, 3.5),
      animated: Math.random() > 0.2,
    }));
  }, [grid.cols, grid.rows]);

  return (
    <div
      ref={ref}
      className={`data-grid ${className}`.trim()}
      style={{
        gridTemplateColumns: `repeat(${grid.cols}, 1fr)`,
        gridTemplateRows: `repeat(${grid.rows}, 1fr)`,
      }}
      aria-hidden="true"
    >
      {cells.map((c, i) => (
        <span
          key={i}
          className="data-grid-cell"
          style={{
            backgroundColor: c.color,
            opacity: c.opacityMin,
            '--cell-min': c.opacityMin,
            '--cell-max': c.opacityMax,
            animation:
              c.animated && !reduce
                ? `cell-pulse ${c.duration}s ease-in-out ${c.delay}s infinite alternate both`
                : 'none',
          }}
        />
      ))}
    </div>
  );
}
