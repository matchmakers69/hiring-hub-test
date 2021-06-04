import React from "react";
import PropTypes from "prop-types";
import { Styled } from "./CardRecruiter.styled";
import RatingStar from "../../RatingStar";
import { STARS } from "../../../mocks/stars";

const CardRecruiter = ({
  recruiter,
  onClick,
  recruiterCardIndex = 0,
  cardIndex = 0,
}) => {
  const handleCardClick = () => {
    onClick(recruiter.id, cardIndex);
  };

  return (
    <Styled.RecruiterCard
      className={cardIndex === recruiterCardIndex ? "activeCard" : ""}
      type="button"
      onClick={handleCardClick}
      key={recruiter.id}
    >
      <Styled.RecruiterCardInner className="recruiter-card-inner">
        <Styled.ContentWrapper>
          <Styled.CardHeader>
            <Styled.RecruiterName>{recruiter.name}</Styled.RecruiterName>
          </Styled.CardHeader>
          <Styled.RecruiterCardContent>
            <Styled.RecruiterAchievementsList>
              <Styled.RecruiterAchievementsListItem>
                <span>{recruiter.filled_job_count} jobs filled</span>
              </Styled.RecruiterAchievementsListItem>
              <Styled.RecruiterAchievementsListItem>
                <span>{recruiter.live_job_count} live jobs</span>
              </Styled.RecruiterAchievementsListItem>
            </Styled.RecruiterAchievementsList>
            <Styled.RatingContent>
              <Styled.RatingStarsList>
                {STARS.map((star, index) => (
                  <Styled.RatingStarsItem key={star}>
                    <RatingStar index={index} rating={recruiter.rating} />
                  </Styled.RatingStarsItem>
                ))}
              </Styled.RatingStarsList>
            </Styled.RatingContent>
          </Styled.RecruiterCardContent>
        </Styled.ContentWrapper>
      </Styled.RecruiterCardInner>
    </Styled.RecruiterCard>
  );
};

CardRecruiter.propTypes = {
  recruiter: PropTypes.instanceOf(Object),
  recruiterCardIndex: PropTypes.number,
  cardIndex: PropTypes.number,
};

export default CardRecruiter;
