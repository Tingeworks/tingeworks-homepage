import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [navStatus, setNavStatus] = useState(false);
  let navRef = useRef() as React.MutableRefObject<HTMLUListElement>;

  useEffect(() => {
    gsap.to(navRef.current, {
      duration: 0.1,
      y: "100%",
      opacity: 0,
      ease: "linear",
    });
  }, []);

  const onClick = () => {
    setNavStatus(!navStatus);

    if (navStatus == true) {
      gsap.to(navRef.current, {
        duration: 0.1,
        y: "100%",
        opacity: 0,
        ease: "linear",
      });
    } else {
      gsap.to(navRef.current, {
        duration: 0.1,
        y: "0%",
        opacity: 1,
        ease: "linear",
      });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <ul
        ref={navRef}
        className="flex gap-5 flex-col fixed top-24 left-0 right-0 bg-black p-5 py-10 lg:hidden z-50"
      >
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
      <div className="mt-10 flex justify-between items-center container mx-auto px-6 lg:px-20">
        <span className="font-bold leading-tight">TW.</span>

        <span onClick={onClick} className="lg:hidden cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-category"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4h6v6h-6z" />
            <path d="M14 4h6v6h-6z" />
            <path d="M4 14h6v6h-6z" />
            <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          </svg>
        </span>
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
  );
}
