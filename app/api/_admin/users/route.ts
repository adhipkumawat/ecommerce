import { NextResponse } from "next/server";
import clientPromise from "../../../../lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET() {
  const client = await clientPromise;
  const usersCollection = client.db("ecommerce").collection("users");
  const users = await usersCollection.find().toArray();

  return NextResponse.json({
    count: users.length,
    users: users.map((u) => ({ id: u._id.toString(), name: u.name, email: u.email, role: u.role })),
  });
}

export async function POST(req: Request) {
  const body = await req.json();
  const { action, id } = body;

  if (action === "delete") {
    if (!id) return NextResponse.json({ message: "id required" }, { status: 400 });
    await (await clientPromise).db("ecommerce").collection("users").deleteOne({ _id: new ObjectId(id) });
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ message: "unknown action" }, { status: 400 });
}
