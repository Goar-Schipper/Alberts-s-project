"use client";
import React, { useEffect, useState } from "react";
import { addItem, deleteItem, addToSlideShow, getItems } from "./logic.";
export default function page() {
  const [newItem, setNewItem] = useState("");
  const [images, setImages] = useState([]);
  const [slideshow, setSlideShow] = useState([]);
  const handleUpload = async (e) => {
    e.preventDefault();
    await addItem(newItem);
    setNewItem("");
    window.location.reload();
  };

  // get images
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagesArr = await getItems();
        setImages(imagesArr);
      } catch (err) {
        console.error("error fetching images", err.message);
      }
    };
    fetchImages();
  }, []);

  // handle delete
  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      setImages((prevImages) => prevImages.filter((image) => image.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddToSlideshow = async (id) => {
    try {
      const selectedImage = images.find((image) => image.id === id);
      if (selectedImage) {
        // Update the slideshow state with only the selected image
        setSlideShow([selectedImage]);
        console.log([selectedImage]);

        // Call addToSlideShow with the selected image
        addToSlideShow([selectedImage]);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <form method="post">
        Image:
        <input
          type="url"
          id="file"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleUpload}>Upload Image</button>
      </form>

      {/* images */}
      <div className=" flex flex-col gap-5">
        {images.map((image, index) => (
          <div key={index} className="flex gap-5">
            <img src={image.url} className="max-w-[200px]" />
            <button onClick={() => handleDelete(image.id)}>Delete slide</button>
            <button onClick={() => handleAddToSlideshow(image.id)}>
              Add to slideshow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
