"use client";
import HelperCircle from "@/components/HelperCircle";
import { gsap } from "gsap";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Banner3DObject from "@/components/Banner3DObject";
import ItemContainer from "@/components/ItemContainer";
import Navbar from "@/components/Navbar";

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
      {/* <HelperCircle /> */}
      <Navbar />
      <div className="container mx-auto px-6 lg:px-20 ">
        <div className="h-screen flex flex-col justify-center">
          <h1
            ref={titleRef}
            className="text-5xl lg:text-6xl  font-semibold capitalize"
          >
            Bored of <br />
            the same old layout?
          </h1>
          <p className="text-xl lg:text-3xl" ref={subtitleRef}>
            We, at Tingeworks, can help you with that
          </p>
        </div>
      </div>

      <div className="bg-black container mx-auto px-6 lg:px-20 py-10">
        <div className="mt-20 mb-10">
          <h2 className="text-3xl mb-4">/About us</h2>
          <p>
            We, at tingeworks, are a group of skilled individuals with a love
            for art and colors (even though our site is pretty colorless). Our
            goal is to create software more excessible and fun to use through
            means of proper UX and fun design. We make interactive immersive
            websites and multimedia content for brands to highlight their
            products.
          </p>
          <h3 className="mt-10 text-lg">&gt; Team</h3>
          <section className="mt-2">
            <h4 className="font-bold">Imtiaz Al Shariar | Founder</h4>
            <p>
              Imtiaz Al Shariar is a frontend developer working with startups
              and businesses around the world. Likes making games, cool ui and a
              bit of art here and there.
            </p>
            <ul className="flex gap-2 mt-2">
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/shariarsensei/"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/shariarsensei/"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </section>

          <section className="mt-4">
            <h4 className="font-bold">Sakhawat Hossen | Co-Founder</h4>
            <p>
              Sakhawat Hossen is a fullstack developer with years of experience
              working with businesses both home and abroad. Handles complicated
              pipelines and other server/deployment related issues.
            </p>
            <ul className="flex gap-2 mt-2">
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/localhost443/"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-20 bg-black">
          <h2 className="text-3xl mb-4">/Portfolio</h2>
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
