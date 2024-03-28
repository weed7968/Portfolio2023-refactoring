import React from "react";
import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const MainPage = () => {
  const [textIndex, setTextIndex] = useState<number>(0);

  const texts: string[] = ["노력하는", "팀원을 생각하는", "의견을 경청하는"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((textIndex) => (textIndex === texts.length - 1 ? 0 : textIndex + 1));
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [texts.length]);

  return (
    <Main>
      <Contents>
        <Image src={process.env.PUBLIC_URL + "/Img/img.jpg"} alt="MainImg" />
        <Title>
          <p>안녕하세요! :)</p>
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
  background-color: white;
`;

const Contents = styled.div`
  width: 90vw;
  height: 85vh;
  max-width: 1730px;
  max-height: 820px;
  background-color: #f6fbff;
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
  & > p {
    margin-bottom: 15px;
  }
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
  animation: ${typing} 5s steps(20) infinite, ${blink} 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  max-width: fit-content;
  margin-bottom: 15px;
`;
