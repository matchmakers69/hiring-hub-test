import React from "react";
import PropTypes from "prop-types";
import { Styled } from "./RecruitmentCard.styled";

const RecruitmentCard = ({ job, matchedJobId }) => {
  console.log(matchedJobId);
  return (
    <Styled.JobsCard
      className={job.placed_by === matchedJobId ? "selectedJob" : ""}
    >
      <Styled.JobsCardInner>Card</Styled.JobsCardInner>
    </Styled.JobsCard>
  );
};

RecruitmentCard.propTypes = {
  job: PropTypes.instanceOf(Object),
};

export default RecruitmentCard;
