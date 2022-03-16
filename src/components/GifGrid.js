import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: gifs, loading } = useFetchGifs(category);
  return (
    <>
      {loading && "Cargando"}
      <h2 key={category}>{category}</h2>
      <div className="card-grid">
        {gifs.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
