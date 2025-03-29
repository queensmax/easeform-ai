import mongoose from 'mongoose';

// MongoDB connection function
const connectDB = async () => {
  // Check if we already have a connection
  if (mongoose.connections[0].readyState) {
    return;
  }

  try {
    // Use environment variable for connection string
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
