import React from 'react';
import { Palette, X, Check, Sparkles, Sun, Moon, Eye } from 'lucide-react';
import { ThemeId } from '../types';
import { THEMES } from '../data/themes';

interface ThemeSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTheme: ThemeId;
  onSelectTheme: (themeId: ThemeId) => void;
}

export const ThemeSelectorModal: React.FC<ThemeSelectorModalProps> = ({
  isOpen,
  onClose,
  currentTheme,
  onSelectTheme,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#0c382b] border-2 border-[#d4af37] rounded-3xl max-w-3xl w-full p-6 sm:p-8 text-[#fcf8f2] relative shadow-2xl animate-scaleIn space-y-6 my-8 max-h-[90vh] overflow-y-auto no-scrollbar">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-300 hover:text-white bg-[#124233] p-2 rounded-full border border-[#2d5848] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a4d3e] text-[#d4af37] text-xs font-bold uppercase tracking-wider border border-[#d4af37]/30 shadow">
            <Palette className="w-4 h-4 text-[#d4af37]" />
            Website Color Theme Switcher (12 Palettes)
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
            Select Website Color Palette
          </h2>
          <p className="text-xs text-[#e2d5b6] leading-relaxed">
            Choose from 12 handcrafted color themes including Suvria Natural Cream, Royal Emerald, Spiced Copper, Peacock Teal, Sunflower Gold, Saffron Sunset, and Pure Ivory.
          </p>
        </div>

        {/* Theme Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
          {THEMES.map((theme) => {
            const isSelected = currentTheme === theme.id;

            return (
              <button
                key={theme.id}
                onClick={() => onSelectTheme(theme.id)}
                className={`p-4 rounded-2xl border-2 text-left transition-all relative overflow-hidden group flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#d4af37] bg-[#1a4d3e] shadow-xl ring-2 ring-[#d4af37]/60 scale-[1.02]'
                    : 'border-[#2d5848] bg-[#124233] hover:border-[#d4af37]/60 hover:bg-[#185240]'
                }`}
              >
                {/* Active Badge */}
                {isSelected && (
                  <span className="absolute top-3 right-3 bg-[#d4af37] text-[#0c382b] font-extrabold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full flex items-center gap-1 shadow">
                    <Check className="w-3 h-3 stroke-[3]" />
                    Active
                  </span>
                )}

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    {theme.isDark ? (
                      <Moon className="w-4 h-4 text-[#d4af37]" />
                    ) : (
                      <Sun className="w-4 h-4 text-amber-400" />
                    )}
                    <h3 className="font-serif font-bold text-base text-white">{theme.name}</h3>
                  </div>

                  <p className="text-xs text-gray-300">{theme.subtitle}</p>
                </div>

                {/* Color Swatches Strip */}
                <div className="mt-4 pt-3 border-t border-[#2d5848] flex items-center justify-between">
                  <span className="text-[10px] text-gray-400 font-medium">Palette Preview:</span>

                  <div className="flex items-center gap-1.5 p-1 bg-black/30 rounded-xl border border-white/10">
                    <div
                      className="w-5 h-5 rounded-lg shadow-inner border border-white/20"
                      style={{ backgroundColor: theme.bgPreview }}
                      title="Background"
                    />
                    <div
                      className="w-5 h-5 rounded-lg shadow-inner border border-white/20"
                      style={{ backgroundColor: theme.cardPreview }}
                      title="Card / Container"
                    />
                    <div
                      className="w-5 h-5 rounded-lg shadow-inner border border-white/20"
                      style={{ backgroundColor: theme.accentPreview }}
                      title="Accent Gold / Green"
                    />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-[#1b4e3e] flex items-center justify-between text-xs">
          <span className="text-gray-300 text-[11px] flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            Theme choice is saved in your browser automatically.
          </span>

          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#d4af37] text-[#0c382b] font-extrabold rounded-xl hover:bg-[#e2bd44] shadow-md transition-all"
          >
            Apply Theme
          </button>
        </div>

      </div>
    </div>
  );
};
