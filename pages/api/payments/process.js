import { authMiddleware } from '../../../lib/auth';
import connectDB from '../../../lib/dbConnect';
import Payment from '../../../models/Payment';
import Subscription from '../../../models/Subscription';
import { v4 as uuidv4 } from 'uuid';

const handler = async (req, res) => {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    // Connect to database
    await connectDB();
    
    // Get user ID from auth middleware
    const userId = req.userId;
    
    const { subscriptionId, amount, paymentMethod, currency = 'USD' } = req.body;
    
    // Validate input
    if (!subscriptionId || !amount || !paymentMethod) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide subscription ID, amount and payment method' 
      });
    }
    
    // Check if subscription exists and belongs to user
    const subscription = await Subscription.findOne({ 
      _id: subscriptionId,
      user: userId
    });
    
    if (!subscription) {
      return res.status(404).json({ 
        success: false, 
        message: 'Subscription not found' 
      });
    }
    
    // Generate unique transaction ID
    const transactionId = uuidv4();
    
    // Create payment record
    const payment = await Payment.create({
      user: userId,
      subscription: subscriptionId,
      amount,
      currency,
      paymentMethod,
      status: 'completed', // In a real app, this would be 'pending' until payment is processed
      transactionId
    });
    
    // In a real application, you would integrate with a payment gateway here
    // For this demo, we'll simulate a successful payment
    
    return res.status(201).json({
      success: true,
      payment: {
        _id: payment._id,
        amount: payment.amount,
        currency: payment.currency,
        status: payment.status,
        paymentMethod: payment.paymentMethod,
        transactionId: payment.transactionId,
        createdAt: payment.createdAt
      }
    });
  } catch (error) {
    console.error('Payment error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Server error', 
      error: error.message 
    });
  }
};

// Wrap the handler with auth middleware
export default authMiddleware(handler);
