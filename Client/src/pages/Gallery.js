import React from "react";
import "./Gallery.css";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";

function Gallery() {
  return <ImageSlider slides={SliderData} />;
}

export default Gallery;
