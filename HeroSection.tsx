"use client";

import { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  MessageSquare,
  Clock,
  Star,
  Zap,
} from "lucide-react";

interface HeroSectionProps {
  onOpenBriefModal: () => void;
  onScrollToExperts: () => void;
}

export default function HeroSection({ onOpenBriefModal, onScrollToExperts }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState<"timeline" | "chat" | "escrow">("timeline");

  return (
    <section className="relative pt-12 pb-24 overflow-hidden">
      {/* Background ambient purple light blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-purple-600/20 via-fuchsia-600/15 to-indigo-600/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-purple-900/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Actions in Azerbaijani */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full purple-gradient-badge text-purple-300 text-xs font-medium backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span>100% Yoxlanılmış Kreativ Bazar • Təhlükəsiz Depozit Sistemi</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Layihəniz üçün peşəkar <br />
              <span className="purple-glow-text">kreativ mütəxəssis</span> tapın.
            </h1>

            {/* Subtitle in Azerbaijani */}
            <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed">
              Chai Studio — biznesinizi aparıcı dizaynerlər, brendinq ustaları, video redaktorlar və UI/UX mütəxəssisləri ilə birləşdirən premium rəqəmsal platformadır. İşiniz təsdiqlənənə qədər ödənişiniz <strong className="text-white font-semibold">100% depozitdə (escrow)</strong> qorunur.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenBriefModal}
                className="glow-btn inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-base text-white cursor-pointer group"
              >
                <span>Layihəyə Başla</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onScrollToExperts}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-medium text-base text-zinc-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/40 transition-all cursor-pointer backdrop-blur-md"
              >
                <span>Mütəxəssislərə Bax</span>
              </button>
            </div>

            {/* Micro Trust Proofs */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Star className="w-4 h-4 text-purple-400 fill-purple-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">4.98 / 5.0</div>
                  <div className="text-xs text-zinc-400">Müştəri Reytinqi</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">100% Depozit</div>
                  <div className="text-xs text-zinc-400">Escrow Zəmanəti</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">24 Saat</div>
                  <div className="text-xs text-zinc-400">İlk Qaralama</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Luxury SaaS Interactive Dashboard */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Glow container */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 via-indigo-500 to-fuchsia-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

              {/* Main Dashboard Card */}
              <div className="relative glass-panel rounded-2xl p-6 shadow-2xl border border-white/10">
                {/* Header of the mini dashboard */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs text-zinc-400 ml-2 font-mono">Chai Workspace Pro</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-semibold border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Canlı Rejim
                  </div>
                </div>

                {/* Dashboard Tabs */}
                <div className="flex items-center gap-2 mt-4 p-1 bg-black/40 rounded-xl border border-white/5 text-xs">
                  <button
                    onClick={() => setActiveTab("timeline")}
                    className={`flex-1 py-1.5 rounded-lg font-medium transition-all ${
                      activeTab === "timeline"
                        ? "bg-purple-600 text-white shadow-md"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Layihə İzləmə
                  </button>
                  <button
                    onClick={() => setActiveTab("chat")}
                    className={`flex-1 py-1.5 rounded-lg font-medium transition-all ${
                      activeTab === "chat"
                        ? "bg-purple-600 text-white shadow-md"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Mesencer
                  </button>
                  <button
                    onClick={() => setActiveTab("escrow")}
                    className={`flex-1 py-1.5 rounded-lg font-medium transition-all ${
                      activeTab === "escrow"
                        ? "bg-purple-600 text-white shadow-md"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Depozit (Escrow)
                  </button>
                </div>

                {/* Interactive Tab 1: Project Timeline */}
                {activeTab === "timeline" && (
                  <div className="mt-5 space-y-4">
                    <div className="bg-[#121218] p-4 rounded-xl border border-white/5">
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="text-zinc-400">Aktiv Layihə:</span>
                        <span className="text-purple-300 font-medium">Fintech UI/UX & Brendinq</span>
                      </div>
                      <div className="flex items-center justify-between text-sm font-semibold text-white">
                        <span>Mərhələ: İlk Versiya Təqdimatı</span>
                        <span className="text-purple-400 font-mono">75%</span>
                      </div>
                      <div className="w-full bg-zinc-800 h-2 rounded-full mt-3 overflow-hidden">
                        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full rounded-full w-3/4 animate-pulse" />
                      </div>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2.5 text-emerald-400 bg-emerald-500/5 p-2 rounded-lg border border-emerald-500/10">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>Beh ödənildi & Müqavilə bağlandı</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-purple-300 bg-purple-500/10 p-2 rounded-lg border border-purple-500/20">
                        <Clock className="w-4 h-4 shrink-0 text-purple-400 animate-spin" />
                        <span>Dizayner iş üzərində çalışır (Təhvil: Sabah 18:00)</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Interactive Tab 2: Chat Simulation */}
                {activeTab === "chat" && (
                  <div className="mt-5 space-y-3">
                    <div className="flex items-start gap-3 bg-[#121218] p-3 rounded-xl border border-white/5">
                      <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-xs text-white">
                        NƏ
                      </div>
                      <div className="space-y-1 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-white">Nicat Əliyev</span>
                          <span className="text-[10px] text-purple-400 font-mono">14:32</span>
                        </div>
                        <p className="text-zinc-300">
                          Salam! Mobil tətbiqin ilk Figma prototipini tamamladım. Linki çatda paylaşdım.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-zinc-400 italic px-2">
                      <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                      Nicat Əliyev yeni səsli mesaj hazırlayır...
                    </div>
                  </div>
                )}

                {/* Interactive Tab 3: Escrow Split */}
                {activeTab === "escrow" && (
                  <div className="mt-5 space-y-3 bg-[#121218] p-4 rounded-xl border border-white/5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-zinc-400">Depozitdə qorunan məbləğ:</span>
                      <span className="text-emerald-400 font-bold text-sm">₼ 1,200 AZN</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="bg-black/50 p-2.5 rounded-lg border border-purple-500/20 text-center">
                        <div className="text-xs text-zinc-400">Mütəxəssis (70%)</div>
                        <div className="text-sm font-bold text-white mt-0.5">₼ 840 AZN</div>
                      </div>
                      <div className="bg-black/50 p-2.5 rounded-lg border border-white/10 text-center">
                        <div className="text-xs text-zinc-400">Chai Zəmanət (30%)</div>
                        <div className="text-sm font-bold text-purple-400 mt-0.5">₼ 360 AZN</div>
                      </div>
                    </div>
                    <div className="text-[11px] text-zinc-400 flex items-center gap-1.5 pt-1">
                      <Lock className="w-3.5 h-3.5 text-emerald-400" />
                      Müştəri təsdiqləyənə qədər vəsait tam bloklanır.
                    </div>
                  </div>
                )}

                {/* Mini Expert Profile on bottom of dashboard */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                        alt="Nicat Aliyev"
                        className="w-10 h-10 rounded-full object-cover border border-purple-500/40"
                      />
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-[#18181F]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span>Nicat Əliyev</span>
                        <span className="px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300 text-[9px] font-bold">
                          TOP EXPERT
                        </span>
                      </div>
                      <div className="text-[11px] text-zinc-400">Senior UI/UX Dizayner • 4.99 ★</div>
                    </div>
                  </div>
                  <button
                    onClick={onOpenBriefModal}
                    className="text-xs bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 border border-purple-500/30 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    Sifariş et
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
