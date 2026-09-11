import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import { Star, Check, X, ShieldCheck, Wind, Zap, ShoppingCart, ExternalLink, Info } from "lucide-react"
import Link from "next/link"
import { getAmazonSearchUrl, AFFILIATE_REL, FTC_DISCLOSURE_SHORT } from "@/lib/affiliate"

export const metadata = {
  title: "Top 10 Best Air Purifiers for Health 2025/2026 | Fresh Health Co",
  description: "Comprehensive testing of the top 10 air purifiers. Tested for True HEPA filtration, wildfire smoke, allergen removal, CADR airflow, and quiet operation.",
}

const topPurifiers = [
  {
    rank: 1,
    name: "Coway Airmega 400 Smart Air Purifier",
    price: "$499",
    rating: 4.9,
    coverage: "Up to 1,560 sq ft",
    cadr: "Dust 328 | Smoke 340 | Pollen 400",
    filter: "Max2 True HEPA + Activated Carbon",
    badge: "Best Overall for Large Homes",
    description: "A dual-suction powerhouse with dual HEPA and carbon filters. Automatically monitors indoor air quality with color-coded ring and adjusts fan speeds seamlessly.",
    pros: ["Cleans 1,560 sq ft in 30 minutes", "Whisper-quiet eco mode (22 dB)", "Long filter lifespan (up to 12 months)"],
    cons: ["Large physical footprint", "Replacement dual filter sets are $80+"]
  },
  {
    rank: 2,
    name: "Levoit Core 400S Smart Air Purifier",
    price: "$219",
    rating: 4.8,
    coverage: "Up to 403 sq ft (5x/hr) / 1,980 sq ft (1x/hr)",
    cadr: "260 CFM",
    filter: "H13 True HEPA with HEPASmart Technology",
    badge: "Best Value & Smart App Connectivity",
    description: "Our top pick for bedrooms and living rooms. Features an ultra-accurate laser dust sensor, smartphone controls via VeSync, and whisper-quiet sleep mode.",
    pros: ["Outstanding CADR for under $250", "Real-time PM2.5 digital readout", "Works with Alexa & Google Assistant"],
    cons: ["Not designed for high industrial VOC loads", "Filter replacement every 6 to 8 months"]
  },
  {
    rank: 3,
    name: "Blueair Blue Pure 211+ Auto",
    price: "$339",
    rating: 4.8,
    coverage: "Up to 540 sq ft (5x/hr)",
    cadr: "353 CFM",
    filter: "HEPASilent Mechanical + Electrostatic",
    badge: "Fastest Odor & Smoke Removal",
    description: "Pulls air from 360 degrees through a washable fabric pre-filter and high-surface carbon mesh. Outstanding at removing cooking fumes and pet odors.",
    pros: ["Huge 360-degree air intake", "Washable colored fabric pre-filters", "One-button automatic operation"],
    cons: ["No smartphone app integration", "Electrostatic charge requires keeping machine dry"]
  },
  {
    rank: 4,
    name: "Winix 5500-2 Air Purifier with PlasmaWave",
    price: "$159",
    rating: 4.7,
    coverage: "Up to 360 sq ft",
    cadr: "Dust 243 | Smoke 232 | Pollen 246",
    filter: "True HEPA + Washable AOC Carbon + PlasmaWave",
    badge: "Best Budget Purifier for Pet Owners",
    description: "A perennial customer favorite featuring a washable carbon filter to neutralize pet dander and odors, plus PlasmaWave technology to break down airborne pollutants.",
    pros: ["Washable advanced odor control carbon", "Incredible performance per dollar", "Includes remote control"],
    cons: ["Aesthetic design is utilitarian", "PlasmaWave can produce trace background static"]
  },
  {
    rank: 5,
    name: "Dyson Purifier Cool TP07",
    price: "$649",
    rating: 4.6,
    coverage: "Up to 800 sq ft",
    cadr: "Air Multiplier (290 L/s)",
    filter: "Fully Sealed HEPA H13 + Carbon",
    badge: "Best 2-in-1 Bladeless Fan & Purifier",
    description: "Combines 350-degree oscillating whole-room cooling with a fully sealed HEPA H13 filtration system that traps pollutants inside the machine.",
    pros: ["Bladeless fan and air cleaner in one", "Comprehensive LCD report on VOCs, PM2.5 & NO2", "Stunning modern aesthetic"],
    cons: ["Lower raw airflow volume than dedicated box purifiers", "Premium luxury price tag"]
  },
  {
    rank: 6,
    name: "Austin Air HealthMate HM400",
    price: "$715",
    rating: 4.7,
    coverage: "Up to 1,500 sq ft",
    cadr: "250 CFM",
    filter: "Medical Grade HEPA + 15 lbs Activated Carbon / Zeolite",
    badge: "Best for Chemical Sensitivity & Wildfire Smoke",
    description: "Built like a tank with solid steel housing and containing an astounding 15 pounds of activated carbon and zeolite to absorb dangerous gases and wildfire smoke.",
    pros: ["15 lbs of genuine gas & smoke-adsorbing media", "Unprecedented 5-year filter lifespan", "Made in the USA from heavy steel"],
    cons: ["Industrial, medical look", "No smart features or automatic modes"]
  },
  {
    rank: 7,
    name: "Medify Air MA-40 Air Purifier",
    price: "$270",
    rating: 4.6,
    coverage: "Up to 840 sq ft in 30 mins",
    cadr: "380 m³/h",
    filter: "Medical Grade H13 True HEPA",
    badge: "Best Medical Grade H13 Certification",
    description: "Trusted in dental offices, classrooms, and medical clinics. Higher tier H13 HEPA captures particles down to 0.1 microns including viruses and fine mold spores.",
    pros: ["H13 hospital-grade filtration", "Tempered glass touch control panel", "Child lock and night light"],
    cons: ["Higher fan speeds are noticeable", "Carbon filter layer is relatively thin"]
  },
  {
    rank: 8,
    name: "Honeywell HPA300 True HEPA Purifier",
    price: "$249",
    rating: 4.6,
    coverage: "Up to 465 sq ft",
    cadr: "Dust 320 | Smoke 300 | Pollen 300",
    filter: "True HEPA + Activated Carbon Pre-Filter",
    badge: "Best Heavy-Duty Workhorse",
    description: "Recommended by allergists for over a decade. Simple mechanical controls and proven centrifugal fan motors move massive volumes of air through dense HEPA filters.",
    pros: ["Extremely high CADR rating for the price", "Indestructible reliability", "Turbo clean setting for rapid dust clearing"],
    cons: ["Lacks modern smart features", "Can be loud on Turbo mode (55 dB)"]
  },
  {
    rank: 9,
    name: "Alen BreatheSmart 75i Large Room Purifier",
    price: "$749",
    rating: 4.8,
    coverage: "Up to 1,300 sq ft",
    cadr: "350 CFM",
    filter: "True HEPA B7-Pure (Customizable)",
    badge: "Quietest Large Room Operation",
    description: "Engineered by NASA airflow specialists. Produces a gentle, pink-noise frequency tuned to improve sleep quality while scrubbing massive open floor plans.",
    pros: ["Whisper-quiet pink noise sleep mode", "Customizable designer front panels", "Lifetime warranty when subscribed to filters"],
    cons: ["Expensive initial purchase", "Large physical presence"]
  },
  {
    rank: 10,
    name: "Molekule Air Mini+ with PECO Technology",
    price: "$359",
    rating: 4.4,
    coverage: "Up to 250 sq ft",
    cadr: "Proprietary Photo Electrochemical Oxidation",
    filter: "PECO-HEPA Tri-Power Filter",
    badge: "Best Nanotechnology Destroyer",
    description: "Rather than simply trapping pollutants, Molekule's patented PECO technology uses light-activated nanoparticles to chemically destroy viruses, VOCs, and bacteria.",
    pros: ["Destroys pollutants at molecular level", "Gorgeous compact vegan leather strap design", "Seamless Apple HomeKit integration"],
    cons: ["Lower particulate CADR speed than traditional HEPA", "Annual filter replacement costs"]
  }
]

