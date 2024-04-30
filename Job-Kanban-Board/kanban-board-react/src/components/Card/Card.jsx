import { styled } from "styled-components";

const StyledCard = styled.div`
  width: 100%;
  padding: 12px 12px 12px 24px;
  background-color: #ffffff;
  margin-bottom: 12px;
  box-sizing: border-box;
  border-radius: 5px;
  position: relative;

  & > div {
    display: none;
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
  }

  &:hover > div {
    display: block;
  }

  input:focus + div {
    display: none;
  }
`;

const Input = styled.input.attrs((props) => ({
  type: "text",
}))`
  border: none;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const Card = ({ openCard }) => {
  return (
    <StyledCard>
      <Input value="123" />
      <div>
        <button onClick={() => openCard()}>수정</button>
        <button>삭제</button>
      </div>
    </StyledCard>
  );
};

export default Card;
