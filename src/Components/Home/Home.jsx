import Slide from "./Slide/Slide";
import News from "./News/News";
import Card from "./Card/Card";
import FAQ from "./FAQ/FAQ";
import Section from "../Section/Section";
import Project from "./Project/Project";
const cardsArray = [
  {
    name: "Product 1",
    description: "Description of Product 1",
    image: "image-url-1.jpg",
  },
  {
    name: "Product 2",
    description: "Description of Product 2",
    image: "image-url-2.jpg",
  },
  {
    name: "ISRO",
    description: "Description of Product 3",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Indian_Space_Research_Organisation_Logo.svg/1059px-Indian_Space_Research_Organisation_Logo.svg.png",
  },
];

// Define the heading
const mainHeading = "Introducing Our Latest Products";
const subHeading = "Introducing Our Latest Products";

function Home() {
  return (
    <>
      <Slide />
      <News />
      <Section
        heading="Intellectual Property Rights"
        description="The Intellectual Property Rights (IPR) cell facilitates protection of the right of the Inventor(s) and Author(s)  that can be faculty members /students/ project staff/ supporting staff/ visitors of Delhi Technological University (DTU) through the option of Intellectual property on a novel work. IPR cell of DTU provide platform to the inventors/authors of DTU to protect their “intellectual assets”. The purpose of the cell is to preserve the interest of DTU and make aware the DTU fraternity about the intellectual asset and its impact on the society. The focus of the cell to work on four major intellectual  assets: patent, design, trademark and copyright. Further IPR cell also works in association with DTU IIF to commercialize its intellectual  assets. "
      />
      <Project />
      <Card
        cards={cardsArray}
        mainHeading={"STAKEHOLDERS"}
        subHeading={subHeading}
      />
      <Card
        cards={cardsArray}
        mainHeading={"PARTNERS"}
        subHeading={subHeading}
      />
      <FAQ />
    </>
  );
}

export default Home;
