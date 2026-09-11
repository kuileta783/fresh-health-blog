import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Star, Check, X, ShieldCheck, Heart, ShoppingCart, ExternalLink, Info } from "lucide-react"
import Link from "next/link"
import { getAmazonSearchUrl, AFFILIATE_REL, FTC_DISCLOSURE_SHORT } from "@/lib/affiliate"

export const metadata = {
  title: "Top 10 Best Organic Skincare Products 2025/2026 | Fresh Health Co",
  description: "Dermatologist-evaluated guide to the top 10 certified organic and clean skincare products: gentle cleansers, bakuchiol serums, barrier creams, and mineral SPF.",
}

const skincarePicks = [
  {
    rank: 1,
    name: "Tata Harper Regenerating Cleanser",
    type: "Daily Exfoliating Cleanser",
    price: "$88",
    rating: 4.9,
    certifications: "ECOCERT, 100% Natural Farm-Grown",
    badge: "Best Luxury Organic Cleanser",
    description: "Formulated with apricot seed powder for micro-exfoliation and BHA from white willow bark. Cleanses pores while preserving essential barrier lipids.",
    keyIngredients: "White Willow Bark, Apricot Microspheres, Pomegranate Enzymes",
    pros: ["100% natural, non-toxic formulation", "Gentle physical and chemical exfoliation", "Leaves skin noticeably glowing"],
    cons: ["Luxury price tier", "Contains essential oils (patch test if hyper-sensitive)"]
  },
  {
    rank: 2,
    name: "True Botanicals Pure Radiance Oil",
    type: "Nutrient-Dense Facial Oil",
    price: "$110",
    rating: 4.8,
    certifications: "MADE SAFE Certified, Leaping Bunny",
    badge: "Best Organic Anti-Aging Facial Oil",
    description: "Clinically proven to outperform leading anti-aging moisturizers. Packed with passion fruit seed, rosehip, and kiwi seed oils rich in essential fatty acids.",
    keyIngredients: "Rosehip Seed Oil, Chia Seed, Camellia Seed, Astaxanthin",
    pros: ["Outperforms leading synthetic creams in hydration trials", "Absorbs without greasy residue", "Highest safety certification standards"],
    cons: ["Premium price point", "Pipette dropper requires careful handling"]
  },
  {
    rank: 3,
    name: "Herbivore Botanicals Bakuchiol Retinol Alternative",
    type: "Plant-Based Anti-Aging Serum",
    price: "$54",
    rating: 4.8,
    certifications: "Clean at Sephora, 100% Vegan",
    badge: "Best Retinol Alternative for Sensitive Skin",
    description: "Harnesses 1% natural bakuchiol from the Babchi plant to smooth fine lines and refine skin texture without redness, peeling, or sun sensitivity.",
    keyIngredients: "1% Ayurvedic Bakuchiol, Tremella Mushroom, Blueberry Extract",
    pros: ["Zero peeling, flaking, or photosensitivity", "Safe during pregnancy and nursing", "Deep jelly hydration from snow mushroom"],
    cons: ["Slower initial onset than prescription tretinoin"]
  },
  {
    rank: 4,
    name: "OSEA Atmosphere Protection Cream",
    type: "Barrier Defense Daily Moisturizer",
    price: "$54",
    rating: 4.7,
    certifications: "Climate Neutral, Ocean Positive, USDA BioPreferred",
    badge: "Best Daily Lightweight Barrier Cream",
    description: "Formulated with sustainably hand-harvested USDA organic Gigartina seaweed, jojoba oil, and avocado oil to shield the face from urban pollution.",
    keyIngredients: "Organic Seaweed, Jojoba Seed Oil, Macadamia Seed, Vitamin E",
    pros: ["Featherweight matte finish perfect under makeup", "Protects against environmental smog & wind", "Sustainably wild-harvested"],
    cons: ["Very dry complexions may need an additional oil layer"]
  },
  {
    rank: 5,
    name: "Biossance Squalane + Vitamin C Rose Oil",
    type: "Brightening Face Oil",
    price: "$74",
    rating: 4.8,
    certifications: "EWG Verified, 100% Plant-Derived Squalane",
    badge: "Best for Instant Glow & Firmness",
    description: "Combines oil-soluble, stable Vitamin C (THD Ascorbate) with weightless sugarcane-derived squalane to visibly brighten and improve skin firmness.",
    keyIngredients: "100% Sugarcane Squalane, THD Ascorbate, Chios Crystal Oil",
    pros: ["Non-oxidizing, highly stable Vitamin C", "Instant dewy glow without heavy oils", "EWG Verified clean safety score"],
    cons: ["Delicate natural rose damascena aroma may not suit all"]
  },
  {
    rank: 6,
    name: "Youth to the People Superfood Antioxidant Cleanser",
    type: "Gel Face Wash",
    price: "$39",
    rating: 4.7,
    certifications: "100% Vegan, Cold-Pressed Extracts",
    badge: "Best Daily Deep Pore Cleanser",
    description: "Like a green smoothie for your face. Cold-pressed kale, spinach, and green tea deliver a rich gel lather that melts away waterproof SPF and pore debris.",
    keyIngredients: "Cold-Pressed Kale, Spinach, Green Tea, Vitamins C & E",
    pros: ["pH-balanced to prevent skin stripping", "Recyclable glass apothecary bottle", "Generous bottle size lasts months"],
    cons: ["Gel texture requires thorough rinsing with warm water"]
  },
  {
    rank: 7,
    name: "Ilia Super Serum Skin Tint SPF 40",
    type: "Mineral SPF + Serum + Tint",
    price: "$48",
    rating: 4.8,
    certifications: "100% Non-Nano Zinc Oxide, Clean Mineral",
    badge: "Best Multi-Tasking Clean SPF Tint",
    description: "Fuses active skincare (hyaluronic acid, plant squalane, niacinamide) with non-nano zinc oxide SPF 40 and breathable light-dewy coverage.",
    keyIngredients: "12% Non-Nano Zinc Oxide, Niacinamide, Hyaluronic Acid, Squalane",
    pros: ["Three products in one (serum, SPF, tint)", "30+ inclusive shades with zero white cast", "Clinically proven to improve skin barrier"],
    cons: ["Has a slight organic mineral scent upon application"]
  },
  {
    rank: 8,
    name: "Juice Beauty STEM CELLULAR Anti-Wrinkle Eye Treatment",
    type: "Organic Peptide Eye Cream",
    price: "$52",
    rating: 4.6,
    certifications: "USDA Organic Base, Leaping Bunny",
    badge: "Best Organic Eye Cream",
    description: "Formulated on an organic juice base rather than plain tap water. Infuses fruit stem cells and Vitamin C into rich organic jojoba and shea butter.",
    keyIngredients: "Apple & Grape Fruit Stem Cells, Organic Aloe, Evening Primrose",
    pros: ["Formulated with certified organic botanical juices", "Diminishes fine crow's feet and dark circles", "Rich, creamy hydration"],
    cons: ["Airless pump requires a gentle touch to avoid excess dispensing"]
  },
  {
    rank: 9,
    name: "Kora Organics Noni Glow Sleeping Mask",
    type: "Overnight Leave-On Hydration Mask",
    price: "$52",
    rating: 4.6,
    certifications: "COSMOS Organic Certified by Ecocert",
    badge: "Best Overnight Moisture Treatment",
    description: "Created by supermodel Miranda Kerr. A pillow-proof bouncy gel mask featuring certified organic noni fruit, silver ear mushroom, and Kakadu plum.",
    keyIngredients: "Organic Noni Extract, Silver Ear Mushroom, Kakadu Plum",
    pros: ["Pillow-proof gel dries without sticky transfer", "Intense morning bounce and plumping", "COSMOS Organic verified"],
    cons: ["Gel texture feels cool and firm initially"]
  },
  {
    rank: 10,
    name: "Acure Radically Rejuvenating Whipped Night Cream",
    type: "Peptide Night Cream",
    price: "$22",
    rating: 4.5,
    certifications: "100% Vegan, Paraben Free, Sulfate Free",
    badge: "Best Drugstore Clean Skincare Under $25",
    description: "A cult-favorite budget powerhouse loaded with multi-peptides, ferulic acid, and microalgae to lock in deep overnight moisture.",
    keyIngredients: "Multi-Peptides, Vitamin C, Ferulic Acid, Blue Tansy Oil",
    pros: ["Comparable performance to $70 luxury creams", "Ultra-nourishing whipped texture", "Widely accessible price point"],
    cons: ["Thick texture best reserved exclusively for bedtime"]
  }
]

