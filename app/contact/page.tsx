"use client";

import { ArrowUpRight, ChevronDown } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
        <section className="min-h-screen bg-gray-100 px-10 py-16">
      <h1 className="text-6xl font-light mb-20">Contact</h1>

      <div className="grid grid-cols-2 gap-24">
        {/* LEFT */}
        <div className="flex flex-col justify-between">
          <div className="space-y-10 text-sm">
            <div>
              <p className="mb-3">General Inquiries</p>
              <p className="font-bold">customer@leflairstudios.com</p>
            </div>

            <div>
              <p className="mb-3">Head of office</p>
              <p className="font-bold">
                Hafergasse 14, Kalsdorf bei Graz,
                <br />
                Styria 8401, Austria
              </p>
            </div>

            <div>
              <p className="mb-3">Hours</p>
              <p className="font-bold">Mon-Fri 9:00AM — 4:00PM</p>
            </div>

            <div>
              <p className="mb-3">Press Inquiries</p>
              <p className="font-bold">press@leflairstudios.com</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-32">
            <div className="border border-dashed border-gray-400 h-36 p-6 flex justify-between items-start">
              <p className="text-xl">FAQs</p>
              <ArrowUpRight className="self-end" size={22} />
            </div>

            <div className="border border-dashed border-gray-400 h-36 p-6 flex justify-between items-start">
              <p className="text-xl">Manifesto</p>
              <ArrowUpRight className="self-end" size={22} />
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div>
          <h2 className="text-4xl font-light mb-8">Ask us a question</h2>

          <form className="space-y-5">
            <div className="bg-gray-300 h-16 px-6 flex items-center justify-between text-xs font-bold">
              <span>Choose a subject</span>
              <ChevronDown size={22} />
            </div>

            <div className="grid grid-cols-2 gap-5">
              <input
                placeholder="Name*"
                className="bg-gray-300 h-16 px-6 text-xs font-bold outline-none placeholder:text-black"
              />
              <input
                placeholder="Email*"
                className="bg-gray-300 h-16 px-6 text-xs font-bold outline-none placeholder:text-black"
              />
            </div>

            <input
              placeholder="Phone*"
              className="bg-gray-300 h-16 px-6 text-xs font-bold outline-none placeholder:text-black w-full"
            />

            <textarea
              placeholder="Message*"
              className="bg-gray-300 h-48 px-6 py-6 text-xs font-bold outline-none placeholder:text-black w-full resize-none"
            />

            <div>
              <p className="text-xs font-bold mb-4">
                Preferred method of contact?
              </p>

              <div className="flex gap-12 text-xs font-bold">
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-6 h-6" />
                  Email
                </label>

                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-6 h-6" />
                  Phone
                </label>
              </div>
            </div>

            <button className="w-full h-16 bg-purple-700 text-white text-xs font-bold rounded">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
    </div>
  );
}