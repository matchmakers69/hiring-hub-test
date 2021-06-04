import React from "react";
import PropTypes from "prop-types";
import { Styled } from "./RecruitmentCard.styled";

const JOB_STATUS = {
  position_filled: "Position filled",
  expired: "Position expired",
};

const RecruitmentCard = ({ job, matchedJobId }) => {
  return (
    <Styled.JobsCard
      className={job.placed_by === matchedJobId ? "selectedJob" : ""}
    >
      <Styled.JobsCardInner>
        <Styled.ContentWrapper>
          <Styled.CardHeader>
            <Styled.JobTitle>{job.title}</Styled.JobTitle>
          </Styled.CardHeader>
          <Styled.JobCardContent>
            <Styled.Location>{job.location}</Styled.Location>
            <Styled.Salary>
              {job.salary ? `£${job.salary}` : "not confirmed  "}
            </Styled.Salary>
          </Styled.JobCardContent>
          <Styled.CardFooter>
            <p>{JOB_STATUS[job.status]}</p>
          </Styled.CardFooter>
        </Styled.ContentWrapper>
      </Styled.JobsCardInner>
    </Styled.JobsCard>
  );
};

RecruitmentCard.propTypes = {
  job: PropTypes.instanceOf(Object),
};

export default RecruitmentCard;
