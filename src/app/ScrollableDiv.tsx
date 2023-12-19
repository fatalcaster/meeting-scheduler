"use client";

import { useHorizontalScrollWheel } from "@/hooks/useHorizontalScrollWheel";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export function ScrollableDiv({
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  const { ref } = useHorizontalScrollWheel<HTMLDivElement>();
  return (
    <div {...props} ref={ref}>
      {children}
    </div>
  );
}
