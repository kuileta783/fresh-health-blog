/**
 * Centralized Affiliate Link & Compliance Configuration
 * Fresh Health Co
 */

// Default Amazon Associate Tag (can be overridden with process.env.NEXT_PUBLIC_AMAZON_TAG)
export const AMAZON_ASSOCIATE_TAG = process.env.NEXT_PUBLIC_AMAZON_TAG || "freshhealthco-20"

/**
 * Builds a compliant Amazon search / affiliate landing URL
 */
export function getAmazonSearchUrl(query: string): string {
  const cleanQuery = encodeURIComponent(query.trim())
  return `https://www.amazon.com/s?k=${cleanQuery}&tag=${AMAZON_ASSOCIATE_TAG}`
}

/**
 * Returns compliant rel attributes for search engine & affiliate program guidelines
 */
export const AFFILIATE_REL = "sponsored noopener noreferrer"

/**
 * Standard FTC affiliate disclosure text for review and guide pages
 */
export const FTC_DISCLOSURE_SHORT =
  "Fresh Health Co is reader-supported. When you purchase through links on our site, we may earn an affiliate commission at no additional cost to you. As an Amazon Associate, we earn from qualifying purchases."
