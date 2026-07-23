"use client";

import { useState } from "react";
import { Sparkles, Cpu, CheckCircle2, ArrowRight, Zap, Star, ShieldCheck } from "lucide-react";
import { ExpertData } from "./FeaturedExpertsSection";

interface AiSmartMatchSectionProps {
  onHireExpert: (expert: ExpertData) => void;
}

export default function AiSmartMatchSection({ onHireExpert }: AiSmartMatchSectionProps) {
  const [query, setQuery] = useState("Fintech mobil tətbiqi üçün müasir UI/UX dizayn və brendinq lazımdır");
  const [loading, setLoading] = useState(false);
  const [matchResult, setMatchResult] = useState<{
    category: string;
    matchScore: number;
    reasoning: string;
    experts: ExpertData[];
  } | null>(null);

  const samplePrompts = [
    "Fintech mobil tətbiq üçün müasir UI/UX və Figma dizaynı",
    "Restoranımız üçün 4K Reels video montajı və çəkiliş",
    "Yeni premium brend üçün Brandbook və 3D Loqo",
    "E-ticarət üçün Meta Ads və yüksək konversiyalı reklam",
  ];

  const handleRunAiMatch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/ai-match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      setMatchResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-match" className="py-24 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Explanation in Azerbaijani */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full purple-gradient-badge text-purple-300 text-xs font-semibold">
              <Cpu className="w-3.5 h-3.5 text-purple-400" />
              <span>SÜNİ İNTELLEKTLƏ AĞILLI UYĞUNLAŞDIRMA (AI SMART MATCH)</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Layihəniz üçün ən uyğun mütəxəssisi <br />
              <span className="purple-glow-text">Süni İntellekt 15 saniyədə</span> tapsın.
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Layihə tələblərinizi və hədəflərinizi qeyd edin. Chai Studio-nun AI Match mühərriki 2,500+ peşəkarın portfoliosunu, üslubunu və çatdırılma sürətini skan edərək sizə ən ideal yaradıcı tərəfdaşı təklif edir.
            </p>

            <div className="space-y-3 pt-2 text-sm text-zinc-300">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>99%-dək dəqiq sahə və üslub uyğunlaşdırılması</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                <span>Büdcənizə və son təhvil tarixinə uyğunlaşdırılmış filtrasiya</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                <span>Vaxt itkisiz birbaşa yoxlanılmış top ekspertlə əlaqə</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive AI Matching Playground */}
          <div className="lg:col-span-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-purple-500/30 relative shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400 animate-spin" />
                  <span className="text-xs font-bold text-white font-mono">Chai AI Match Engine v3.4</span>
                </div>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                  Canlı Test
                </span>
              </div>

              {/* Input Area */}
              <div className="space-y-3">
                <label className="text-xs font-semibold text-zinc-300 block">
                  Layihənizin tələbini və ya arzuladığınız üslubu yazın:
                </label>
                <div className="relative">
                  <textarea
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    rows={3}
                    className="w-full bg-[#121218] border border-white/10 focus:border-purple-500 rounded-xl p-3.5 text-xs sm:text-sm text-white placeholder-zinc-500 outline-none transition-all resize-none"
                    placeholder="Məsələn: Yeni e-ticarət brendi üçün 3D loqo və Instagram SMM şablonları lazımdır..."
                  />
                </div>
              </div>

              {/* Sample Prompt Badges */}
              <div className="mt-3 flex flex-wrap gap-2">
                {samplePrompts.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => setQuery(p)}
                    className="text-[11px] bg-white/5 hover:bg-purple-600/20 border border-white/10 hover:border-purple-500/40 text-zinc-300 hover:text-purple-200 px-2.5 py-1 rounded-lg transition-all text-left cursor-pointer"
                  >
                    {p}
                  </button>
                ))}
              </div>

              {/* AI Trigger Button */}
              <button
                onClick={handleRunAiMatch}
                disabled={loading}
                className="w-full mt-5 glow-btn py-3.5 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Zap className="w-4 h-4 animate-spin" />
                    <span>Süni İntellekt mütəxəssisləri skan edir...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-purple-200" />
                    <span>Mənim üçün mütəxəssis tap</span>
                  </>
                )}
              </button>

              {/* Matching Result Display */}
              {matchResult && (
                <div className="mt-6 pt-5 border-t border-white/10 space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between bg-purple-500/10 p-3 rounded-xl border border-purple-500/30">
                    <div className="text-xs">
                      <span className="text-zinc-400">Tövsiyə Sahəsi: </span>
                      <strong className="text-purple-300 font-bold">{matchResult.category}</strong>
                    </div>
                    <div className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {matchResult.matchScore}% Uğurlu Uyğunlaşma
                    </div>
                  </div>

                  <p className="text-xs text-zinc-300 italic">{matchResult.reasoning}</p>

                  {/* Top Matched Expert Preview */}
                  {matchResult.experts && matchResult.experts.length > 0 && (
                    <div className="bg-[#121218] p-3.5 rounded-xl border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={matchResult.experts[0].avatar}
                          alt={matchResult.experts[0].name}
                          className="w-11 h-11 rounded-xl object-cover border border-purple-500/40"
                        />
                        <div>
                          <div className="text-xs font-bold text-white flex items-center gap-1.5">
                            <span>{matchResult.experts[0].name}</span>
                            <span className="text-[9px] bg-purple-500/20 text-purple-300 px-1 rounded">
                              TOP MATCH
                            </span>
                          </div>
                          <div className="text-[11px] text-zinc-400">{matchResult.experts[0].role}</div>
                        </div>
                      </div>

                      <button
                        onClick={() => onHireExpert(matchResult.experts[0])}
                        className="text-xs bg-purple-600 hover:bg-purple-500 text-white font-semibold px-3 py-1.5 rounded-lg transition-all"
                      >
                        Seç & Başla
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
