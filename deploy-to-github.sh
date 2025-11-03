#!/bin/bash

# AWISE Network - GitHub Deployment Script
# This script will help you push your code to GitHub

echo "🚀 AWISE Network - GitHub Deployment"
echo "======================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if git is initialized
if [ ! -d .git ]; then
    echo "${YELLOW}Initializing git repository...${NC}"
    git init
    git add .
    git commit -m "Initial commit: AWISE Network website"
else
    echo "${GREEN}✓ Git repository already initialized${NC}"
fi

echo ""
echo "${BLUE}Please follow these steps to create your GitHub repository:${NC}"
echo ""
echo "1. Go to: https://github.com/new"
echo "2. Repository name: awise-network"
echo "3. Description: Empowering African Women to Lead Social Change"
echo "4. Keep it Public (or Private if you prefer)"
echo "5. DO NOT initialize with README, .gitignore, or license"
echo "6. Click 'Create repository'"
echo ""
echo "${YELLOW}Press Enter after you've created the repository...${NC}"
read -r

echo ""
echo "${BLUE}What is your GitHub username?${NC}"
read -r GITHUB_USERNAME

echo ""
echo "${YELLOW}Setting up remote repository...${NC}"
REPO_URL="https://github.com/${GITHUB_USERNAME}/awise-network.git"

# Remove existing remote if it exists
git remote remove origin 2>/dev/null

# Add new remote
git remote add origin "$REPO_URL"

echo ""
echo "${YELLOW}Pushing code to GitHub...${NC}"
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "${GREEN}✓ Success! Your code is now on GitHub${NC}"
    echo ""
    echo "Repository URL: https://github.com/${GITHUB_USERNAME}/awise-network"
    echo ""
    echo "📋 Next Steps:"
    echo "1. Go to: https://vercel.com"
    echo "2. Click 'Add New Project'"
    echo "3. Import your GitHub repository"
    echo "4. Click 'Deploy' (Vercel will auto-detect Next.js)"
    echo "5. Your site will be live in ~2 minutes!"
    echo ""
else
    echo ""
    echo "${YELLOW}⚠️  Push failed. You may need to authenticate.${NC}"
    echo ""
    echo "Try one of these:"
    echo "1. Use GitHub Desktop: https://desktop.github.com"
    echo "2. Set up SSH key: https://docs.github.com/en/authentication/connecting-to-github-with-ssh"
    echo "3. Use Personal Access Token"
    echo ""
    echo "Manual commands:"
    echo "  git remote add origin $REPO_URL"
    echo "  git branch -M main"
    echo "  git push -u origin main"
fi

