"use client";

import { CheckCircle2, TrendingUp, Users, Clock, ShieldCheck } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      number: "10,000+",
      label: "Tamamlanan Layihə",
      desc: "Uğurla təhvil verilmiş rəqəmsal işlər",
      icon: CheckCircle2,
      color: "text-purple-400",
    },
    {
      number: "2,500+",
      label: "Peşəkar Mütəxəssis",
      desc: "Portfeliosu sınaqdan keçmiş dizaynerlər",
      icon: Users,
      color: "text-indigo-400",
    },
    {
      number: "98%",
      label: "Müştəri Məmnuniyyəti",
      desc: "5 ulduzlu rəylər və təkrar sifarişlər",
      icon: TrendingUp,
      color: "text-emerald-400",
    },
    {
      number: "24 Saat",
      label: "Orta Cavab Müddəti",
      desc: "İlk layihə versiyası və operativ əlaqə",
      icon: Clock,
      color: "text-fuchsia-400",
    },
  ];

  const partners = [
    "Pasha Hub",
    "Kapital Tech",
    "Bakcell Digital",
    "BirBank Lab",
    "Bravo Creative",
    "InnoCaucasus",
    "Technovate",
  ];

  return (
    <section className="py-16 border-y border-white/5 bg-[#0e0e13]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated 4 Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:border-purple-500/40"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-600/5 rounded-full blur-xl group-hover:bg-purple-600/15 transition-all" />
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">
                    STATİSTİKA
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1">
                  {item.number}
                </div>
                <div className="text-sm font-semibold text-purple-300 mb-1">{item.label}</div>
                <div className="text-xs text-zinc-400 leading-relaxed">{item.desc}</div>
              </div>
            );
          })}
        </div>

        {/* Partners Banner in Azerbaijani */}
        <div className="mt-14 pt-10 border-t border-white/5 text-center">
          <p className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-6 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            Azərbaycanın aparıcı şirkətləri və startapları Chai Studio ilə əməkdaşlıq edir
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="text-sm sm:text-base font-bold tracking-wider text-zinc-300 hover:text-white transition-colors duration-200"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
