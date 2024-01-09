import { useInView } from "react-intersection-observer";
import styled, { keyframes } from "styled-components";
import Title from "../Components/Title";

const AboutPage = () => {
  const [ref, inview] = useInView();

  return (
    <About>
      <Contents>
        <Image
          src={process.env.PUBLIC_URL + "/Img/aboutImg.jpg"}
          alt="MainImg"
        />
        <Intro ref={ref} data-lenis-prevent-wheel>
          <In $delay={1} $inview={inview}>
            <Title title={"About Me"} />
            <p>
              안녕하세요! 저는 팀원들에게 도움이 되는 개발자로 성장하고 싶은
              프론트엔드 개발자 신성철입니다.
            </p>
          </In>
          <In $delay={1.5} $inview={inview}>
            <Title title={"Education"} />
            <ul>
              <li>2018.03 - 2023.02 신구대 소프트웨어학과 졸업</li>
              <li>
                2023.03 - 2023.08 Software Engineering Frontend Bootcamp
                (코드스테이츠)
              </li>
            </ul>
          </In>
          <In $delay={2} $inview={inview}>
            <Title title={"Github / Blog"} />
            <ImgFrame>
              <a href="https://github.com/weed7968" target="_blank">
                <ImgBox $src={process.env.PUBLIC_URL + "/Img/github.png"} />
              </a>
              <a href="https://velog.io/@weed7968" target="_blank">
                <ImgBox $src={process.env.PUBLIC_URL + "/Img/velog.jpg"} />
              </a>
            </ImgFrame>
          </In>
          <In $delay={2.5} $inview={inview}>
            <Title title={"Skills"} />
            <h3>ㅡ Basic</h3>
            <Skills>
              <ImgBox $src={process.env.PUBLIC_URL + "/Img/html.png"} />
              <ImgBox $src={process.env.PUBLIC_URL + "/Img/css.png"} />
              <ImgBox $src={process.env.PUBLIC_URL + "/Img/js.png"} />
            </Skills>
            <h3>ㅡ Library</h3>
            <Skills>
              <ImgBox $src={process.env.PUBLIC_URL + "/Img/react.png"} />
              <ImgBox
                $src={process.env.PUBLIC_URL + "/Img/styledComponents.png"}
              />
              <ImgBox $src={process.env.PUBLIC_URL + "/Img/recoil.png"} />
            </Skills>
          </In>
        </Intro>
      </Contents>
    </About>
  );
};

export default AboutPage;

const About = styled.div`
  font-weight: bold;
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.div`
  width: 90vw;
  height: 85vh;
  max-width: 1730px;
  max-height: 820px;
  background-color: #f6fbff;
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
  overflow-y: auto;

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
  margin-bottom: 40px;
  opacity: 0;
  animation: ${({ $inview }) => ($inview ? fadeIn : "none")} 0.5s ease-out
    forwards;
  animation-delay: ${({ $delay }) => `${$delay}s`};
`;

const ImgFrame = styled.div`
  display: flex;
`;

const ImgBox = styled.div`
  width: 70px;
  height: 70px;
  overflow: hidden;
  background-image: url(${({ $src }) => $src});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin-right: 20px;
  border-radius: 15px;
`;

const Skills = styled.div`
  display: flex;
  margin: 10px 0;
`;
