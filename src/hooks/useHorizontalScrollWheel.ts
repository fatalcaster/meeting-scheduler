"use client";

import { useEffect, useRef } from "react";

export function useHorizontalScrollWheel<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const scrollValue = useRef(0);
  const handleScroll = (e: WheelEvent) => {
    if (!ref.current) return;

    
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    scrollValue.current = Math.max(
      Math.min(
        scrollValue.current + delta,
        ref.current.scrollWidth - ref.current.clientWidth
      ),
      0
    );
    console.log(
      ref.current.scrollWidth,
      scrollValue.current,
      ref.current.clientWidth
    );
    ref.current.scrollTo({ left: scrollValue.current });
  };

  useEffect(() => {
    if (!ref.current) return;

    ref.current.addEventListener("wheel", handleScroll);
  }, [ref.current]);

  return { ref };
}
