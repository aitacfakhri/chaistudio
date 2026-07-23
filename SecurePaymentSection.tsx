"use client";

import { useState } from "react";
import { ShieldCheck, Lock, CheckCircle2, ArrowRight } from "lucide-react";

export default function SecurePaymentSection() {
  const [budget, setBudget] = useState(1000);

  const expertPart = Math.round(budget * 0.7);
  const platformPart = Math.round(budget * 0.3);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Escrow System Explanation */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full purple-gradient-badge text-purple-300 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
              <span>TƏHLÜKƏSİZ DEPOZİT SİSTEMİ (ESCROW)</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Pulunuz siz işi təsdiqləyənə qədər <br />
              <span className="purple-glow-text">100% zəmanətlə qorunur.</span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Heç bir risk olmadan sifariş verin. Beh və ya tam ödəniş etdiyiniz zaman vəsait Chai Studio-nun qorunan bank depozit hesabında dondurulur. Yalnız siz son dizayn və ya montajı bəyənib təsdiqlədikdə məbləğ mütəxəssisə köçürülür.
            </p>

            <div className="space-y-3 pt-2 text-sm text-zinc-300">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>İş bəyənilmədikdə tam geri qaytarılma hüququ</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                <span>Rəsmi elektron qaimə və müqavilə ilə sığortalanmış proses</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                <span>Şəffaf faiz bölgüsü: 70% Mütəxəssis / 30% Chai Studio</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Escrow Split Calculator */}
          <div className="lg:col-span-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-purple-500/30 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    İnteraktiv Depozit Kalkulyatoru
                  </span>
                </div>
                <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  Aktiv Qoruma
                </span>
              </div>

              {/* Slider Input */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-400">Layihə Büdcəsi:</span>
                  <span className="text-2xl font-black font-mono text-purple-300">
                    ₼ {budget} AZN
                  </span>
                </div>

                <input
                  type="range"
                  min={200}
                  max={5000}
                  step={50}
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />

                <div className="flex justify-between text-[10px] text-zinc-500">
                  <span>200 AZN</span>
                  <span>2,500 AZN</span>
                  <span>5,000 AZN</span>
                </div>
              </div>

              {/* 70% / 30% Visual Split Breakdown */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#121218] p-4 rounded-2xl border border-purple-500/30 text-center">
                  <div className="text-[11px] text-purple-300 font-semibold mb-1">Mütəxəssis Payı</div>
                  <div className="text-2xl font-extrabold text-white">70%</div>
                  <div className="text-lg font-mono font-bold text-emerald-400 mt-1">
                    ₼ {expertPart} AZN
                  </div>
                  <div className="text-[10px] text-zinc-500 mt-1">İş təsdiqləndikdən sonra</div>
                </div>

                <div className="bg-[#121218] p-4 rounded-2xl border border-white/10 text-center">
                  <div className="text-[11px] text-zinc-400 font-semibold mb-1">Chai Studio Zəmanət</div>
                  <div className="text-2xl font-extrabold text-white">30%</div>
                  <div className="text-lg font-mono font-bold text-purple-300 mt-1">
                    ₼ {platformPart} AZN
                  </div>
                  <div className="text-[10px] text-zinc-500 mt-1">Platforma, zəmanət və texniki dəstək</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
