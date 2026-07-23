"use client";

import { Users, Layers, BarChart3, FileSpreadsheet, Building2, CheckCircle2 } from "lucide-react";

export default function CorporatePanelSection() {
  const corporateFeatures = [
    {
      title: "Komanda idarəetməsi",
      desc: "Şirkətinizin bütün marketinq və dizayn heyətini vahid korporativ hesaba əlavə edin.",
      icon: Users,
    },
    {
      title: "Birdən çox layihə",
      desc: "Eyni vaxtda 10-dan çox video, brendinq və dizayn layihəsini paralel idarə edin.",
      icon: Layers,
    },
    {
      title: "Aylıq hesabatlar",
      desc: "Xərclər, mütəxəssis performansı və vaxt qənaəti üzrə detallı analitik qrafiklər.",
      icon: BarChart3,
    },
    {
      title: "Elektron fakturalar",
      desc: "Rəsmi e-qaimə faktura, bank köçürməsi və hüquqi müqavilə təminatı.",
      icon: FileSpreadsheet,
    },
  ];

  return (
    <section id="corporate" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full purple-gradient-badge text-purple-300 text-xs font-semibold">
              <Building2 className="w-3.5 h-3.5 text-purple-400" />
              <span>KORPORATİV B2B HƏLLƏR</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Böyük şirkətlər və startaplar üçün <br />
              <span className="purple-glow-text">Chai Enterprise Paneli</span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Agentlik xərclərini 60%-dək azaldın. Şirkətiniz üçün xüsusi korporativ menecer və limitsiz komanda çıxışı ilə yaradıcı prosesi optimallaşdırın.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {corporateFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div key={idx} className="bg-[#121218] p-4 rounded-xl border border-white/5 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-purple-400" />
                    </div>
                    <div className="text-sm font-bold text-white">{feat.title}</div>
                    <div className="text-xs text-zinc-400 leading-relaxed">{feat.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-purple-500/30 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <div className="text-xs text-zinc-400">Korporativ Hesab: Pasha Holding A.Ş.</div>
                  <div className="text-base font-bold text-white mt-0.5">Aylıq Yaradıcı Panel</div>
                </div>
                <span className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full font-bold">
                  B2B PRO
                </span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="bg-[#121218] p-4 rounded-xl border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-zinc-400">Aktiv Paralel Layihələr</div>
                    <div className="text-lg font-bold text-white mt-1">6 Aktiv Layihə</div>
                  </div>
                  <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-lg">
                    Hamısı Vaxtında
                  </span>
                </div>

                <div className="bg-[#121218] p-4 rounded-xl border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-zinc-400">Rəsmi e-Qaimə Vəziyyəti</div>
                    <div className="text-sm font-bold text-white mt-1">#EQ-2026-8942 Hazırdır</div>
                  </div>
                  <button className="text-xs text-purple-300 bg-purple-600/20 hover:bg-purple-600/30 px-3 py-1.5 rounded-lg border border-purple-500/30">
                    PDF Yüklə
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
