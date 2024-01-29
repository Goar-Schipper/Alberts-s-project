"use client";
import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  querySnapshot,
  query,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
export default function page() {
  const [slides, setSlides] = useState([]);
  const [imageList, setImageList] = useState([]);

  const [images, setImages] = useState([]);

  // firebase stuff
  // add items to db
  const addItem = async (e) => {
    e.preventDefault();
    try {
      const imageURL = imageList[0].name;
      const imageRef = await addDoc(collection(db, "images"), {
        url: imageURL, // Assuming you want to use the name property of the first image in the list
      });
      console.log("Document written with ID: ", imageRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  // get items
  useEffect(() => {
    const q = query(collection(db, "images"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
        setImages(itemsArr);
      });
    });
  });

  // delete items
  const deleteItem = async (id) => {
    await deleteDoc(doc(db, "images", id));
  };

  const uploadSlide = (e) => {
    e.preventDefault();
    const urlInput = document.getElementById("file");
    const url = urlInput.value.trim(); // Trim to remove leading/trailing spaces

    if (url) {
      // You can create a fake file object using the URL and add it to slides
      const fakeFile = {
        name: url, // You might want to extract a filename from the URL if needed
      };

      setSlides([...slides, fakeFile]);
      console.log(slides);

      // Clear the input after uploading
      urlInput.value = "";
    }
  };

  useEffect(() => {
    // Retrieve imageList from localStorage on component mount
    const storedImageList = localStorage.getItem("imageList");
    if (storedImageList) {
      setImageList(JSON.parse(storedImageList));
    }
  }, []);

  useEffect(() => {
    // save imageList to localstorage whenever it changes
    localStorage.setItem("imageList", JSON.stringify(imageList));
  }, [imageList]);

  const deleteSlide = (index) => {
    setSlides((prevSlides) => {
      const updatedSlides = [...prevSlides];
      updatedSlides.splice(index, 1);
      return updatedSlides;
    });
  };

  const addToSlideShow = (index) => {
    setImageList((prevImageList) => [...prevImageList, slides[index]]);
    console.log("The image list : ", imageList);
  };

  return (
    <div>
      <form method="post">
        Image:
        <input type="url" id="file" />
        <button onClick={uploadSlide}>Upload Image</button>
      </form>

      {/* all slides list */}
      {slides.map((file, index) => (
        <div key={index}>
          <p>{index}</p>
          <img
            src={file.name}
            alt={`Uploaded Slide ${index}`}
            className="max-w-[50px]"
          />
          <button onClick={() => deleteSlide(index)}>Delete</button>
          <br></br>
          <button onClick={() => addToSlideShow(index)}>
            Add slide to slideshow
          </button>
        </div>
      ))}

      {/* test */}
      {imageList &&
        imageList.map((file, index) => (
          <div key={index}>
            <p>{file.name}</p>
            <img
              className="w-[50px]"
              src={file.name}
              alt={`Uploaded Slide ${index}`}
            />
            <button onClick={addItem}>Add item</button>
          </div>
        ))}

      {images.map((item, id) => {
        return (
          <li key={id}>
            <p>{item.url}</p>
            <img
              className="w-[50px]"
              src={item.url}
              alt={`Uploaded Slide ${id}`}
            />
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        );
      })}
    </div>
  );
}
