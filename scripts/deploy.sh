#!/bin/bash

# Deploy script for GitHub Pages

echo "Starting deployment to GitHub Pages..."

# Check if out directory exists
if [ ! -d "out" ]; then
    echo "Error: out directory not found. Please run 'npm run build && npm run export' first."
    exit 1
fi

# Add .nojekyll file to bypass Jekyll processing
touch out/.nojekyll

# Copy CNAME file if it exists
if [ -f "CNAME" ]; then
    cp CNAME out/
fi

# Initialize git in out directory
cd out
git init
git add -A
git commit -m "Deploy to GitHub Pages"

# Get the repository URL
REPO_URL=$(git --git-dir=../.git config --get remote.origin.url)

if [ -z "$REPO_URL" ]; then
    echo "Error: Could not get repository URL. Make sure you're in a git repository."
    exit 1
fi

# Push to gh-pages branch
git push -f $REPO_URL master:gh-pages

echo "Deployment complete! Your site will be available at https://fengzhichao.me"