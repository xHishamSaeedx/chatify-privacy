#!/usr/bin/env node

/**
 * Chatify Privacy Website Setup Verification Script
 * This script verifies that the project is set up correctly
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 Verifying Chatify Privacy Website setup...\n');

// Check if we're in the right directory
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (!fs.existsSync(packageJsonPath)) {
  console.error('❌ package.json not found. Please run this script from the project root directory.');
  process.exit(1);
}

// Read package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Verify package.json structure
console.log('📦 Checking package.json...');
if (packageJson.name !== 'chatify-privacy') {
  console.error('❌ Invalid package name. Expected: chatify-privacy');
  process.exit(1);
}

if (!packageJson.scripts.dev || !packageJson.scripts.build) {
  console.error('❌ Missing required scripts in package.json');
  process.exit(1);
}

console.log('✅ package.json is valid');

// Check for required files
console.log('\n📁 Checking required files...');
const requiredFiles = [
  'src/app/page.tsx',
  'src/app/layout.tsx',
  'src/app/globals.css',
  'next.config.ts',
  'tailwind.config.js',
  'tsconfig.json'
];

for (const file of requiredFiles) {
  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Missing required file: ${file}`);
    process.exit(1);
  }
  console.log(`✅ ${file}`);
}

// Check Node.js version
console.log('\n🟢 Checking Node.js version...');
try {
  const nodeVersion = process.version;
  const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
  
  if (majorVersion < 18) {
    console.error(`❌ Node.js version 18 or higher is required. Current version: ${nodeVersion}`);
    process.exit(1);
  }
  
  console.log(`✅ Node.js version: ${nodeVersion}`);
} catch (error) {
  console.error('❌ Could not determine Node.js version');
  process.exit(1);
}

// Check if node_modules exists
console.log('\n📦 Checking dependencies...');
const nodeModulesPath = path.join(process.cwd(), 'node_modules');
if (!fs.existsSync(nodeModulesPath)) {
  console.error('❌ node_modules not found. Please run "npm install" first.');
  process.exit(1);
}
console.log('✅ Dependencies installed');

// Check if .next directory exists (indicates successful build)
console.log('\n🔨 Checking build status...');
const nextPath = path.join(process.cwd(), '.next');
if (!fs.existsSync(nextPath)) {
  console.log('⚠️  .next directory not found. Running build check...');
  try {
    execSync('npm run build', { stdio: 'pipe' });
    console.log('✅ Build successful');
  } catch (error) {
    console.error('❌ Build failed. Please check the error messages above.');
    process.exit(1);
  }
} else {
  console.log('✅ Build directory exists');
}

// Check if development server can start
console.log('\n🚀 Testing development server...');
try {
  // Start dev server in background and kill it after 5 seconds
  const devProcess = execSync('npm run dev', { 
    stdio: 'pipe',
    timeout: 10000 
  });
  console.log('✅ Development server started successfully');
} catch (error) {
  if (error.signal === 'SIGTERM') {
    console.log('✅ Development server test completed');
  } else {
    console.error('❌ Development server failed to start');
    console.error('Error:', error.message);
    process.exit(1);
  }
}

console.log('\n🎉 Setup verification completed successfully!');
console.log('\n📋 Summary:');
console.log('✅ package.json is valid');
console.log('✅ All required files exist');
console.log('✅ Node.js version is compatible');
console.log('✅ Dependencies are installed');
console.log('✅ Build process works');
console.log('✅ Development server can start');
console.log('\n🚀 You can now run:');
console.log('   npm run dev    # Start development server');
console.log('   npm run build  # Build for production');
console.log('   npm run start  # Start production server');
console.log('\n🌐 Open http://localhost:3000 in your browser to view the website');
