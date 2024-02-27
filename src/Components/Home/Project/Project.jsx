import React from "react";
import Count from "./Count";

const Project = () => {
  const countsData = [
    {
      label: "Projects",
      number: "100+",
      duration: "1",
    },
    {
      label: "Technology Transfer",
      number: "200+",
      duration: "1",
    },
    {
      label: "Start-up Incubated",
      number: "100+",
      duration: "1",
    },
    {
      label: "Development Projects",
      number: "100+",
      duration: "1",
    },
  ];

  return (
    <main className="relative md:flex justify-center m-5 overflow-hidden">
      {countsData.map((data, index) => (
        <div
          key={index}
          className="w-full max-w-5xl mx-auto px-4 md:px-6 md:py-24"
        >
          <Count className="" data={data} />
        </div>
      ))}
    </main>
  );
};

export default Project;
