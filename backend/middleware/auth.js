const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    console.log('🔐 Auth middleware invoked for:', req.method, req.path);
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      console.log('❌ Auth failed: No token provided');
      return res.status(401).json({ error: 'No token provided' });
    }

    console.log('🔑 Token found, verifying...');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('✅ Token verified for userId:', decoded.userId);

    const user = await User.findById(decoded.userId);

    if (!user) {
      console.log('❌ Auth failed: User not found for userId:', decoded.userId);
      return res.status(401).json({ error: 'Invalid token' });
    }

    console.log('✅ User authenticated:', user.email);
    req.user = user;
    next();
  } catch (error) {
    console.error('❌ Auth error:', error.name, error.message);
    if (error.name === 'TokenExpiredError') {
      console.log('⏰ Token expired at:', error.expiredAt);
      return res.status(401).json({ error: 'Token expired', code: 'TOKEN_EXPIRED' });
    }
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = auth; 