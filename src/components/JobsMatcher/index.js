import React, { useState, useEffect } from "react";
import {
  fetchFakeRecruitersData,
  fetchFakeJobsData,
  renderRecruitersArray,
  renderJobsArray,
  foundJobById,
  recruiterCarouselSettings,
  jobsCarouselSettings,
} from "./JobsMatcher.service";
import RecruitersSlider from "../RecruitersSlider";
import JobsSlider from "../JobsSlider";

const JobsMatcher = () => {
  const [jobs, setJobs] = useState([]);
  const [recruiters, setRecruiters] = useState([]);
  const [matchedJobId, setMatchedJobId] = useState(0);
  // jobIndex as a prop is passed to jobs slider to move the slider to proper position after job is matched with recruiter
  const [jobIndex, setJobIndex] = useState(0);
  const [recruiterCardIndex, setRecruiterCardIndex] = useState(-1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setArraysOfRecruitersAndJobs = async () => {
      // Fake fetch API call only to simulate async data fetch - Promise.all just to make sure all promises are resolved
      try {
        const [recruiters, jobs] = await Promise.all([
          fetchFakeRecruitersData(),
          fetchFakeJobsData(),
        ]);
        setRecruiters(renderRecruitersArray(recruiters));
        setJobs(renderJobsArray(jobs));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    setArraysOfRecruitersAndJobs();
  }, []);

  const handleFindMatchedJobById = (id, cardRecruiterIndex) => {
    const objMatchedRole = foundJobById(id, jobs);
    // We need to find under what index selected job is located
    const matchedJobIndex = jobs
      .map((job) => job.placed_by)
      .indexOf(parseInt(id, 10));
    setJobIndex(matchedJobIndex);
    setMatchedJobId(objMatchedRole.placed_by);
    setRecruiterCardIndex(cardRecruiterIndex);
  };

  if (loading) return <span>Loading...</span>;

  return (
    <div className="page-wrapper">
      <JobsSlider
        settings={jobsCarouselSettings}
        data={jobs}
        matchedJobId={matchedJobId}
        jobIndex={jobIndex}
      />
      <RecruitersSlider
        settings={recruiterCarouselSettings}
        data={recruiters}
        onClick={handleFindMatchedJobById}
        recruiterCardIndex={recruiterCardIndex}
      />
    </div>
  );
};

JobsMatcher.propTypes = {};

export default JobsMatcher;
