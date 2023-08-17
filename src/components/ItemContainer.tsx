import { Canvas, useFrame } from "@react-three/fiber";
import { useState } from "react";

const ItemContainer = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            id: 1,
            title: "The Gazelle Times",
            description: "Fast Times In a Shell",
            url: "https://thegazelletimes.com",
          },
        ].map((item, index) => {
          return (
            <a
              key={index}
              title={
                item.title + " | " + item.description + " | " + "By Tingeworks"
              }
              className="will-change-transform transition-transform hover:scale-105 cursor-pointer"
              target="_blank"
              href={item.url}
            >
              <img
                src={`/portfolio/1.jpg`}
                className={`h-full object-cover rounded-md`}
                alt={item.title + " by tingeworks"}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ItemContainer;
