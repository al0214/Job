import { styled } from "styled-components";

const StyledTitle = styled.h1`
  font-size: 32px;
  padding: 16px 3px;
  font-weight: bold;
  color: #ffffff;
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
