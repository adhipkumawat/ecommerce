import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
const posts = [
  {
    category: "STREETWEAR",
    title: "Le Flair Studios and Fashion — Why?",
    image: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg",
  },
  {
    category: "COMMUNITY",
    title: "Flair Stories: Hear from the Community",
    image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
  },
];
export default function CatalogPage() {
  return (
    <div>
     <section className="min-h-screen bg-gray-200 px-14 py-16">
      <h1 className="mb-28 text-6xl font-light">Journal</h1>

      <div className="grid max-w-[900px] grid-cols-2">
        {posts.map((post, index) => (
          <div key={index} className="bg-white">
            <div className="relative h-[380px] w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex h-24 items-center justify-between px-6">
              <div>
                <p className="mb-5 text-[11px] font-bold text-gray-500">
                  {post.category}
                </p>
                <h2 className="text-sm font-bold">{post.title}</h2>
              </div>

              <ArrowUpRight size={20} />
            </div>
          </div>
        ))}
      </div>
    </section> 
    </div>
  );
}