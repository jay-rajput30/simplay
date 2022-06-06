import styled from "styled-components";

export const CardDetailsContainer = styled.div`
  border: 2px solid orange;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: var(--space-2) var(--space-1) var(--space-1) var(--space-1);
  @media and screen (min-width: 768px) {
    padding: var(--space-3) var(--space-1) var(--space-1) var(--space-1);
  }
`;

export const CardAvatarImage = styled.image`
  border: 5px solid green;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: inline;
`;

export const CardVideoDetails = styled.div`
  margin-left: var(--space-2);
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  & > * {
    color: var(--clr-body-text);
  }
`;
export const CardDetailsTitle = styled.h4`
  display: inline-block;
  color: var(--clr-heading-text);
  font-size: var(--length-md-1);
`;

export const CardDetailsViews = styled.span`
  font-size: var(--length-sm-2);
  text-align: start;
  width: 100%;
`;
