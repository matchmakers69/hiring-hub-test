import data from "../../json/matched_jobs.json";

export const fetchFakeRecruitersData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.recruiters);
    }, 600);
  });
};

export const fetchFakeJobsData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.jobs);
    }, 800);
  });
};

export const renderRecruitersArray = (recruiters) => {
  return Object.entries(recruiters).map(([id, data]) => ({
    id,
    ...data,
  }));
};

export const renderJobsArray = (jobs) => {
  return Object.keys(jobs).map((job) => jobs[job]);
};

// In this case we want to find an object matches conditional, as a result we get a single job object, alternatively it could be scenario, where a recruiter could have assigned more then one job posion, if yes we would need to use filter method.

export const foundJobById = (recruiterId, jobs) => {
  let matchedJob = null;
  matchedJob = jobs.find((job) => {
    if (job.placed_by === parseInt(recruiterId, 10)) {
      return true;
    } else {
      return false;
    }
  });

  return matchedJob;
};

export const recruiterCarouselSettings = {
  infinite: true,
  centerPadding: "60px",
  dots: false,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 3000,
  cssEase: "linear",
  swipeToSlide: true,
  className: "center",
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

export const jobsCarouselSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  className: "slide",
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};
