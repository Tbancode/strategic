// Import necessary modules
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
import cron from 'node-cron';
import { main } from '../../../../db/connect';

main();

// Define the countdown schema
const countdownSchema = new mongoose.Schema({
  time: Number,
});

// Create or retrieve the CountdownTimer model
const CountdownTimer =
  mongoose.models.Countdown || mongoose.model('Countdown', countdownSchema);

// Function to decrement the countdown timer
const decrementCountdown = async () => {
  try {
    // Find the existing timer
    const timer = await CountdownTimer.findOne();

    if (timer && timer.time > 0) {
      // Decrement the time and update the database
      await CountdownTimer.updateOne({}, { $inc: { time: -1 } });
    }
  } catch (error) {
    console.error('Error decrementing countdown:', error);
  }
};

// Schedule the decrementCountdown function to run every minute
cron.schedule('* * * * *', decrementCountdown);

// Handle PUT requests
export async function PUT(req: Request) {
  const { time } = await req.json();

  try {
    await CountdownTimer.updateOne({}, { time }, { upsert: true });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}

// Handle GET requests
export async function GET() {
  await main();
  try {
    const timer = await CountdownTimer.findOne();
    return NextResponse.json({ time: timer ? timer.time : 0 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
