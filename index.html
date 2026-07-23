"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedExpertsSection, { ExpertData } from "@/components/FeaturedExpertsSection";
import AiSmartMatchSection from "@/components/AiSmartMatchSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProjectTrackingSection from "@/components/ProjectTrackingSection";
import BuiltInChatSection from "@/components/BuiltInChatSection";
import SecurePaymentSection from "@/components/SecurePaymentSection";
import RevisionPolicySection from "@/components/RevisionPolicySection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CustomerReviewsSection from "@/components/CustomerReviewsSection";
import CorporatePanelSection from "@/components/CorporatePanelSection";
import PromotionsSection from "@/components/PromotionsSection";
import MobileAppSection from "@/components/MobileAppSection";
import RoadmapSection from "@/components/RoadmapSection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";
import ProjectBriefModal from "@/components/ProjectBriefModal";
import ExpertModal from "@/components/ExpertModal";

const fallbackExperts: ExpertData[] = [
  {
    id: 1,
    name: "Nicat Əliyev",
    role: "Senior UI/UX & Məhsul Dizayneri",
    category: "UI/UX Dizayn",
    rating: "4.99",
    reviewCount: 184,
    completedProjects: 240,
    experience: "8 il təcrübə",
    hourlyRate: 85,
    startingPrice: 650,
    deliveryDays: 3,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    isVerified: true,
    isTopExpert: true,
    skills: JSON.stringify(["Figma", "Design Systems", "Prototyping", "Fintech UI", "SaaS"]),
    bio: "Fintech, SaaS və e-ticarət platformaları üçün beynəlxalq səviyyəli UI/UX dizayn sistemləri hazırlayıram. 200-dən çox uğurlu layihə.",
    portfolioPreview: JSON.stringify(["BirBank Redesign", "FinCloud SaaS UI", "NeoPay Mobile"]),
  },
  {
    id: 2,
    name: "Leyla Məmmədova",
    role: "Kreativ Brendinq Direktoru",
    category: "Brendinq",
    rating: "5.00",
    reviewCount: 142,
    completedProjects: 195,
    experience: "7 il təcrübə",
    hourlyRate: 90,
    startingPrice: 800,
    deliveryDays: 4,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    isVerified: true,
    isTopExpert: true,
    skills: JSON.stringify(["Brand Strategy", "Brandbook", "Typography", "Visual Identity", "Packaging"]),
    bio: "Şirkətlərin fəlsəfəsini premium və unikal vizual kimliyə çevirirəm. Lüks brendinq və korporativ stil üzrə ixtisaslaşmışam.",
    portfolioPreview: JSON.stringify(["Aura Lüks Parfüm", "Caspian Heights", "Köz Gourmet"]),
  },
  {
    id: 3,
    name: "Teymur Qasımov",
    role: "3D & 2D Motion Dizayner",
    category: "Motion Dizayn",
    rating: "4.97",
    reviewCount: 119,
    completedProjects: 160,
    experience: "6 il təcrübə",
    hourlyRate: 75,
    startingPrice: 450,
    deliveryDays: 3,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    isVerified: true,
    isTopExpert: true,
    skills: JSON.stringify(["After Effects", "Blender 3D", "Cinema 4D", "Logo Motion", "Explainer Videos"]),
    bio: "Məhsulunuzu hərəkətə gətirən dinamik 3D və 2D animasiyalar. Reklam və məhsul təqdimatları üçün yüksək keyfiyyətli animasiya.",
    portfolioPreview: JSON.stringify(["CryptoPay 3D Reel", "CyberShield Intro", "Vortex Launch"]),
  },
  {
    id: 4,
    name: "Aygün Rüstəmova",
    role: "SMM & Vizual Kontent Direktoru",
    category: "SMM",
    rating: "4.96",
    reviewCount: 205,
    completedProjects: 310,
    experience: "5 il təcrübə",
    hourlyRate: 55,
    startingPrice: 350,
    deliveryDays: 2,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    isVerified: true,
    isTopExpert: true,
    skills: JSON.stringify(["Instagram Grid", "Reels Strategy", "Content Plan", "Copywriting", "Meta Ads"]),
    bio: "Brendinizin sosial mediada diqqət çəkməsi üçün vizual estetika və yüksək baxış gətirən viral kontent strategiyası qururam.",
    portfolioPreview: JSON.stringify(["CoffeeLab Baku SMM", "SilkRoad Media", "UrbanStyle Hub"]),
  },
  {
    id: 5,
    name: "Rəşad Kərimov",
    role: "Senior Video Redaktor & Colorist",
    category: "Video Montaj",
    rating: "4.98",
    reviewCount: 167,
    completedProjects: 220,
    experience: "9 il təcrübə",
    hourlyRate: 70,
    startingPrice: 400,
    deliveryDays: 2,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    isVerified: true,
    isTopExpert: true,
    skills: JSON.stringify(["Premiere Pro", "DaVinci Resolve", "Sound Design", "Color Grading", "Commercials"]),
    bio: "Kinematoqrafik rəng korreksiyası, dinamik saund dizayn və reklam video montajı üzrə 9 illik beynəlxalq təcrübə.",
    portfolioPreview: JSON.stringify(["Formula 1 Baku Promo", "TechSummit Video", "Porsche Reel"]),
  },
  {
    id: 6,
    name: "Nərgiz Babayeva",
    role: "Senior Qrafik Dizayner",
    category: "Qrafik Dizayn",
    rating: "4.95",
    reviewCount: 230,
    completedProjects: 340,
    experience: "6 il təcrübə",
    hourlyRate: 50,
    startingPrice: 250,
    deliveryDays: 2,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    isVerified: true,
    isTopExpert: true,
    skills: JSON.stringify(["Illustrator", "Photoshop", "Packaging Design", "Vector Art", "Print Media"]),
    bio: "Minimalist loqo, qablaşdırma və promo materiallar. Hər bir vizual detalları ilə diqqət çəkən kreativ qrafik həllər.",
    portfolioPreview: JSON.stringify(["Organica Çay Qutusu", "Baku Jazz Poster", "Artisanal Coffee"]),
  },
  {
    id: 7,
    name: "Fərid İsmayılov",
    role: "Mobiloqraf & Məhsul Fotoqrafı",
    category: "Mobiloqrafiya",
    rating: "4.94",
    reviewCount: 98,
    completedProjects: 145,
    experience: "4 il təcrübə",
    hourlyRate: 60,
    startingPrice: 300,
    deliveryDays: 2,
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
    isVerified: true,
    isTopExpert: true,
    skills: JSON.stringify(["iPhone 16 Pro Max 4K", "Product Shoot", "Food Shoot", "Reels Production", "Lightroom"]),
    bio: "Restoranlar, e-ticarət məhsulları və fərdi brendlər üçün premium mobiloqrafik çəkiliş və operativ montaj.",
    portfolioPreview: JSON.stringify(["Entrée Baku Reels", "Jewel Lux Foto", "Fitness Bar Promo"]),
  },
  {
    id: 8,
    name: "Səbinə Əhmədova",
    role: "Performans Reklam & Kreativ Strateg",
    category: "Reklam",
    rating: "4.99",
    reviewCount: 154,
    completedProjects: 210,
    experience: "7 il təcrübə",
    hourlyRate: 80,
    startingPrice: 500,
    deliveryDays: 3,
    avatar: "https://images.unsplash.com/photo-1534751516642-a171edd2521d?w=400&auto=format&fit=crop&q=80",
    isVerified: true,
    isTopExpert: true,
    skills: JSON.stringify(["Meta Ads", "Google Display", "Conversion Copy", "A/B Test Banners", "ROAS Analytics"]),
    bio: "Satış gətirən reklam bannerləri və yüksək konversiyalı vizual kreativlər. 5X+ ROAS hədəfli marketinq dizaynı.",
    portfolioPreview: JSON.stringify(["Black Friday Meta Ads", "SaaS Funnel Ads", "AutoStore Campaign"]),
  },
];

