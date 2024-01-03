import styled from "styled-components";

const Header = () => {
  return (
    <HeaderFrame>
      <Logo />
      <div>
        <Button>Home</Button>
        <Button>Project</Button>
      </div>
    </HeaderFrame>
  );
};

export default Header;

const HeaderFrame = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  padding: 0 5vw;
  z-index: 1000;
`;

const Logo = styled.div`
  height: 53px;
  width: 109px;
  border-radius: 3px;
  margin: 10px 0;
  background-image: url(${process.env.PUBLIC_URL}/Img/logo.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Button = styled.button`
  font-family: "Gugi", serif;
  font-size: 25px;
  margin: 20px 0 0 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: #796bc9;
  }
`;
