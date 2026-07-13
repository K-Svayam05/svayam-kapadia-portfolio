import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable custom cursor on touch/coarse-pointer devices for perf.
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let x = 0, y = 0, ox = 0, oy = 0;
    let raf = 0;

    const loop = () => {
      // Ease outline toward pointer for trailing effect without setTimeout.
      ox += (x - ox) * 0.18;
      oy += (y - oy) * 0.18;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      if (outlineRef.current) outlineRef.current.style.transform = `translate3d(${ox}px, ${oy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };

    // Event delegation instead of per-element listeners + MutationObserver.
    const isInteractive = (el: EventTarget | null) => {
      if (!(el instanceof Element)) return false;
      return !!el.closest('a, button, .interactive-element, input, textarea, [role="button"]');
    };
    const onOver = (e: MouseEvent) => {
      if (isInteractive(e.target)) outlineRef.current?.classList.add('link-hover');
    };
    const onOut = (e: MouseEvent) => {
      if (isInteractive(e.target)) outlineRef.current?.classList.remove('link-hover');
    };
    const onDown = () => outlineRef.current?.classList.add('cursor-active');
    const onUp = () => outlineRef.current?.classList.remove('cursor-active');

    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseout', onOut, { passive: true });
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true"></div>
      <div ref={outlineRef} className="cursor-outline" aria-hidden="true"></div>
    </>
  );
};

export default CustomCursor;
