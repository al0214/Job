import { styled } from "styled-components";

const StyledColmnTitle = styled.h2``;

const ColumnTtile = ({ children }) => {
  return <StyledColmnTitle>{children}</StyledColmnTitle>;
};

export default ColumnTtile;
