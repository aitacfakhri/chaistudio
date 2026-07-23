"use client";

import { useState, useEffect } from "react";
import { Sparkles, ArrowRight, ShieldCheck, Menu, X, Check } from "lucide-react";

interface NavbarProps {
  onOpenBriefModal: (prefillCategory?: string, expertId?: number) => void;
}

export default function Navbar({ onOpenBriefModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText("CHAI20");
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <>
      {/* Top Banner Ticker in Azerbaijani */}
      <div className="bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 border-b border-purple-800/40 text-xs py-2 px-4 text-center text-purple-200 flex items-center justify-center gap-3">
        <span className="inline-flex items-center gap-1.5 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
          <span className="hidden sm:inline">Xüsusi fürsət:</span> İlk sifarişinizə 20% ENDİRİM promo kodu:
        </span>
        <button
          onClick={handleCopyCode}
          className="inline-flex items-center gap-1 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/40 px-2.5 py-0.5 rounded font-mono font-bold text-white transition-all cursor-pointer"
        >
          <span>CHAI20</span>
          {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <span className="text-[10px] text-purple-300 ml-1">kopyala</span>}
        </button>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#09090B]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "bg-[#09090B]/60 backdrop-blur-md border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 p-0.5 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.5)] group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#09090B] rounded-[10px] flex items-center justify-center">
                <span className="font-black text-xl bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
                  C
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-white group-hover:text-purple-300 transition-colors">
                  Chai Studio
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  SaaS
                </span>
              </div>
              <span className="text-[11px] text-zinc-400 -mt-0.5 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-purple-400" /> Təhlükəsiz Depozit
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-300">
            <a href="#services" className="hover:text-white transition-colors">
              Xidmətlər
            </a>
            <a href="#experts" className="hover:text-white transition-colors">
              Mütəxəssislər
            </a>
            <a href="#ai-match" className="hover:text-purple-300 transition-colors flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" /> AI Uyğunlaşdırma
            </a>
            <a href="#how-it-works" className="hover:text-white transition-colors">
              Necə işləyir
            </a>
            <a href="#tracking" className="hover:text-white transition-colors">
              Layihə İzləmə
            </a>
            <a href="#corporate" className="hover:text-white transition-colors">
              Korporativ
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#chat"
              className="text-xs text-zinc-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-all"
            >
              Daxili Çat Demo
            </a>
            <button
              onClick={() => onOpenBriefModal()}
              className="glow-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white cursor-pointer group"
            >
              <span>Layihəyə Başla</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenBriefModal()}
              className="glow-btn px-3 py-2 rounded-lg text-xs font-semibold text-white"
            >
              Başla
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0e0e13] border-b border-white/10 px-6 py-6 space-y-4">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-zinc-300 hover:text-white py-1"
            >
              Xidmətlər
            </a>
            <a
              href="#experts"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-zinc-300 hover:text-white py-1"
            >
              Mütəxəssislər
            </a>
            <a
              href="#ai-match"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-purple-300 hover:text-purple-200 py-1"
            >
              AI Smart Match
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-zinc-300 hover:text-white py-1"
            >
              Necə işləyir
            </a>
            <a
              href="#tracking"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-zinc-300 hover:text-white py-1"
            >
              Layihə İzləmə
            </a>
            <a
              href="#corporate"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-zinc-300 hover:text-white py-1"
            >
              Korporativ Panel
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-zinc-300 hover:text-white py-1"
            >
              FAQ
            </a>
            <div className="pt-2 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBriefModal();
                }}
                className="w-full glow-btn py-3 rounded-xl text-center text-sm font-semibold text-white"
              >
                Layihəyə Başla (20% Endirimlə)
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
