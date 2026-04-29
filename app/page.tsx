"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
   const sectionRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
const products = [
  {
    id: 1,
    name: "Monogram T-Shirt",
    price: "€ 99.00 EUR",
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
    colors: ["bg-white", "bg-black", "bg-teal-600"],
  },
  {
    id: 2,
    name: "Novelist T-Shirt",
    price: "€ 135.00 EUR",
    img: "https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg",
    colors: ["bg-white", "bg-neutral-800", "bg-blue-900"],
  },
  {
    id: 3,
    name: "Split T-Shirt",
    price: "€ 115.00 EUR",
    img: "https://images.pexels.com/photos/30664814/pexels-photo-30664814.jpeg",
    colors: ["bg-white", "bg-black", "bg-teal-600"],
  },
  {
    id: 4,
    name: "Classic Logo T-Shirt",
    price: "€ 120.00 EUR",
    img: "https://images.pexels.com/photos/31052852/pexels-photo-31052852.jpeg",
    colors: ["bg-black", "bg-white", "bg-gray-500"],
  },
];
  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 🔒 Pin section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=600",
        pin: true,
        scrub: true,
      });

      // LEFT COLUMN → UP
 // LEFT COLUMN → DOWN
gsap.fromTo(
  leftRef.current,
  { y: -440 },
  {
    y: 0,
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top top",
      end: "+=600",
      scrub: true,
    },
  }
);

// RIGHT COLUMN → UP
gsap.fromTo(
  rightRef.current,
  { y: 0 },
  {
    y: -440,
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top top",
      end: "+=600",
      scrub: true,
    },
  }
);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <Image className="" src="https://images.pexels.com/photos/31052852/pexels-photo-31052852.jpeg" alt="Placeholder" width={1400} height={100} 
      />
   <div className="absolute gap-150 top-180 left-30 text-white flex justify-between ">
    <div className="text-5xl">
Embrace what <br/>
makes You — You</div>
    <div className="h-15 w-40 mt-10 border-2 flex justify-center font-bold transition duration-700 hover:bg-purple-800 hover:border-purple-800 hover:text-white"><button>Discover More</button></div>
   </div>
      <div className="h-50 bg-gray-300 text-4xl font-serif "> 
        <h1 className="ml-10 py-13"><span className="text-gray-400">Celebrate your flair </span>Expression <br/>on your own terms</h1>
      </div>
      <div >
       <section
  ref={sectionRef}
  className="h-screen flex justify-center bg-gray-100 overflow-hidden"
>
  <div className="flex gap-10 mt-5 ">
    
    {/* LEFT OUTER BOX */}
    <div className="w-[600px] h-[600px] overflow-hidden">
      {/* LEFT MOVING CONTENT */}
      <div ref={leftRef} className="flex flex-col gap-10">
        <Image
          src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg"
          alt=""
          width={600}
          height={600}
          className="rounded-lg object-cover w-[600px] h-[600px]"
        />

        <Image
          src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg"
          alt=""
          width={600}
          height={600}
          className="rounded-lg object-cover w-[600px] h-[600px]"
        />
        
      </div>
    </div>

    {/* RIGHT OUTER BOX */}
    <div className="w-[600px] h-[600px] overflow-hidden">
      {/* RIGHT MOVING CONTENT */}
      <div ref={rightRef} className="flex flex-col gap-10">
        <Image
          src="https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg"
          alt=""
          width={600}
          height={600}
          className="rounded-lg object-cover w-[600px] h-[600px]"
        />

        <Image
          src="https://images.pexels.com/photos/30664814/pexels-photo-30664814.jpeg"
          alt=""
          width={600}
          height={600}
          className="rounded-lg object-cover w-[600px] h-[600px]"
        />
      </div>
    </div>

  </div>
</section>
</div>
<div className="bg-gray-100 p-10">
  <div className="bg-gray-200 px-8 py-20 flex items-center justify-between">
    <h1 className="text-4xl font-light text-gray-900">Featured</h1>

    <button className="bg-purple-700 text-white px-14 py-5 rounded font-bold text-xs">
      All Products
    </button>
  </div>
</div>
  
         <div className="bg-gray-100 min-h-screen p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
        {products.map((item) => (
          <div key={item.id} className="bg-white group overflow-hidden">
            <div className="relative w-full h-[350px] overflow-hidden">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5 min-h-[115px]">
              <p className="text-gray-500 text-[11px] mb-2 uppercase">
                THE PROLOGUE
              </p>

              <div className="flex justify-between text-xs font-semibold">
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>

              {/* colors show on hover */}
              <div className="flex gap-2 mt-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                {item.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full border border-gray-300 ${color}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="bg-gray-100 p-10">
  <div className="bg-gray-200 px-8 py-20 flex items-center justify-between">
    <h1 className="text-4xl font-light text-gray-900">Featured</h1>

    <button className="bg-purple-700 text-white px-14 py-5 rounded font-bold text-xs">
      All Products
    </button>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
    {/* product cards here */}
  </div>
</div>
   <div className="bg-gray-100 min-h-screen p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
        {products.map((item) => (
          <div key={item.id} className="bg-white group overflow-hidden">
            <div className="relative w-full h-[350px] overflow-hidden">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5 min-h-[115px]">
              <p className="text-gray-500 text-[11px] mb-2 uppercase">
                THE PROLOGUE
              </p>

              <div className="flex justify-between text-xs font-semibold">
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>

              {/* colors show on hover */}
              <div className="flex gap-2 mt-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                {item.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full border border-gray-300 ${color}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="bg-gray-100 min-h-screen flex items-center px-10 gap-20">
  {/* LEFT TEXT */}
  <div className="w-[40%]">
    <h1 className="text-5xl font-light mb-6">Join the Community</h1>

    <p className="text-sm leading-5 max-w-md mb-10">
      At Le Flair Studios, we believe that everyone has their own unique
      flair, a special something that differentiates you from everyone else.
      It is in your DNA, and we want you to magnify it, not erase it.
    </p>

    <button className="bg-purple-700 text-white px-14 py-5 rounded font-bold text-xs">
      About Us
    </button>
  </div>

  {/* RIGHT IMAGES */}
  <div className="w-[60%] flex gap-4 items-start">
    {/* THUMBNAILS */}
    <div className="flex flex-col gap-2">
      {[
        "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg",
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
        "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg",
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      ].map((img, index) => (
        <div key={index} className="relative w-20 h-24 overflow-hidden rounded">
          <Image src={img} alt="" fill className="object-cover" />
        </div>
      ))}
    </div>

    {/* BIG IMAGE */}
    <div className="relative w-full h-[560px] overflow-hidden">
      <Image
        src="https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg"
        alt=""
        fill
        className="object-cover"
      />
    </div>
  </div>
</div>
      </div>
    
  );
}
