import { useEffect } from "react";
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

export const addItem = async function (file) {
  try {
    await addDoc(collection(db, "images"), {
      url: file,
    });
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export const addToSlideShow = async function (file) {
  try {
    await addDoc(collection(db, "slides"), {
      url: file,
    });
  } catch (error) {
    console.error(err);
  }
};

export const getItems = async function () {
  try {
    const querySnapshot = await getDocs(collection(db, "images"));

    const imagesArr = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return imagesArr;
  } catch (err) {
    console.error("Error fetching images", err.message);
    throw err;
  }
};

export const getSlides = async function () {
  try {
    const querySnapshot = await getDocs(collection(db, "slides"));

    const imagesArr = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return imagesArr;
  } catch (err) {
    console.error("Error fetching images", err.message);
    throw err;
  }
};

export const deleteItem = async function (id) {
  try {
    await deleteDoc(doc(db, "images", id));
    return true;
  } catch (err) {
    console.error(err);
  }
};
