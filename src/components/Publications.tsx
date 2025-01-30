import React from "react";

const publicationsData = [
  {
    title: "The ‘Digital Transformation for Development’ Anti‐Politics Machine: A Case Study on Global Digital Development Governance and Public‐Sector Digital Transformation in Uganda",
    year: "2025",
    journal: "Policy & Internet, 16(4), 750–763",
    link: "https://doi.org/10.1002/poi3.436",
  },
  {
    title: "A decolonial global political economy digital transformation: The coloniality of global digital transformation policy and public-sector digital transformation’s material implications",
    year: "2025",
    journal: "In A. Yalçıntaş & A. Heise (Eds.), Decolonial Narratives in Economics",
    link: "https://doi.org/10.4337/9781035329649.00018",
  },
  {
    title: "Intersections of Data Power: Unmasking the Nexus of Data Colonialism and Digital Racial Capitalism",
    year: "2023",
    journal: "Resisting Data Colonialism: A Practical Intervention",
    link: "https://networkcultures.org/wp-content/uploads/2023/12/ResistingDataColonialism_INC2023_TOD50.pdf",
  },
  {
    title: "Deconstructing the Global Coded Gaze on Digital Transformation",
    year: "2023",
    journal: "The Anti-Racism Policy Journal: Harvard Kennedy School, 2(1), 67–74",
    link: "https://discovery.ucl.ac.uk/id/eprint/10180589/1/2023%20Deconstructing%20the%20Global%20Coded%20Gaze%20.pdf",
  },
  {
    title: "Dreaming of Cybernetic Democratic Socialism: Remembering Chile’s Project Cybersyn",
    year: "2023",
    journal: "UCL Institute for Innovation and Public Purpose Blog",
    link: "https://medium.com/iipp-blog/dreaming-of-cybernetic-democratic-socialism-remembering-chiles-project-cybersyn-9b3d78323b95",
  },
];

const Publications = () => {
  return (
    <section className="container mx-auto mt-10 px-6">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Publications</h2>
      <div className="space-y-6">
        {publicationsData.map((publication, index) => (
          <div
            key={index}
            className="border-l-4 border-blue-500 pl-4 p-4 bg-gray-900 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <h3 className="text-lg font-semibold text-white">{publication.title}</h3>
            <p className="text-gray-400">{publication.journal}, {publication.year}</p>
            <a 
              href={publication.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 transition-colors"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;