# Daniel Dozie Portfolio

A modern, performant portfolio website built with cutting-edge web technologies. This project showcases services in digital design, branding, UI/UX design, and e-commerce solutions.

**[Live Website](https://www.danieldozie.dev)** · [Contact Form](https://www.danieldozie.dev/#contact)

---

## 🎯 Features

- **Modern Design**: Responsive, dark mode-enabled interface with smooth animations
- **Content Management**: Headless CMS integration with Sanity.io for dynamic content
- **Blog Platform**: Full-featured blog with syntax highlighting and code blocks
- **Contact System**: Email notifications with OAuth2 authentication
- **Project Portfolio**: Showcase of completed work with live previews
- **Services Pages**: Dedicated pages for digital, branding, UI/UX, and e-commerce services
- **Performance Optimized**: Built with Next.js for SSG and fast load times
- **Type Safe**: Full TypeScript support for reliability

---

## 🛠️ Tech Stack

### Frontend
- **[Next.js](https://nextjs.org/)** (v12.3.0) - React framework with SSG/SSR
- **[React](https://react.dev/)** (v18.2.0) - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Headless UI](https://headlessui.dev/)** - Unstyled, accessible components
- **[Heroicons](https://heroicons.com/)** - Beautiful SVG icons

### Content & Data
- **[Sanity.io](https://www.sanity.io/)** - Headless CMS for content management
- **[Apollo Client](https://www.apollographql.com/docs/react/)** - GraphQL client
- **[@sanity/client](https://github.com/sanity-io/client)** - Sanity JS client
- **[next-sanity](https://github.com/sanity-io/next-sanity)** - Next.js integration

### Features & Utilities
- **[Formik](https://formik.org/)** - Form validation and state management
- **[Axios](https://axios-http.com/)** - HTTP client
- **[Nodemailer](https://nodemailer.com/)** - Email sending
- **[Moment.js](https://momentjs.com/)** - Date formatting
- **[React Syntax Highlighter](https://react-syntax-highlighter.github.io/react-syntax-highlighter/)** - Code highlighting
- **[GSAP](https://greensock.com/gsap/)** - Advanced animations
- **[react-icons](https://react-icons.github.io/react-icons/)** - Icon library

### Development & Testing
- **[Jest](https://jestjs.io/)** - JavaScript testing framework
- **[React Testing Library](https://testing-library.com/react)** - Component testing
- **[ESLint](https://eslint.org/)** - Code quality
- **[TypeScript](https://www.typescriptlang.org/)** - Type checking

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 14+
- npm or yarn

### Clone & Install

```bash
# Clone the repository
git clone https://github.com/danielDozie/danieldozie.dev.git
cd danieldozie.dev

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
SANITY_TOKEN=your_sanity_token

# Email & OAuth2 Configuration
NEXT_PUBLIC_EMAIL=your_email@gmail.com
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CLIENT_REDIRECT_URI=your_redirect_uri
GOOGLE_CLIENT_REFRESH_TOKEN=your_refresh_token

# Webhook Configuration
NEXT_PUBLIC_WEBHOOK_SECRET=your_webhook_secret

# Site Configuration
NEXT_PUBLIC_SITE_TITLE=Daniel Dozie
```

---

## 🚀 Getting Started

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

### Testing

```bash
npm test
```

Runs tests in watch mode. Press `q` to quit.

---

## 📁 Project Structure

```
danieldozie.dev/
├── pages/                          # Next.js pages & API routes
│   ├── api/                        # API endpoints
│   │   ├── messagesHandler.page.tsx    # Message submission handler
│   │   └── emailNotification.page.tsx  # Email notification webhook
│   ├── blog/                       # Blog page
│   ├── services/                   # Service pages (digital, branding, etc.)
│   └── _app.page.tsx              # App wrapper with providers
├── components/                     # Reusable React components
│   └── Blocks/                     # Page section components
├── lib/                           # Utility functions & data fetching
│   ├── sanityClient.tsx           # Sanity client configuration
│   ├── dataQueries.tsx            # GROQ queries for Sanity
│   ├── serializers.tsx            # Content serializers
│   └── loader.jsx                 # Loading indicator component
├── styles/                        # Global CSS styles
├── public/                        # Static assets
└── package.json                   # Dependencies
```

---

## 🔧 Key Features Explained

### Content Management
Content is managed through **Sanity.io**, a powerful headless CMS. All pages, blog posts, services, and projects are stored in Sanity and fetched at build time for optimal performance.

### Contact System
The contact form uses:
- **Formik** for form validation
- **Axios** for HTTP requests
- **Nodemailer** with OAuth2 for secure email sending
- **Google OAuth2** for Gmail integration
- **Sanity webhooks** for message notifications

### Blog
Features include:
- Markdown-based content
- Syntax highlighting for code blocks
- Author information
- Responsive image handling
- Fast loading with static generation

### Animations
Built with **GSAP** for smooth, performant animations and transitions throughout the site.

---

## 📝 API Endpoints

### POST `/api/messagesHandler`
Handles contact form submissions and stores them in Sanity.

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry",
  "message": "Your message here"
}
```

### POST `/api/emailNotification`
Webhook endpoint for Sanity notifications. Sends email alerts for new messages.

**Authentication:** Sanity webhook signature validation

---

## 🎨 Design & Styling

- **Dark Mode**: Built-in dark mode toggle with persistent preferences
- **Responsive**: Mobile-first design that works on all screen sizes
- **Gradient Accents**: Modern gradient text and backgrounds using Tailwind utilities
- **Accessibility**: Semantic HTML and ARIA labels with Headless UI components

---

## 📱 Pages

- **Home** - Portfolio overview with featured work
- **About Me** - Personal background and expertise
- **Services** - Digital Design, Branding, UI/UX, E-commerce
- **Work** - Portfolio projects with live previews
- **Blog** - Articles and insights
- **Contact** - Get in touch form

---

## 🚦 Performance

- **Static Generation**: Most pages are pre-rendered at build time (ISR)
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Lazy-loaded components with React.Suspense
- **Progressive Loading**: Top bar progress indicator for better UX

---

## 🤝 Contributing

Found a bug or have a suggestion? Feel free to [open an issue](https://github.com/danielDozie/danieldozie.dev/issues) or submit a pull request.

---

## 📧 Get In Touch

Have a project in mind? Use the [contact form](https://www.danieldozie.dev) or reach out directly:

- **Website**: [danieldozie.dev](https://www.danieldozie.dev)
- **Email**: Use the contact form on the website

---

## 📄 License

This project is open source. Feel free to use it as reference or inspiration for your own portfolio.

---

## 🙏 Acknowledgments

- [Sanity.io](https://www.sanity.io/) for excellent headless CMS
- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Articles by Simon Griggs](https://www.simeongriggs.dev/) - Featured on the blog

---

**Last Updated:** September 2026
