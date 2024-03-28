import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import Lenis from "lenis";

const useScrollAnimations = () => {
  const [pageHeight, setPageHeight] = useState(0);
  const [windowInnerHeight, setWindowInnerHeight] = useState(0);
  // const lenis = new Lenis();

  // lenis.on("scroll", (e) => {
  //   console.log(e);
  // });

  // function raf(time) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // }

  // requestAnimationFrame(raf);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let container = document.querySelector(".container") as HTMLElement;
    let containerWidth = container.offsetWidth;
    gsap.to(".container", {
      scrollTrigger: {
        trigger: ".container",
        end: containerWidth,
        pin: ".container",
        scrub: 1,
      },
      x: -containerWidth,
    });

    const updateDimensions = () => {
      setPageHeight(document.documentElement.scrollHeight);
      setWindowInnerHeight(window.innerHeight);
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return { pageHeight, windowInnerHeight };
};

export default useScrollAnimations;
