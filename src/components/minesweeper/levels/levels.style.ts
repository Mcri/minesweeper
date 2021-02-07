import styled from "styled-components";

export const StyledLevelsBar = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  button {
    padding: 5px 0;
    color: #ccc;
    font-weight: 700;
    border: 1px solid #ccc;
    flex-grow: 1;
    outline: none;
    background: none;
    :hover {
      color: rgb(207, 203, 56);
    };
    &.active {
      background-color: rgb(56, 82, 62);
      color: white;
      border: none;
    }
  }
`;
