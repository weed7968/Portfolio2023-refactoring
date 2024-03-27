import React, { useEffect } from "react";
import useScrollAnimations from "./Hook/useScrollAnimations";
import styled from "styled-components";
import Header from "./Components/Header";
import MainPage from "./Page/MainPage";
import AboutPage from "./Page/AboutPage";
import ProjectPage from "./Page/ProjectPage";
import Modal from "./Components/Modal";
import Footer from "./Components/Footer";
import { useRecoilState } from "recoil";
import { ModalId } from "./atoms";

const App = () => {
  const { pageHeight, windowInnerHeight } = useScrollAnimations();

  const [modalId, setModalId] = useRecoilState(ModalId);

  const CloseModal = () => {
    setModalId("");
  };

  const StopEventBubbling = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (modalId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [modalId]);

  return (
    <>
      <Header pageHeight={pageHeight} windowInnerHeight={windowInnerHeight} />
      <div>
        <Container className="container">
          <Frame>
            <MainPage />
          </Frame>
          <Frame>
            <AboutPage />
          </Frame>
        </Container>
        <ModalBackground $modalId={modalId} onClick={CloseModal}>
          <div onClick={StopEventBubbling}>
            <Modal />
          </div>
        </ModalBackground>
        <ProjectPage />
        <Transparent />
        <Footer />
      </div>
    </>
  );
};

export default App;

const ModalBackground = styled.div<{ $modalId: string }>`
  position: fixed;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${({ $modalId }) => ($modalId ? "" : "none")};
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
