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
    description: "Skincare, makeup, and beauty essentials for your daily routine",
    icon: "💄",
    subcategories: ["Skincare", "Makeup", "Hair Care", "Anti-Aging", "Natural Beauty"]
  },
  supplements: {
    name: "Supplements",
    description: "Vitamins, minerals, and health supplements for optimal wellness",
    icon: "💊",
    subcategories: ["Vitamins", "Minerals", "Protein", "Immune Support", "Energy"]
  },
  fitness: {
    name: "Fitness",
    description: "Exercise equipment and workout gear for your fitness journey",
    icon: "💪",
    subcategories: ["Cardio Equipment", "Strength Training", "Yoga", "Home Gym", "Wearables"]
  },
  nutrition: {
    name: "Nutrition",
    description: "Healthy foods and nutrition products for balanced living",
    icon: "🥗",
    subcategories: ["Organic Foods", "Meal Plans", "Superfoods", "Drinks", "Snacks"]
  },
  wellness: {
    name: "Wellness",
    description: "Mental health and wellness products for overall well-being",
    icon: "🧘",
    subcategories: ["Meditation", "Sleep", "Stress Relief", "Mental Health", "Aromatherapy"]
  },
  "home-health": {
    name: "Home Health",
    description: "Health monitoring and home care essentials",
    icon: "🏠",
    subcategories: ["Monitors", "Air Quality", "Safety", "First Aid", "Mobility"]
  }
}

