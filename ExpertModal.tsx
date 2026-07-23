"use client";

import { X, Star, ShieldCheck, Clock, CheckCircle2, Award } from "lucide-react";
import { ExpertData } from "./FeaturedExpertsSection";

interface ExpertModalProps {
  expert: ExpertData | null;
  onClose: () => void;
  onHire: (expert: ExpertData) => void;
}

export default function ExpertModal({ expert, onClose, onHire }: ExpertModalProps) {
  if (!expert) return null;

  let skillsList: string[] = [];
  let portfolioList: string[] = [];
  try {
    skillsList = JSON.parse(expert.skills);
  } catch {
    skillsList = ["Figma", "Creative Suite", "Pro"];
  }

  try {
    portfolioList = JSON.parse(expert.portfolioPreview);
  } catch {
    portfolioList = ["Brendinq Sistemi", "Vizual Kampaniya"];
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div className="bg-[#121218] border border-purple-500/40 rounded-3xl w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white flex items-center justify-center cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Profile Head */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={expert.avatar}
            alt={expert.name}
            className="w-16 h-16 rounded-2xl object-cover border-2 border-purple-500/50"
          />
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white">{expert.name}</h2>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                VERIFIED
              </span>
            </div>
            <p className="text-xs text-zinc-400">{expert.role}</p>
            <div className="flex items-center gap-2 mt-1 text-xs">
              <span className="flex items-center gap-1 text-amber-400 font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400" /> {expert.rating}
              </span>
              <span className="text-zinc-500">•</span>
              <span className="text-zinc-400">{expert.completedProjects} layihə</span>
              <span className="text-zinc-500">•</span>
              <span className="text-purple-300">{expert.experience}</span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-6 bg-black/30 p-4 rounded-2xl border border-white/5">
          <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Haqqında</h3>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{expert.bio}</p>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2.5">
            İxtisas və Bacarıqlar
          </h3>
          <div className="flex flex-wrap gap-2">
            {skillsList.map((sk, idx) => (
              <span
                key={idx}
                className="text-xs bg-purple-500/10 text-purple-300 border border-purple-500/20 px-3 py-1 rounded-xl"
              >
                {sk}
              </span>
            ))}
          </div>
        </div>

        {/* Portfolio Highlights */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2.5">
            Seçilmiş Portfelio Layihələri
          </h3>
          <div className="space-y-2">
            {portfolioList.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#18181F] p-3 rounded-xl border border-white/5 flex items-center justify-between text-xs"
              >
                <span className="font-semibold text-white">{item}</span>
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                  Tamamlanıb
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Booking Action */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <div>
            <div className="text-xs text-zinc-400">Başlanğıc Qiymət:</div>
            <div className="text-lg font-bold text-purple-300">₼ {expert.startingPrice} AZN</div>
          </div>

          <button
            onClick={() => {
              onClose();
              onHire(expert);
            }}
            className="glow-btn px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white cursor-pointer"
          >
            Bu Mütəxəssislə Sifariş Et
          </button>
        </div>
      </div>
    </div>
  );
}
