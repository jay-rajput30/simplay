import styled from "styled-components";

export const MobileNavbarContainer = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: var(--clr-primary);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: var(--space-2) 0;
  }
`;
