import styled from "styled-components";

const JobsCard = styled.div`
  margin: 10px;
  padding: 5px;
  cursor: pointer;
  &.selectedJob {
    border: 2px solid red;
  }
`;

const JobsCardInner = styled.div`
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 15px;
  background-color: ${({ theme: { palette } }) => palette.colors.white};
`;

export const Styled = {
  JobsCard,
  JobsCardInner,
};
