import styled from "styled-components";

export const StyledMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  flex-direction: column;
  z-index: 300;
  background-color: rgba(255, 255, 255, 0.2);
  width: 100%;
  height: 100%;
  bottom: 0;
  h2 {
    display: block;
    font-size: 3rem;
    color: rgb(56, 82, 62);
    margin-bottom: 10px;
  }
  button {
    text-transform: uppercase;
    padding: 10px 20px;
    font-size: 1.1rem;
    border: none;
    background-color: rgb(207, 203, 56);
    color: white;
    :hover {
      background-color: rgb(201, 197, 24);
    }
  }
`;
