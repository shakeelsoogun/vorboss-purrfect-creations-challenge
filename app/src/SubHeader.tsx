import styled from "styled-components";

const Subheader = styled.h3`
  margin-top: 0;
  color: ${({ theme }) => theme.backgroundColor};
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 400;
`;

export default Subheader;