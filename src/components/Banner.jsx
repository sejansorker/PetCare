import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#f0faf5] to-white py-16">
        <div className="mx-auto px-6" style={{ maxWidth: 1300 }}>
          <div className="flex flex-col md:flex-row items-center gap-10">

            {/* LEFT TEXT */}
            <div className="flex-1">
              <div
                className="inline-flex items-center gap-2 bg-orange-50 text-[#F97316]
                text-xs font-semibold px-3 py-1.5 rounded-full mb-5
                border border-orange-100"
              >
                🐾 Trusted Pet Care
              </div>

              <h1
                className="text-4xl md:text-5xl font-extrabold text-gray-900
                leading-tight mb-4"
              >
                Because Your Pet
                <br />
                Deserves the{" "}
                <span className="text-[#F97316]">Best</span> Care
              </h1>

              <p className="text-gray-500 text-base mb-8 max-w-md">
                Compassionate care, expert vets, and complete wellness
                for your furry family members.
              </p>

              <div className="flex gap-4 flex-wrap">
                <button
                  className="bg-[#1A6B4A] text-white font-semibold
                  px-6 py-3 rounded-full hover:bg-[#155a3e] transition-colors"
                >
                  Book Appointment
                </button>

                <button
                  className="border border-gray-300 text-gray-700
                  font-semibold px-6 py-3 rounded-full
                  hover:border-[#1A6B4A] hover:text-[#1A6B4A] transition-colors"
                >
                  Our Services
                </button>
              </div>
            </div>

           

          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;