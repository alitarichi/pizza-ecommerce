import mongoose from "mongoose";

export async function PUT() {
  mongoose.connect(process.env.MONGODB_URL);
  const data = await requestAnimationFrame.json();
}
