import { User } from "@/models/user";
import mongoose from "mongoose";

export async function POST(req) {
  const body = await req.json();
  mongoose.connect(process.env.MONGO_URL);
  const createdUser = await User.create(body);
  return Response.json(createdUser);
}
