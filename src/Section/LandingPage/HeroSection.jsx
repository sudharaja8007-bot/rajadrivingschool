import React from "react";
import heroimage from "../../assets/hero-driving.png";

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* LEFT CONTENT */}
        <div className="flex-1 md:w-1/2">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Start your driving journey <br />
            <span className="text-blue-600">the right way</span>
          </h2>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
            Get Started
          </button>
        </div>

        {/* RIGHT IMAGE ONLY (NO TEXT, NO BUTTON) */}
        <div className="flex-1 flex justify-center">
          <img
            src={heroimage}
            alt="Raja Driving School Illustration"
            className="max-w-md w-full"
          />
        </div>

      </div>
    </section>
  );
}
