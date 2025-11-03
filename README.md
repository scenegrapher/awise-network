# AWISE Network - Empowering African Women to Lead Social Change

A comprehensive full-stack Next.js website for African women in social entrepreneurship, providing curated opportunities, expert mentorship, storytelling platforms, and capacity-building programs.

## 🌟 Features

### Public Pages
- **Home Page**: Hero section, challenges carousel with modals, ecosystem overview, FAQ accordion, join form, and mentorship popup
- **Programs**: Three-tier program structure (Aspiring, Early-Stage, Scaling) with tabs
- **Events**: Upcoming and past events grid with registration
- **Contact Us**: Contact information and message form
- **Share Your Story**: Story submission form with photo upload and featured stories gallery

### Admin Dashboard
- **Secure Login**: Email/password authentication
- **Event Management**: CRUD operations for events
- **Story Approval**: Review and approve/reject story submissions
- **Subscriber Management**: View members, search, and export to CSV

### Interactive Features
- ✅ FAQ accordion with smooth animations
- ✅ Story modals (Sarah, Amina, Grace)
- ✅ Mentorship popup (triggered after 3 seconds)
- ✅ Program stage tabs with content switching
- ✅ Form validation (React Hook Form + Zod)
- ✅ Framer Motion animations (scroll-triggered, smooth transitions)
- ✅ Mobile-responsive hamburger menu
- ✅ UN SDG badges display

## 🎨 Design System

### Colors
- **Primary**: `#F28C38` (Orange)
- **Secondary**: `#2D5A27` (Green)
- **Accent**: `#FFD23F` (Yellow)
- **Neutral BG**: `#F5F5F5`
- **Text Dark**: `#333333`
- **Text Light**: `#6B7280`

### Typography
- **Headings**: Poppins Bold
- **Body**: Inter Regular

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

1. **Clone the repository**
```bash
cd awise-network
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🔐 Admin Access

### Demo Credentials
- **Email**: `admin@awisenetwork.org`
- **Password**: `admin123`

Access the admin dashboard at `/admin/login`

## 📁 Project Structure

```
awise-network/
├── src/
│   ├── app/
│   │   ├── admin/           # Admin dashboard pages
│   │   │   ├── login/
│   │   │   ├── dashboard/
│   │   │   ├── events/
│   │   │   ├── stories/
│   │   │   └── subscribers/
│   │   ├── contact/         # Contact page
│   │   ├── events/          # Events page
│   │   ├── programs/        # Programs page
│   │   ├── share-story/     # Story submission page
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── home/            # Home page components
│       │   ├── Hero.tsx
│       │   ├── Challenges.tsx
│       │   ├── Ecosystem.tsx
│       │   ├── FAQ.tsx
│       │   └── JoinForm.tsx
│       ├── layout/          # Layout components
│       │   ├── Header.tsx
│       │   └── Footer.tsx
│       └── modals/          # Modal components
│           └── MentorshipPopup.tsx
├── public/                  # Static assets
├── package.json
└── README.md
```

## 🌐 Deployment

### Deploy to Vercel

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Connect to Vercel**
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Vercel will auto-detect Next.js and configure build settings
- Click "Deploy"

3. **Custom Domain**
- In Vercel dashboard, go to Project Settings → Domains
- Add `awisenetwork.org` and configure DNS

### Environment Variables
For production, set these in Vercel dashboard:
```env
# Add your environment variables here when implementing backend
# NEXT_PUBLIC_API_URL=
# DATABASE_URL=
# NEXTAUTH_SECRET=
# NEXTAUTH_URL=
```

## 📧 Email Integration

To enable email signup functionality:

1. **Using Mailchimp**
```typescript
// Add to your API route
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});
```

2. **Using SendGrid** (Alternative)
```bash
npm install @sendgrid/mail
```

## 🔒 Authentication

The current admin authentication uses localStorage for demo purposes. For production:

1. **Implement NextAuth.js**
```bash
npm install next-auth
```

2. **Configure providers** (Google, LinkedIn, Facebook)
3. **Set up database sessions** (Prisma + PostgreSQL recommended)

## 🗄️ Database Setup (Optional)

For persistent data storage:

1. **Install Prisma**
```bash
npm install prisma @prisma/client
npx prisma init
```

2. **Define schema**
```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  firstName String
  lastName  String
  createdAt DateTime @default(now())
}

model Event {
  id          String   @id @default(cuid())
  title       String
  date        DateTime
  location    String
  description String
  createdAt   DateTime @default(now())
}

model Story {
  id           String   @id @default(cuid())
  name         String
  ventureName  String
  impactMetrics String
  story        String
  status       String   @default("pending")
  createdAt    DateTime @default(now())
}
```

## 📊 Analytics

Vercel Analytics is already configured. To view:
1. Deploy to Vercel
2. Enable Analytics in Project Settings
3. View real-time data in Vercel dashboard

## 🎯 Performance Optimization

- ✅ Image optimization with Next.js Image component
- ✅ Code splitting with dynamic imports
- ✅ Font optimization with Google Fonts
- ✅ Static page generation where possible
- ✅ Lazy loading for animations

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
npm run dev
```

## 📝 License

© 2025 AWISE Network. All Rights Reserved.

## 🤝 Contributing

This is a private project. For issues or feature requests, contact the development team.

## 📞 Support

For questions or support:
- Email: info@awisenetwork.org
- Website: https://awisenetwork.org

---

Built with ❤️ for African women social entrepreneurs
