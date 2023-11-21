import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Img from "../Img/img.jpg";

const MainPage = () => {
  const [textIndex, setTextIndex] = useState(0);

  const texts = ["노력하는", "팀원을 생각하는", "의견을 경청하는"];

  useEffect(() => {
    setInterval(() => {
      setTimeout(() => {
        setTextIndex((Index) => {
          if (Index === texts.length - 1) {
            return 0;
          } else {
            return Index + 1;
          }
        });
      }, 0);
    }, 5000);
  }, []);

  return (
    <Main>
      <Contents>
        <Image src={Img} alt="MainImg" />
        <Title>
          <p>안녕하세요!:)</p>
          <Typing>{texts[textIndex]}</Typing>
          <p>개발자 신성철입니다!</p>
        </Title>
      </Contents>
    </Main>
  );
};

export default MainPage;

const Main = styled.div`
  font-family: "Nanum Gothic", sans-serif;
  font-size: 50px;
  font-weight: bold;
  width: 100vw;
  height: 100vh;
`;

const Contents = styled.div`
  width: 90vw;
  height: 85vh;
  max-width: 1730px;
  max-height: 820px;
  background-color: #e7e7e7;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 40%;
`;

const Title = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const typing = keyframes`
	0% {
    width: 0
  }
  50% {
    width: 100%;
  }
  90%, 100%{
    width: 0
  }
`;

const blink = keyframes`
	50% {
    border-color: transparent
  }
`;

const Typing = styled.div`
  animation: ${typing} 5s steps(20) infinite,
    ${blink} 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  max-width: fit-content;
`;
