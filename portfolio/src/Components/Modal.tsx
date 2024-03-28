import React from "react";
import styled from "styled-components";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { BsFillDice1Fill, BsFillDice2Fill, BsFillDice3Fill, BsFillDice4Fill } from "react-icons/bs";
import { useRecoilState, useRecoilValue } from "recoil";
import { ModalId, projectById } from "../atoms";

const Modal = () => {
  const [id, setId] = useRecoilState(ModalId);
  const projectInfo = useRecoilValue(projectById);
  const CloseModal = () => {
    setId("");
  };
  return (
    <ModalFrame>
      <Close onClick={CloseModal}>
        <AiOutlineCloseSquare />
      </Close>
      {id && projectInfo && (
        <ModalContents>
          <Image>
            <img src={process.env.PUBLIC_URL + projectInfo.imageUrl} alt="프로젝트 사진 사진" />
          </Image>
          <Text>
            <div>
              <h3>{projectInfo.title}</h3>
            </div>
            <div>
              <b>
                <BsFillDice1Fill />
              </b>
              프로젝트 설명
              <p>{projectInfo.text}</p>
            </div>
            <div>
              <b>
                <BsFillDice2Fill />
              </b>
              사용 기술
              <ul>
                {projectInfo.skill.map((list, idx) => {
                  return <li key={idx}>{list}</li>;
                })}
              </ul>
            </div>
            <div>
              <b>
                <BsFillDice3Fill />
              </b>
              GitHub
              <p style={{ cursor: "pointer" }} onClick={() => window.open(projectInfo.github)}>
                {id ? projectInfo.github : null}
              </p>
            </div>
            <div>
              <b>
                <BsFillDice4Fill />
              </b>
              Link
              <p style={{ cursor: "pointer" }} onClick={() => window.open(projectInfo.link)}>
                {projectInfo.link}
              </p>
            </div>
          </Text>
        </ModalContents>
      )}
    </ModalFrame>
  );
};

export default Modal;

const ModalFrame = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 20px;
`;

const ModalContents = styled.div`
  padding: 20px;
`;

const Close = styled.div`
  position: fixed;
  cursor: pointer;
  top: -10px;
  right: -55px;
  font-size: 50px;
  color: white;
`;

const Image = styled.div`
  width: 730px;
  height: 330px;
  & > img {
    border-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Text = styled.div`
  padding-top: 20px;
  padding-left: 10px;
  width: 730px;
  & > div {
    font-family: initial;
    margin-bottom: 30px;
    h3 {
      font-size: 30px;
    }
    b {
      vertical-align: middle;
      padding-right: 5px;
    }
    ul {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5px;
      margin-top: 10px;
    }
    p {
      padding-left: 20px;
      padding-top: 10px;
    }
  }
`;
