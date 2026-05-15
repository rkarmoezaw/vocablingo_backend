import mongoose from 'mongoose';

export default async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB is connected...');
  } catch (error) {
    console.error('MongoDB Atlas connection is failed');
    console.log(error);
    process.exit(1);
  }
}
