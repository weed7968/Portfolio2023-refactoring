import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Foot>
      <Text>Thank you for viewing </Text>
      <Text>my portfolio</Text>
    </Foot>
  );
};

export default Footer;

const Foot = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${process.env.PUBLIC_URL + "/Img/Footer.jpg"});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  z-index: -1;
`;

const Text = styled.div`
  color: white;
  font-size: 70px;
  font-weight: 900;
  margin-top: 20px;
  text-shadow: 6px 2px 2px #4d4d4d;
`;
