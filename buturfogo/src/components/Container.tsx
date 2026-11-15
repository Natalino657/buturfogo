import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/** The page's content column: max width and side padding shared by every section. */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto max-w-7xl px-5 sm:px-6 lg:px-10", className)}>
      {children}
    </div>
  );
}
