# Derya Kendirci - Personal Portfolio

A production-grade Next.js portfolio showcasing software engineering work, AI projects, and professional experience.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Dark/Light Mode**: Seamless theme switching with next-themes
- **Performance Optimized**: Lighthouse score ≥ 90, optimized images, lazy loading
- **SEO Ready**: Open Graph tags, sitemap, RSS feed, structured data
- **Accessible**: WCAG 2.1 AA compliant, keyboard navigation, screen reader friendly
- **Blog with MDX**: Markdown support with syntax highlighting
- **LinkedIn Sharing**: One-click sharing for blog posts
- **CI/CD**: GitHub Actions with type checking, testing, and Lighthouse CI

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Theming**: next-themes
- **Content**: MDX with gray-matter
- **SEO**: next-seo
- **Testing**: Jest, React Testing Library
- **CI/CD**: GitHub Actions
- **Performance**: Lighthouse CI

## 📁 Project Structure

```
personal-portfolio/
├── app/                    # Next.js App Router
│   ├── blog/              # Blog pages
│   ├── projects/          # Projects page
│   ├── resume/            # Resume page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # Sitemap generator
│   └── rss.xml/           # RSS feed
├── components/            # React components
│   ├── Hero.tsx           # Hero section
│   ├── Impact.tsx         # Impact bullets
│   ├── Skills.tsx         # Skills section
│   ├── CaseStudies.tsx    # Case studies
│   ├── ExperienceTimeline.tsx
│   ├── ContactStrip.tsx   # Contact CTA
│   ├── Navbar.tsx         # Navigation
│   ├── Footer.tsx         # Footer
│   ├── ThemeProvider.tsx  # Theme provider
│   ├── SkillChip.tsx      # Skill level chips
│   └── CaseStudyCard.tsx  # Project cards
├── content/               # MDX content
│   └── blog/              # Blog posts
├── lib/                   # Utility functions
│   └── blog.ts            # Blog utilities
├── public/                # Static assets
└── .github/               # GitHub Actions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or later
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/deryakendirci/personal-portfolio.git
cd personal-portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

Edit `.env.local` and update:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

4. Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📝 Content Management

### Adding Blog Posts

1. Create a new `.mdx` file in `content/blog/`
2. Add frontmatter:
```yaml
---
title: "Your Post Title"
date: "2024-01-15"
summary: "Brief description of the post"
cover: "/blog/cover-image.jpg"
tags: ["tag1", "tag2"]
---
```

3. Write your content in Markdown/MDX

### Updating Projects

Edit the projects array in `components/CaseStudies.tsx` to update case studies.

### Customizing Skills

Modify the skill groups in `components/Skills.tsx` to reflect your expertise.

## 🧪 Testing

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Type checking
pnpm type-check

# Linting
pnpm lint
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push to main branch

### Manual Deployment

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## 📊 Performance

The portfolio is optimized for:

- **Lighthouse Score**: ≥ 90 (mobile)
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Accessibility**: WCAG 2.1 AA compliant
- **SEO**: Complete meta tags, structured data, sitemap

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: derya@example.com
- **LinkedIn**: [linkedin.com/in/deryakendirci](https://linkedin.com/in/deryakendirci)
- **GitHub**: [github.com/deryakendirci](https://github.com/deryakendirci)

---

Built with ❤️ using Next.js and Tailwind CSS 