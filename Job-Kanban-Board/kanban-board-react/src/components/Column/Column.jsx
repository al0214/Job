import { css, styled } from "styled-components";
import ColumnTtile from "../ColumnTitle/ColumnTitle";
import Cards from "../Cards/Cards";

const StyledColmn = styled.div`
  flex-grow: 1;

  $ > button.button {
    width: 100%;
    padding: 12px 32px;
    border-radius: 5px;
    background-color: #ffffff;
    border: noene;
    font-weight: bold;
    box-shadow: 3px 3px 10px #777;
  }

  &:not(:first-of-type) {
    margin-left: 27px;
  }

  ${(props) => {
    if (props.theme === "color1") {
      return css`
        div.cards {
          background-color: #00b8d9;
        }
      `;
    }

    if (props.theme === "color2") {
      return css`
        div.cards {
          background-color: #f45f7;
        }
      `;
    }
    if (props.theme === "color3") {
      return css`
        div.cards {
          background-color: #57d9a3;
        }
      `;
    }
  }}
`;

const Column = ({ theme, title, openCard }) => {
  return (
    <StyledColmn thema={theme}>
      <ColumnTtile>{title}</ColumnTtile>
      <Cards theme={theme} openCard={openCard} />
    </StyledColmn>
  );
};

export default Column;
