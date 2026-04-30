import { NextResponse } from "next/server";

const users: any[] = [];

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  const alreadyUser = users.find((u) => u.email === email);

  if (alreadyUser) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 400 }
    );
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
    role: "user",
  };

  users.push(newUser);

  return NextResponse.json({
    message: "Account created successfully",
    user: {
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    },
  });
}

export { users };