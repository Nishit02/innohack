@echo off
echo ========================================
echo   InnoHack Projects - Deployment Helper
echo ========================================
echo.

echo Step 1: Creating deployment package...
echo.

echo Your project is ready for deployment!
echo.
echo Next steps:
echo 1. Go to https://vercel.com
echo 2. Sign up/Login with GitHub
echo 3. Click "New Project"
echo 4. Upload this entire folder
echo 5. Add environment variables (see DEPLOYMENT_INSTRUCTIONS.md)
echo 6. Deploy!
echo.

echo Environment variables to add in Vercel:
echo ======================================
echo ADMIN_USERNAME=admin
echo ADMIN_PASSWORD_HASH=$2b$12$ek91m4QbEddg9EVHMlfzLOE919630seMB9lhDH.jeuHoP.LJJT8jm
echo ADMIN_EMAIL=admin@innohack.com
echo JWT_SECRET=d14be5fff23da08cac6ccf4eebc5ad98a4d980688f455a53a94bcd233dd56904c2b99fbcbe6d2c46474dd9ed07b251c8e9754babf4a5e4456cc664d668272b74
echo CONTACT_EMAIL=innohack9@gmail.com
echo CONTACT_PHONE=+91 6303863173
echo WHATSAPP_GROUP=https://chat.whatsapp.com/BuzQCcAGtF3Ius5lJ0Gv9V?mode=ems_wa_t
echo WHATSAPP_DIRECT=https://wa.me/message/RXHU5XUNAYQ4G1
echo TELEGRAM_GROUP=https://t.me/+E1JRT41JM8kyNzRl
echo NODE_ENV=production
echo.

echo Default Admin Login:
echo Username: admin
echo Password: admin123
echo.

echo Opening deployment instructions...
start DEPLOYMENT_INSTRUCTIONS.md

echo.
echo ========================================
echo   Ready to deploy! Good luck! 🚀
echo ========================================
pause
