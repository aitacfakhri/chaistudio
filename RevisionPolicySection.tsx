"use client";

import { CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";

export default function RevisionPolicySection() {
  return (
    <section className="py-24 bg-[#0e0e13]/60 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full purple-gradient-badge text-purple-300 text-xs font-semibold">
            <RefreshCw className="w-3.5 h-3.5 text-purple-400" />
            <span>ŞƏFFAF DÜZƏLİŞ VƏ ZƏMANƏT SİYASƏTİ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            İşiniz tam ürəyinizcə olanadək <span className="purple-glow-text">limitsiz düzəliş</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Müştəri məmnuniyyəti bizim bir nömrəli prinsipimizdir. Düzəliş qaydalarımız həm müştərini, həm də mütəxəssisi qoruyur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Unlimited revisions */}
          <div className="glass-card rounded-3xl p-8 border border-emerald-500/30 relative">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              İlkin Brif Daxilində: <span className="text-emerald-400">Limitsiz Düzəliş</span>
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
              Layihənin ilkin brifində qeyd olunan rənglər, şriftlər, kompozisiya, mətn düzəlişləri və incə dizayn detalları 100% ödənişsiz şəkildə dəfələrlə tənzimlənir.
            </p>

            <ul className="space-y-2.5 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Rəng çalarları və kontrast dəyişikliyi
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Elementlərin yerləşməsi və ölçülər
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Tipoqrafika və mətn redaktəsi
              </li>
            </ul>
          </div>

          {/* Card 2: New concept */}
          <div className="glass-card rounded-3xl p-8 border border-purple-500/30 relative">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-6">
              <AlertCircle className="w-6 h-6 text-purple-400" />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              Tamamilə Yeni Konsept: <span className="text-purple-300">Yeni Sifariş</span>
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
              Əgər layihə təhvil verildikdən sonra ilkin brifdən kənar tamamilə fərqli bir sektor və ya fərqli brend istiqaməti tələb olunarsa, bu yeni sifariş kimi qiymətləndirilir.
            </p>

            <ul className="space-y-2.5 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Layihə mövzusunun tamamilə dəyişdirilməsi
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Yeni video ssenarisinin sıfırdan yazılması
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Brifdən kənar əlavə səhifələrin sifarişi
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
