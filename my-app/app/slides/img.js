import React from "react";

export const Img = ({ image }) => {
  console.log(image);
  const imageUrl = image.url[0].url;
  return (
    <div>
      <img src={imageUrl} alt={`slide ${image.id}`} />
    </div>
  );
};
