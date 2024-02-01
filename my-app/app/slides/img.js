import React from "react";

export const Img = ({ image }) => {
  console.log(image);
  const imageUrl = image.url[0].url;
  return (
    <div className="flex w-[100vw] h-[90vh] items-center justify-center">
      <img
        className="min-w-[auto] min-h-[100vh]"
        src={imageUrl}
        alt={`slide ${image.id}`}
      />
    </div>
  );
};
