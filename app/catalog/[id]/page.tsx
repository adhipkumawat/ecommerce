import ProductClient from "../ProductClient";
import { products } from "../../data/products";
import type { Product } from "../../data/products";

export default async function ProductPage({ params }: { params: { id: string } | Promise<{ id: string }> }) {
  const resolved = await params;
  const id = resolved.id;
  const product: Product | undefined = products.find((p) => p.id === Number(id));
  if (!product) return <div className="p-10">Product not found</div>;

  return <ProductClient product={product} />;
}
