import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Interests from "./components/Interests";
import Education from "./components/Education";
import Fellowships from "./components/Fellowships";
import Publications from "./components/Publications";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <Header />
      <main className="container mx-auto mt-10 px-6">
        <AboutMe />
        <Interests />
        <Education />
        <Fellowships />
        <Publications />
        <ContactForm />
      </main>
    </div>
  );
};

export default App;