import styled from "styled-components";
import Title from "../Components/Title";
import Project from "../Components/Project";
import { useRecoilValue } from "recoil";
import { projectList } from "../atoms";

const ProjectPage = () => {
  const PList = useRecoilValue(projectList);

  return (
    <ProjectP>
      <Contents>
        <Image
          src={process.env.PUBLIC_URL + "/Img/projectImg.jpg"}
          alt="MainImg"
        />
        <Intro>
          <Title title={"Project"} />
          <Frame>
            {PList.map((obj, index) => (
              <Project key={index} {...obj} />
            ))}
          </Frame>
        </Intro>
      </Contents>
    </ProjectP>
  );
};

export default ProjectPage;

const ProjectP = styled.div`
  font-family: "Nanum Gothic", sans-serif;
  font-weight: bold;
  width: 100vw;
  height: 105vh;
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
  margin-top: 30px;
  background-color: #f6fbff;
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 40%;
`;

const Intro = styled.div`
  width: 50%;
  margin-right: 5%;
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
