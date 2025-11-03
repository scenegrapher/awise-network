# GitHub Setup & Deployment Guide

## Quick Start - Two Options

### Option 1: Using the Script (Recommended)

```bash
cd /Users/X/Desktop/AWISE/awise-network
./deploy-to-github.sh
```

The script will guide you through the process!

---

### Option 2: Manual Steps

#### Step 1: Create GitHub Repository

1. Go to: **https://github.com/new**
2. Fill in the details:
   - **Repository name**: `awise-network`
   - **Description**: `Empowering African Women to Lead Social Change - Full-stack Next.js website`
   - **Visibility**: Public (or Private)
   - ⚠️ **DO NOT** check "Add a README file"
   - ⚠️ **DO NOT** add .gitignore or license
3. Click **"Create repository"**

#### Step 2: Push Your Code

After creating the repository, run these commands (replace YOUR_USERNAME):

```bash
cd /Users/X/Desktop/AWISE/awise-network

# Add your GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/awise-network.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Step 3: Authenticate (if prompted)

If you get an authentication error:

**Option A: Using Personal Access Token**
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Select scopes: `repo` (full control)
4. Copy the token
5. When prompted for password, paste the token

**Option B: Using GitHub Desktop** (Easiest)
1. Download: https://desktop.github.com
2. Sign in to your GitHub account
3. File → Add Local Repository → Browse to the project
4. Click "Publish repository"

**Option C: Using SSH Key**
1. Generate SSH key: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
2. Change remote to SSH:
   ```bash
   git remote set-url origin git@github.com:YOUR_USERNAME/awise-network.git
   git push -u origin main
   ```

---

## Deploy to Vercel (After GitHub Upload)

### Step 1: Go to Vercel
Visit: **https://vercel.com**

### Step 2: Import Project
1. Click **"Add New..."** → **"Project"**
2. Select **"Import Git Repository"**
3. Find and select **"awise-network"**

### Step 3: Configure (Auto-detected)
- Framework Preset: **Next.js** ✓
- Root Directory: **./awise-network** ✓
- Build Command: `npm run build` ✓
- Output Directory: `.next` ✓

### Step 4: Deploy
Click **"Deploy"** and wait ~2 minutes

### Step 5: Custom Domain
1. Go to Project Settings → Domains
2. Add: `awisenetwork.org`
3. Configure DNS as instructed by Vercel

---

## Verification

After deployment, test:
- ✅ Home page: https://your-project.vercel.app
- ✅ Programs: https://your-project.vercel.app/programs
- ✅ Events: https://your-project.vercel.app/events
- ✅ Contact: https://your-project.vercel.app/contact
- ✅ Share Story: https://your-project.vercel.app/share-story
- ✅ Admin: https://your-project.vercel.app/admin/login

---

## Troubleshooting

### "Authentication failed"
Use Personal Access Token or GitHub Desktop

### "Remote already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/awise-network.git
```

### "Permission denied"
Check your GitHub username and make sure the repository was created

### "Updates were rejected"
```bash
git pull origin main --rebase
git push -u origin main
```

---

## Quick Reference

**Repository URL**: https://github.com/YOUR_USERNAME/awise-network  
**Vercel Dashboard**: https://vercel.com/dashboard  
**Domain Setup**: Project Settings → Domains  

---

## What's Next?

After deployment:
1. ✅ Test all pages
2. ✅ Update admin credentials
3. ✅ Configure custom domain
4. ✅ Enable analytics
5. ✅ Set up environment variables (when needed)

---

Need help? Check DEPLOYMENT.md for detailed instructions!

