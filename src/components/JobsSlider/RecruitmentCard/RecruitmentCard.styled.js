import styled from "styled-components";

const JobsCard = styled.div`
  width: 100%;
  padding: 10px;
  cursor: move; /* fallback if grab cursor is unsupported */
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  font-size: 1.3rem;
  &.selectedJob {
    border: 2px solid ${({ theme: { palette } }) => palette.colors.pink};
    border-radius: 6px;
  }
`;

const JobsCardInner = styled.div`
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 15px;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { palette } }) => palette.colors.white};
`;

const ContentWrapper = styled.div`
  height: 100%;
  min-height: 160px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const CardHeader = styled.header`
  margin: 0 0 10px 0;
`;

const JobTitle = styled.h2`
  font-weight: ${({ theme: { palette } }) => palette.weight.semiBold};
  color: ${({ theme: { palette } }) => palette.colors.purple};
  text-transform: uppercase;
  font-size: inherit;
  text-align: center;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const JobCardContent = styled.div`
  font-size: inherit;
  text-align: center;
  font-weight: ${({ theme: { palette } }) => palette.weight.regular};
  color: ${({ theme: { palette } }) => palette.colors.grey300};
  font-size: 1.4rem;
`;

const Location = styled.span`
  display: block;
  color: inherit;
`;

const Salary = styled.span`
  display: block;
  color: inherit;
`;

const CardFooter = styled.footer`
  p {
    color: ${({ theme: { palette } }) => palette.colors.green};
    font-weight: ${({ theme: { palette } }) => palette.weight.semiBold};
    text-transform: uppercase;
    font-size: inherit;
    text-align: center;
    margin: 0;
    padding: 0;
  }
`;

export const Styled = {
  JobsCard,
  JobsCardInner,
  ContentWrapper,
  CardHeader,
  JobTitle,
  CardFooter,
  JobCardContent,
  Location,
  Salary,
};
