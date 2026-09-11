/**
 * Configuration for Traffic Redirection & Affiliate Cloaker
 * Adapted for Vercel Serverless Environment
 * Fresh Health Co
 */

export interface TrafficRule {
  id: number
  mn: string
  targetUrl: string
  name: string
  description: string
}

// 5 Traffic Redirection Rules
// You can customize the targetUrl here, OR set REDIRECT_URL_1 .. REDIRECT_URL_5 in Vercel Environment Variables
export const defaultTrafficRules: Record<string, TrafficRule> = {
  "3086755": {
    id: 1,
    mn: "3086755",
    targetUrl: "https://track.revoffers.com/aff_c?offer_id=37&aff_id=7981",
    name: "RevOffers Offer 37",
    description: "Link 1: RevOffers Campaign",
  },
  "3086756": {
    id: 2,
    mn: "3086756",
    targetUrl: "https://www.amazon.com/s?k=blood+pressure+monitor&tag=freshhealthco-20",
    name: "Offer Link 2",
    description: "Link 2: Blood Pressure Monitors",
  },
  "3086757": {
    id: 3,
    mn: "3086757",
    targetUrl: "https://www.amazon.com/s?k=organic+skincare&tag=freshhealthco-20",
    name: "Offer Link 3",
    description: "Link 3: Organic Skincare Products",
  },
  "3086758": {
    id: 4,
    mn: "3086758",
    targetUrl: "https://www.amazon.com/s?k=whey+protein+isolate&tag=freshhealthco-20",
    name: "Offer Link 4",
    description: "Link 4: Protein Powder",
  },
  "3086759": {
    id: 5,
    mn: "3086759",
    targetUrl: "https://www.amazon.com/s?k=natural+sleep+aids&tag=freshhealthco-20",
    name: "Offer Link 5",
    description: "Link 5: Natural Sleep Aids",
  },
}

/**
 * Dynamically resolves the traffic rule and prioritizes environment variables at runtime
 */
export function getTrafficRule(mn?: string | null): TrafficRule | null {
  if (!mn) return null
  const clean = mn.trim()
  const base = defaultTrafficRules[clean]
  if (!base) return null

  // Check runtime environment variable override
  const envKey = `REDIRECT_URL_${base.id}`
  const envValue = process.env[envKey]

  return {
    ...base,
    targetUrl: envValue && envValue.trim().length > 0 ? envValue.trim() : base.targetUrl,
  }
}
