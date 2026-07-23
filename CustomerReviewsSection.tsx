"use client";

import { Star, ShieldCheck, Quote } from "lucide-react";

export default function CustomerReviewsSection() {
  const reviews = [
    {
      name: "Elmir Quliyev",
      company: "FinTech Labs Baku",
      role: "Təsisçi & CEO",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80",
      project: "UI/UX Dizayn & Mobil Tətbiq",
      text: "Chai Studio vasitəsilə fintech mobil tətbiqimiz üçün Nicat bəylə çalışdıq. Təhlükəsiz depozit (escrow) sistemi sayəsində hər addım inanılmaz dərəcədə rahat və şəffaf oldu. Nəticə dünya səviyyəsindədir!",
    },
    {
      name: "Aysel Sultanova",
      company: "Bravo Retail Group",
      role: "Marketinq Direktoru",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80",
      project: "Video Montaj & Motion Dizayn",
      text: "Yeni brend kampaniyamızın video çarxlarını Teymur və Rəşad bəyə həvalə etdik. 48 saat ərzində ilk versiyanı göndərdilər. Silicon Valley keyfiyyətində iş təhvil aldıq.",
    },
    {
      name: "Kamran Rzayev",
      company: "Nova Hub Azerbaijan",
      role: "Əməliyyat Direktoru",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80",
      project: "SMM & Mobiloqrafiya",
      text: "Korporativ panel və e-faktura sistemi şirkətimizin işini çox asanlaşdırır. Hər ay 4 fərqli layihəni Chai Studio vasitəsilə idarə edirik. Dəstək komandası həmişə operativdir.",
    },
  ];

  return (
    <section className="py-24 bg-[#0e0e13]/60 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full purple-gradient-badge text-purple-300 text-xs font-semibold">
            <Quote className="w-3.5 h-3.5 text-purple-400" />
            <span>MÜŞTƏRİ RƏYLƏRİ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Azərbaycanın aparıcı biznesləri <span className="purple-glow-text">nə deyir?</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            98% müştəri məmnuniyyəti ilə tamamlanmış layihələrimizdən real rəylər.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 border border-white/5 hover:border-purple-500/40 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> VERIFIED
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-11 h-11 rounded-full object-cover border border-purple-500/40"
                />
                <div>
                  <div className="text-sm font-bold text-white">{rev.name}</div>
                  <div className="text-xs text-zinc-400">{rev.role} • {rev.company}</div>
                  <div className="text-[10px] text-purple-300 font-medium mt-0.5">
                    {rev.project}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
