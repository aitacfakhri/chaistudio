"use client";

import {
  Palette,
  Sparkles,
  Share2,
  Film,
  Activity,
  Layout,
  Camera,
  Megaphone,
  ArrowRight,
  Clock,
} from "lucide-react";

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const services = [
    {
      title: "Qrafik Dizayn",
      icon: Palette,
      desc: "Unikal loqo, vizual korporativ kimlik, qablaşdırma və çap materialları dizaynı.",
      price: "₼ 250 AZN-dən",
      delivery: "2-3 gün",
      popular: false,
    },
    {
      title: "Brendinq",
      icon: Sparkles,
      desc: "Şirkət fəlsəfənizi əks etdirən brandbook, tipoqrafika və tam brend strategiyası.",
      price: "₼ 800 AZN-dən",
      delivery: "4-5 gün",
      popular: true,
    },
    {
      title: "SMM",
      icon: Share2,
      desc: "Sosial media idarəçiliyi, vizual Instagram qridi, viral post və hekayə dizaynı.",
      price: "₼ 350 AZN-dən",
      delivery: "2 gün",
      popular: false,
    },
    {
      title: "Video Montaj",
      icon: Film,
      desc: "YouTube, Reels və reklam çarxları üçün kinematoqrafik montaj və saund dizayn.",
      price: "₼ 400 AZN-dən",
      delivery: "2 gün",
      popular: true,
    },
    {
      title: "Motion Dizayn",
      icon: Activity,
      desc: "2D/3D dinamik animasiyalar, loqo canlandırması və məhsul explainer videoları.",
      price: "₼ 450 AZN-dən",
      delivery: "3 gün",
      popular: false,
    },
    {
      title: "UI/UX Dizayn",
      icon: Layout,
      desc: "Mobil tətbiq və veb-saytlar üçün Figma interfeysi və dizayn sistemləri.",
      price: "₼ 650 AZN-dən",
      delivery: "3-4 gün",
      popular: true,
    },
    {
      title: "Mobiloqrafiya",
      icon: Camera,
      desc: "Restoran və e-ticarət məhsulları üçün 4K iPhone çəkilişi və sürətli montaj.",
      price: "₼ 300 AZN-dən",
      delivery: "2 gün",
      popular: false,
    },
    {
      title: "Reklam",
      icon: Megaphone,
      desc: "Meta Ads və Google kampaniyaları üçün yüksək satış konversiyalı reklam bannerləri.",
      price: "₼ 500 AZN-dən",
      delivery: "2-3 gün",
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full purple-gradient-badge text-purple-300 text-xs font-semibold">
            <span>PREMIUM XİDMƏTLƏRİMİZ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Biznesinizi böyüdəcək <span className="purple-glow-text">kreativ sahələr</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Hər sahə üzrə yalnız portfeliosu və peşəkarlığı yoxlanılmış top ekspertlərlə çalışın.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between relative group cursor-pointer"
                onClick={() => onSelectService(item.title)}
              >
                {item.popular && (
                  <div className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-purple-600 text-white text-[10px] font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(139,92,246,0.8)]">
                    Populyar
                  </div>
                )}

                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-purple-600/20 transition-all">
                    <Icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-zinc-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-purple-400" />
                      {item.delivery}
                    </div>
                    <div className="text-sm font-bold text-purple-300">{item.price}</div>
                  </div>

                  <button className="w-9 h-9 rounded-lg bg-white/5 group-hover:bg-purple-600 flex items-center justify-center text-zinc-300 group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
