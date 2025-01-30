import React from "react";

const Interests = () => {
  const interests = [
    { icon: "🌍", text: "Global Political Economy of Digital Transformation" },
    { icon: "🧠", text: "Digital Policy and Algorithmic Governance" },
    { icon: "🏛️", text: "Digital-Era Governments/Governance" },
    { icon: "⚕️", text: "Digital Determinants of Health" },
    { icon: "🏗️", text: "Critical Infrastructure Studies" },
    { icon: "🌐", text: "International Relations" },
  ];

  return (
    <section className="container mx-auto mt-10 px-6">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Research & Professional Interests
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {interests.map((interest, index) => (
          <div 
            key={index} 
            className="flex items-center p-4 border border-gray-700 rounded-lg shadow-md bg-gray-900 transition-transform transform hover:scale-105"
          >
            <span className="text-2xl mr-3">{interest.icon}</span>
            <p className="text-lg text-gray-300">{interest.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interests;