export default function Home() {
  const [experts, setExperts] = useState<ExpertData[]>(fallbackExperts);
  const [briefModalOpen, setBriefModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("UI/UX Dizayn");
  const [selectedExpertId, setSelectedExpertId] = useState<number | undefined>(undefined);
  const [activeExpertModal, setActiveExpertModal] = useState<ExpertData | null>(null);

  useEffect(() => {
    fetch("/api/experts")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.experts && data.experts.length > 0) {
          setExperts(data.experts);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const handleOpenBrief = (category?: string, expertId?: number) => {
    if (category) setSelectedCategory(category);
    if (expertId) setSelectedExpertId(expertId);
    setBriefModalOpen(true);
  };

  const handleScrollToExperts = () => {
    const el = document.getElementById("experts");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleHireExpert = (exp: ExpertData) => {
    setSelectedCategory(exp.category);
    setSelectedExpertId(exp.id);
    setBriefModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#09090B] text-white selection:bg-purple-600 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenBriefModal={handleOpenBrief} />

      {/* Hero Section with Floating SaaS Dashboard */}
      <HeroSection
        onOpenBriefModal={() => handleOpenBrief()}
        onScrollToExperts={handleScrollToExperts}
      />

      {/* Statistics & Partner Brands Ticker */}
      <StatsSection />

      {/* Services Grid (8 categories) */}
      <ServicesSection
        onSelectService={(cat) => handleOpenBrief(cat)}
      />

      {/* Featured Verified Experts */}
      <FeaturedExpertsSection
        experts={experts}
        onOpenExpertModal={(exp) => setActiveExpertModal(exp)}
        onHireExpert={handleHireExpert}
      />

      {/* AI Smart Match Playground */}
      <AiSmartMatchSection onHireExpert={handleHireExpert} />

      {/* How It Works (10 Steps Visual Timeline) */}
      <HowItWorksSection onOpenBriefModal={() => handleOpenBrief()} />

      {/* Interactive Project Tracking Dashboard */}
      <ProjectTrackingSection />

      {/* Built-in Chat & Voice Notes Messenger Simulation */}
      <BuiltInChatSection />

      {/* Secure Payment / Escrow Breakdown (70/30 Split) */}
      <SecurePaymentSection />

      {/* Revision Policy Guarantee */}
      <RevisionPolicySection />

      {/* Why Choose Chai Studio (8 Bento Grid) */}
      <WhyChooseSection />

      {/* Customer Reviews & Testimonials */}
      <CustomerReviewsSection />

      {/* Corporate B2B Dashboard */}
      <CorporatePanelSection />

      {/* Promotions & Copyable Promo Code */}
      <PromotionsSection />

      {/* Mobile App (Titanium iPhone Mockup) */}
      <MobileAppSection />

      {/* Future Roadmap */}
      <RoadmapSection />

      {/* FAQ Accordion */}
      <FaqSection />

      {/* Final Luxury CTA */}
      <FinalCtaSection onOpenBriefModal={() => handleOpenBrief()} />

      {/* Footer */}
      <Footer />

      {/* Interactive Project Brief Modal */}
      <ProjectBriefModal
        isOpen={briefModalOpen}
        onClose={() => setBriefModalOpen(false)}
        defaultCategory={selectedCategory}
        expertId={selectedExpertId}
      />

      {/* Interactive Expert Detail Modal */}
      <ExpertModal
        expert={activeExpertModal}
        onClose={() => setActiveExpertModal(null)}
        onHire={handleHireExpert}
      />
    </main>
  );
}
