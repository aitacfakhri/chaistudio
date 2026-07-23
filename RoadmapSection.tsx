"use client";

import { Compass, CheckCircle2, Clock, Sparkles } from "lucide-react";

export default function RoadmapSection() {
  const roadmapItems = [
    { title: "Vakansiyalar & İş Elanları", status: "Tamamlandı", desc: "Şirkətlərin tam ştatlı və freelance yaradıcı iş elanları bölməsi.", done: true },
    { title: "Yaradıcı Komandalar (Squad Mode)", status: "Hazırlanır", desc: "Bir layihəyə dizayner, video redaktor və SMM-çini eyni vaxtda cəlb etmək.", done: false },
    { title: "Təlimlər & Sertifikatlar", status: "2026 Q2", desc: "Chai Academy çərçivəsində gənc dizaynerlərin yoxlanılması və lisenziyalaşdırılması.", done: false },
    { title: "AI Logo Generator", status: "2026 Q3", desc: "Süni intellektlə vektor formatında anında ilkin loqo variantlarının generasiyası.", done: false },
    { title: "AI Content Generator", status: "2026 Q3", desc: "Sosial media və reklam kampaniyaları üçün avtomatlaşdırılmış kopiraytinq.", done: false },
    { title: "Marketing Paketləri", status: "2026 Q4", desc: "Startaplar üçün hər şey daxil aylıq rəqəmsal brendinq və böyümə abunəliyi.", done: false },
    { title: "Beynəlxalq Ödənişlər (Stripe Global)", status: "2026 Q4", desc: "ABŞ və Avropa müştəriləri üçün çoxvalyutalı kart və Apple Pay çıxışı.", done: false },
  ];

  return (
    <section className="py-24 bg-[#0e0e13]/60 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full purple-gradient-badge text-purple-300 text-xs font-semibold">
            <Compass className="w-3.5 h-3.5 text-purple-400" />
            <span>GƏLƏCƏK İNKİŞAF XƏRİTƏSİ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Chai Studio <span className="purple-glow-text">Yol Xəritəsi</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Platformamızı daim yeni süni intellekt alətləri və qlobal imkanlarla təkmilləşdiririk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapItems.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-white/5 hover:border-purple-500/40 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      item.done
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                    }`}
                  >
                    {item.status}
                  </span>
                  {item.done ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Clock className="w-4 h-4 text-purple-400" />
                  )}
                </div>

                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
