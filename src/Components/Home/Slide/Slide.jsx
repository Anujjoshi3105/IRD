import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: "https://images.shiksha.com/mediadata/images/1632465297phpyUzixv.jpeg",
  },
  { url: "https://pbs.twimg.com/media/EtXG2d3VIAEPTfb.jpg" },
];

const Slide = () => {
  // Adjusted width and height
  const sliderWidth = window.innerWidth * 0.995; // 80% of viewport width
  const sliderHeight = 504;

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <div style={{ margin: "0 auto" }}>
        <SimpleImageSlider
          width={sliderWidth}
          height={sliderHeight}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
    </div>
  );
};

export default Slide;
