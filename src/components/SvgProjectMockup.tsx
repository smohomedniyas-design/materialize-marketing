import React from 'react';
import { Project } from '@/data/siteData';

interface Props {
  project: Project;
  className?: string;
  showBrowserBar?: boolean;
}

export const SvgProjectMockup: React.FC<Props> = ({
  project,
  className = '',
  showBrowserBar = true,
}) => {
  const p = project;

  if (p.image) {
    const domain = p.liveUrl
      ? p.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
      : `${p.slug.replace(/-/g, '')}.com`;

    return (
      <div className={`relative h-full w-full overflow-hidden bg-[#10201d] flex flex-col ${className}`}>
        {showBrowserBar && (
          <div className="flex h-7 w-full shrink-0 items-center justify-between border-b border-white/10 bg-[#162e2a] px-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#FF5F56]/85" />
              <span className="h-2 w-2 rounded-full bg-[#FFBD2E]/85" />
              <span className="h-2 w-2 rounded-full bg-[#27C93F]/85" />
            </div>
            <div className="flex items-center gap-1 rounded bg-black/40 px-2.5 py-0.5 text-[9px] font-mono text-white/50">
              <span className="text-lime font-semibold">https://</span>
              <span className="truncate max-w-[160px] text-white/80">{domain}</span>
            </div>
            <div className="w-8" />
          </div>
        )}
        <div className="relative flex-1 w-full overflow-hidden bg-[#0e1c19]">
          <img
            src={p.image}
            alt={`${p.name} website preview`}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>
      </div>
    );
  }

  const W = '#FFFFFF';
  const gradId = `pg-${p.slug}`;

  const renderContent = () => {
    if (p.layout === 'shop') {
      return (
        <>
          {/* Main feature hero banner */}
          <rect x="16" y="44" width="116" height="96" rx="10" fill={W} fillOpacity="0.14" />
          <rect x="30" y="60" width="58" height="8" rx="4" fill={W} fillOpacity="0.85" />
          <rect x="30" y="74" width="82" height="8" rx="4" fill={W} fillOpacity="0.45" />
          <rect x="30" y="92" width="52" height="16" rx="8" fill={p.acc} />

          {/* Product cards row 1 */}
          <rect x="146" y="44" width="116" height="44" rx="8" fill={W} fillOpacity="0.12" />
          <rect x="158" y="56" width="36" height="6" rx="3" fill={W} fillOpacity="0.5" />
          <rect x="158" y="68" width="58" height="6" rx="3" fill={W} fillOpacity="0.22" />

          <rect x="268" y="44" width="116" height="44" rx="8" fill={W} fillOpacity="0.12" />
          <rect x="280" y="56" width="36" height="6" rx="3" fill={W} fillOpacity="0.5" />
          <rect x="280" y="68" width="58" height="6" rx="3" fill={W} fillOpacity="0.22" />

          <rect x="146" y="96" width="116" height="44" rx="8" fill={W} fillOpacity="0.12" />
          <rect x="158" y="108" width="36" height="6" rx="3" fill={W} fillOpacity="0.5" />
          <rect x="158" y="120" width="58" height="6" rx="3" fill={W} fillOpacity="0.22" />

          <rect x="268" y="96" width="116" height="44" rx="8" fill={W} fillOpacity="0.12" />
          <rect x="280" y="108" width="36" height="6" rx="3" fill={W} fillOpacity="0.5" />
          <rect x="280" y="120" width="58" height="6" rx="3" fill={W} fillOpacity="0.22" />

          {/* Grid rows bottom */}
          {[152, 216].map((y, ri) =>
            [16, 140, 264].map((x, ci) => {
              const hot = ri === 1 && ci === 2;
              return (
                <g key={`shop-${x}-${y}`}>
                  <rect
                    x={x}
                    y={y}
                    width="116"
                    height="56"
                    rx="8"
                    fill={hot ? p.acc : W}
                    fillOpacity={hot ? 1 : 0.1}
                  />
                  <rect
                    x={x + 12}
                    y={y + 14}
                    width="60"
                    height="6"
                    rx="3"
                    fill={hot ? '#0B0B0D' : W}
                    fillOpacity={hot ? 0.85 : 0.3}
                  />
                  <rect
                    x={x + 12}
                    y={y + 32}
                    width="36"
                    height="6"
                    rx="3"
                    fill={hot ? '#0B0B0D' : W}
                    fillOpacity={hot ? 0.7 : 0.16}
                  />
                </g>
              );
            })
          )}
        </>
      );
    }

    if (p.layout === 'landing') {
      return (
        <>
          <rect x="24" y="56" width="108" height="10" rx="5" fill={W} fillOpacity="0.85" />
          <rect x="24" y="74" width="150" height="10" rx="5" fill={W} fillOpacity="0.85" />
          <rect x="24" y="92" width="120" height="8" rx="4" fill={W} fillOpacity="0.4" />
          <rect x="24" y="108" width="92" height="8" rx="4" fill={W} fillOpacity="0.4" />
          <rect x="24" y="132" width="76" height="22" rx="11" fill={p.acc} />
          <rect x="24" y="166" width="120" height="7" rx="3.5" fill={W} fillOpacity="0.3" />

          <rect x="212" y="44" width="172" height="124" rx="10" fill={W} fillOpacity="0.12" />
          <circle cx="296" cy="84" r="18" fill={W} fillOpacity="0.22" />
          <rect x="228" y="106" width="80" height="8" rx="4" fill={W} fillOpacity="0.5" />
          <rect x="228" y="122" width="112" height="8" rx="4" fill={W} fillOpacity="0.28" />

          {[24, 148, 272].map((x) => (
            <g key={`landing-${x}`}>
              <rect x={x} y="192" width="112" height="92" rx="8" fill={W} fillOpacity="0.1" />
              <rect x={x + 12} y="208" width="44" height="7" rx="3.5" fill={W} fillOpacity="0.4" />
              <rect x={x + 12} y="226" width="70" height="7" rx="3.5" fill={W} fillOpacity="0.18" />
            </g>
          ))}
        </>
      );
    }

    if (p.layout === 'dash') {
      return (
        <>
          <rect x="0" y="30" width="64" height="270" fill="#0B0B0D" fillOpacity="0.45" />
          {[52, 68, 84].map((y, k) => (
            <circle key={`dot-${y}`} cx="32" cy={y} r="3.5" fill={W} fillOpacity={0.5 - k * 0.12} />
          ))}

          {[80, 186, 292].map((x, k) => (
            <g key={`dash-card-${x}`}>
              <rect x={x} y="44" width={k === 2 ? 92 : 94} height="38" rx="8" fill={W} fillOpacity="0.12" />
              <rect x={x + 12} y="56" width="34" height="6" rx="3" fill={W} fillOpacity="0.5" />
            </g>
          ))}

          {/* Chart area */}
          <rect x="80" y="94" width="304" height="82" rx="8" fill={W} fillOpacity="0.06" />
          {[26, 42, 34, 56, 48, 64, 44, 68, 58, 74, 52, 62].map((h, k) => {
            const x = 92 + k * 23;
            const hot = k === 5 || k === 9;
            return (
              <rect
                key={`bar-${k}`}
                x={x}
                y={160 - h}
                width="12"
                height={h}
                rx="2"
                fill={hot ? p.acc : W}
                fillOpacity={hot ? 1 : 0.5}
              />
            );
          })}

          <rect x="80" y="190" width="304" height="74" rx="8" fill={W} fillOpacity="0.06" />
          {[208, 228, 248].map((y) => (
            <g key={`row-${y}`}>
              <rect x="96" y={y} width="238" height="6" rx="3" fill={W} fillOpacity="0.16" />
              <rect x="348" y={y - 2} width="16" height="10" rx="3" fill={W} fillOpacity="0.3" />
            </g>
          ))}
        </>
      );
    }

    // Default: UI/UX layout
    return (
      <>
        <rect x="24" y="64" width="118" height="10" rx="5" fill={W} fillOpacity="0.85" />
        <rect x="24" y="82" width="88" height="10" rx="5" fill={W} fillOpacity="0.5" />
        <rect x="24" y="106" width="150" height="8" rx="4" fill={W} fillOpacity="0.35" />
        <rect x="24" y="122" width="120" height="8" rx="4" fill={W} fillOpacity="0.35" />
        <rect x="24" y="142" width="64" height="20" rx="10" fill={p.acc} />

        {[34, 54, 74].map((cx, k) => (
          <circle key={`circle-${cx}`} cx={cx} cy="182" r="9" fill={W} fillOpacity={0.32 - k * 0.08} />
        ))}
        <rect x="92" y="175" width="92" height="14" rx="7" fill={W} fillOpacity="0.15" />

        {/* Mobile device frame */}
        <rect
          x="248"
          y="52"
          width="96"
          height="192"
          rx="16"
          fill="#0B0B0D"
          fillOpacity="0.7"
          stroke={W}
          strokeOpacity="0.28"
          strokeWidth="1.5"
        />
        <rect x="258" y="64" width="76" height="26" rx="6" fill={W} fillOpacity="0.85" />
        <rect x="258" y="102" width="76" height="12" rx="4" fill={W} fillOpacity="0.3" />
        <rect x="258" y="122" width="54" height="12" rx="4" fill={W} fillOpacity="0.3" />

        {[
          [258, 144],
          [299, 144],
          [258, 176],
          [299, 176],
        ].map(([x, y], idx) => (
          <rect key={`app-card-${idx}`} x={x} y={y} width="35" height="26" rx="5" fill={W} fillOpacity="0.16" />
        ))}
        <rect x="258" y="214" width="76" height="14" rx="7" fill={p.acc} />
      </>
    );
  };

  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className={`h-full w-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={p.a} />
          <stop offset="100%" stopColor={p.b} />
        </linearGradient>
      </defs>
      {/* Background Gradient */}
      <rect width="400" height="300" fill={`url(#${gradId})`} />

      {/* Browser Bar */}
      <rect width="400" height="30" fill="#0B0B0D" fillOpacity="0.55" />
      <circle cx="16" cy="15" r="4" fill="#FFFFFF" fillOpacity="0.55" />
      <circle cx="32" cy="15" r="4" fill="#FFFFFF" fillOpacity="0.4" />
      <circle cx="48" cy="15" r="4" fill="#FFFFFF" fillOpacity="0.28" />
      <rect x="64" y="9" width="170" height="12" rx="6" fill="#FFFFFF" fillOpacity="0.12" />

      {renderContent()}
    </svg>
  );
};
