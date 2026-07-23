"use client";

import { useState } from "react";
import { X, Check, ShieldCheck, Sparkles, Send, Lock } from "lucide-react";
import confetti from "canvas-confetti";

interface ProjectBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
  expertId?: number;
}

export default function ProjectBriefModal({
  isOpen,
  onClose,
  defaultCategory = "UI/UX Dizayn",
  expertId,
}: ProjectBriefModalProps) {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [serviceCategory, setServiceCategory] = useState(defaultCategory);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [budgetAzn, setBudgetAzn] = useState(650);
  const [promoCode, setPromoCode] = useState("CHAI20");
  const [promoApplied, setPromoApplied] = useState(true);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const finalBudget = promoApplied ? Math.round(budgetAzn * 0.8) : budgetAzn;
  const expertPart = Math.round(finalBudget * 0.7);
  const escrowPart = Math.round(finalBudget * 0.3);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientName,
          clientEmail,
          clientPhone,
          companyName,
          serviceCategory,
          projectTitle,
          projectDescription,
          budgetAzn: finalBudget,
          timelineDays: 4,
          expertId,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      }
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div className="bg-[#121218] border border-purple-500/40 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white flex items-center justify-center cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
              <Check className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white">Layihəniz Uğurla Qeydiyyata Alındı!</h3>

            <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
              Təbrik edirik! Brifiniz təhlükəsiz depozit (escrow) sistemi ilə qorunur. Təyin olunmuş yoxlanılmış mütəxəssis 15 dəqiqə ərzində sizinlə əlaqə saxlayacaq.
            </p>

            <div className="bg-black/50 p-4 rounded-2xl border border-white/10 max-w-sm mx-auto text-xs text-zinc-300 space-y-1 text-left">
              <div>Layihə: <strong>{projectTitle || "Yeni Kreativ Sifariş"}</strong></div>
              <div>Kateqoriya: <strong className="text-purple-300">{serviceCategory}</strong></div>
              <div>Qorunan Büdcə: <strong className="text-emerald-400">₼ {finalBudget} AZN</strong></div>
            </div>

            <button
              onClick={onClose}
              className="glow-btn px-8 py-3 rounded-xl font-bold text-sm text-white cursor-pointer"
            >
              Tamamla və Panelə Qayıt
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 space-y-1">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[11px] font-bold">
                <Sparkles className="w-3 h-3" />
                <span>YENİ LAYİHƏ BRİFİ & SİFARİŞ</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white">Layihənizi İndi Başladın</h2>
              <p className="text-xs text-zinc-400">
                Məlumatları doldurun. Ödənişiniz işi tam bəyənənə qədər depozitdə bloklanacaq.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">Adınız və Soyadınız *</label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Məs: Fərid Məmmədli"
                    className="w-full bg-[#18181F] border border-white/10 focus:border-purple-500 rounded-xl px-3.5 py-2.5 text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">E-poçt Ünvanınız *</label>
                  <input
                    type="email"
                    required
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="name@company.az"
                    className="w-full bg-[#18181F] border border-white/10 focus:border-purple-500 rounded-xl px-3.5 py-2.5 text-white outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">Şirkət / Brend Adı</label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Məs: NeoSoft MMC"
                    className="w-full bg-[#18181F] border border-white/10 focus:border-purple-500 rounded-xl px-3.5 py-2.5 text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">Xidmət Kateqoriyası</label>
                  <select
                    value={serviceCategory}
                    onChange={(e) => setServiceCategory(e.target.value)}
                    className="w-full bg-[#18181F] border border-white/10 focus:border-purple-500 rounded-xl px-3.5 py-2.5 text-white outline-none"
                  >
                    <option value="UI/UX Dizayn">UI/UX Dizayn</option>
                    <option value="Brendinq">Brendinq</option>
                    <option value="Video Montaj">Video Montaj</option>
                    <option value="Motion Dizayn">Motion Dizayn</option>
                    <option value="SMM">SMM</option>
                    <option value="Mobiloqrafiya">Mobiloqrafiya</option>
                    <option value="Reklam">Reklam</option>
                    <option value="Qrafik Dizayn">Qrafik Dizayn</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-zinc-300 font-semibold mb-1">Layihənin Başlığı *</label>
                <input
                  type="text"
                  required
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  placeholder="Məs: Fintech Mobil Tətbiq üçün Dizayn Sistemi"
                  className="w-full bg-[#18181F] border border-white/10 focus:border-purple-500 rounded-xl px-3.5 py-2.5 text-white outline-none"
                />
              </div>

              <div>
                <label className="block text-zinc-300 font-semibold mb-1">Layihə Təsviri / Brif *</label>
                <textarea
                  rows={3}
                  required
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  placeholder="Layihənizin məqsədini, istədiyiniz üslubu və vacib detalları qeyd edin..."
                  className="w-full bg-[#18181F] border border-white/10 focus:border-purple-500 rounded-xl px-3.5 py-2.5 text-white outline-none resize-none"
                />
              </div>

              {/* Budget and Promo Code */}
              <div className="bg-black/40 p-4 rounded-2xl border border-white/5 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Təxmini Büdcə:</span>
                  <span className="font-bold text-base text-purple-300">₼ {finalBudget} AZN</span>
                </div>

                <input
                  type="range"
                  min={250}
                  max={3000}
                  step={50}
                  value={budgetAzn}
                  onChange={(e) => setBudgetAzn(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-800 rounded-lg accent-purple-500"
                />

                <div className="flex items-center justify-between pt-1 text-[11px]">
                  <div className="flex items-center gap-1 text-purple-300">
                    <Sparkles className="w-3 h-3" />
                    <span>Promo Kod: <strong>{promoCode}</strong> (20% Tətbiq edildi)</span>
                  </div>
                  <div className="text-emerald-400 font-semibold">
                    Escrow Zəmanəti Aktivdir
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full glow-btn py-3.5 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <span>Layihə göndərilir...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Layihəni Təsdiqlə və Göndər</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