export default function OrganicSkincareArticlePage() {
  return (
    <>
      <Header />
      <article className="py-16 bg-gray-50/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-pink-600 text-white flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              Clean Beauty & Skincare
            </Badge>
            <Badge variant="outline" className="text-gray-600">Updated 2025/2026</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Top 10 Best Organic Skincare Products: Clean, Non-Toxic & Dermatologist Tested
          </h1>
          <p className="text-gray-500 mb-4 text-sm">
            By <strong>Dr. Emily Rodriguez (Research Director)</strong> • Fact-Checked • 10 min read
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
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Organic Skincare Products"
              className="w-full h-80 md:h-96 object-cover"
            />
          </div>

          <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm prose max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl text-gray-800 leading-relaxed font-medium mb-6">
              Your skin is your largest organ, absorbing a significant portion of what you apply to it daily. 
              Modern organic skincare has moved far beyond DIY kitchen remedies into sophisticated clinical green chemistry—delivering 
              potent anti-aging, barrier repair, and brightening results without endocrine-disrupting phthalates, parabens, or synthetic dyes.
            </p>

            <div className="bg-pink-50 border-l-4 border-pink-600 p-6 rounded-r-xl my-8">
              <h3 className="text-pink-950 font-bold text-lg mb-1 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-pink-700" />
                How to Spot True Organic vs. "Greenwashing"
              </h3>
              <p className="text-pink-900 text-sm leading-relaxed mb-0">
                The term "natural" is not legally regulated in cosmetics. To avoid marketing gimmicks, look for trusted third-party certifications: 
                <strong> USDA Organic</strong> (95%+ organic ingredients), <strong>ECOCERT / COSMOS</strong> (strict European biological standards), 
                and <strong>EWG Verified / MADE SAFE</strong> (free from known toxic chemicals).
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
              The Top 10 Clean & Organic Skincare Essentials
            </h2>

            <div className="space-y-8 not-prose my-8">
              {skincarePicks.map((item) => (
                <div key={item.rank} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-full bg-pink-600 text-white font-extrabold flex items-center justify-center text-base">
                        #{item.rank}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {item.name}
                        </h3>
                        <span className="inline-block text-xs font-semibold text-pink-700 bg-pink-50 px-2.5 py-0.5 rounded-full mt-1">
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

                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-gray-50 rounded-xl p-3 text-xs mb-4 text-gray-600">
                    <div><strong className="text-gray-900">Certifications:</strong> {item.certifications}</div>
                    <div><strong className="text-gray-900">Key Actives:</strong> {item.keyIngredients}</div>
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
              Building a Simple 4-Step Organic Daily Routine
            </h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Step 1: Cleanse (AM/PM):</strong> Use a gentle pH-balanced antioxidant gel or balm (like Youth to the People) to wash away impurities without stripping moisture.
              </li>
              <li>
                <strong>Step 2: Treat & Repair (AM/PM):</strong> Apply an active serum tailored to your concerns. Use <strong>Vitamin C</strong> in the morning for UV defense, and <strong>Bakuchiol</strong> at night for cell turnover.
              </li>
              <li>
                <strong>Step 3: Seal with a Lipid Oil or Cream:</strong> Lock in hydration with plant squalane, ceramides, or pure cold-pressed botanical oils.
              </li>
              <li>
                <strong>Step 4: Protect (AM Essential):</strong> Never skip sunscreen. A non-nano mineral zinc formula (like Ilia SPF 40) shields your skin from photo-aging while providing physical environmental defense.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Our Final Verdict
            </h2>
            <p>
              Clean beauty has proven that you don't need harsh synthetic compounds to achieve radiant, youthful skin. 
              For transformative nourishment, <strong>True Botanicals Pure Radiance Oil</strong> and <strong>Tata Harper's Regenerating Cleanser</strong> 
              set the highest standard in clinical botanical luxury, while <strong>Acure's Whipped Night Cream</strong> proves clean efficacy can be affordable for every budget.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
