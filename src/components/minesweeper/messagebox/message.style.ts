import styled from "styled-components";

export const StyledMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  flex-direction: column;
  z-index: 300;
  background-color: rgba(255, 255, 255, 0.233);
  width: 100%;
  height: 100%;
  bottom: 0;
  h2 {
    display: block;
    font-size: 3rem;
    color: #e07918;
    margin-bottom: 10px;
  }
  button {
    text-transform: uppercase;
    padding: 10px 20px;
    font-size: 1.1rem;
    border: none;
    background-color: #2d61f1;
    color: white;
    :hover {
      background-color: #3b6df8;
    }
  }
`;
