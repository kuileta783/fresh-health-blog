export interface Product {
  id: string
  title: string
  category: string
  subcategory?: string
  rating: number
  reviewCount: number
  price: string
  originalPrice?: string
  image: string
  excerpt: string
  tags: string[]
  pros: string[]
  cons: string[]
  bestFor: string[]
  publishedDate: string
  readTime: string
  featured: boolean
  editorChoice: boolean
}

export const categories = {
  beauty: {
    name: "Beauty",
    description: "Skincare, clean cosmetics, and anti-aging essentials for your daily ritual",
    icon: "💄",
    subcategories: ["Skincare", "Serums", "Moisturizers", "Sun Care", "Anti-Aging"]
  },
  supplements: {
    name: "Supplements",
    description: "Vitamins, minerals, adaptogens, and clean formulas for optimal wellness",
    icon: "💊",
    subcategories: ["Vitamins", "Minerals", "Omega-3", "Immune Support", "Energy"]
  },
  fitness: {
    name: "Fitness",
    description: "Workout equipment, training gear, and performance apparel for all levels",
    icon: "💪",
    subcategories: ["Home Gym", "Footwear", "Strength Training", "Yoga", "Recovery"]
  },
  nutrition: {
    name: "Nutrition",
    description: "Clean proteins, superfood powders, and wholesome functional fuel",
    icon: "🥗",
    subcategories: ["Protein", "Superfoods", "Hydration", "Organic Foods", "Snacks"]
  },
  wellness: {
    name: "Wellness",
    description: "Sleep restoration, mindfulness tools, and stress-reduction essentials",
    icon: "🧘",
    subcategories: ["Meditation", "Sleep", "Light Therapy", "Aromatherapy", "Relaxation"]
  },
  "home-health": {
    name: "Home Health",
    description: "Medical-grade home monitors, air purification, and wellness diagnostic tech",
    icon: "🏠",
    subcategories: ["Monitors", "Air Quality", "Diagnostics", "Mobility", "Thermometers"]
  }
}

