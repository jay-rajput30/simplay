import styled from "styled-components";

export const CardContainer = styled.div`
  ${"" /* box-shadow: var(--clr-secondary) 0px 3px 8px; */}
  box-shadow: rgba(114, 117, 126, 0.3) 0px 1px 2px 0px, rgba(114, 117, 126, 0.15) 0px 2px 6px 2px;
  margin: var(--space-2) var(--space-2) var(--space-4) var(--space-2);
  @media screen and (min-width: 768px) {
    width: 310px;
    margin: var(--space-2);
    margin-left: var(--space-2);
  }
`;

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  padding: var(--space-1);
  @media screen and (min-width: 768px) {
    width: 310px;
  }
`;
