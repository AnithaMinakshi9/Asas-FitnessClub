import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <RiArrowLeftSLine className="left-arrow" onClick={prevSlide} />
      <RiArrowRightSLine className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="gym image" className="image" />
            )}
          </div>
        );
      })}
      <div className="titles">Get FIT GO!</div>
    </section>
  );
};

export default ImageSlider;
