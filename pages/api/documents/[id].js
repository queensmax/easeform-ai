import { authMiddleware } from '../../../lib/auth';
import connectDB from '../../../lib/dbConnect';
import Document from '../../../models/Document';

const handler = async (req, res) => {
  // Allow GET, PUT and DELETE methods
  if (req.method !== 'GET' && req.method !== 'PUT' && req.method !== 'DELETE') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    // Connect to database
    await connectDB();
    
    // Get user ID from auth middleware
    const userId = req.userId;
    
    // Get document ID from query
    const { id } = req.query;
    
    // Find document and check ownership
    const document = await Document.findOne({
      _id: id,
      user: userId
    });
    
    if (!document) {
      return res.status(404).json({ 
        success: false, 
        message: 'Document not found or not authorized' 
      });
    }
    
    // GET request - Fetch single document
    if (req.method === 'GET') {
      return res.status(200).json({
        success: true,
        document
      });
    }
    
    // PUT request - Update document
    if (req.method === 'PUT') {
      const { title, content, templateType } = req.body;
      
      // Validate input
      if (!title || !content) {
        return res.status(400).json({ 
          success: false, 
          message: 'Please provide title and content' 
        });
      }
      
      // Update document
      document.title = title;
      document.content = content;
      if (templateType) document.templateType = templateType;
      document.updatedAt = Date.now();
      
      await document.save();
      
      return res.status(200).json({
        success: true,
        document
      });
    }
    
    // DELETE request - Delete document
    if (req.method === 'DELETE') {
      await document.remove();
      
      return res.status(200).json({
        success: true,
        message: 'Document deleted'
      });
    }
  } catch (error) {
    console.error('Document operation error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Server error', 
      error: error.message 
    });
  }
};

// Wrap the handler with auth middleware
export default authMiddleware(handler);
