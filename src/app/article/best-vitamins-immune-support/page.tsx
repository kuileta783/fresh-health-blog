import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import { Shield, Star, Check, X, ShieldCheck, HeartPulse } from "lucide-react"

export const metadata = {
  title: "Top 10 Best Vitamins & Supplements for Immune Support 2025/2026 | Fresh Health Co",
  description: "Evidence-based clinical guide: Vitamin D3+K2, Liposomal Vitamin C, Zinc Picolinate, Quercetin, Elderberry, and NAC for cellular immune defense.",
}

const immuneVitamins = [
  {
    rank: 1,
    name: "Vitamin D3 + Vitamin K2 (MK-7)",
    type: "Immunomodulating Secosteroid Hormone",
    dose: "2,000 - 5,000 IU D3 + 100 mcg K2",
    badge: "Most Critical Baseline Micronutrient",
    mechanism: "Receptors for Vitamin D are present on virtually all immune cells (T cells, B cells, macrophages). Promotes expression of antimicrobial peptides (cathelicidin).",
    pros: ["Fundamental requirement for white blood cell activation", "K2 directs calcium to bone instead of arteries", "Massively correlated with respiratory resilience in clinical trials"],
    cons: ["Fat-soluble: take with a meal containing healthy fats"]
  },
  {
    rank: 2,
    name: "Liposomal Vitamin C (Sodium Ascorbate)",
    type: "Intracellular Phospholipid Antioxidant",
    dose: "1,000 - 2,000 mg daily",
    badge: "Highest Intracellular Absorption",
    mechanism: "Encapsulated in sunflower lecithin phospholipids that bypass bowel tolerance limits, delivering ascorbic acid directly through cell membranes.",
    pros: ["Up to 2x higher cellular uptake than standard ascorbic acid", "Zero stomach acidity or digestive upset", "Supports neutrophils and phagocytosis"],
    cons: ["Liquid liposomal formulas have a distinct citrus-lipid taste", "Higher price than plain powder"]
  },
  {
    rank: 3,
    name: "Zinc Picolinate (with Trace Copper)",
    type: "Essential Trace Mineral Chelate",
    dose: "15 - 30 mg Zinc + 1 - 2 mg Copper",
    badge: "Essential for T-Cell Maturation",
    mechanism: "Required for DNA synthesis in immune cells and thymic hormone activity. Acts as a cofactor for over 300 vital enzymatic reactions.",
    pros: ["Picolinate form offers superior intestinal absorption", "Proven to shorten the duration of common seasonal bugs", "Supports skin and respiratory mucosal barriers"],
    cons: ["Must balance with copper to prevent depletion", "Take with food to avoid mild nausea"]
  },
  {
    rank: 4,
    name: "Quercetin Phytosome",
    type: "Bioflavonoid & Zinc Ionophore",
    dose: "250 - 500 mg daily",
    badge: "Best Zinc Ionophore Synergy",
    mechanism: "Acts as a molecular 'shuttle' (zinc ionophore) that transports zinc ions through cell walls directly into cells where it inhibits viral enzyme replication.",
    pros: ["Phytosome delivery increases bioavailability by 20x", "Natural antihistamine that stabilizes mast cells", "Powerful free-radical scavenger"],
    cons: ["May interact with certain antibiotic medications"]
  },
  {
    rank: 5,
    name: "Standardized Black Elderberry Extract (Sambucus Nigra)",
    type: "High-Anthocyanin Botanical",
    dose: "300 - 600 mg standardized extract",
    badge: "Best Natural Seasonal Herbal Defense",
    mechanism: "Rich in anthocyanidins that bind to outer viral envelope hemagglutinin spikes, blunting the pathogen's ability to enter human host cells.",
    pros: ["Double-blind randomized trials show faster recovery times", "Naturally high in polyphenols", "Safe and gentle for family wellness kits"],
    cons: ["Commercial syrups often contain high fructose corn syrup (choose zero-sugar extract)"]
  },
  {
    rank: 6,
    name: "N-Acetyl Cysteine (NAC)",
    type: "Glutathione Precursor Amino Acid",
    dose: "600 - 1,200 mg daily",
    badge: "Best for Bronchial & Lung Mucosa",
    mechanism: "Direct precursor to intracellular glutathione—the body's master cellular antioxidant. Breaks disulfide bonds in respiratory mucus to thin bronchial secretions.",
    pros: ["Thins airway mucus for clearer breathing", "Replenishes depleted pulmonary glutathione", "Supported by extensive clinical research"],
    cons: ["Contains sulfur (slight distinctive odor)"]
  },
  {
    rank: 7,
    name: "Beta-Glucans (1,3 / 1,6 Yeast & Reishi Mushroom)",
    type: "Immunostimulatory Polysaccharide",
    dose: "250 - 500 mg extract",
    badge: "Best Macrophage & Neutrophil Primer",
    mechanism: "Binds to CR3 receptors on innate white blood cells (macrophages and neutrophils), training them to respond rapidly to foreign invaders.",
    pros: ["'Trains' and primes the innate immune system", "Derived from medicinal mushrooms (Reishi, Maitake, Turkey Tail)", "Zero central nervous system stimulation"],
    cons: ["Individuals with autoimmune conditions should consult their rheumatologist"]
  },
  {
    rank: 8,
    name: "Spore-Forming Probiotics (L. Rhamnosus GG & Bacillus)",
    type: "GALT Microbiome Modulator",
    dose: "10 - 20 Billion CFU daily",
    badge: "Best Gut-Immune Axis Optimizer",
    mechanism: "70% to 80% of immune tissue is situated in the gut-associated lymphoid tissue (GALT). Healthy gut microbiota stimulate mucosal secretory IgA antibodies.",
    pros: ["Reinforces the intestinal mucosal barrier", "Stimulates systemic antibody generation", "Survives harsh stomach acid"],
    cons: ["Temporary mild digestive changes during the first 3 days"]
  },
  {
    rank: 9,
    name: "Vitamin A (Retinyl Palmitate)",
    type: "Epithelial Barrier Vitamin",
    dose: "3,000 - 5,000 IU daily",
    badge: "Essential for Mucosal Shielding",
    mechanism: "Maintains the structural integrity of mucosal tissue in the nose, throat, and gastrointestinal lining, preventing airborne microbes from breaching barriers.",
    pros: ["Preserves mucosal frontline defense", "Synergizes with Vitamin D3 in cellular signaling", "Supports visual and skin health"],
    cons: ["Preformed Vitamin A accumulates in fat tissue (do not exceed upper limits)"]
  },
  {
    rank: 10,
    name: "Selenium (Selenomethionine)",
    type: "Antioxidant Mineral Micronutrient",
    dose: "100 - 200 mcg daily",
    badge: "Crucial for Glutathione Peroxidase Enzymes",
    mechanism: "Incorporates directly into selenoproteins, including glutathione peroxidase, which shields immune cell membranes from oxidative stress during battle.",
    pros: ["Essential cofactor for natural killer (NK) cell proliferation", "Supports healthy thyroid conversion", "Strong cellular longevity benefits"],
    cons: ["Very narrow optimal therapeutic window (avoid exceeding 400 mcg daily)"]
  }
]

