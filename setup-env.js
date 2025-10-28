const fs = require('fs');
const path = require('path');

const envContent = `# Database
MONGODB_URI=mongodb://localhost:27017/cse-iot-store

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production-${Math.random().toString(36).substring(2, 15)}

# Stripe (Test Mode)
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# PayPal (Sandbox Mode)
PAYPAL_CLIENT_ID=your_paypal_client_id_here
PAYPAL_CLIENT_SECRET=your_paypal_client_secret_here

# App Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-key-${Math.random().toString(36).substring(2, 15)}

# Admin Default Credentials (Change these!)
ADMIN_USERNAME=admin
ADMIN_EMAIL=admin@cseiotstore.com
ADMIN_PASSWORD=admin123
`;

const envPath = path.join(__dirname, '.env.local');

if (!fs.existsSync(envPath)) {
  fs.writeFileSync(envPath, envContent);
  console.log('✅ Created .env.local file with default configuration');
  console.log('📝 Please update the environment variables with your actual values');
  console.log('🔑 Generated random JWT_SECRET and NEXTAUTH_SECRET');
} else {
  console.log('⚠️  .env.local already exists, skipping creation');
}

console.log('\n🚀 Next steps:');
console.log('1. Update MONGODB_URI with your MongoDB connection string');
console.log('2. Add your Stripe keys for payment processing');
console.log('3. Run: npm run dev');
console.log('4. Run: npm run seed (to populate with sample data)');
