"use client"; // Indique que c'est un composant client

import { useEffect, useRef, useState } from "react";
import styles from "./CursorFollower.module.css"; // Assurez-vous d'avoir ce fichier CSS

export default function CursorFollower() {
  const [positions, setPositions] = useState(
    Array(7).fill({ x: 0, y: 0 }) // 7 cercles
  );
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const updatePositions = () => {
      setPositions((prevPositions) =>
        prevPositions.map((pos, index) => {
          const targetX = index === 0 ? mousePos.current.x : prevPositions[index - 1].x;
          const targetY = index === 0 ? mousePos.current.y : prevPositions[index - 1].y;
          return {
            x: pos.x + (targetX - pos.x) * 0.2, // Ajuste la traînée avec ce facteur
            y: pos.y + (targetY - pos.y) * 0.2,
          };
        })
      );
      requestAnimationFrame(updatePositions);
    };

    window.addEventListener("mousemove", handleMouseMove);
    updatePositions(); // Démarre l'animation

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={styles.cursorWrapper}>
      {positions.map((pos, index) => (
        <div
          key={index}
          className={styles.circle}
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            transform: `translate(-50%, -50%) scale(${1 - index * 0.15})`,
          }}
        />
      ))}
    </div>
  );
}
