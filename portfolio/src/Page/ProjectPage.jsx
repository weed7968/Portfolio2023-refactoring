import styled from "styled-components";
import Img from "../Img/img.jpg";
import Title from "../Components/Title";
import Project from "../Components/Project";
import Modal from "../Components/Modal";
import { useRecoilValue } from "recoil";
import { ModalId } from "../atoms";

const ProjectPage = () => {
  const modalOpen = useRecoilValue(ModalId);
  return (
    <>
      <ModalBackground $modalOpen={modalOpen}>
        <Modal />
      </ModalBackground>
      <ProjectP>
        <Contents>
          <Image src={Img} alt="MainImg" />
          <Intro>
            <Title title={"Project"} />
            <Frame>
              <Project />
              <Project />
              <Project />
              <Project />
            </Frame>
          </Intro>
        </Contents>
      </ProjectP>
    </>
  );
};

export default ProjectPage;

const ModalBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 11110;
  display: ${({ $modalOpen }) => ($modalOpen ? "" : "none")};
`;

const ProjectP = styled.div`
  font-family: "Nanum Gothic", sans-serif;
  font-weight: bold;
  width: 100vw;
  height: 100vh;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.div`
  width: 90vw;
  height: 85vh;
  max-width: 1730px;
  max-height: 820px;
  background-color: #e7e7e7;
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 40%;
`;

const Intro = styled.div`
  width: 45%;
  margin-right: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Frame = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;
