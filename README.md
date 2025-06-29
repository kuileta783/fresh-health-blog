# Fresh Health Blog

A modern, responsive health and wellness blog built with Next.js, TypeScript, and shadcn/ui. This comprehensive platform features product reviews, health categories, and educational content focused on wellness, nutrition, fitness, and more.

## 🌟 Features

- **Modern Design**: Clean, responsive UI built with shadcn/ui and TailwindCSS
- **Product Review System**: Comprehensive product reviews with ratings and filtering
- **Category Navigation**: Organized content across multiple health categories:
  - Nutrition & Diet
  - Fitness & Exercise
  - Beauty & Skincare
  - Supplements & Vitamins
  - Home Health
  - General Wellness
- **Interactive Components**: Carousels, filters, search functionality
- **Static Pages**: About, Contact, Privacy Policy, Terms & Conditions, Disclaimer
- **Mobile Responsive**: Optimized for all device sizes
- **Fast Performance**: Built with Next.js 15 and optimized for speed

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS + shadcn/ui components
- **Icons**: Lucide React
- **Carousel**: Embla Carousel
- **Build Tool**: Bun
- **Linting**: Biome
- **Deployment**: Netlify ready

## 📁 Project Structure

```
fresh-health-blog/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── category/          # Category-specific pages
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   └── ...               # Other static pages
│   ├── components/            # Reusable React components
│   │   ├── ui/               # shadcn/ui components
│   │   └── ...               # Custom components
│   └── lib/                   # Utilities and data
├── public/                    # Static assets
└── ...                       # Config files
```

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/username/fresh-health-blog.git
   cd fresh-health-blog
   ```

2. **Install dependencies**:
   ```bash
   bun install
   ```

3. **Run the development server**:
   ```bash
   bun dev
   ```

4. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `bun dev` - Start development server with Turbopack
- `bun build` - Build the application for production
- `bun start` - Start the production server
- `bun lint` - Run linting and type checking
- `bun format` - Format code with Biome

## 🎨 Components

The project includes a comprehensive set of custom components:

- **Header**: Navigation with category dropdown
- **HeroSection**: Landing page hero with call-to-action
- **CategoriesSection**: Product category showcase
- **ProductCard**: Individual product review cards
- **FeaturedArticlesSection**: Highlighted content
- **StatsSection**: Health and wellness statistics
- **ContactSection**: Contact form and information
- **Footer**: Site footer with links and social media

## 🔧 Configuration

- **TypeScript**: Strict mode enabled with proper type definitions
- **TailwindCSS**: Custom configuration with shadcn/ui integration
- **ESLint**: Extended Next.js configuration
- **Biome**: Fast formatter and linter

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first design approach
- Optimized touch interactions
- Accessible navigation
- Fast loading times

## 🌐 Deployment

This project is configured for easy deployment on:
- **Netlify** (netlify.toml included)
- **Vercel** (Next.js native support)
- **Any Node.js hosting platform**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

For questions or support, please use the contact form on the website or open an issue on GitHub.

---

**Built with ❤️ using Next.js and shadcn/ui**
