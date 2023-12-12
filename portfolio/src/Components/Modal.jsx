import styled from "styled-components";
import testImg from "../Img/img.jpg";
import { AiOutlineCloseSquare } from "react-icons/ai";
import {
  BsFillDice1Fill,
  BsFillDice2Fill,
  BsFillDice3Fill,
  BsFillDice4Fill,
} from "react-icons/bs";
import { useSetRecoilState } from "recoil";
import { ModalId } from "../atoms";

const Modal = () => {
  const setId = useSetRecoilState(ModalId);
  const CloseModal = () => {
    setId("");
  };
  return (
    <ModalFrame>
      <Close onClick={CloseModal}>
        <AiOutlineCloseSquare />
      </Close>
      <ModalContents>
        <Image>
          <img src={testImg} />
        </Image>
        <Text>
          <div>
            <h3>프로젝트 제목</h3>
          </div>
          <div>
            <b>
              <BsFillDice1Fill />
            </b>
            프로젝트 설명
            <p>설명글</p>
          </div>
          <div>
            <b>
              <BsFillDice2Fill />
            </b>
            사용 기술
            <ul>
              <li>ㅡ 1</li>
              <li>ㅡ 2</li>
              <li>ㅡ 3</li>
            </ul>
          </div>
          <div>
            <b>
              <BsFillDice3Fill />
            </b>
            GitHub
            <p>링크</p>
          </div>
          <div>
            <b>
              <BsFillDice4Fill />
            </b>
            Site
            <p>링크</p>
          </div>
        </Text>
      </ModalContents>
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
  width: 800px;
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
