@echo off
echo 🚀 Setting up Chatify Privacy Website...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js version 18 or higher.
    echo Visit: https://nodejs.org/
    pause
    exit /b 1
)

REM Check Node.js version
for /f "tokens=1,2,3 delims=." %%a in ('node --version') do set NODE_VERSION=%%a
set NODE_VERSION=%NODE_VERSION:~1%
if %NODE_VERSION% LSS 18 (
    echo ❌ Node.js version 18 or higher is required. Current version: 
    node --version
    echo Please update Node.js: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js version: 
node --version

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm.
    pause
    exit /b 1
)

echo ✅ npm version: 
npm --version

REM Install dependencies
echo 📦 Installing dependencies...
npm install

if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies. Please check your internet connection and try again.
    pause
    exit /b 1
)

echo ✅ Dependencies installed successfully!

REM Create .env.local file if it doesn't exist
if not exist .env.local (
    echo 📝 Creating .env.local file...
    (
        echo # Environment variables for Chatify Privacy Website
        echo NEXT_PUBLIC_APP_NAME=Chatify
        echo NEXT_PUBLIC_APP_URL=http://localhost:3000
    ) > .env.local
    echo ✅ Created .env.local file
) else (
    echo ✅ .env.local file already exists
)

REM Run build to check for any issues
echo 🔨 Running build check...
npm run build

if %errorlevel% neq 0 (
    echo ❌ Build failed. Please check the error messages above.
    pause
    exit /b 1
)

echo ✅ Build successful!
echo.
echo 🎉 Setup completed successfully!
echo.
echo To start the development server, run:
echo   npm run dev
echo.
echo Then open http://localhost:3000 in your browser
echo.
echo Available commands:
echo   npm run dev    - Start development server
echo   npm run build  - Build for production
echo   npm run start  - Start production server
echo   npm run lint   - Run ESLint
echo.
pause
