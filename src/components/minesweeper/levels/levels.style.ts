import styled from "styled-components";

export const StyledLevelsBar = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  button {
    padding: 5px;
    color: rgb(133, 201, 130);
    font-weight: 700;
    border: 1px solid #ccc;
    flex-grow: 1;
    outline: none;
    background: none;
    :hover {
      background-color: rgb(133, 201, 130);
      color: white;
    }
  }
`;
