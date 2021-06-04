import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Styled } from "./JobsSlider.styled";
import RecruitmentCard from "./RecruitmentCard";

const JobsSlider = ({
  data = [],
  settings = {},
  matchedJobId = 0,
  jobIndex = 0,
}) => {
  const sliderRef = useRef();

  useEffect(() => {
    if (sliderRef && sliderRef.current) {
      sliderRef.current.slickGoTo(jobIndex);
    }
  }, [jobIndex]);

  return (
    <Styled.SliderWrapper>
      <Slider ref={sliderRef} {...settings}>
        {data.map((card) => {
          return (
            <RecruitmentCard
              key={card.placed_by}
              job={card}
              matchedJobId={matchedJobId}
            />
          );
        })}
      </Slider>
    </Styled.SliderWrapper>
  );
};

JobsSlider.propTypes = {
  data: PropTypes.instanceOf(Array),
  onClick: PropTypes.func,
  cardType: PropTypes.string,
  jobIndex: PropTypes.number,
};

export default JobsSlider;
