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
export const trafficRules: Record<string, TrafficRule> = {
  "3086755": {
    id: 1,
    mn: "3086755",
    targetUrl:
      process.env.REDIRECT_URL_1 ||
      "https://www.amazon.com/s?k=health+supplements&tag=freshhealthco-20",
    name: "Offer Link 1",
    description: "Rule 1 (Default: Amazon Health Supplements)",
  },
  "3086756": {
    id: 2,
    mn: "3086756",
    targetUrl:
      process.env.REDIRECT_URL_2 ||
      "https://www.amazon.com/s?k=blood+pressure+monitor&tag=freshhealthco-20",
    name: "Offer Link 2",
    description: "Rule 2 (Default: Blood Pressure Monitors)",
  },
  "3086757": {
    id: 3,
    mn: "3086757",
    targetUrl:
      process.env.REDIRECT_URL_3 ||
      "https://www.amazon.com/s?k=organic+skincare&tag=freshhealthco-20",
    name: "Offer Link 3",
    description: "Rule 3 (Default: Organic Skincare Products)",
  },
  "3086758": {
    id: 4,
    mn: "3086758",
    targetUrl:
      process.env.REDIRECT_URL_4 ||
      "https://www.amazon.com/s?k=whey+protein+isolate&tag=freshhealthco-20",
    name: "Offer Link 4",
    description: "Rule 4 (Default: Protein Powder)",
  },
  "3086759": {
    id: 5,
    mn: "3086759",
    targetUrl:
      process.env.REDIRECT_URL_5 ||
      "https://www.amazon.com/s?k=natural+sleep+aids&tag=freshhealthco-20",
    name: "Offer Link 5",
    description: "Rule 5 (Default: Natural Sleep Aids)",
  },
}

/**
 * Finds a matching traffic rule by mn query parameter
 */
export function getTrafficRule(mn?: string | null): TrafficRule | null {
  if (!mn) return null
  const clean = mn.trim()
  return trafficRules[clean] || null
}
