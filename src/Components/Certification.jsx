import React from "react";

const Certification = () => {
  return (
    <section
      id="certification"
      className="bg-gray-200 py-20 px-4"
    >
      <h2 className="text-5xl font-extrabold text-center mb-14">
        Certification
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-2">
            Front End Developer
          </h3>
          <p className="text-gray-600 mb-1">
            Creative IT Institute
          </p>
          <p className="text-gray-500 mb-2">
            2024 – 2025
          </p>
          <p className="text-gray-700 font-medium">
            08 Month Course
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-2">
            Web Design & Development
          </h3>
          <p className="text-gray-600 mb-1">
            NSDA Level: 3
          </p>
          <p className="text-gray-500 mb-2">
            2025 – 2026
          </p>
          <p className="text-gray-700 font-medium">
            Passed
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-2">
            Internship
          </h3>
          <p className="text-gray-600 mb-1">
            Front End Developer
          </p>
          <p className="text-gray-500 mb-2">
            Creative IT Institute
          </p>
          <p className="text-gray-700 font-medium">
            03 Month (2025 – 2026)
          </p>
        </div>

      </div>
    </section>
  );
};

export default Certification;
