import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";

export async function POST(req: Request) {
  const { name, email, password, role, adminCode } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json({ message: "All fields are required" }, { status: 400 });
  }

  const userRole = role === "admin" ? "admin" : "user";

  // if an ADMIN_CODE env var is set, require it to register as admin
  if (userRole === "admin" && process.env.ADMIN_CODE) {
    if (adminCode !== process.env.ADMIN_CODE) {
      return NextResponse.json({ message: "Invalid admin code" }, { status: 403 });
    }
  }

  const client = await clientPromise;
  const db = client.db("ecommerce");
  const usersCollection = db.collection("users");

  const alreadyUser = await usersCollection.findOne({ email });
  if (alreadyUser) {
    return NextResponse.json({ message: "User already exists" }, { status: 400 });
  }

  const userDoc = {
    name,
    email,
    password,
    role: userRole,
    createdAt: new Date(),
  };

  const result = await usersCollection.insertOne(userDoc);

  return NextResponse.json({
    message: "Account created successfully",
    user: {
      id: result.insertedId,
      name: userDoc.name,
      email: userDoc.email,
      role: userDoc.role,
    },
  });
}
