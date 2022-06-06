import styled from "styled-components";

export const CardDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: var(--space-2) var(--space-1) var(--space-1) var(--space-1);
  @media and screen (min-width: 768px) {
    padding: var(--space-3) var(--space-1) var(--space-1) var(--space-1);
  }
`;

export const CardAvatarImage = styled.img`
  border: 1px solid var(--clr-heading-text);
  border-radius: 50%;
  height: 50px;
  width: 50px;
  object-fit: cover;
  margin-top: 0.3rem;
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
  font-size: var(--length-sm-3);
  text-align: start;
  width: 100%;
`;
export const CardDetailsLike = styled.span`
  font-size: var(--length-sm-3);
  text-align: start;
  width: 100%;
  padding-top: -0.5rem;
`;

export const LikesContainer = styled.div`
  width: 100%;
`;
