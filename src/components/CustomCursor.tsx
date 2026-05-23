import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [gameMode, setGameMode] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const pos = { x: 0, y: 0 };
    const ring = { x: 0, y: 0 };
    let raf = 0;

    const move = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }
      setHidden(false);

      const target = e.target as HTMLElement;
      const isInteractive = !!target.closest(
        'a, button, [role="button"], input, textarea, select, label, [data-cursor="hover"]'
      );
      setHovering(isInteractive);

      const isGame = !!target.closest('[data-cursor="game"]');
      setGameMode(isGame);
    };

    const animate = () => {
      ring.x += (pos.x - ring.x) * 0.1;
      ring.y += (pos.y - ring.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const leave = () => setHidden(true);
    const enter = () => setHidden(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    document.body.classList.add("custom-cursor-active");

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className={`cursor-dot ${hidden ? "opacity-0" : "opacity-100"} ${
          clicking ? "scale-75" : "scale-100"
        } ${gameMode ? "is-game" : ""}`}
      />
      <div
        ref={ringRef}
        aria-hidden
        className={`cursor-ring ${hidden ? "opacity-0" : "opacity-100"} ${
          hovering ? "is-hover" : ""
        } ${clicking ? "is-click" : ""} ${gameMode ? "is-game" : ""}`}
      />
    </>
  );
};

export default CustomCursor;