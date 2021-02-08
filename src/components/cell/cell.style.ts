import styled from "styled-components";

type StyledCellProp = {
  bg: string;
  color: string;
  mineColor: string;
  isRevealed: boolean;
};

export default styled.div<StyledCellProp>`
  width: 35px;
  height: 35px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
  
  > svg#flag {
    color: rgb(204, 19, 19);
  }
  > .mine {
    width: 50%;
    height: 50%;
    border-radius: 50%;
    background: ${(props) => props.mineColor};
    filter: drop-shadow(0 0.6mm 0.2mm rgba(0,0,0,0.5))
  }
  ::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
  }
  :hover::after {
    background-color: ${(props) =>
      !props.isRevealed && "rgba(255, 255, 255, 0.253)"};
  }
`;
