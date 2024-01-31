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

export const getItem = async function () {
    const q = query
}

export const deleteItem = function () {};

export const addToSlideShow = function () {};
