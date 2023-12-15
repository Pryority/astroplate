import React from "react";

//@ts-ignore
export const Section = ({ title, content }) => {
  return (
    <div className="resume-section">
      <h2 className="bg-red-500 text-4xl tracking-tighter text-red-500 hover:bg-yellow-500">
        {title}
      </h2>
      <div className="section-content">{content}</div>
    </div>
  );
};

export default Section;
