import { authMiddleware } from '../../../lib/auth';
import connectDB from '../../../lib/dbConnect';
import Subscription from '../../../models/Subscription';
import User from '../../../models/User';

const handler = async (req, res) => {
  // Only allow GET and POST methods
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    // Connect to database
    await connectDB();
    
    // Get user ID from auth middleware
    const userId = req.userId;
    
    // GET request - Fetch user subscriptions
    if (req.method === 'GET') {
      const subscriptions = await Subscription.find({ user: userId }).sort({ createdAt: -1 });
      
      return res.status(200).json({
        success: true,
        count: subscriptions.length,
        subscriptions
      });
    }
    
    // POST request - Create new subscription
    if (req.method === 'POST') {
      const { plan, paymentMethod, billingCycle } = req.body;
      
      // Validate input
      if (!plan || !paymentMethod || !billingCycle) {
        return res.status(400).json({ 
          success: false, 
          message: 'Please provide plan, payment method and billing cycle' 
        });
      }
      
      // Calculate end date based on billing cycle
      const startDate = new Date();
      const endDate = new Date();
      
      if (billingCycle === 'monthly') {
        endDate.setMonth(endDate.getMonth() + 1);
      } else if (billingCycle === 'annual') {
        endDate.setFullYear(endDate.getFullYear() + 1);
      }
      
      // Create subscription
      const subscription = await Subscription.create({
        user: userId,
        plan,
        paymentMethod,
        billingCycle,
        startDate,
        endDate,
        status: 'active',
        autoRenew: true
      });
      
      // Update user subscription status
      await User.findByIdAndUpdate(userId, {
        subscription: plan,
        subscriptionEndDate: endDate
      });
      
      return res.status(201).json({
        success: true,
        subscription
      });
    }
  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Server error', 
      error: error.message 
    });
  }
};

// Wrap the handler with auth middleware
export default authMiddleware(handler);
