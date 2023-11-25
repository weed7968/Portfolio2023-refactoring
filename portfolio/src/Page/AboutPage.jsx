import { useInView } from "react-intersection-observer";
import styled, { keyframes } from "styled-components";
import Img from "../Img/img.jpg";
import Title from "../Components/Title";

const AboutPage = () => {
  const [ref, inView] = useInView();

  return (
    <About>
      <Contents>
        <Image src={Img} alt="MainImg" />
        <Intro ref={ref} inView={inView}>
          <In delay={1} inView={inView}>
            <Title title={"About Me"} />
          </In>
          <In delay={2} inView={inView}>
            <Title title={"Education"} />
            <ul>
              <li>a</li>
              <li>b</li>
              <li>c</li>
            </ul>
          </In>
          <In delay={3} inView={inView}>
            <Title title={"Github / Blog"} />
          </In>
          <In delay={4} inView={inView}>
            <Title title={"Skills"} />
          </In>
        </Intro>
      </Contents>
    </About>
  );
};

export default AboutPage;

const About = styled.div`
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

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Intro = styled.div`
  width: 45%;
  margin-right: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ul {
    padding-left: 30px;
    margin: 0;
  }

  li::marker {
    content: "ㅡ  ";
    font-size: 1.2em;
  }
`;

const In = styled.div`
  margin-bottom: 30px;
  opacity: 0;
  animation: ${({ inView }) => (inView ? fadeIn : "none")} 0.5s ease-out
    forwards;
  animation-delay: ${({ delay }) => `${delay}s`};
`;
