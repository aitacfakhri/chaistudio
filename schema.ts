import { pgTable, serial, text, integer, numeric, boolean, timestamp } from "drizzle-orm/pg-core";

export const experts = pgTable("experts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  category: text("category").notNull(),
  rating: numeric("rating", { precision: 3, scale: 2 }).notNull().default("4.95"),
  reviewCount: integer("review_count").notNull().default(48),
  completedProjects: integer("completed_projects").notNull().default(120),
  experience: text("experience").notNull(),
  hourlyRate: integer("hourly_rate").notNull().default(60),
  startingPrice: integer("starting_price").notNull().default(250),
  deliveryDays: integer("delivery_days").notNull().default(3),
  avatar: text("avatar").notNull(),
  isVerified: boolean("is_verified").notNull().default(true),
  isTopExpert: boolean("is_top_expert").notNull().default(true),
  skills: text("skills").notNull(), // JSON string array
  bio: text("bio").notNull(),
  portfolioPreview: text("portfolio_preview").notNull(), // JSON string
  createdAt: timestamp("created_at").defaultNow(),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  clientName: text("client_name").notNull(),
  clientEmail: text("client_email").notNull(),
  clientPhone: text("client_phone"),
  companyName: text("company_name"),
  serviceCategory: text("service_category").notNull(),
  projectTitle: text("project_title").notNull(),
  projectDescription: text("project_description").notNull(),
  budgetAzn: integer("budget_azn").notNull().default(500),
  timelineDays: integer("timeline_days").notNull().default(5),
  status: text("status").notNull().default("Beh Ödənildi"),
  expertId: integer("expert_id"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  clientName: text("client_name").notNull(),
  clientCompany: text("client_company").notNull(),
  clientRole: text("client_role").notNull(),
  avatar: text("avatar").notNull(),
  rating: integer("rating").notNull().default(5),
  projectType: text("project_type").notNull(),
  comment: text("comment").notNull(),
  budgetAzn: integer("budget_azn").notNull().default(750),
  createdAt: timestamp("created_at").defaultNow(),
});

export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const aiMatchingLogs = pgTable("ai_matching_logs", {
  id: serial("id").primaryKey(),
  queryText: text("query_text").notNull(),
  matchedCategory: text("matched_category").notNull(),
  matchScore: integer("match_score").notNull().default(97),
  createdAt: timestamp("created_at").defaultNow(),
});
