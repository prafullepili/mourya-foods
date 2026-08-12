import React, { useState } from 'react';
import { Palette, Check, Sparkles, Sun, Moon, Eye, RefreshCw, X, ChevronUp, ChevronDown } from 'lucide-react';
import { ThemeId } from '../types';
import { THEMES } from '../data/themes';

interface BackgroundColorBarProps {
  currentTheme: ThemeId;
  onSelectTheme: (themeId: ThemeId) => void;
  setIsThemeModalOpen: (isOpen: boolean) => void;
}

export const BackgroundColorBar: React.FC<BackgroundColorBarProps> = ({
  currentTheme,
  onSelectTheme,
  setIsThemeModalOpen,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const activeThemeObj = THEMES.find((t) => t.id === currentTheme) || THEMES[0];

  return (
    <div className="w-full bg-[#0c382b] border-y-2 border-[#d4af37]/40 text-[#fcf8f2] py-8 px-4 sm:px-6 relative overflow-hidden shadow-xl">
      {/* Background Decorative Accent */}
      <div className="absolute inset-0 bg-lotus-watermark opacity-15 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10 space-y-6">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2d5848] pb-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a4d3e] text-[#d4af37] text-xs font-extrabold uppercase tracking-wider border border-[#d4af37]/30 shadow">
              <Palette className="w-4 h-4 text-[#d4af37]" />
              12 Background Color Themes
            </div>
            <h3 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
              <span>Choose Your Background Color Palette</span>
              <span className="text-xs font-sans text-gray-300 font-normal">
                (Click any circle to apply live)
              </span>
            </h3>
            <p className="text-xs text-[#e2d5b6]">
              Active: <strong className="text-white">{activeThemeObj.name}</strong> • {activeThemeObj.subtitle} ({activeThemeObj.isDark ? 'Dark Mode' : 'Light Mode'})
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-4 py-2 rounded-xl bg-[#124233] text-gray-200 hover:text-white border border-[#2d5848] text-xs font-bold flex items-center gap-1.5 transition-all"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4 text-[#d4af37]" />
                  <span>Collapse Palette Grid</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 text-[#d4af37]" />
                  <span>Show All 12 Options</span>
                </>
              )}
            </button>

            <button
              onClick={() => setIsThemeModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-[#d4af37] text-[#0c382b] font-extrabold text-xs hover:bg-[#e2bd44] shadow-md transition-all flex items-center gap-1.5"
            >
              <Palette className="w-4 h-4" />
              <span>Full Color Selector</span>
            </button>
          </div>
        </div>

        {/* 12 Color Options Swatches Grid */}
        {isExpanded && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 animate-fadeIn">
            {THEMES.map((theme, index) => {
              const isActive = currentTheme === theme.id;

              return (
                <button
                  key={theme.id}
                  onClick={() => onSelectTheme(theme.id)}
                  className={`p-3 rounded-2xl border-2 text-left transition-all relative flex flex-col justify-between group ${
                    isActive
                      ? 'bg-[#1a4d3e] border-[#d4af37] ring-2 ring-[#d4af37]/60 scale-105 shadow-xl'
                      : 'bg-[#124233] border-[#2d5848] hover:border-[#d4af37]/60 hover:bg-[#185240]'
                  }`}
                  id={`bg-color-option-${theme.id}`}
                >
                  {/* Numbered Pill */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-gray-400 bg-black/40 px-1.5 py-0.5 rounded border border-white/10">
                      Option {index + 1}
                    </span>
                    {isActive ? (
                      <span className="bg-[#d4af37] text-[#0c382b] p-0.5 rounded-full">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                    ) : (
                      theme.isDark ? (
                        <Moon className="w-3 h-3 text-[#d4af37]" />
                      ) : (
                        <Sun className="w-3 h-3 text-amber-400" />
                      )
                    )}
                  </div>

                  {/* Visual Color Swatch Circle Stack */}
                  <div className="flex items-center justify-center my-1.5">
                    <div
                      className="w-12 h-12 rounded-2xl shadow-lg border-2 border-white/20 flex items-center justify-center relative transition-transform group-hover:scale-110"
                      style={{ backgroundColor: theme.bgPreview }}
                      title={`Background Color: ${theme.bgPreview}`}
                    >
                      {/* Inner Card & Accent Overlay Circles */}
                      <div
                        className="w-6 h-6 rounded-lg border border-white/30 shadow-sm flex items-center justify-center"
                        style={{ backgroundColor: theme.cardPreview }}
                      >
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: theme.accentPreview }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Theme Label */}
                  <div className="mt-2 text-center">
                    <h4 className="font-serif text-xs font-bold text-white truncate group-hover:text-[#d4af37] transition-colors">
                      {theme.name}
                    </h4>
                    <span className="text-[10px] text-gray-300 block truncate font-sans">
                      {theme.subtitle}
                    </span>
                  </div>

                </button>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};
