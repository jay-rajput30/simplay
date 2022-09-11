import styled from "styled-components";

export const DesktopNavbarContainer = styled.div`
  display: none;
  & > button {
    border: none;
    border-radius: 7px;
    padding: var(--space-1) var(--space-2);
    font-weight: bold;
    margin-top: var(--space-3);
    background-color: var(--clr-tertiary);
    color: var(--clr-heading-text);
    transition: transform 0.2s linear;
  }
  & > button:active {
    transform: scale(0.96);
  }
  @media screen and (min-width: 786px) {
    width: 20vw;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background-color: var(--clr-primary);
  }
`;

export const DesktopNavbarItem = styled.div`
  width: 100%;
  height: var(--length-lg-2);
  margin-top: var(--space-3);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: var(--space-1) 0 var(--space-1) var(--space-3);
  &:first-child {
    margin-top: 5rem;
  }
  & > .desktop--navbar--icon {
    color: var(--clr-heading-text);
    height: 100%;
    width: auto;
    display: inline-block;
    margin-left: var(--space-3);
  }
  & > span {
    font-size: 2.1rem;
    font-weight: bold;
    color: var(--clr-heading-text);
    margin-left: var(--space-2);
  }
  &:hover {
    cursor: pointer;
  }
`;
