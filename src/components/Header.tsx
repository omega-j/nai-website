import React from "react";

const Header = () => {
  return (
    <header className="container mx-auto py-6 text-center">
      <div className="w-40 h-40 mx-auto rounded-full border-4 border-gray-500 shadow-lg overflow-hidden">
        <img src="src/assets/headshot.png" alt="Nai Kalema" className="w-full h-full object-cover" />
      </div>
      <h1 className="text-4xl font-bold mt-4">Nai Kalema</h1>
      <p className="text-lg text-gray-400">PhD Candidate | Digital Policy & AI Governance</p>
    </header>
  );
};

export default Header;