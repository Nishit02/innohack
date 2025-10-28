@echo off
echo Starting InnoHack Projects Server...
cd /d "%~dp0"
echo Current directory: %CD%
echo.
echo Checking if package.json exists...
if exist package.json (
    echo ✅ package.json found
    echo.
    echo Installing dependencies...
    call npm install
    echo.
    echo Starting development server...
    call npm run dev
) else (
    echo ❌ package.json not found in current directory
    echo Please run this file from the cse-iot-store folder
    pause
)
