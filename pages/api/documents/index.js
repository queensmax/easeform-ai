import { authMiddleware } from '../../../lib/auth';
import connectDB from '../../../lib/dbConnect';
import Document from '../../../models/Document';

const handler = async (req, res) => {
  // Allow GET and POST methods
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    // Connect to database
    await connectDB();
    
    // Get user ID from auth middleware
    const userId = req.userId;
    
    // GET request - Fetch user documents
    if (req.method === 'GET') {
      const documents = await Document.find({ user: userId }).sort({ updatedAt: -1 });
      
      return res.status(200).json({
        success: true,
        count: documents.length,
        documents
      });
    }
    
    // POST request - Create new document
    if (req.method === 'POST') {
      const { title, content, templateType = 'custom' } = req.body;
      
      // Validate input
      if (!title || !content) {
        return res.status(400).json({ 
          success: false, 
          message: 'Please provide title and content' 
        });
      }
      
      // Create document
      const document = await Document.create({
        title,
        content,
        templateType,
        user: userId
      });
      
      return res.status(201).json({
        success: true,
        document
      });
    }
  } catch (error) {
    console.error('Documents error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Server error', 
      error: error.message 
    });
  }
};

// Wrap the handler with auth middleware
export default authMiddleware(handler);
