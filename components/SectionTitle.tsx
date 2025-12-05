import React, { ReactNode, ReactElement, isValidElement, cloneElement } from "react";
import { twMerge } from "tailwind-merge";

type SectionTitleProps = {
  icon: ReactNode;
  title: string;
  className?: string;
};

export function SectionTitle({ icon, title, className }: SectionTitleProps) {
  let renderedIcon: ReactNode = icon;
  if (isValidElement(icon)) {
    const el = icon as ReactElement<{ style?: React.CSSProperties }>;
    try {
      renderedIcon = cloneElement(el as any, {
        width: 20,
        height: 20,
        size: 20,
        style: { width: 20, height: 20, ...(el.props?.style || {}) },
      } as any);
    } catch {
      renderedIcon = icon;
    }
  }

  return (
    <div className={twMerge("w-full flex flex-col gap-2", className)}>
      {/* Ícone + Título */}
      <div className="flex items-center gap-6">
        {/* Container do ícone */}
        <div
          className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#1a1a1d] via-[#0d0d0e] to-[#000000] shadow-[0_0_12px_rgba(80,120,255,0.35)] border-2 border-[#2a2a2d] rounded-2xl overflow-hidden flex-shrink-0"
          style={{ marginRight: 24, padding: 10, borderRadius: 10 }}
        >
          <div className="w-full h-full flex items-center justify-center">
            {renderedIcon}
          </div>
        </div>

        {/* Título com um leve gradiente */}
        <h2 className="text-4xl font-semibold tracking-wide bg-gradient-to-r from-[#b7d3ff] to-[#6aa4ff] text-transparent bg-clip-text">
          {title}
        </h2>
      </div>

      {/* Linha inferior */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#1a253a] to-transparent" />
    </div>
  );
}
