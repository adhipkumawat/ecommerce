import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // demo admin
  if (email === "admin@gmail.com" && password === "1234") {
    return NextResponse.json({
      token: "admin-token",
      role: "admin",
      user: {
        name: "Adhip Kumawat",
        email: "admin@gmail.com",
      },
    });
  }

  const client = await clientPromise;
  const db = client.db("ecommerce");
  const usersCollection = db.collection("users");

  const user = await usersCollection.findOne({ email, password });

  if (!user) {
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 }
    );
  }

  return NextResponse.json({
    token: "user-token",
    role: user.role,
    user: {
      name: user.name,
      email: user.email,
    },
  });
}