export const products: Product[] = [
  // Beauty Products
  {
    id: "vitamin-c-serum-2025",
    title: "Top 10 Best Vitamin C Serums of 2025",
    category: "beauty",
    subcategory: "Skincare",
    rating: 4.8,
    reviewCount: 256,
    price: "$25-85",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Discover the most effective vitamin C serums for brightening skin, reducing dark spots, and fighting signs of aging. Our experts tested 50+ products to find the best.",
    tags: ["Anti-Aging", "Brightening", "Antioxidant"],
    pros: ["Proven ingredients", "Multiple price points", "Suitable for all skin types"],
    cons: ["May cause sensitivity", "Results take time"],
    bestFor: ["Dark spots", "Dull skin", "Anti-aging"],
    publishedDate: "2025-01-15",
    readTime: "8 min read",
    featured: true,
    editorChoice: true
  },
  {
    id: "retinol-creams-2025",
    title: "Best Retinol Creams for Beginners 2025",
    category: "beauty",
    subcategory: "Skincare",
    rating: 4.6,
    reviewCount: 189,
    price: "$30-120",
    image: "https://images.unsplash.com/photo-1571875257401-60b3bf0ee9dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Start your retinol journey with these gentle yet effective formulations. Perfect for first-time users looking to combat fine lines and improve skin texture.",
    tags: ["Anti-Aging", "Beginner-Friendly", "Night Care"],
    pros: ["Gentle formulations", "Gradual strength building", "Multiple options"],
    cons: ["Requires patience", "Sun sensitivity"],
    bestFor: ["Fine lines", "Texture improvement", "Beginners"],
    publishedDate: "2025-01-12",
    readTime: "6 min read",
    featured: false,
    editorChoice: false
  },

  // Supplements
  {
    id: "multivitamins-2025",
    title: "Top 15 Best Multivitamins for Adults 2025",
    category: "supplements",
    subcategory: "Vitamins",
    rating: 4.7,
    reviewCount: 432,
    price: "$15-60",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Comprehensive analysis of the best multivitamins for men and women. We tested absorption rates, ingredient quality, and value for money.",
    tags: ["Daily Health", "Immune Support", "Energy"],
    pros: ["Complete nutrition", "Third-party tested", "Various formulations"],
    cons: ["Large pill size", "May cause nausea"],
    bestFor: ["Nutritional gaps", "Busy lifestyles", "General health"],
    publishedDate: "2025-01-10",
    readTime: "10 min read",
    featured: true,
    editorChoice: true
  },
  {
    id: "omega-3-supplements-2025",
    title: "Best Omega-3 Supplements for Heart Health",
    category: "supplements",
    subcategory: "Heart Health",
    rating: 4.9,
    reviewCount: 318,
    price: "$20-75",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Essential omega-3 fatty acids for cardiovascular health. Compare fish oil, krill oil, and plant-based alternatives for optimal heart support.",
    tags: ["Heart Health", "Brain Function", "Anti-Inflammatory"],
    pros: ["Clinically proven", "Sustainable sources", "Easy to swallow"],
    cons: ["Fishy aftertaste", "Expensive options"],
    bestFor: ["Heart health", "Brain function", "Joint support"],
    publishedDate: "2025-01-08",
    readTime: "7 min read",
    featured: false,
    editorChoice: true
  },

  // Fitness
  {
    id: "home-gym-equipment-2025",
    title: "Best Home Gym Equipment Under $500",
    category: "fitness",
    subcategory: "Home Gym",
    rating: 4.5,
    reviewCount: 203,
    price: "$50-500",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Transform your home into a complete fitness center without breaking the bank. Our experts review the most versatile and space-efficient equipment.",
    tags: ["Home Workouts", "Budget-Friendly", "Space-Saving"],
    pros: ["Cost-effective", "Versatile", "Compact design"],
    cons: ["Limited weight range", "Assembly required"],
    bestFor: ["Small spaces", "Budget workouts", "Beginners"],
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
    price: "$80-250",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Find the perfect running shoes for your gait, distance, and terrain. Comprehensive testing of cushioning, support, and durability across all major brands.",
    tags: ["Running", "Performance", "Comfort"],
    pros: ["Tested by runners", "Multiple categories", "Detailed analysis"],
    cons: ["Sizing varies", "Break-in period"],
    bestFor: ["All runner types", "Various terrains", "Long distances"],
    publishedDate: "2025-01-03",
    readTime: "12 min read",
    featured: false,
    editorChoice: true
  },

  // Nutrition
  {
    id: "protein-powders-2025",
    title: "Best Protein Powders for Muscle Building 2025",
    category: "nutrition",
    subcategory: "Protein",
    rating: 4.7,
    reviewCount: 389,
    price: "$25-80",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Complete guide to the best protein powders for muscle growth, recovery, and performance. Whey, casein, and plant-based options compared.",
    tags: ["Muscle Building", "Recovery", "Performance"],
    pros: ["High protein content", "Great taste", "Multiple flavors"],
    cons: ["Some contain fillers", "Digestive issues"],
    bestFor: ["Muscle building", "Post-workout", "Meal replacement"],
    publishedDate: "2025-01-01",
    readTime: "8 min read",
    featured: true,
    editorChoice: true
  },

  // Wellness
  {
    id: "meditation-apps-2025",
    title: "Top 10 Meditation Apps for Stress Relief",
    category: "wellness",
    subcategory: "Meditation",
    rating: 4.6,
    reviewCount: 156,
    price: "Free-$15/month",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Discover the best meditation apps to reduce stress, improve sleep, and enhance mindfulness. Features, pricing, and user experience compared.",
    tags: ["Stress Relief", "Mindfulness", "Sleep"],
    pros: ["Guided meditations", "Progress tracking", "Offline access"],
    cons: ["Subscription costs", "Learning curve"],
    bestFor: ["Beginners", "Stress management", "Better sleep"],
    publishedDate: "2024-12-28",
    readTime: "6 min read",
    featured: false,
    editorChoice: false
  },

  // Home Health
  {
    id: "blood-pressure-monitors-2025",
    title: "Best Home Blood Pressure Monitors 2025",
    category: "home-health",
    subcategory: "Monitors",
    rating: 4.8,
    reviewCount: 284,
    price: "$25-150",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Monitor your cardiovascular health at home with these accurate and reliable blood pressure monitors. Features automatic readings and smartphone connectivity.",
    tags: ["Health Monitoring", "Heart Health", "Medical Device"],
    pros: ["Medical accuracy", "Easy to use", "Data tracking"],
    cons: ["Calibration needed", "Cuff sizing"],
    bestFor: ["Hypertension monitoring", "Health tracking", "Doctor visits"],
    publishedDate: "2024-12-25",
    readTime: "7 min read",
    featured: false,
    editorChoice: true
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
