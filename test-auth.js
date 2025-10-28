const bcrypt = require('bcryptjs');

async function testAuth() {
  console.log('Testing authentication...');
  
  // Test the password hash from .env.local
  const password = 'admin123';
  const hashFromEnv = '$2b$12$ek91m4QbEddg9EVHMlfzLOE919630seMB9lhDH.jeuHoP.LJJT8jm';
  
  console.log('Password:', password);
  console.log('Hash from env:', hashFromEnv);
  
  const isValid = await bcrypt.compare(password, hashFromEnv);
  console.log('Password valid:', isValid);
  
  if (!isValid) {
    console.log('Generating new hash for admin123...');
    const newHash = await bcrypt.hash(password, 12);
    console.log('New hash:', newHash);
  }
}

testAuth().catch(console.error);
