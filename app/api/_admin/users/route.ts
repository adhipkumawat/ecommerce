import { NextResponse } from "next/server";
import { users } from "../register/route";

export async function GET() {
  return NextResponse.json({ count: users.length, users: users.map(u => ({ id: u.id, name: u.name, email: u.email, role: u.role })) });
}

export async function POST(req: Request) {
  const body = await req.json();
  const { action, id } = body;

  if (action === "delete") {
    const idx = users.findIndex((u) => u.id === id);
    if (idx > -1) users.splice(idx, 1);
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ message: "unknown action" }, { status: 400 });
}
