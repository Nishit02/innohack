# InnoHack Projects - Premium E-commerce Platform

A full-stack premium e-commerce website for selling Computer Science and Internet of Things projects, built with Next.js, MongoDB, and modern web technologies. Serving the Indian market with projects priced in Indian Rupees.

## 🚀 Features

### User Features
- **Landing Page**: Animated hero section with smooth transitions
- **Project Catalog**: Browse CSE and IoT projects with filtering and search
- **Shopping Cart**: Add/remove items with smooth animations
- **Checkout Flow**: Complete order process with payment integration
- **Contact Form**: Animated contact form with validation
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Optimized for mobile, tablet, and desktop

### Admin Features
- **Secure Login**: JWT-based authentication system
- **Admin Dashboard**: Professional UI with analytics and management tools
- **Project Management**: CRUD operations for projects
- **Order Management**: View and manage customer orders
- **Real-time Updates**: Live data updates and notifications

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (App Router), React 18, TypeScript
- **Styling**: TailwindCSS, Framer Motion for animations
- **Backend**: Next.js API Routes, Node.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Payments**: Stripe integration (test mode)
- **Deployment**: Vercel-ready configuration

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cse-iot-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/cse-iot-store
   JWT_SECRET=your-super-secret-jwt-key
   STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Demo Credentials

### Admin Login
- **Username**: `admin`
- **Password**: `admin123`
- **URL**: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

### Contact Information
- **Email**: innohack9@gmail.com
- **Phone**: +91 6303863173
- **WhatsApp Group**: [Join our projects community](https://chat.whatsapp.com/BuzQCcAGtF3Ius5lJ0Gv9V?mode=ems_wa_t)
- **Direct WhatsApp Chat**: [Get instant support](https://wa.me/message/RXHU5XUNAYQ4G1)
- **Telegram Group**: [Stay updated with projects](https://t.me/+E1JRT41JM8kyNzRl)

## 📁 Project Structure

```
cse-iot-store/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   │   ├── auth/          # Authentication endpoints
│   │   │   ├── projects/      # Project management
│   │   │   ├── orders/        # Order management
│   │   │   └── webhooks/      # Stripe webhooks
│   │   ├── admin/             # Admin pages
│   │   ├── projects/          # Project listing page
│   │   ├── contact/           # Contact page
│   │   └── page.tsx           # Homepage
│   ├── components/            # Reusable components
│   │   ├── ui/                # UI components
│   │   ├── layout/            # Layout components
│   │   └── sections/          # Page sections
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility functions
│   ├── models/                # Database models
│   └── scripts/               # Database scripts
├── public/                    # Static assets
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `GET /api/auth/verify` - Verify JWT token

### Projects
- `GET /api/projects` - Fetch all projects (public)
- `POST /api/projects` - Create new project (admin only)
- `GET /api/projects/[id]` - Fetch single project
- `PUT /api/projects/[id]` - Update project (admin only)
- `DELETE /api/projects/[id]` - Delete project (admin only)

### Orders
- `GET /api/orders` - Fetch all orders (admin only)
- `POST /api/orders` - Create new order (public)
- `GET /api/orders/[id]` - Fetch single order (admin only)
- `PUT /api/orders/[id]` - Update order status (admin only)

## 🎨 Design Features

- **Modern UI**: Clean, professional design with smooth animations
- **Responsive**: Mobile-first approach with breakpoints for all devices
- **Dark Mode**: Toggle between light and dark themes
- **Animations**: Framer Motion for smooth page transitions and micro-interactions
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on every push

### Manual Deployment
1. Build the application: `npm run build`
2. Start the production server: `npm start`
3. Configure your web server to serve the application

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt for secure password storage
- **Input Validation**: Server-side validation for all inputs
- **CORS Protection**: Configured CORS policies
- **Rate Limiting**: API rate limiting to prevent abuse

## 📱 Mobile Features

- **Responsive Design**: Optimized for all screen sizes
- **Touch Gestures**: Smooth touch interactions
- **Mobile Navigation**: Collapsible mobile menu
- **Fast Loading**: Optimized images and code splitting

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Contact the development team

## 🎉 Acknowledgments

- Next.js team for the amazing framework
- TailwindCSS for the utility-first CSS framework
- Framer Motion for smooth animations
- MongoDB for the database solution
- Stripe for payment processing

---

**Built with ❤️ for the developer community**