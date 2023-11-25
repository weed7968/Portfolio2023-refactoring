import styled from "styled-components";

const Title = ({ title }) => {
  return (
    <TitleFrame>
      <Text>{title}</Text>
      <Bar />
    </TitleFrame>
  );
};

export default Title;

const TitleFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;

const Text = styled.div`
  min-width: fit-content;
  font-size: 20px;
`;

const Bar = styled.div`
  margin-left: 5%;
  width: 5000px;
  height: 1px;
  background-color: #000000;
`;
