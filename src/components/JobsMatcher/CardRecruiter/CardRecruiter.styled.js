import styled from "styled-components";

const RecruiterCard = styled.button`
  background-color: transparent;
  border: none;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  font-size: 1.3rem;
  &.activeCard {
    border-radius: 6px;
    border: 2px solid ${({ theme: { palette } }) => palette.colors.purple};
  }
`;

const RecruiterCardInner = styled.div`
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
  min-height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CardHeader = styled.header`
  margin: 0 0 10px 0;
`;

const RecruiterName = styled.h2`
  font-weight: ${({ theme: { palette } }) => palette.weight.semiBold};
  color: ${({ theme: { palette } }) => palette.colors.grey300};
  text-transform: uppercase;
  font-size: inherit;
  text-align: center;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const RecruiterCardContent = styled.div`
  font-size: inherit;
  text-align: center;
  font-weight: ${({ theme: { palette } }) => palette.weight.regular};
  color: ${({ theme: { palette } }) => palette.colors.grey300};
  font-size: 1.4rem;
`;

const RecruiterAchievementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 10px 0;
  font-size: inherit;
  display: flex;
  flex-wrap: wrap;
`;

const RecruiterAchievementsListItem = styled.li`
  margin-right: 5px;
  &:last-child {
    margin-right: 0;
  }
`;

const RatingContent = styled.div`
  padding: 5px;
  width: 100%;
  background-color: ${({ theme: { palette } }) => palette.colors.grey300};
`;

export const RatingStarsList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const RatingStarsItem = styled.li`
  margin-right: 2px;
  &:last-child {
    margin-right: 0;
  }
`;

export const Styled = {
  RecruiterCard,
  RecruiterCardInner,
  ContentWrapper,
  CardHeader,
  RecruiterName,
  RecruiterCardContent,
  RecruiterAchievementsList,
  RecruiterAchievementsListItem,
  RatingContent,
  RatingStarsList,
  RatingStarsItem,
};