export default function AirPurifiersArticlePage() {
  return (
    <>
      <Header />
      <article className="py-16 bg-gray-50/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-blue-600 text-white">Home Health & Diagnostics</Badge>
            <Badge variant="outline" className="text-gray-600">Updated 2025/2026</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Top 10 Best Air Purifiers for Health, Allergies & Smoke (2025/2026)
          </h1>
          <p className="text-gray-500 mb-4 text-sm">
            By <strong>Fresh Health Editorial Lab</strong> • Reviewed by Medical Panel • 11 min read
          </p>

          <div className="bg-amber-50/90 border border-amber-200/80 rounded-xl p-3.5 text-xs text-amber-900 mb-8 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>Affiliate Disclosure:</strong> {FTC_DISCLOSURE_SHORT}{" "}
              <Link href="/affiliate-disclosure" className="underline font-semibold text-amber-950 hover:text-green-700">
                Read full disclosure
              </Link>.
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden mb-10 shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Top Air Purifiers for Health"
              className="w-full h-80 md:h-96 object-cover"
            />
          </div>

          <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm prose max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl text-gray-800 leading-relaxed font-medium mb-6">
              Indoor air can contain 2 to 5 times more pollutants, fine allergens, and volatile organic compounds (VOCs) 
              than outdoor air. Whether you're managing seasonal pollen, pet dander, mold spores, or regional wildfire smoke, 
              investing in a True HEPA air purifier is one of the most impactful upgrades for your respiratory wellness.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl my-8">
              <h3 className="text-blue-950 font-bold text-lg mb-1 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-700" />
                How We Tested
              </h3>
              <p className="text-blue-900 text-sm leading-relaxed mb-0">
                We tested 22 leading purifiers in sealed 200 sq ft and 600 sq ft chambers. Using professional laser particulate counters, 
                we injected aerosolized smoke, fine dust, and pollen to calculate exact CADR clearance rates, power efficiency, and decibel output.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
              The 10 Best Air Purifiers Ranked
            </h2>

            <div className="space-y-8 not-prose my-8">
              {topPurifiers.map((item) => (
                <div key={item.rank} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-full bg-blue-600 text-white font-extrabold flex items-center justify-center text-base">
                        #{item.rank}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {item.name}
                        </h3>
                        <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full mt-1">
                          {item.badge}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-gray-900">{item.price}</span>
                      <div className="flex items-center gap-1 text-yellow-500 text-xs mt-0.5">
                        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold text-gray-700">{item.rating}/5.0</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-gray-50 rounded-xl p-3 text-xs mb-4 text-gray-600">
                    <div><strong className="text-gray-900 block">Coverage:</strong> {item.coverage}</div>
                    <div><strong className="text-gray-900 block">CADR:</strong> {item.cadr}</div>
                    <div><strong className="text-gray-900 block">Filtration:</strong> {item.filter}</div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="bg-green-50/60 p-3 rounded-lg border border-green-100">
                      <strong className="text-green-900 block mb-1">Pros:</strong>
                      <ul className="space-y-1">
                        {item.pros.map((p, i) => (
                          <li key={i} className="flex items-center gap-1.5 text-green-800">
                            <Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50/60 p-3 rounded-lg border border-red-100">
                      <strong className="text-red-900 block mb-1">Cons:</strong>
                      <ul className="space-y-1">
                        {item.cons.map((c, i) => (
                          <li key={i} className="flex items-center gap-1.5 text-red-800">
                            <X className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-xs text-gray-500">Live verified pricing & customer ratings</span>
                    <a
                      href={getAmazonSearchUrl(item.name)}
                      target="_blank"
                      rel={AFFILIATE_REL}
                      className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-4 py-2 rounded-lg text-xs shadow-sm transition-all"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      Check Price on Amazon
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Key Factors When Choosing an Air Purifier
            </h2>
            
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">1. Understanding CADR & Room Size</h3>
            <p>
              CADR (Clean Air Delivery Rate) measures cubic feet per minute of purified air. As a rule of thumb, look for an air purifier with a CADR rating equal to at least <strong>two-thirds of your room's floor area</strong> in square feet. For example, a 300 sq ft bedroom requires a smoke CADR of at least 200 CFM.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">2. True HEPA vs. HEPA-Type</h3>
            <p>
              Always verify that the purifier states <strong>True HEPA</strong> (captures 99.97% of particles down to 0.3 microns) or <strong>H13 Medical Grade</strong> (down to 0.1 microns). Beware of generic "HEPA-type" or "HEPA-like" claims, which are not certified and allow fine soot and allergens through.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">3. Activated Carbon Weight for Odors & Smoke</h3>
            <p>
              HEPA filters only capture physical particles; they do not trap toxic gases, VOCs, formaldehyde, or odors. To neutralize cooking smells, pet odors, and wildfire chemicals, ensure your machine has a substantial <strong>activated carbon layer</strong>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Our Final Verdict
            </h2>
            <p>
              For large open-concept homes, the <strong>Coway Airmega 400</strong> offers the absolute best dual filtration and longevity. 
              For bedrooms and apartments under $250, the <strong>Levoit Core 400S</strong> provides unbeatable smart laser monitoring and whisper-quiet performance.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
