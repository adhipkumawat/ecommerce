import { NextResponse } from "next/server";

type Order = {
  id: number;
  user: string;
  total: string;
  status: string;
  items: any[];
};

const orders: Order[] = [
  { id: 1, user: "Alice", total: "€ 99.00", status: "pending", items: [] },
  { id: 2, user: "Bob", total: "€ 135.00", status: "shipped", items: [] },
];

export async function GET() {
  return NextResponse.json({ count: orders.length, orders });
}

export async function POST(req: Request) {
  const body = await req.json();
  const { user, total, items } = body;
  const next: Order = { id: Date.now(), user: user || "Guest", total: total || "€ 0.00", status: "pending", items: items || [] };
  orders.push(next);
  return NextResponse.json({ ok: true, order: next });
}

export async function PATCH(req: Request) {
  const body = await req.json();
  const { id, status } = body;
  const ord = orders.find((o) => o.id === id);
  if (!ord) return NextResponse.json({ message: "not found" }, { status: 404 });
  ord.status = status;
  return NextResponse.json({ ok: true, order: ord });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  const idx = orders.findIndex((o) => o.id === id);
  if (idx > -1) orders.splice(idx, 1);
  return NextResponse.json({ ok: true });
}
