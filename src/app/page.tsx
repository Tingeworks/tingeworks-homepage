"use client";
import HelperCircle from "@/components/HelperCircle";
import { gsap } from "gsap";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Banner3DObject from "@/components/Banner3DObject";
import ItemContainer from "@/components/ItemContainer";

export default function Home() {
  let titleRef = React.useRef() as React.MutableRefObject<HTMLHeadingElement>;
  let subtitleRef =
    React.useRef() as React.MutableRefObject<HTMLParagraphElement>;

  useEffect(() => {
    gsap.from(titleRef.current, {
      duration: 0.5,
      y: 100,
      opacity: 0,
      ease: "linear",
    });

    gsap.from(subtitleRef.current, {
      duration: 0.5,
      y: 50,
      opacity: 0,
      ease: "linear",
      delay: 0.1,
    });
  }, []);

  return (
    <main className="">
      <div className="fixed top-0 left-0 right-0">
        <div className="mt-10 flex justify-between items-center container mx-auto px-6 lg:px-20">
          <span className="font-bold leading-tight">TW.</span>

          <ul className="lg:flex gap-5 hidden">
            <li>
              <a className="cursor-pointer" href="#aboutus">
                About us
              </a>
            </li>
            <li>
              <a href="#social">Socials</a>
            </li>

            <li>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <HelperCircle /> */}
      <div className="container mx-auto px-6 lg:px-20 ">
        <div className="h-screen flex flex-col justify-center">
          <h1 ref={titleRef} className="text-5xl font-semibold capitalize">
            Bored of the same old layout?
          </h1>
          <p ref={subtitleRef}>We, at Tingeworks, can help you with that</p>
        </div>

        <div className="mt-20">
          <h2>/3D Websites</h2>
          <ItemContainer />
        </div>

        <div className="mt-20">
          <h2>/Games</h2>
          <ItemContainer />
        </div>

        <div className="mt-20">
          <h2>/Immersive Experiences</h2>
          <ItemContainer />
        </div>
      </div>

      <div className="fixed top-0 left-0 -z-10 h-screen w-screen">
        <Canvas style={{}} className="">
          <ambientLight color={0xffffff} />
          <Banner3DObject />
        </Canvas>
      </div>
    </main>
  );
}
