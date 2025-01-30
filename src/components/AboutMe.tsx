import React, { useState } from "react";

const AboutMe = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="container mx-auto mt-10 px-6 text-white">
      {/* Introduction */}
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-300 leading-relaxed">
        I am a PhD student in Innovation and Public Policy at the 
        <span className="text-blue-400 font-semibold"> UCL Institute for Innovation and Public Purpose (UCL IIPP)</span> 
        at the Bartlett School of Planning, University College London (UCL), and a 
        <span className="text-blue-400 font-semibold"> 2024-2025 Technology and Human Rights Fellow</span> 
        at the Carr Center for Human Rights Policy at the Harvard Kennedy School.
      </p>

      {/* Short Summary */}
      <ul className="mt-4 text-gray-400">
        <li>🎓 PhD Research: <span className="font-semibold">Global Digital Policy, AI Governance</span></li>
        <li>🌍 Focus: <span className="font-semibold">Digital Public Infrastructure, Algorithmic Governance</span></li>
        <li>🔬 Supported by <span className="font-semibold">Vinnova & UCL IIPP Policy Studio</span></li>
      </ul>

      {/* Show More / Show Less */}
      {showMore && (
        <div className="mt-4">
          <p className="text-gray-300">
            My research integrates methods from <span className="font-semibold">Critical Digital Studies, Global Political Economy, and AI Ethics</span>. 
            My focus includes <span className="font-semibold">digital public infrastructure (DPI), digital-era government (DEG), and national digital identity systems in the Global South</span>. 
            My doctoral research is generously supported by <span className="font-semibold">Vinnova</span> and <span className="font-semibold">UCL IIPP Policy Studio</span>.
          </p>
        </div>
      )}

      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-4 text-blue-400 hover:text-blue-500 transition"
      >
        {showMore ? "Read Less" : "Read More"}
      </button>

      {/* Links */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Find Me Online</h3>
        <ul className="text-blue-400">
          <li>
            🔗 <a href="https://profiles.ucl.ac.uk/79257-naigwe-kalema" target="_blank" rel="noopener noreferrer">UCL Profile</a>
          </li>
          <li>
            🔗 <a href="https://orcid.org/0000-0002-7545-1928" target="_blank" rel="noopener noreferrer">ORCID</a>
          </li>
          <li>
            🔗 <a href="https://www.linkedin.com/in/nkalema/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            🔗 <a href="https://bsky.app/profile/naikalema.bsky.social" target="_blank" rel="noopener noreferrer">BlueSky</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;