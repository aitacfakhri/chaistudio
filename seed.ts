import { db } from "@/db";
import { experts, reviews, projects } from "@/db/schema";
import { sql } from "drizzle-orm";

export const initialExperts = [
  {
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
    skills: JSON.stringify(["Figma", "Design Systems", "Prototyping", "Fintech UI", "SaaS", "Mobile App"]),
    bio: "Fintech, SaaS və e-ticarət platformaları üçün beynəlxalq səviyyəli UI/UX dizayn sistemləri hazırlayıram. 200-dən çox uğurlu layihə.",
    portfolioPreview: JSON.stringify(["BirBank Redesign", "FinCloud SaaS UI", "NeoPay Mobile"]),
  },
  {
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

export const initialReviews = [
  {
    clientName: "Elmir Quliyev",
    clientCompany: "FinTech Labs Baku",
    clientRole: "Təsisçi & CEO",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    projectType: "UI/UX Dizayn & Brendinq",
    comment: "Chai Studio vasitəsilə mobil bankçılıq tətbiqimiz üçün Nicat bəylə çalışdıq. Təhlükəsiz depozit (escrow) sistemi sayəsində hər addım inanılmaz dərəcədə rahat və şəffaf oldu. Nəticə dünya səviyyəsindədir!",
    budgetAzn: 1800,
  },
  {
    clientName: "Aysel Sultanova",
    clientCompany: "Bravo Retail Group",
    clientRole: "Marketinq Direktoru",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    projectType: "Video Montaj & Motion Dizayn",
    comment: "Yeni brend kampaniyamızın video çarxlarını Teymur və Rəşad bəyə həvalə etdik. 48 saat ərzində ilk versiyanı göndərdilər. Silicon Valley keyfiyyətində iş təhvil aldıq.",
    budgetAzn: 1250,
  },
  {
    clientName: "Kamran Rzayev",
    clientCompany: "Nova Hub Azerbaijan",
    clientRole: "Əməliyyat Direktoru",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    projectType: "SMM & Mobiloqrafiya",
    comment: "Korporativ panel və e-faktura sistemi şirkətimizin işini çox asanlaşdırır. Hər ay 4 fərqli layihəni Chai Studio vasitəsilə idarə edirik. Dəstək komandası həmişə operativdir.",
    budgetAzn: 2400,
  },
];

export async function ensureDbInitialized() {
  try {
    // Create tables if not exist using raw SQL
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS experts (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        role TEXT NOT NULL,
        category TEXT NOT NULL,
        rating NUMERIC(3,2) NOT NULL DEFAULT 4.95,
        review_count INTEGER NOT NULL DEFAULT 48,
        completed_projects INTEGER NOT NULL DEFAULT 120,
        experience TEXT NOT NULL,
        hourly_rate INTEGER NOT NULL DEFAULT 60,
        starting_price INTEGER NOT NULL DEFAULT 250,
        delivery_days INTEGER NOT NULL DEFAULT 3,
        avatar TEXT NOT NULL,
        is_verified BOOLEAN NOT NULL DEFAULT true,
        is_top_expert BOOLEAN NOT NULL DEFAULT true,
        skills TEXT NOT NULL,
        bio TEXT NOT NULL,
        portfolio_preview TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        client_name TEXT NOT NULL,
        client_email TEXT NOT NULL,
        client_phone TEXT,
        company_name TEXT,
        service_category TEXT NOT NULL,
        project_title TEXT NOT NULL,
        project_description TEXT NOT NULL,
        budget_azn INTEGER NOT NULL DEFAULT 500,
        timeline_days INTEGER NOT NULL DEFAULT 5,
        status TEXT NOT NULL DEFAULT 'Beh Ödənildi',
        expert_id INTEGER,
        created_at TIMESTAMP DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS reviews (
        id SERIAL PRIMARY KEY,
        client_name TEXT NOT NULL,
        client_company TEXT NOT NULL,
        client_role TEXT NOT NULL,
        avatar TEXT NOT NULL,
        rating INTEGER NOT NULL DEFAULT 5,
        project_type TEXT NOT NULL,
        comment TEXT NOT NULL,
        budget_azn INTEGER NOT NULL DEFAULT 750,
        created_at TIMESTAMP DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id SERIAL PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS ai_matching_logs (
        id SERIAL PRIMARY KEY,
        query_text TEXT NOT NULL,
        matched_category TEXT NOT NULL,
        match_score INTEGER NOT NULL DEFAULT 97,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    // Check if experts table has data
    const existing = await db.select().from(experts).limit(1);
    if (existing.length === 0) {
      for (const item of initialExperts) {
        await db.insert(experts).values(item);
      }
    }

    const existingReviews = await db.select().from(reviews).limit(1);
    if (existingReviews.length === 0) {
      for (const r of initialReviews) {
        await db.insert(reviews).values(r);
      }
    }
  } catch (err) {
    console.error("DB Init error:", err);
  }
}
