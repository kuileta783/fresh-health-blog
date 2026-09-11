import { NextResponse, type NextRequest } from "next/server"
import { getTrafficRule } from "@/lib/traffic-config"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const mn = searchParams.get("mn")
  const rule = getTrafficRule(mn)

  if (rule) {
    return NextResponse.redirect(new URL(rule.targetUrl), {
      status: 302,
      headers: {
        "Referrer-Policy": "unsafe-url",
        "X-Robots-Tag": "noindex, nofollow",
      },
    })
  }

  // If no valid mn, redirect to the safe landpage
  return NextResponse.redirect(new URL("/landpage", request.url))
}
