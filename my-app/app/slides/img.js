import React from "react";

export const Img = ({ index, image }) => {
  console.log(image.url);
  return (
    <div>
      <img key={index} src={image.url} alt={`slide ${index}`} />
    </div>
  );
};