export default function ImmuneSupportArticlePage() {
  return (
    <>
      <Header />
      <article className="py-16 bg-gray-50/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-emerald-600 text-white flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" />
              Immune Science & Nutrition
            </Badge>
            <Badge variant="outline" className="text-gray-600">Clinical Review 2025/2026</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Top 10 Best Vitamins & Supplements for Immune Support (2025/2026)
          </h1>
          <p className="text-gray-500 mb-8 text-sm">
            By <strong>Fresh Health Medical Board</strong> • Reviewed by Dr. Sarah Johnson • 10 min read
          </p>
          
          <div className="relative rounded-2xl overflow-hidden mb-10 shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Top Vitamins for Immune Support"
              className="w-full h-80 md:h-96 object-cover"
            />
          </div>

          <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm prose max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl text-gray-800 leading-relaxed font-medium mb-6">
              Your immune system is not a single organ—it is an intricate, dynamic cellular defense network composed of physical mucosal barriers, 
              circulating white blood cells, natural killer cells, and billions of antibodies. When seasonal challenges arise, 
              strategic supplementation bridges critical micronutrient deficiencies and primes your innate and adaptive defenses.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl my-8">
              <h3 className="text-emerald-950 font-bold text-lg mb-1 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
                The Synergistic "Triple Shield"
              </h3>
              <p className="text-emerald-900 text-sm leading-relaxed mb-0">
                Rather than megadosing a single vitamin, clinical trials emphasize <strong>nutrient synergy</strong>: 
                Vitamin D3 regulates white blood cells, Vitamin C replenishes intracellular antioxidants, and Zinc stops viral enzymes—especially 
                when paired with Quercetin to shuttle zinc directly inside cells.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
              The 10 Best Evidence-Based Immune Supplements Ranked
            </h2>

            <div className="space-y-8 not-prose my-8">
              {immuneVitamins.map((item) => (
                <div key={item.rank} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-full bg-emerald-600 text-white font-extrabold flex items-center justify-center text-base">
                        #{item.rank}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {item.name}
                        </h3>
                        <span className="inline-block text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full mt-1">
                          {item.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                    <strong>Mechanism:</strong> {item.mechanism}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-gray-50 rounded-xl p-3 text-xs mb-4 text-gray-600">
                    <div><strong className="text-gray-900">Type:</strong> {item.type}</div>
                    <div><strong className="text-gray-900">Evidence-Based Dose:</strong> {item.dose}</div>
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
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              How to Take Your Immune Stack Safely
            </h2>
            <p>
              1. <strong>Daily Maintenance:</strong> Take Vitamin D3+K2 (2,000-5,000 IU) and a high-potency multivitamin with zinc every morning with breakfast.
            </p>
            <p>
              2. <strong>Acute Seasonal Defense:</strong> At the first sign of a scratchy throat, add <strong>Liposomal Vitamin C (1,000mg twice daily)</strong>, 
              <strong>Zinc Picolinate (25mg with food)</strong>, and <strong>Black Elderberry extract</strong> for 5 to 7 days.
            </p>
            <p>
              3. <strong>Lifestyle Priming:</strong> No supplement can replace 7 to 8 hours of restorative sleep, regular cardiovascular exercise, 
              and minimizing refined sugar—which temporarily impairs white blood cell phagocytosis for several hours after consumption.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
