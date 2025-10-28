// Load environment variables
require('dotenv').config({ path: '.env.local' });

console.log('Environment variables:');
console.log('ADMIN_USERNAME:', process.env.ADMIN_USERNAME);
console.log('ADMIN_PASSWORD_HASH:', process.env.ADMIN_PASSWORD_HASH);
console.log('JWT_SECRET:', process.env.JWT_SECRET ? 'Set' : 'Not set');

// Test the authConfig logic
const bcrypt = require('bcryptjs');

async function testAuthConfig() {
  const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
  const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || '$2b$12$ek91m4QbEddg9EVHMlfzLOE919630seMB9lhDH.jeuHoP.LJJT8jm';
  
  console.log('\nTesting auth config:');
  console.log('Expected username:', ADMIN_USERNAME);
  console.log('Expected hash:', ADMIN_PASSWORD_HASH);
  
  // Test with admin credentials
  const username = 'admin';
  const password = 'admin123';
  
  console.log('\nTesting login:');
  console.log('Username match:', username === ADMIN_USERNAME);
  
  const isValidPassword = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
  console.log('Password valid:', isValidPassword);
  
  if (username === ADMIN_USERNAME && isValidPassword) {
    console.log('✅ Login should work!');
  } else {
    console.log('❌ Login will fail!');
  }
}

testAuthConfig().catch(console.error);
