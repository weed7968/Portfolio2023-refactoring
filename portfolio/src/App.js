import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import Header from "./Components/Header";
import MainPage from "./Page/MainPage";
import AboutPage from "./Page/AboutPage";
import ProjectPage from "./Page/ProjectPage";
import Modal from "./Components/Modal";
import { useRecoilValue } from "recoil";
import { ModalId } from "./atoms";

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

  const modalOpen = useRecoilValue(ModalId);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

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
      <ModalBackground $modalOpen={modalOpen}>
        <Modal />
      </ModalBackground>
      <ProjectPage />
      <Transparent />
      <Footer />
    </div>
  );
};

export default App;

const ModalBackground = styled.div`
  position: fixed;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${({ $modalOpen }) => ($modalOpen ? "" : "none")};
`;

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
