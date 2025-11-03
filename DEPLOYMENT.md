# AWISE Network - Deployment Guide

## 📋 Pre-Deployment Checklist

- [x] All pages built and tested
- [x] Mobile responsive design verified
- [x] Forms with validation working
- [x] Animations functioning properly
- [x] Build succeeds without errors
- [x] Admin dashboard functional
- [x] README documentation complete

## 🚀 Deployment Steps

### Option 1: Deploy to Vercel (Recommended)

#### Step 1: Create GitHub Repository

1. Create a new repository on GitHub (e.g., `awise-network`)
2. Push your code:

```bash
cd awise-network
git add .
git commit -m "Initial commit: AWISE Network website"
git remote add origin https://github.com/YOUR_USERNAME/awise-network.git
git branch -M main
git push -u origin main
```

#### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure project:
   - Framework Preset: **Next.js** (auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
5. Click **Deploy**

#### Step 3: Custom Domain Setup

1. In Vercel Dashboard → Your Project → Settings → Domains
2. Add domain: `awisenetwork.org`
3. Configure DNS records (provided by Vercel):

   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

#### Step 4: Environment Variables (When Needed)

In Vercel Dashboard → Settings → Environment Variables, add:

- `DATABASE_URL` (when adding database)
- `NEXTAUTH_SECRET` (when adding authentication)
- `MAILCHIMP_API_KEY` (for email integration)
- etc.

### Option 2: Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### Option 3: Self-Hosted (VPS/Cloud)

#### Requirements

- Node.js 18+
- PM2 or similar process manager
- Nginx as reverse proxy

#### Steps

1. **Build the application**

```bash
npm run build
```

2. **Start with PM2**

```bash
pm2 start npm --name "awise-network" -- start
pm2 save
pm2 startup
```

3. **Configure Nginx**

```nginx
server {
    listen 80;
    server_name awisenetwork.org www.awisenetwork.org;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

4. **SSL with Let's Encrypt**

```bash
sudo certbot --nginx -d awisenetwork.org -d www.awisenetwork.org
```

## 🔒 Security Checklist

- [ ] Change admin credentials from demo values
- [ ] Implement proper authentication (NextAuth.js)
- [ ] Set up HTTPS/SSL certificates
- [ ] Configure CORS properly
- [ ] Add rate limiting
- [ ] Sanitize user inputs
- [ ] Set up monitoring and logging

## 📊 Post-Deployment

### Enable Analytics

1. **Vercel Analytics** (Automatic)

   - Already enabled if deployed on Vercel
   - View in Dashboard → Analytics

2. **Google Analytics** (Optional)
   ```typescript
   // Add to layout.tsx
   <Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
   ```

### Performance Monitoring

1. Run Lighthouse audit
2. Check Core Web Vitals
3. Monitor with Vercel Analytics or Google Search Console

### Test in Production

- [ ] All pages load correctly
- [ ] Forms submit successfully
- [ ] Admin dashboard accessible
- [ ] Mobile responsive on real devices
- [ ] SSL certificate valid
- [ ] Custom domain working

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### 404 on Routes

Check `vercel.json` rewrites configuration

### Static Export Issues

Ensure dynamic features are client-side rendered with `'use client'`

## 🔄 Updates & Maintenance

### Deploy Updates

```bash
git add .
git commit -m "Update: description of changes"
git push
```

Vercel will automatically redeploy.

### Rollback

In Vercel Dashboard → Deployments → Click previous deployment → Promote to Production

## 📈 Optimization Targets

- **Lighthouse Performance**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.5s

## 🎯 Next Steps After Deployment

1. **Add Real Authentication**

   - Implement NextAuth.js
   - Configure OAuth providers (Google, LinkedIn, Facebook)
   - Set up password reset flow

2. **Add Database**

   - Set up PostgreSQL (Vercel Postgres or Supabase)
   - Implement Prisma ORM
   - Migrate data

3. **Email Integration**

   - Connect Mailchimp or SendGrid
   - Set up automated welcome emails
   - Configure newsletter functionality

4. **CMS Integration** (Optional)

   - Set up Sanity or Contentful
   - Create content schemas
   - Build admin content management

5. **Payment Integration** (If needed)

   - Stripe for premium features
   - Event registration payments

6. **Advanced Features**
   - Search functionality
   - User profiles
   - Messaging system
   - Calendar integration

## 📞 Support

For deployment issues:

- Check Vercel logs
- Review build output
- Contact: tech@awisenetwork.org

---

✅ **Your AWISE Network website is ready for deployment!**
