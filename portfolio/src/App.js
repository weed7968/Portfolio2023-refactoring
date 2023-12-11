import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import Header from "./Components/Header";
import MainPage from "./Page/MainPage";
import AboutPage from "./Page/AboutPage";
import ProjectPage from "./Page/ProjectPage";

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
      <ProjectPage />
      <Transparent />
      <Footer />
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

const Transparent = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: transparent;
`;

const Footer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #aaaaaa;
  z-index: -1;
`;
