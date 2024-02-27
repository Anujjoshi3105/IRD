import React from "react";
import Table from "./Table";
const Download = () => {
  const annexure = [
    {
      headers: ["ANNEXURE"],
      rows: [
        [
          {
            content:
              "NORMS, RULES & REGULATION FOR UNDERTAKING SPONSORED RESEARCH AND INDUSTRIAL CONSULTANCY -2023",
            link: "/profile/john",
          },
        ],
        [
          {
            content:
              "	Guidelines for the Award for Published Paper of the Researchers of Delhi Technological University",
            link: "/profile/jane",
          },
        ],
      ],
    },
  ];

  return (
    <section className="bg-white rounded-xl m-5 shadow-md relative">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <Table tables={annexure} />
        <Table tables={annexure} />
        <Table tables={annexure} />
        <Table tables={annexure} />
      </div>
    </section>
  );
};

export default Download;
