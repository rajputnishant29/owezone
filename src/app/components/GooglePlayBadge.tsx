import React from "react";
import { siteConfig } from "@/config/siteConfig";

interface GooglePlayBadgeProps {
  size?: "sm" | "md" | "lg";
  variant?: "badge" | "button" | "minimal";
  className?: string;
  showApkFallback?: boolean;
}

export const GooglePlayBadge: React.FC<GooglePlayBadgeProps> = ({
  size = "md",
  variant = "badge",
  className = "",
  showApkFallback = false,
}) => {
  const targetUrl = siteConfig.links.isPlayStoreLive
    ? siteConfig.links.playStore
    : siteConfig.links.directApk || siteConfig.links.playStore;

  if (variant === "badge") {
    return (
      <div className={`inline-flex flex-col sm:flex-row items-center gap-3 ${className}`}>
        <a
          href={targetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3.5 bg-[#201B3A] text-white px-5 py-3 rounded-2xl border border-[#201B3A] hover:bg-[#161228] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-xl group"
          aria-label="Get OweZone on Google Play"
        >
          {/* Official styled Google Play SVG icon */}
          <svg
            className="w-7 h-7 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.608 1.614C3.266 1.986 3.067 2.585 3.067 3.376V20.624C3.067 21.415 3.266 22.014 3.608 22.386L3.69 22.463L13.14 13.013V12.784L3.69 1.537L3.608 1.614Z"
              fill="#00D3FF"
            />
            <path
              d="M16.29 16.163L13.14 13.013V12.784L16.29 9.634L16.36 9.674L20.089 11.794C21.152 12.398 21.152 13.399 20.089 14.004L16.36 16.123L16.29 16.163Z"
              fill="#FFD200"
            />
            <path
              d="M16.36 16.123L13.14 12.903L3.608 22.435C4.015 22.868 4.72 22.923 5.535 22.46L16.36 16.123Z"
              fill="#FF3A44"
            />
            <path
              d="M16.36 9.674L5.535 3.337C4.72 2.874 4.015 2.929 3.608 3.362L13.14 12.894L16.36 9.674Z"
              fill="#00E676"
            />
          </svg>

          <div className="text-left flex flex-col justify-center">
            <span className="text-[10px] tracking-widest uppercase font-semibold text-[#D9D4CC] leading-none">
              GET IT ON
            </span>
            <span className="text-base sm:text-lg font-bold tracking-tight text-white leading-tight font-display">
              Google Play
            </span>
          </div>
        </a>

        {showApkFallback && (
          <a
            href={siteConfig.links.directApk}
            className="text-xs font-semibold text-[#716D7F] hover:text-[#6957E8] transition-colors py-1 px-3 rounded-lg border border-[#E8E4DD] bg-white hover:border-[#6957E8]"
          >
            Direct APK (.apk)
          </a>
        )}
      </div>
    );
  }

  // Button variant
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }[size];

  return (
    <a
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-full font-bold btn-purple ${sizeClasses} ${className}`}
    >
      <svg
        className="w-5 h-5 flex-shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M3.608 1.614C3.266 1.986 3.067 2.585 3.067 3.376V20.624C3.067 21.415 3.266 22.014 3.608 22.386L3.69 22.463L13.14 13.013V12.784L3.69 1.537L3.608 1.614ZM16.29 16.163L13.14 13.013V12.784L16.29 9.634L16.36 9.674L20.089 11.794C21.152 12.398 21.152 13.399 20.089 14.004L16.36 16.123L16.29 16.163ZM16.36 16.123L13.14 12.903L3.608 22.435C4.015 22.868 4.72 22.923 5.535 22.46L16.36 16.123ZM16.36 9.674L5.535 3.337C4.72 2.874 4.015 2.929 3.608 3.362L13.14 12.894L16.36 9.674Z" />
      </svg>
      <span>Get OweZone</span>
    </a>
  );
};

export default GooglePlayBadge;
