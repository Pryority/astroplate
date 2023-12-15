import React from "react";
import Section from "./Section"; // Make sure to adjust the import path based on your project structure

const Main = () => {
  return (
    <div className="resume-container">
      <Section title="Skills" content="React, JavaScript, HTML, CSS, etc." />

      <Section
        title="Experience"
        content="Software Engineer at XYZ Company, Full Stack Developer at ABC Inc., etc."
      />

      <Section
        title="About Me"
        content="I am a passionate and dedicated software developer with a strong foundation in front-end and back-end technologies."
      />

      <Section
        title="Frameworks Used"
        content="React, Angular, Express, Django, etc."
      />

      <Section
        title="Programming Languages Used"
        content="JavaScript, Python, Java, TypeScript, etc."
      />

      <Section
        title="Projects"
        content={
          <>
            <p>Project 1: Description and details</p>
            <p>Project 2: Description and details</p>
            {/* Add more projects as needed */}
          </>
        }
      />
    </div>
  );
};

export default Main;
