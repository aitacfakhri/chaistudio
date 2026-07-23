"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";

interface HowItWorksProps {
  onOpenBriefModal: () => void;
}

export default function HowItWorksSection({ onOpenBriefModal }: HowItWorksProps) {
  const steps = [
    {
      num: "01",
      title: "Xidmət seç",
      desc: "İhtiyacınıza uyğun qrafik dizayn, brendinq, video və ya UI/UX kateqoriyasını seçin.",
    },
    {
      num: "02",
      title: "Mütəxəssis seç",
      desc: "Portfelio, reytinq və çatdırılma vaxtına görə ən yaxşı verified eksperti müəyyən edin.",
    },
    {
      num: "03",
      title: "Brif doldur",
      desc: "Layihə hədəflərinizi, rəng və üslub istəklərinizi brif formasında qeyd edin.",
    },
    {
      num: "04",
      title: "Beh ödə",
      desc: "Ödənişiniz Chai Studio təhlükəsiz depozit hesabında bloklanır və qorunur.",
    },
    {
      num: "05",
      title: "Layihə başlayır",
      desc: "Mütəxəssis dərhal daxili iş panelində işə start verir və ilk eskizləri hazırlayır.",
    },
    {
      num: "06",
      title: "Statusu izləyin",
      desc: "Canlı layihə izləmə panelində işin faizini və mərhələlərini anbaan izləyin.",
    },
    {
      num: "07",
      title: "İlk versiyanı qəbul edin",
      desc: "Təyin olunan vaxtda ilkin dizayn və ya montaj qaralamasını nəzərdən keçirin.",
    },
    {
      num: "08",
      title: "Düzəliş göndərin",
      desc: "İlkin brif çərçivəsində istədiyiniz təkmilləşdirmə və dəyişiklikləri çatda bildirin.",
    },
    {
      num: "09",
      title: "Təsdiqləyin",
      desc: "İş tam ürəyinizcə olduqda yekun təhvil düyməsini sıxaraq layihəni qəbul edin.",
    },
    {
      num: "10",
      title: "Son ödəniş avtomatik köçürülsün",
      desc: "Təsdiqinizdən sonra depozitdəki vəsait avtomatik olaraq mütəxəssisə köçürülür.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#0e0e13]/80 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full purple-gradient-badge text-purple-300 text-xs font-semibold">
            <span>10 MƏRHƏLƏLİ ŞƏFFAF PROSES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Chai Studio <span className="purple-glow-text">necə işləyir?</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            İlk ideyadan son təhvilədək tamamilə sığortalanmış, sürətli və şəffaf iş axını.
          </p>
        </div>

        {/* 10 Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-5 border border-white/5 hover:border-purple-500/40 relative flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-black font-mono bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
                    {s.num}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-purple-400/50 group-hover:text-purple-400 transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBriefModal}
            className="glow-btn inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white cursor-pointer"
          >
            <span>Layihənizi İndi Başladın</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
