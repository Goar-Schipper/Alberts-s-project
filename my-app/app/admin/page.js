"use client";
import React, { useState } from "react";
export default function page() {
  const [slides, setSlides] = useState([]);
  const uploadSlide = (e) => {
    e.preventDefault();
    const fileInput = document.getElementById("file");
    const file = fileInput.files[0];

    if (file) {
      setSlides([...slides, file]);
      console.log(slides);
    }
  };

  const deleteSlide = (index) => {
    setSlides((prevSlides) => {
      const updatedSlides = [...prevSlides];
      updatedSlides.splice(index, 1);
      return updatedSlides;
    });
  };

  const addToSlideShow = () => {};

  return (
    <div>
      <form method="post">
        Image:
        <input type="file" id="file" />
        <button onClick={uploadSlide}>Upload Image</button>
      </form>

      {/* all slides list */}
      {slides.map((file, index) => (
        <div key={index}>
          <p>{index}</p>
          <img
            src={URL.createObjectURL(file)}
            alt={`Uploaded Slide ${index}`}
            className="max-w-[50px]"
          />
          <button onClick={() => deleteSlide(index)}>Delete</button>
          <br></br>
          <button onClick={addToSlideShow}>Add slide to slideshow</button>
        </div>
      ))}
    </div>
  );
}
