"use client";

import { useState } from "react";
import { Send, Check, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSubscribed(true);
    } catch {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#070709] border-t border-white/10 pt-16 pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#09090B] rounded-[9px] flex items-center justify-center">
                  <span className="font-black text-lg text-purple-400">C</span>
                </div>
              </div>
              <span className="font-extrabold text-lg text-white">Chai Studio</span>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Chai Studio — yoxlanılmış yaradıcı peşəkarları şirkətlərlə birləşdirən və ödənişləri 100% depozit (escrow) sistemi ilə qoruyan premium rəqəmsal platformadır.
            </p>

            <div className="space-y-1.5 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>Nizami küç. 142, Landmark III, Bakı, Azərbaycan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-purple-400" />
                <span>+994 12 500 20 26</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <span>info@chaistudio.az</span>
              </div>
            </div>
          </div>

          {/* Col 1: Şirkət */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Şirkət</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition-colors">Haqqımızda</a></li>
              <li><a href="#corporate" className="hover:text-white transition-colors">Karyera & Vakansiyalar</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Müştəri Rəyləri</a></li>
              <li><a href="#media" className="hover:text-white transition-colors">Mətbuat və Bloq</a></li>
              <li><a href="#partners" className="hover:text-white transition-colors">Tərəfdaşlıq</a></li>
            </ul>
          </div>

          {/* Col 2: Xidmətlər */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Xidmətlər</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white transition-colors">Qrafik Dizayn</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Brendinq & Brandbook</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">SMM & Kontent</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Video Montaj</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Motion & 3D Dizayn</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">UI/UX Dizayn</a></li>
            </ul>
          </div>

          {/* Col 3: Mütəxəssislər */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Mütəxəssislər</h4>
            <ul className="space-y-2">
              <li><a href="#experts" className="hover:text-white transition-colors">Top Ekspertlər</a></li>
              <li><a href="#experts" className="hover:text-white transition-colors">Mütəxəssis kimi qoşul</a></li>
              <li><a href="#experts" className="hover:text-white transition-colors">Reytinq Standartları</a></li>
              <li><a href="#experts" className="hover:text-white transition-colors">Portfelio Bələdçisi</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter Subscription */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Xəbərlər & Promo</h4>
            <p className="text-[11px] text-zinc-400">
              Yeniliklərdən və 20% promo kodlardan ilk siz xəbərdar olun.
            </p>

            {subscribed ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 p-2.5 rounded-xl text-emerald-400 text-xs flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Promo kod: <strong>CHAI20</strong></span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-poçt ünvanınız"
                    className="w-full bg-[#121218] border border-white/10 focus:border-purple-500 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full glow-btn py-2 rounded-xl text-white font-medium text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Abunə ol</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom copyright in Azerbaijani */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>© 2026 Chai Studio MMC. Bütün hüquqlar qorunur.</div>
          <div className="flex items-center gap-6">
            <a href="#terms" className="hover:text-white transition-colors">Məxfilik Siyasəti</a>
            <a href="#terms" className="hover:text-white transition-colors">İstifadə Şərtləri</a>
            <a href="#terms" className="hover:text-white transition-colors">Düzəliş Qaydaları</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
