import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

// Generate JWT token
export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};

// Set JWT token in cookie
export const setTokenCookie = (res, token) => {
  const cookie = serialize('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    maxAge: 60 * 60 * 24 * 30, // 30 days
    sameSite: 'strict',
    path: '/'
  });
  
  res.setHeader('Set-Cookie', cookie);
};

// Verify JWT token
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

// Parse cookies from request
export const parseCookies = (req) => {
  // For API Routes
  if (req.cookies) {
    return req.cookies;
  }
  
  // For getServerSideProps
  const cookie = req.headers?.cookie;
  if (!cookie) return {};
  
  return cookie.split(';').reduce((res, item) => {
    const [key, value] = item.trim().split('=');
    res[key] = value;
    return res;
  }, {});
};

// Authentication middleware for API routes
export const authMiddleware = (handler) => {
  return async (req, res) => {
    try {
      const cookies = parseCookies(req);
      const token = cookies.token;
      
      if (!token) {
        return res.status(401).json({ success: false, message: 'Not authorized, no token' });
      }
      
      const decoded = verifyToken(token);
      
      if (!decoded) {
        return res.status(401).json({ success: false, message: 'Not authorized, invalid token' });
      }
      
      // Add user ID to request
      req.userId = decoded.id;
      
      return handler(req, res);
    } catch (error) {
      console.error('Auth middleware error:', error);
      return res.status(401).json({ success: false, message: 'Not authorized, token failed' });
    }
  };
};
