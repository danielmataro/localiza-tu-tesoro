import React from "react";

interface LogoFindfyProps {
  className?: string;
}

const LogoFindfy: React.FC<LogoFindfyProps> = ({ className = "h-20 w-auto" }) => {
  return (
    <svg
      viewBox="0 0 720 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="findfy logo"
      className={className}
    >
      <title>findfy</title>
      {/* Icono lupa */}
      <g fill="none" stroke="currentColor" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="88" cy="88" r="54" />
        <line x1="128" y1="128" x2="178" y2="178" />
      </g>

      {/* Texto "findfy" */}
      <g fill="currentColor" transform="translate(210,28)">
        <text
          x="0"
          y="118"
          fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial"
          fontWeight="700"
          fontSize="116"
          letterSpacing="0"
        >
          findfy
        </text>
      </g>
    </svg>
  );
};

export default LogoFindfy;
