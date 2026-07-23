"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Ödənişlər necə həyata keçirilir və depozit (escrow) sistemi necə işləyir?",
      a: "Sifariş zamanı ödənişiniz birbaşa ekspertə deyil, Chai Studio-nun qorunan bank depozit hesabına köçürülür. Mütəxəssis işi tamamlayıb sizə təhvil verdikdən və siz layihəni 100% bəyənib təsdiqlədikdən sonra məbləğ ekspertə ödənilir.",
    },
    {
      q: "Layihənin ilk versiyası neçə günə təhvil verilir?",
      a: "Seçdiyiniz xidmətdən asılı olaraq ilk qaralama adətən 24 saat ilə 72 saat arasında daxili mesencer və fayl paneli vasitəsilə sizə təqdim olunur.",
    },
    {
      q: "Təhvil verilən layihəyə düzəliş istəmək mümkündürmü?",
      a: "Bəli! İlkin brif çərçivəsində rəng, şrift, mətn və incə kompozisiya düzəlişləri tamamilə pulsuzdur və limitsiz sayda həyata keçirilir.",
    },
    {
      q: "Chai Studio platformasındakı mütəxəssislər necə yoxlanılır?",
      a: "Hər bir namizədin portfoliosu, beynəlxalq və yerli şirkətlərdəki iş təcrübəsi, şəxsiyyəti və müştəri rəyləri Chai Studio yaradıcı komitəsi tərəfindən 3 mərhələli sınaqdan keçirilir. Yalnız ən yaxşı 3% mütəxəssis platformaya qəbul edilir.",
    },
    {
      q: "Əgər mütəxəssis işi vaxtında təhvil verməsə, pulum geri qaytarılırmı?",
      a: "Bəli, əgər mütəxəssis razılaşdırılmış təhvil müddətini pozarsa və ya işi icra edə bilməzsə, depozitdə dondurulmuş vəsaitiniz 100% geri qaytarılır.",
    },
    {
      q: "Əqli mülkiyyət və müəllif hüquqları kimə məxsus olur?",
      a: "Layihə təsdiqlənib ödəniş tamamlandıqdan sonra bütün müəllif hüquqları və vektor/mənbə faylları tam hüquqlu şəkildə sifarişçiyə (müştəriyə) məxsus olur.",
    },
  ];

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full purple-gradient-badge text-purple-300 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
            <span>TEZ-TEZ VERİLƏN SUALLAR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Suallarınız var? <span className="purple-glow-text">Cavablar buradadır.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Ödəniş, çatdırılma və təhlükəsizliklə bağlı ən çox soruşulan suallar.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-bold text-sm sm:text-base text-white">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-purple-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
