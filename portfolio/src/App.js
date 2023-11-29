import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import Header from "./Components/Header";
import MainPage from "./Page/MainPage";
import AboutPage from "./Page/AboutPage";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let containerWidth = document.querySelector(".container").offsetWidth;
    gsap.to(".container", {
      scrollTrigger: {
        trigger: ".container",
        end: containerWidth,
        pin: ".container",
        scrub: 1,
      },
      x: -containerWidth,
    });
  }, []);

  return (
    <div>
      <Header />
      <Container className="container">
        <Frame>
          <MainPage />
        </Frame>
        <Frame>
          <AboutPage />
        </Frame>
      </Container>
    </div>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Frame = styled.div`
  width: 100vw;
`;
