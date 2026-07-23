"use client";

import {
  ShieldCheck,
  Lock,
  Cpu,
  Coins,
  Activity,
  Zap,
  Award,
  FileCheck2,
} from "lucide-react";

export default function WhyChooseSection() {
  const reasons = [
    {
      title: "Yoxlanılmış Mütəxəssislər",
      desc: "Yalnız portfoliosu, şəxsiyyəti və müştəri məmnuniyyəti yoxlanılmış top 3% ekspertlər.",
      icon: ShieldCheck,
      color: "text-purple-400",
    },
    {
      title: "Təhlükəsiz Ödənişlər",
      desc: "Escrow depozit sistemi ilə siz layihəni təsdiqləyənə qədər vəsait tam qorunur.",
      icon: Lock,
      color: "text-emerald-400",
    },
    {
      title: "AI Uyğunlaşdırma",
      desc: "Süni İntellekt 15 saniyə ərzində layihəniz üçün ən uyğun mütəxəssisi seçir.",
      icon: Cpu,
      color: "text-indigo-400",
    },
    {
      title: "Şəffaf Qiymətlər",
      desc: "Gizli ödənişlər və gözlənilməz komissiyalar yoxdur. Qiymət əvvəlcədən bəllidir.",
      icon: Coins,
      color: "text-amber-400",
    },
    {
      title: "Layihə İzləmə Sistemi",
      desc: "7 addımlı canlı status paneli vasitəsilə işin tərəqqisini real vaxtda izləyin.",
      icon: Activity,
      color: "text-fuchsia-400",
    },
    {
      title: "Sürətli Çatdırılma",
      desc: "24-48 saat ərzində ilkin versiyanı təhvil alaraq biznesinizi sürətləndirin.",
      icon: Zap,
      color: "text-yellow-400",
    },
    {
      title: "Top Ekspertlər",
      desc: "Minimum 4-8 il beynəlxalq və yerli brend təcrübəsinə malik aparıcı peşəkarlar.",
      icon: Award,
      color: "text-cyan-400",
    },
    {
      title: "Qorunan İş Rejimi",
      desc: "Rəsmi elektron aktlar, müqavilə və müəllif hüquqlarının tam qorunması təminatı.",
      icon: FileCheck2,
      color: "text-pink-400",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full purple-gradient-badge text-purple-300 text-xs font-semibold">
            <span>ÜSTÜNLÜKLƏRİMİZ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Niyə aparıcı şirkətlər <span className="purple-glow-text">Chai Studio</span> seçir?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Freelance xaosunu aradan qaldıran, dünya səviyyəli Silicon Valley keyfiyyət standartları.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-white/5 hover:border-purple-500/40 relative group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className={`w-6 h-6 ${r.color}`} />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {r.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
