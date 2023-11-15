import styled from "styled-components";

const Header = () => {
  return (
    <HeaderFrame>
      <Logo />
      <div>
        <Button>About</Button>
        <Button>Skills</Button>
        <Button>Project</Button>
      </div>
    </HeaderFrame>
  );
};

export default Header;

const HeaderFrame = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  height: 50px;
  width: 100px;
  margin: 10px 30px;
  background-color: #000;
`;

const Button = styled.button`
  font-size: 25px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: 10px 30px;
  &:hover {
    color: #b85d5d;
  }
`;
