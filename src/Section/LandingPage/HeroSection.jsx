import React from 'react'

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="flex-1">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 mb-6">
            <div className="text-blue-600 text-3xl font-bold">
              🕉️
            </div>
            <div>
              <h1 className="text-3xl font-bold text-blue-600">
                Raja DShool
              </h1>
              <p className="tracking-widest text-sm text-gray-500">
                DRIVING SCHOOL
              </p>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Learn to drive <br />
            <span className="text-blue-600">with confidence</span>
          </h2>

          {/* CTA */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
            Get Started
          </button>
        </div>

        {/* Right Illustration */}
        <div className="flex-1 flex justify-center">
          <img
            src="/hero-driving.png"
            alt="Driving Illustration"
            className="max-w-md w-full"
          />
        </div>

      </div>
    </section>
  );
}