export const products: Product[] = [
  // BEAUTY
  {
    id: "vitamin-c-serum-2025",
    title: "Top 10 Best Vitamin C Serums of 2025",
    category: "beauty",
    subcategory: "Serums",
    rating: 4.8,
    reviewCount: 256,
    price: "$25 - $85",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Discover the most effective vitamin C serums for brightening skin, reducing dark spots, and fighting signs of aging. Tested for stability, antioxidant power, and absorption.",
    tags: ["Anti-Aging", "Brightening", "Antioxidant", "L-Ascorbic Acid"],
    pros: ["Clinically proven 15-20% L-ascorbic acid", "Triple antioxidant stabilization", "Fast absorption without stickiness"],
    cons: ["Higher tier serums are premium priced", "Requires sunscreen pairing during daytime"],
    bestFor: ["Dark spots & hyperpigmentation", "Dull tired complexion", "Collagen stimulation"],
    publishedDate: "2025-01-15",
    readTime: "8 min read",
    featured: true,
    editorChoice: true
  },
  {
    id: "retinol-creams-2025",
    title: "Best Retinol Creams for Beginners 2025",
    category: "beauty",
    subcategory: "Anti-Aging",
    rating: 4.6,
    reviewCount: 189,
    price: "$30 - $120",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Start your retinol journey with gentle, encapsulated formulations designed to smooth fine lines, refine pore texture, and minimize redness without peeling.",
    tags: ["Retinoids", "Anti-Aging", "Night Routine", "Skin Barrier"],
    pros: ["Encapsulated time-release delivery", "Formulated with calming ceramides", "Minimal irritation on sensitive skin"],
    cons: ["Requires 6-8 weeks of consistent use", "Increases photosensitivity"],
    bestFor: ["First-time retinol users", "Fine expression lines", "Uneven skin texture"],
    publishedDate: "2025-01-12",
    readTime: "6 min read",
    featured: true,
    editorChoice: false
  },
  {
    id: "hyaluronic-acid-serum-2025",
    title: "Best Hyaluronic Acid Serums for Deep Hydration",
    category: "beauty",
    subcategory: "Moisturizers",
    rating: 4.7,
    reviewCount: 312,
    price: "$18 - $65",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Multi-molecular weight hyaluronic acid serums that draw moisture into every skin layer for instant plumping and long-lasting barrier hydration.",
    tags: ["Hydration", "Plumping", "Sensitive Skin", "Clean Beauty"],
    pros: ["Multi-depth molecular penetration", "Oil-free and non-comedogenic", "Pairs seamlessly under makeup and SPF"],
    cons: ["Must be applied to damp skin for best effect", "Can feel slightly tacky if over-applied"],
    bestFor: ["Dehydrated skin", "Fine dry lines", "Post-procedure recovery"],
    publishedDate: "2025-01-20",
    readTime: "5 min read",
    featured: false,
    editorChoice: true
  },
  {
    id: "mineral-sunscreen-spf50-2025",
    title: "Top Rated Mineral Sunscreens SPF 50",
    category: "beauty",
    subcategory: "Sun Care",
    rating: 4.9,
    reviewCount: 420,
    price: "$22 - $48",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Non-nano zinc oxide sunscreens that provide broad spectrum UVA/UVB defense without a white cast, greasy sheen, or pore congestion.",
    tags: ["Sun Protection", "Zinc Oxide", "Reef Safe", "Non-Greasy"],
    pros: ["100% non-nano zinc formula", "Zero white cast on all skin tones", "Reef-safe and water-resistant"],
    cons: ["Shake thoroughly before application", "Requires double cleansing to remove completely"],
    bestFor: ["Daily UV defense", "Sensitive & acne-prone skin", "Outdoor activities"],
    publishedDate: "2025-02-01",
    readTime: "7 min read",
    featured: false,
    editorChoice: true
  },

  // SUPPLEMENTS
  {
    id: "multivitamins-2025",
    title: "Top 15 Best Multivitamins for Adults 2025",
    category: "supplements",
    subcategory: "Vitamins",
    rating: 4.7,
    reviewCount: 432,
    price: "$15 - $60",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Comprehensive analysis of top adult multivitamins. We analyzed methylated B vitamins, chelated mineral bioavailability, third-party purity, and value.",
    tags: ["Daily Health", "Immune Support", "Energy", "Bioavailability"],
    pros: ["Methylated folate & B12", "Third-party tested for heavy metals", "Gentle on empty stomachs"],
    cons: ["Some brands require 2-4 capsules daily", "Slight herbal odor"],
    bestFor: ["Nutritional gaps", "Active lifestyles", "General vitality"],
    publishedDate: "2025-01-10",
    readTime: "10 min read",
    featured: true,
    editorChoice: true
  },
  {
    id: "omega-3-supplements-2025",
    title: "Best Omega-3 Supplements for Heart & Brain Health",
    category: "supplements",
    subcategory: "Omega-3",
    rating: 4.9,
    reviewCount: 318,
    price: "$20 - $75",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "High-potency EPA and DHA formulations from sustainably caught wild fish. Enteric coating and molecular distillation ensure zero fishy burps.",
    tags: ["Heart Health", "Brain Function", "Anti-Inflammatory", "IFOS Certified"],
    pros: ["Over 1,200mg active EPA+DHA per serving", "IFOS 5-star purity certification", "No fishy aftertaste"],
    cons: ["Large softgel format", "Keep refrigerated in warm climates"],
    bestFor: ["Cardiovascular protection", "Cognitive focus", "Joint mobility"],
    publishedDate: "2025-01-08",
    readTime: "7 min read",
    featured: true,
    editorChoice: true
  },
  {
    id: "vitamin-d3-k2-drops-2025",
    title: "Best High-Absorption Vitamin D3 + K2 Liquid Drops",
    category: "supplements",
    subcategory: "Vitamins",
    rating: 4.8,
    reviewCount: 275,
    price: "$18 - $36",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Synergistic Vitamin D3 (5000 IU) and Vitamin K2 (MK-7) in organic MCT oil base to guide calcium into bones and teeth rather than arterial walls.",
    tags: ["Bone Density", "Immune System", "MCT Oil", "Liquid Drops"],
    pros: ["Synergistic MK-7 directs calcium safely", "MCT carrier oil maximizes absorption", "Easy dropper bottle dosing"],
    cons: ["Dropper requires careful counting", "Oily texture if taken without beverage"],
    bestFor: ["Bone strength", "Immune modulation", "Winter lack of sunlight"],
    publishedDate: "2025-01-22",
    readTime: "6 min read",
    featured: false,
    editorChoice: false
  },
  {
    id: "collagen-peptides-powder-2025",
    title: "Best Grass-Fed Hydrolyzed Collagen Peptides",
    category: "supplements",
    subcategory: "Minerals",
    rating: 4.6,
    reviewCount: 390,
    price: "$28 - $55",
    image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Type I and III hydrolyzed collagen peptides that dissolve instantly in coffee, water, or smoothies to support skin elasticity, joint cartilage, and hair strength.",
    tags: ["Grass-Fed", "Joints & Cartilage", "Skin Elasticity", "Unflavored"],
    pros: ["100% pasture-raised grass-fed bovine", "Dissolves clear with zero clumping", "Completely odorless and flavorless"],
    cons: ["Animal derived (not vegetarian)", "Takes 8-12 weeks for noticeable hair/nail results"],
    bestFor: ["Joint stiffness", "Skin hydration & firmness", "Post-workout recovery"],
    publishedDate: "2025-02-05",
    readTime: "6 min read",
    featured: false,
    editorChoice: true
  },

  // FITNESS
  {
    id: "home-gym-equipment-2025",
    title: "Best Home Gym Equipment Under $500",
    category: "fitness",
    subcategory: "Home Gym",
    rating: 4.5,
    reviewCount: 203,
    price: "$50 - $500",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Transform any spare room into a complete training sanctuary. Versatile, space-saving gear tested for durability, biomechanics, and value.",
    tags: ["Home Gym", "Space Saving", "Strength", "Compact"],
    pros: ["Replaces 15+ standalone weights", "Heavy gauge steel construction", "Compact footprint fits apartments"],
    cons: ["Some assembly required", "Heavy freight delivery"],
    bestFor: ["Apartment workouts", "Beginner to intermediate lifters", "Space-conscious homes"],
    publishedDate: "2025-01-05",
    readTime: "9 min read",
    featured: true,
    editorChoice: false
  },
  {
    id: "running-shoes-2025",
    title: "Top 12 Running Shoes for Every Runner Type",
    category: "fitness",
    subcategory: "Footwear",
    rating: 4.8,
    reviewCount: 567,
    price: "$80 - $250",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "From responsive daily trainers to maximum-cushion marathon shoes. Tested over hundreds of road miles for breathability, energy return, and joint impact protection.",
    tags: ["Road Running", "Cushioning", "Durability", "Arch Support"],
    pros: ["Responsive nitrogen-infused foam", "Engineered breathable mesh upper", "Superior wet-surface traction"],
    cons: ["Sizing can run slightly narrow", "Premium models run $180+"],
    bestFor: ["Daily 5K to marathon mileage", "Knee & joint shock relief", "Road and treadmill"],
    publishedDate: "2025-01-03",
    readTime: "12 min read",
    featured: true,
    editorChoice: true
  },
  {
    id: "adjustable-kettlebell-set-2025",
    title: "Best Adjustable Kettlebells for Full-Body Power",
    category: "fitness",
    subcategory: "Strength Training",
    rating: 4.7,
    reviewCount: 178,
    price: "$120 - $220",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Replaces 6 individual kettlebells with an intuitive quick-lock selector. Ideal for swings, snatches, goblet squats, and functional conditioning.",
    tags: ["Kettlebell", "Quick-Lock", "Functional Fitness", "Cast Iron"],
    pros: ["Quick weight adjustments from 10 to 40 lbs", "Smooth powder-coated grip handle", "Cast iron durability"],
    cons: ["Slight internal plate rattle during ballistic moves", "Larger overall bell geometry"],
    bestFor: ["HIIT conditioning", "Compact home fitness", "Full body strength"],
    publishedDate: "2025-01-18",
    readTime: "7 min read",
    featured: false,
    editorChoice: true
  },
  {
    id: "non-slip-yoga-mats-2025",
    title: "Best High-Density Non-Slip Yoga Mats",
    category: "fitness",
    subcategory: "Yoga",
    rating: 4.8,
    reviewCount: 340,
    price: "$40 - $130",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Engineered with textured natural tree rubber and polyurethane top layer for zero-slip traction during sweaty hot yoga and floor Pilates.",
    tags: ["Yoga", "Non-Slip Grip", "Joint Cushioning", "Eco-Friendly"],
    pros: ["Unmatched wet and dry sweat grip", "6mm high-density joint cushion", "Non-toxic biodegradable rubber"],
    cons: ["Heavier to carry (around 6 lbs)", "Natural rubber scent dissipates over a week"],
    bestFor: ["Hot yoga & Vinyasa flows", "Joint and spine support", "Pilates and stretching"],
    publishedDate: "2025-01-25",
    readTime: "7 min read",
    featured: false,
    editorChoice: true
  },

  // NUTRITION
  {
    id: "protein-powders-2025",
    title: "Best Protein Powders for Muscle Building & Recovery",
    category: "nutrition",
    subcategory: "Protein",
    rating: 4.7,
    reviewCount: 389,
    price: "$25 - $80",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Comparative review of pure 100% whey isolate vs plant-based protein blends. Evaluated for 25g+ protein per scoop, complete BCAAs, and delicious mixability.",
    tags: ["Whey Isolate", "Plant Protein", "Recovery", "Low Carb"],
    pros: ["25-28g pure protein per scoop", "Sub-1g sugar and carb profile", "Micro-filtered for minimal lactose"],
    cons: ["Premium cold-filtered isolates cost more", "Flavors sweetened with stevia/monk fruit"],
    bestFor: ["Post-workout protein synthesis", "Lean muscle development", "High-protein meal prep"],
    publishedDate: "2025-01-01",
    readTime: "8 min read",
    featured: true,
    editorChoice: true
  },
  {
    id: "organic-super-greens-powder-2025",
    title: "Best Organic Super Greens Powders for Gut & Energy",
    category: "nutrition",
    subcategory: "Superfoods",
    rating: 4.6,
    reviewCount: 295,
    price: "$35 - $70",
    image: "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Packed with 75 organic superfoods, adaptogens, digestive enzymes, and probiotics. Formulated to support gut microbiome health and natural daily stamina.",
    tags: ["Gut Health", "Superfoods", "Probiotics", "Enzymes", "Detox"],
    pros: ["75 organic plant ingredients", "Includes 7.2B CFU shelf-stable probiotics", "Pleasant natural mint-citrus taste"],
    cons: ["Higher monthly investment", "Must mix thoroughly with cold water"],
    bestFor: ["Bloating relief & digestion", "Daily nutrient insurance", "Busy mornings"],
    publishedDate: "2025-01-14",
    readTime: "7 min read",
    featured: true,
    editorChoice: false
  },
  {
    id: "electrolyte-hydration-powder-2025",
    title: "Best Clean Electrolyte Hydration Powders (Zero Sugar)",
    category: "nutrition",
    subcategory: "Hydration",
    rating: 4.8,
    reviewCount: 360,
    price: "$20 - $45",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Optimal sodium, potassium, and magnesium ratios designed for cellular hydration during intense endurance workouts and intermittent fasting.",
    tags: ["Zero Sugar", "Electrolytes", "Fasting", "Hydration"],
    pros: ["Optimal 1000mg sodium / 200mg potassium ratio", "No maltodextrin or artificial dyes", "Keto and fasting compatible"],
    cons: ["Pronounced salty-tart flavor", "Not ideal for low-sodium medical diets"],
    bestFor: ["Athletes & heavy sweaters", "Fasting & keto hydration", "Cramp prevention"],
    publishedDate: "2025-01-28",
    readTime: "6 min read",
    featured: false,
    editorChoice: true
  },

  // WELLNESS
  {
    id: "meditation-apps-2025",
    title: "Top 10 Meditation Apps for Stress Relief & Sleep",
    category: "wellness",
    subcategory: "Meditation",
    rating: 4.6,
    reviewCount: 156,
    price: "Free - $15/mo",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Science-backed mindfulness programs, guided breathwork, soundscapes, and sleep stories compared across Headspace, Calm, Waking Up, and Insight Timer.",
    tags: ["Mindfulness", "Sleep Stories", "Stress Management", "Breathwork"],
    pros: ["Clinically validated anxiety reduction", "Extensive soundscapes & bed-time stories", "Beginner-friendly 5-minute sessions"],
    cons: ["Annual subscription model", "Can feel overwhelming with too many courses"],
    bestFor: ["Racing night thoughts", "Workplace stress management", "Daily mindfulness habit"],
    publishedDate: "2024-12-28",
    readTime: "6 min read",
    featured: false,
    editorChoice: false
  },
  {
    id: "red-light-therapy-lamp-2025",
    title: "Best Targeted Red Light Therapy Devices for Home",
    category: "wellness",
    subcategory: "Light Therapy",
    rating: 4.8,
    reviewCount: 215,
    price: "$149 - $499",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Dual-wavelength 660nm red and 850nm near-infrared LED therapy panels to boost mitochondrial ATP production, skin collagen, and muscle tissue repair.",
    tags: ["Photobiomodulation", "Cellular Energy", "Recovery", "Collagen"],
    pros: ["Medical-grade irradiance (>100mW/cm²)", "Dual optical wavelength delivery", "Zero EMF radiation at treatment distance"],
    cons: ["Requires safety goggles during facial use", "Initial upfront hardware investment"],
    bestFor: ["Joint and muscle recovery", "Skin tone rejuvenation", "Circadian rhythm support"],
    publishedDate: "2025-01-16",
    readTime: "8 min read",
    featured: true,
    editorChoice: true
  },
  {
    id: "aromatherapy-diffuser-2025",
    title: "Best Ultrasonic Aromatherapy Diffusers for Calming Rest",
    category: "wellness",
    subcategory: "Aromatherapy",
    rating: 4.7,
    reviewCount: 310,
    price: "$30 - $85",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Whisper-quiet ceramic ultrasonic diffusers that disperse pure lavender, eucalyptus, and chamomile essential oils to transform bedrooms into spa-level sanctuaries.",
    tags: ["Ultrasonic", "Essential Oils", "Bedtime Sanctuary", "Whisper Quiet"],
    pros: ["Whisper quiet (<20dB) motor", "Waterless auto shut-off safety", "Real ceramic and stone finish"],
    cons: ["Requires distilled water for longevity", "Reservoir needs regular cleaning"],
    bestFor: ["Bedtime relaxation", "Living room ambiance", "Air moisturization"],
    publishedDate: "2025-01-24",
    readTime: "5 min read",
    featured: false,
    editorChoice: false
  },

  // HOME HEALTH
  {
    id: "blood-pressure-monitors-2025",
    title: "Best Home Blood Pressure Monitors 2025",
    category: "home-health",
    subcategory: "Monitors",
    rating: 4.8,
    reviewCount: 284,
    price: "$35 - $130",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Clinically validated upper-arm monitors with smart Bluetooth sync to Apple Health and Google Fit. Detects irregular heartbeats and provides multi-user memory.",
    tags: ["Cardiovascular", "Bluetooth Sync", "Clinical Accuracy", "FDA Cleared"],
    pros: ["AAMI & ESH clinical validation", "Wireless sync directly to your physician", "Easy pre-formed cuff fit"],
    cons: ["Battery replacement every few months", "Wrist models less accurate than arm cuffs"],
    bestFor: ["Hypertension management", "Preventative cardiovascular tracking", "Telehealth check-ins"],
    publishedDate: "2024-12-25",
    readTime: "7 min read",
    featured: true,
    editorChoice: true
  },
  {
    id: "hepa-air-purifiers-2025",
    title: "Top 10 Best HEPA Air Purifiers for Allergies & Smoke",
    category: "home-health",
    subcategory: "Air Quality",
    rating: 4.9,
    reviewCount: 440,
    price: "$99 - $350",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "True HEPA H13 filtration removes 99.97% of airborne dust, pollen, pet dander, and wildfire smoke particles down to 0.1 microns in large living spaces.",
    tags: ["True HEPA", "Allergies", "Wildfire Smoke", "Quiet Mark"],
    pros: ["True HEPA H13 removes 99.97% particulates", "Real-time PM2.5 laser air quality sensor", "Energy Star certified low power draw"],
    cons: ["Filters require replacement every 6-12 months", "Maximum fan speed is audible"],
    bestFor: ["Seasonal allergy sufferers", "Homes with indoor pets", "City wildfire smoke defense"],
    publishedDate: "2025-01-19",
    readTime: "8 min read",
    featured: true,
    editorChoice: true
  },
  {
    id: "smart-body-scale-2025",
    title: "Best Smart Body Composition Scales (BIA Tech)",
    category: "home-health",
    subcategory: "Diagnostics",
    rating: 4.6,
    reviewCount: 320,
    price: "$35 - $110",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Multi-frequency bioelectrical impedance scales that accurately track body fat percentage, lean muscle mass, visceral fat, bone density, and metabolic rate.",
    tags: ["Body Fat %", "Bioimpedance", "Muscle Mass", "Bluetooth Sync"],
    pros: ["13 biometric health indicators", "Automatic multi-user profile detection", "Seamless sync with Apple Health & Garmin"],
    cons: ["BIA readings fluctuate with hydration levels", "Not suitable for individuals with pacemakers"],
    bestFor: ["Body recomposition tracking", "Weight loss accountability", "Family health metrics"],
    publishedDate: "2025-01-26",
    readTime: "6 min read",
    featured: false,
    editorChoice: false
  },
  {
    id: "infrared-forehead-thermometer-2025",
    title: "Best Non-Contact Infrared Forehead Thermometers",
    category: "home-health",
    subcategory: "Thermometers",
    rating: 4.7,
    reviewCount: 260,
    price: "$20 - $45",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Hospital-grade infrared sensor provides instant 1-second temperature readings without skin contact. Features color-coded fever alert and silent night mode.",
    tags: ["No Contact", "1-Second Read", "Fever Alarm", "Hospital Grade"],
    pros: ["Instant 1-second accurate sensor", "Color-coded fever indicator display", "Mute mode for sleeping children"],
    cons: ["Readings can vary if forehead is sweaty", "Needs distance calibration (1-3cm)"],
    bestFor: ["Family medicine kits", "Quick pediatric fever checks", "Hygiene-conscious households"],
    publishedDate: "2025-01-30",
    readTime: "5 min read",
    featured: false,
    editorChoice: false
  }
]

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured)
}

export function getEditorChoiceProducts(): Product[] {
  return products.filter(product => product.editorChoice)
}
