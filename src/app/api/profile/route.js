import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function PUT() {
  mongoose.connect(process.env.MONGODB_URL);
  const data = await requestAnimationFrame.json();
  const session = await getServerSession(authOptions);
  if ("name" in data) {
  }
}
