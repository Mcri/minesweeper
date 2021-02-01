import styled from "styled-components";

export const StyledTopbar = styled.section`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 10px;
  color: rgb(133, 201, 130);
  svg#flag {
    color: rgb(204, 19, 19);
  }
  > #restart:hover {
    text-decoration: underline;
  }
`;
