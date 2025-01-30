import React from "react";

const fellowshipsData = [
  {
    title: "Carr Center Technology & Human Rights Fellow",
    institution: "Harvard Kennedy School",
    year: "2024 - 2025",
  },
  {
    title: "Critical Infrastructure Lab Fellow (Geopolitics)",
    institution: "Amsterdam School for Regional, Transnational and European Studies (ARTES), University of Amsterdam",
    year: "2024 - 2025",
  },
  {
    title: "UCL IIPP Public Sector Capabilities Index Research Fellow",
    institution: "UCL Institute for Innovation and Public Purpose, UCL Bartlett",
    year: "2024 - 2025",
  },
  {
    title: "Visiting Researcher, CERTIZENS Project",
    institution: "University of Copenhagen",
    year: "Fall 2022",
  },
];

const Fellowships = () => {
  return (
    <section className="container mx-auto mt-10 px-6">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Fellowships & Research</h2>
      <div className="space-y-6">
        {fellowshipsData.map((fellowship, index) => (
          <div
            key={index}
            className="border-l-4 border-purple-500 pl-4 p-4 bg-gray-900 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-white">{fellowship.title}</h3>
            <p className="text-gray-400">{fellowship.institution}</p>
            <p className="text-sm text-gray-500 italic">{fellowship.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fellowships;