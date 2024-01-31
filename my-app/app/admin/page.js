"use client";
import React, { useEffect, useState } from "react";
import { addItem, deleteItem, addToSlideShow } from "./logic.";
export default function page() {
  const [newItem, setNewItem] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    await addItem(newItem);
    setNewItem("");
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
    </div>
  );
}
