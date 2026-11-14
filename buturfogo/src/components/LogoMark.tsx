import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 18 160 104"
      aria-hidden="true"
      focusable="false"
      className={cn("h-10 w-auto text-cream", className)}
    >
      <path
        className="fill-lava"
        d="M24 89 A54.04 54.04 0 0 1 129 66 A55.1 55.1 0 0 0 24 89 Z"
      />
      <path
        fill="currentColor"
        d="M2 106 L42 80 L47 82 L60 74 L87 55 L109 76 L115 74 L153 96 L146 96 L117 83 L110 85 L96 72 L88 65 L80 73 L64 81 L50 92 L44 90 Z"
      />
      <path
        className="fill-lava"
        d="M82 74 L87 69 C87 82 82 95 73 104 C64 112 52 116 40 118 C53 110 62 100 69 89 C74 83 78 79 82 74 Z"
      />
      <path
        className="fill-lava"
        d="M90 72 L92 74 C91 82 89 90 85 98 C86 90 88 81 90 72 Z"
      />
    </svg>
  );
}
