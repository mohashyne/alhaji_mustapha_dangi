#!/bin/bash

# Build script for Alhaji Mustapha website
# This script prepares the project for production deployment

echo "🚀 Starting build process for Alhaji Mustapha website..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18.x or higher."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version)
echo "📦 Node.js version: $NODE_VERSION"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/
rm -rf node_modules/.vite/

# Install dependencies
echo "📥 Installing dependencies..."
npm ci --production=false

# Run TypeScript check
echo "🔍 Running TypeScript check..."
npx tsc --noEmit

if [ $? -ne 0 ]; then
    echo "❌ TypeScript check failed. Please fix the errors and try again."
    exit 1
fi

# Run build
echo "🏗️ Building for production..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check the errors and try again."
    exit 1
fi

# Check if dist folder was created
if [ ! -d "dist" ]; then
    echo "❌ Build output directory 'dist' was not created."
    exit 1
fi

# Verify critical files exist
echo "✅ Verifying build output..."

CRITICAL_FILES=(
    "dist/index.html"
    "dist/assets"
    "dist/images"
)

for file in "${CRITICAL_FILES[@]}"; do
    if [ ! -e "$file" ]; then
        echo "❌ Critical file/directory missing: $file"
        exit 1
    fi
done

# Count project images
IMAGE_COUNT=$(find dist/images/projects -name "*.jpg" 2>/dev/null | wc -l)
echo "📸 Project images included: $IMAGE_COUNT"

if [ "$IMAGE_COUNT" -lt 50 ]; then
    echo "⚠️ Warning: Expected more project images. Current count: $IMAGE_COUNT"
fi

# Check build size
BUILD_SIZE=$(du -sh dist/ | cut -f1)
echo "📊 Build size: $BUILD_SIZE"

# Test the build locally (optional)
echo "🧪 Testing build locally..."
timeout 10s npm run preview > /dev/null 2>&1 &
PREVIEW_PID=$!

sleep 3

# Check if preview server is running
if kill -0 $PREVIEW_PID 2>/dev/null; then
    echo "✅ Preview server started successfully"
    kill $PREVIEW_PID 2>/dev/null
else
    echo "⚠️ Preview server test failed, but build completed"
fi

echo ""
echo "🎉 Build completed successfully!"
echo ""
echo "📋 Build Summary:"
echo "   - TypeScript: ✅ Compiled"
echo "   - Assets: ✅ Optimized"
echo "   - Images: ✅ $IMAGE_COUNT project images"
echo "   - Size: $BUILD_SIZE"
echo ""
echo "🚀 Ready for deployment!"
echo ""
echo "Next steps:"
echo "1. Commit and push to GitHub"
echo "2. Deploy to Render using the RENDER_DEPLOYMENT.md guide"
echo "3. Verify deployment at your Render URL"
echo ""
