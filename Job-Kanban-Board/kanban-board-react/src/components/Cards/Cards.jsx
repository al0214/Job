import { css, styled } from "styled-components";
import Card from "../Card/Card";

const StyledCard = styled.div`
  border-radius: 5px;
  padding: 12px;
  box-shadow: 3px 3px 10px #777777;

  ${(props) => {
    if (props.theme === "color1") {
      return css`
        background-color: #00b8d9;
      `;
    }

    if (props.theme === "color2") {
      return css`
        background-color: #f4f5f7;
      `;
    }

    if (props.theme === "color3") {
      return css`
        background-color: #57d9a3;
      `;
    }
  }}
`;

const Button = styled.button`
  width: 100%;
  padding: 12px 32px;
  border-radius: 5px;
  background-color: #ffffff;
  border: none;
  font-weight: bold;
  box-shadow: 3px 3px 10px #777;

  ${(props) => {
    if (props.theme === "color1") {
      return css`
        color: #ffffff;
        background-color: #79e2f2;
      `;
    }

    if (props.theme === "color2") {
      return css`
        color: #ffffff;
        background-color: #ff5630;
      `;
    }
  }}
`;

const Cards = ({ theme, openCard }) => {
  return (
    <StyledCard theme={theme}>
      <Card openCard={openCard} />
      <Button theme={theme}>ADD</Button>
    </StyledCard>
  );
};

export default Cards;
