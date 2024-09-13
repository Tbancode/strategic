import mongoose from 'mongoose';

main().catch((err) => console.log(err));

export async function main() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGOOSE_URI!);

    // Check if the connection was successful
    if (mongoose.connection.readyState === 1) {
      console.log('Connected to MongoDB');

      // Perform additional checks or operations here

      //   // Disconnect from MongoDB (optional)
      //   await mongoose.disconnect();
      //   console.log('Disconnected from MongoDB');
    } else {
      console.error('Failed to connect to MongoDB');
    }
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}
