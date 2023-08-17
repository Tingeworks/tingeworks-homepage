import { Canvas, useFrame } from "@react-three/fiber";
import { useState } from "react";

const ItemContainer = () => {
  const [active, setActive] = useState(0);

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
            <div
              key={index}
              onMouseEnter={() => setActive(item.id)}
              onMouseLeave={() => setActive(0)}
            >
              <a
                title={
                  item.title +
                  " | " +
                  item.description +
                  " | " +
                  "By Tingeworks"
                }
                target="_blank"
                href={item.url}
              >
                <img
                  src={`/portfolio/1.jpg`}
                  className={`h-full will-change-transform object-cover transition-transform cursor-pointer rounded-md ${
                    active == item.id ? "scale-105" : ""
                  }`}
                  alt={item.title + " by tingeworks"}
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemContainer;
