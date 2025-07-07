# Render Deployment Guide

This guide will help you deploy the Alhaji Mustapha Abubakar Bida website to Render.

## 🚀 Quick Deployment Steps

### 1. Prerequisites
- GitHub account
- Render account (free tier available)
- Git installed locally

### 2. Push to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Alhaji Mustapha website with live news integration"

# Add GitHub remote (replace with your repository URL)
git remote add origin https://github.com/yourusername/alhaji-mustapha-website.git

# Push to GitHub
git push -u origin main
```

### 3. Deploy on Render

1. **Go to Render Dashboard**
   - Visit [render.com](https://render.com)
   - Sign in with your GitHub account

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the `alhaji-mustapha-website` repository

3. **Configure Deployment Settings**
   ```
   Name: alhaji-mustapha-website
   Environment: Node
   Region: Choose closest to your users
   Branch: main
   Build Command: npm install && npm run build
   Start Command: npm run preview
   ```

4. **Environment Variables (Optional)**
   ```
   NODE_VERSION=18.17.0
   NPM_VERSION=9.6.7
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Render will automatically build and deploy your site
   - You'll get a live URL like: `https://alhaji-mustapha-website.onrender.com`

## 📋 Deployment Configuration

### Render.yaml Configuration
The project includes a `render.yaml` file with optimal settings:

```yaml
services:
  - type: web
    name: alhaji-mustapha-website
    env: node
    plan: free
    buildCommand: npm install && npm run build
    startCommand: npm run preview
    healthCheckPath: /
    envVars:
      - key: NODE_VERSION
        value: 18.17.0
      - key: NPM_VERSION
        value: 9.6.7
    staticPublishPath: ./dist
```

### Package.json Scripts
Updated scripts for Render compatibility:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview --host 0.0.0.0 --port $PORT",
    "start": "npm run preview"
  }
}
```

## 🔧 Build Process

### What Happens During Deployment:
1. **Install Dependencies** - `npm install`
2. **TypeScript Compilation** - `tsc`
3. **Vite Build** - Creates optimized production build
4. **Static File Generation** - Outputs to `dist/` folder
5. **Server Start** - Serves static files with Vite preview

### Build Output:
- **HTML/CSS/JS** - Minified and optimized
- **Images** - All 120+ project images included
- **Assets** - Fonts, icons, and static resources
- **Source Maps** - For debugging (can be disabled in production)

## 🌐 Custom Domain (Optional)

### To use a custom domain:
1. **Purchase Domain** - From any domain registrar
2. **Add Custom Domain in Render**
   - Go to your service settings
   - Add custom domain (e.g., `alhajimustapha.com`)
3. **Update DNS Records**
   - Add CNAME record pointing to your Render URL
   - Render will automatically provision SSL certificate

## 📊 Performance Optimization

### Render Optimizations:
- **CDN** - Global content delivery network
- **Gzip Compression** - Automatic compression
- **HTTP/2** - Modern protocol support
- **SSL/TLS** - Automatic HTTPS certificates

### Application Optimizations:
- **Code Splitting** - Vite automatically splits code
- **Tree Shaking** - Removes unused code
- **Asset Optimization** - Images and fonts optimized
- **Lazy Loading** - Components load on demand

## 🔍 Monitoring & Maintenance

### Render Dashboard Features:
- **Build Logs** - View deployment progress
- **Runtime Logs** - Monitor application performance
- **Metrics** - CPU, memory, and request analytics
- **Auto-Deploy** - Automatic deployments on Git push

### Health Checks:
- **Endpoint** - `/` (homepage)
- **Frequency** - Every 30 seconds
- **Timeout** - 30 seconds
- **Auto-Restart** - On health check failures

## 🚨 Troubleshooting

### Common Issues:

1. **Build Fails**
   ```bash
   # Check Node.js version
   node --version  # Should be 18.x

   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Images Not Loading**
   - Ensure images are in `public/images/` folder
   - Check file paths are relative to public directory
   - Verify image files are committed to Git

3. **News API CORS Issues**
   - The app uses CORS proxy for news fetching
   - Fallback content will display if APIs fail
   - No additional configuration needed

4. **TypeScript Errors**
   ```bash
   # Check for TypeScript errors
   npm run build
   
   # Fix any type errors before deployment
   ```

### Support Resources:
- **Render Docs** - [render.com/docs](https://render.com/docs)
- **Vite Docs** - [vitejs.dev](https://vitejs.dev)
- **React Docs** - [react.dev](https://react.dev)

## 🎯 Post-Deployment Checklist

### ✅ Verify Functionality:
- [ ] Homepage loads correctly
- [ ] Navigation works on all pages
- [ ] Images display properly
- [ ] News section loads (may take a moment)
- [ ] Gallery functions with lightbox
- [ ] Contact form is accessible
- [ ] Mobile responsiveness works
- [ ] All project images are visible

### ✅ Performance Check:
- [ ] Page load speed < 3 seconds
- [ ] Lighthouse score > 90
- [ ] No console errors
- [ ] All links work correctly

### ✅ SEO Verification:
- [ ] Meta tags are present
- [ ] Open Graph tags work
- [ ] Sitemap accessible
- [ ] Robots.txt configured

## 🔄 Continuous Deployment

### Automatic Updates:
- **Git Push** - Triggers automatic deployment
- **Build Process** - Runs automatically on each push
- **Zero Downtime** - Seamless updates
- **Rollback** - Easy rollback to previous versions

### Development Workflow:
1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Render automatically deploys
5. Verify on live site

---

**🎉 Your website will be live at: `https://alhaji-mustapha-website.onrender.com`**

The deployment includes all features:
- ✅ 120+ Real project images
- ✅ Live news integration from 8 Nigerian newspapers
- ✅ Interactive gallery with lightbox
- ✅ Responsive design for all devices
- ✅ SEO optimization
- ✅ Professional animations and transitions

**Estimated deployment time: 3-5 minutes**
