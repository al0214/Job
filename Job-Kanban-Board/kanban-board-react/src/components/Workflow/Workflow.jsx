import { styled } from "styled-components";

const StyledWorkflow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 32px;
  box-sizing: border-box;
  border-radius: 5px;
`;

const Workflow = ({ children }) => {
  return <StyledWorkflow>{children}</StyledWorkflow>;
};

export default Workflow;
