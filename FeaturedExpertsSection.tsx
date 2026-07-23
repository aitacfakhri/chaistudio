"use client";

import { useState } from "react";
import { Star, ShieldCheck, Award, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

export interface ExpertData {
  id?: number;
  name: string;
  role: string;
  category: string;
  rating: string | number;
  reviewCount: number;
  completedProjects: number;
  experience: string;
  hourlyRate: number;
  startingPrice: number;
  deliveryDays: number;
  avatar: string;
  isVerified: boolean;
  isTopExpert: boolean;
  skills: string;
  bio: string;
  portfolioPreview: string;
}

interface FeaturedExpertsSectionProps {
  experts: ExpertData[];
  onOpenExpertModal: (expert: ExpertData) => void;
  onHireExpert: (expert: ExpertData) => void;
}

export default function FeaturedExpertsSection({
  experts,
  onOpenExpertModal,
  onHireExpert,
}: FeaturedExpertsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("Hamısı");

  const categories = [
    "Hamısı",
    "UI/UX Dizayn",
    "Brendinq",
    "Motion Dizayn",
    "Video Montaj",
    "SMM",
    "Mobiloqrafiya",
    "Reklam",
    "Qrafik Dizayn",
  ];

  const filteredExperts =
    selectedCategory === "Hamısı"
      ? experts
      : experts.filter((e) => e.category === selectedCategory);

  return (
    <section id="experts" className="py-24 bg-[#121218]/40 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full purple-gradient-badge text-purple-300 text-xs font-semibold">
              <Award className="w-3.5 h-3.5 text-purple-400" />
              <span>SEÇİLMİŞ TOP MÜTƏXƏSSİSLƏR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Yalnız ən yaxşı <span className="purple-glow-text">kreativ peşəkarlar</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Hər bir mütəxəssis Chai Studio heyəti tərəfindən portfoliosu, müştəri rəyləri və keyfiyyət standartları əsasında 100% yoxlanılmışdır.
            </p>
          </div>

          <div className="text-xs text-purple-300 font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Hazırda 2,500+ aktiv mütəxəssis
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-purple-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredExperts.map((exp, idx) => {
            let parsedSkills: string[] = [];
            try {
              parsedSkills = JSON.parse(exp.skills);
            } catch {
              parsedSkills = ["Kreativ", "Dizayn", "Pro"];
            }

            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 flex flex-col justify-between group border border-white/5 hover:border-purple-500/40 relative"
              >
                {/* Badges on top */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {exp.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> VERIFIED
                    </span>
                  </div>
                </div>

                {/* Profile Header */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="relative">
                    <img
                      src={exp.avatar}
                      alt={exp.name}
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-purple-500/40 group-hover:scale-105 transition-transform"
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#18181F] flex items-center justify-center text-[8px] text-white">
                      ✓
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                      {exp.name}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-1">{exp.role}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span className="text-xs font-bold text-white">{exp.rating}</span>
                      <span className="text-[10px] text-zinc-500">({exp.reviewCount} rəy)</span>
                    </div>
                  </div>
                </div>

                {/* Bio brief */}
                <p className="text-xs text-zinc-400 line-clamp-2 mb-4 leading-relaxed">
                  {exp.bio}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {parsedSkills.slice(0, 3).map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] bg-black/40 text-zinc-300 px-2 py-0.5 rounded border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Pricing & Deliverables */}
                <div className="pt-3 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-400">Başlanğıc qiymət:</span>
                    <span className="font-bold text-purple-300 text-sm">₼ {exp.startingPrice} AZN</span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-purple-400" /> {exp.deliveryDays} günə təhvil
                    </span>
                    <span>{exp.completedProjects} layihə</span>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={() => onOpenExpertModal(exp)}
                      className="text-xs py-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 font-medium transition-all text-center cursor-pointer"
                    >
                      Portfelio
                    </button>
                    <button
                      onClick={() => onHireExpert(exp)}
                      className="text-xs py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all shadow-[0_0_12px_rgba(139,92,246,0.3)] text-center cursor-pointer"
                    >
                      Sifariş Et
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
