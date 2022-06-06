import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 0 auto;
  margin-bottom: var(--space-3);
  @media screen and (min-width: 768px) {
    width: 310px;
    margin-left: var(--space-2);
  }
`;

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  padding: var(--space-1);
  @media screen and (min-width: 768px) {
    width: 310px;
    margin-left: var(--space-2);
  }
`;
