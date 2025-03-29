import { authMiddleware } from '../../../lib/auth';
import connectDB from '../../../lib/dbConnect';
import User from '../../../models/User';

const handler = async (req, res) => {
  // Only allow GET and PUT methods
  if (req.method !== 'GET' && req.method !== 'PUT') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    // Connect to database
    await connectDB();
    
    // Get user ID from auth middleware
    const userId = req.userId;
    
    // GET request - Fetch user profile
    if (req.method === 'GET') {
      const user = await User.findById(userId);
      
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
      
      return res.status(200).json({
        success: true,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          subscription: user.subscription,
          subscriptionEndDate: user.subscriptionEndDate,
          createdAt: user.createdAt
        }
      });
    }
    
    // PUT request - Update user profile
    if (req.method === 'PUT') {
      const { name } = req.body;
      
      // Validate input
      if (!name) {
        return res.status(400).json({ success: false, message: 'Please provide name' });
      }
      
      // Find and update user
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { name },
        { new: true, runValidators: true }
      );
      
      if (!updatedUser) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
      
      return res.status(200).json({
        success: true,
        user: {
          _id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          subscription: updatedUser.subscription,
          subscriptionEndDate: updatedUser.subscriptionEndDate,
          createdAt: updatedUser.createdAt
        }
      });
    }
  } catch (error) {
    console.error('Profile error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Server error', 
      error: error.message 
    });
  }
};

// Wrap the handler with auth middleware
export default authMiddleware(handler);
