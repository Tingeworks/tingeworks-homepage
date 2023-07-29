import { Canvas, useFrame } from "@react-three/fiber";
import { useState } from "react";

const ItemContainer = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex mt-2 gap-3 flex-col lg:flex-row">
      <div className="lg:w-10/12 flex gap-3 justify-between">
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <div
              key={index}
              onMouseEnter={() => setActive(item)}
              onMouseLeave={() => setActive(0)}
              className={`transition-all cursor-pointer ${
                active == item ? "w-96" : "w-48"
              } h-80 bg-gray-200 text-black`}
            >
              <img
                src={`https://source.unsplash.com/random?${index}`}
                className="object-cover h-full w-full transition-all grayscale hover:grayscale-0"
                alt=""
              />
            </div>
          );
        })}
      </div>

      <a className="flex-1 border border-gray-400 flex justify-center items-center py-4 underline cursor-pointer text-xs">
        View 10 more
      </a>
    </div>
  );
};

export default ItemContainer;
