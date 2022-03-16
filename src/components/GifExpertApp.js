import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {
  //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

  const [categories, setCategories] = useState([]);
  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory addCategory={setCategories} />
      <hr />

      <ol>
        {categories.map((category, index) => (
          <GifGrid category={category} key={index} />
        ))}
      </ol>
    </div>
  );
};
