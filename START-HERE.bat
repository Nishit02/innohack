@echo off
title InnoHack Projects Server
echo ========================================
echo   InnoHack Projects - Starting Server
echo ========================================
echo.

REM Change to the directory where this batch file is located
cd /d "%~dp0"

echo Current directory: %CD%
echo.

REM Check if package.json exists
if not exist package.json (
    echo ERROR: package.json not found!
    echo Please make sure this file is in the cse-iot-store folder
    pause
    exit /b 1
)

echo ✅ package.json found
echo.

REM Install dependencies
echo Installing dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo ✅ Dependencies installed
echo.

REM Start the development server
echo Starting development server...
echo.
echo 🌐 Your website will be available at:
echo    http://localhost:3000
echo.
echo 🔐 Admin login at:
echo    http://localhost:3000/admin/login
echo    Username: innohack69
echo    Password: Gandulanjodka@123!
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

call npm run dev
