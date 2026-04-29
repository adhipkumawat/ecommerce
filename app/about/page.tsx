"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div>  
 <div className="w-full h-screen">
      <video
        src="/hy.mp4"
        autoPlay
        loop
        muted
        className=" absolute inset-0 w-full h-full object-cover"
      /> 
        <div className="absolute inset-0 ml-20 mt-120  text-white ">
        <h1 className="text-5xl font-bold">
      Empowering <br/>
      Your Flair
        </h1>
      </div>
      </div>
       <section className="bg-gray-200 px-8 py-4">
      <div className="grid grid-cols-5 gap-4">
        <div className="relative col-span-3 h-[520px]">
          <Image
            src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg"
            alt="team"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative col-span-2 h-[520px]">
          <Image
            src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg"
            alt="models"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 mt-10 pb-10">
        <div className="col-span-3">
          <h1 className="text-4xl font-light">Our Vision</h1>
        </div>

        <div className="col-span-2">
          <p className="text-sm font-semibold leading-5">
            Le Flair Studios&apos; vision is to build our brand philosophy into
            a way of life for our global community. We aspire that people feel
            fulfilled by the flair and talents they have within themselves, for
            themselves — not by the validation or recognition of others. We
            strive to disrupt the global fashion industry by inspiring people to
            reject conformity, embrace uniqueness, and celebrate their unique
            individual flair instead.
          </p>
        </div>
      </div>
    </section>
      <section className="bg-black text-white px-10 py-24">
      
      <div className="grid grid-cols-2 gap-20 items-start">
        
        {/* LEFT */}
        <h1 className="text-4xl font-light">
          Our Mission
        </h1>

        {/* RIGHT */}
        <p className="text-sm leading-6 max-w-md">
          Le Flair Studios’ mission is to create a community that rests on our
          brand philosophy — embrace what makes you, you. We sell high quality
          products to consumers by working with a top-tier manufacturing firm
          in Portugal to meet the needs of each unique product. From sourcing
          to web-design to selling and marketing, Le Flair Studios puts quality
          and community at the forefront of all brand decisions — all this
          without harming people or the environment. Our brand is committed to
          ethical and sustainable business, aligning with our core values.
        </p>

      </div>

    </section>
        </div>
  );
}