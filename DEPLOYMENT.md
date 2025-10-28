# 🚀 InnoHack Projects - Deployment Guide

## Quick Deploy to Vercel (Recommended)

### 1. Prepare Your Repository
```bash
# Make sure all files are committed
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your repository
5. Configure environment variables (see below)
6. Click "Deploy"

### 3. Environment Variables (Required)
Add these in Vercel Dashboard → Settings → Environment Variables:

```env
ADMIN_USERNAME=your_admin_username
ADMIN_PASSWORD_HASH=$2b$12$ek91m4QbEddg9EVHMlfzLOE919630seMB9lhDH.jeuHoP.LJJT8jm
ADMIN_EMAIL=admin@innohack.com
JWT_SECRET=d14be5fff23da08cac6ccf4eebc5ad98a4d980688f455a53a94bcd233dd56904c2b99fbcbe6d2c46474dd9ed07b251c8e9754babf4a5e4456cc664d668272b74
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/innohack-projects
STRIPE_SECRET_KEY=sk_live_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
```

### 4. Custom Domain (Optional)
- Add your domain in Vercel Dashboard
- Update DNS settings
- Enable SSL automatically

## 🔒 Security Checklist for Production

### ✅ Change Default Credentials
1. Generate new password hash:
```bash
node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('your_strong_password', 12));"
```

2. Update environment variables with new credentials

### ✅ Database Setup
1. Create MongoDB Atlas account
2. Create cluster and database
3. Get connection string
4. Update MONGODB_URI in environment variables

### ✅ Payment Setup
1. Create Stripe account
2. Get live API keys
3. Set up webhooks
4. Update Stripe keys in environment variables

### ✅ Domain & SSL
1. Purchase domain
2. Configure DNS
3. Enable HTTPS (automatic with Vercel)

## 📱 Features That Work Online

### ✅ User Features
- Browse projects
- View project details
- Contact via WhatsApp
- Purchase via WhatsApp
- Responsive design
- Dark mode support

### ✅ Admin Features
- Secure login with rate limiting
- Add/Edit/Delete projects
- Real-time updates
- Order management
- Professional dashboard

### ✅ Security Features
- Password hashing (bcrypt)
- Rate limiting (5 attempts, 15-min lockout)
- JWT authentication
- Environment-based credentials
- Input validation

## 🌐 Live Demo URLs (After Deployment)

- **Homepage**: `https://your-domain.vercel.app`
- **Projects**: `https://your-domain.vercel.app/projects`
- **Admin Login**: `https://your-domain.vercel.app/admin/login`
- **Contact**: `https://your-domain.vercel.app/contact`

## 🔧 Troubleshooting

### Common Issues:
1. **Environment variables not loading**: Check Vercel dashboard settings
2. **Database connection failed**: Verify MongoDB URI
3. **Payment not working**: Check Stripe API keys
4. **Admin login failed**: Verify password hash

### Support:
- Check Vercel deployment logs
- Verify environment variables
- Test API endpoints
- Check browser console for errors

## 📊 Performance Optimization

### Already Implemented:
- ✅ Next.js 15 with App Router
- ✅ Image optimization
- ✅ Code splitting
- ✅ Responsive design
- ✅ Fast loading times

### Additional Optimizations:
- CDN (automatic with Vercel)
- Caching headers
- Database indexing
- Image compression

## 🎯 Go Live Checklist

- [ ] Repository pushed to GitHub
- [ ] Environment variables configured
- [ ] Default credentials changed
- [ ] Database connected
- [ ] Payment system configured
- [ ] Domain configured
- [ ] SSL enabled
- [ ] Test all functionality
- [ ] Monitor performance
- [ ] Set up backups

## 🚀 Your site will be live at: `https://your-domain.vercel.app`
