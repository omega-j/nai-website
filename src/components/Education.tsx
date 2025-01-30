import React from "react";

const educationData = [
  {
    degree: "M.Phil/Ph.D. in Innovation and Public Policy",
    institution: "UCL Institute for Innovation and Public Purpose, University College London (UCL)",
    year: "2020 - Present (Expected 2025)",
    focus: "Global Political Economy of Digital Transformations, Digital-Era Governance, Global Digital Policy & Data Governance",
  },
  {
    degree: "Master of Liberal Arts (ALM) in International Relations",
    institution: "Harvard University",
    year: "2019",
    focus: "Decolonizing Social Innovation for Global Development",
  },
  {
    degree: "Graduate Certificate in Social Justice",
    institution: "Harvard University",
    year: "2018",
  },
  {
    degree: "Bachelor of Arts in English Literature & Language",
    institution: "George Washington University",
    focus: "Africana Studies",
  },
];

const Education = () => {
  return (
    <section className="container mx-auto mt-10 px-6">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Education</h2>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="border-l-4 border-blue-500 pl-4 p-4 bg-gray-900 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
            <p className="text-gray-400">{edu.institution}</p>
            <p className="text-sm text-gray-500 italic">{edu.year}</p>
            {edu.focus && <p className="text-gray-300 mt-2">Focus: {edu.focus}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;