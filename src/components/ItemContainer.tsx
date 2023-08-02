import { Canvas, useFrame } from "@react-three/fiber";
import { useState } from "react";

const ItemContainer = () => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <div
              key={index}
              onMouseEnter={() => setActive(item)}
              onMouseLeave={() => setActive(0)}
            >
              <img
                src={`https://source.unsplash.com/random?${index}`}
                className={`h-full object-cover rounded-lg transition-transform cursor-pointer ${
                  active == item ? "scale-110" : ""
                }`}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemContainer;
