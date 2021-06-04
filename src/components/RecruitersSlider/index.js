import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Styled } from "./RecruitersSlider.styled";
import CardRecruiter from "../JobsMatcher/CardRecruiter";

const RecruitersSlider = ({
  data = [],
  settings = {},
  onClick = () => {},
  recruiterCardIndex = 0,
}) => {
  return (
    <Styled.SliderWrapper>
      <Slider {...settings}>
        {data.map((card, index) => {
          return (
            <CardRecruiter
              key={card.id}
              recruiter={card}
              onClick={onClick}
              recruiterCardIndex={recruiterCardIndex}
              cardIndex={index}
            />
          );
        })}
      </Slider>
    </Styled.SliderWrapper>
  );
};

RecruitersSlider.propTypes = {
  data: PropTypes.instanceOf(Array),
  onClick: PropTypes.func,
  cardType: PropTypes.string,
  recruiterCardIndex: PropTypes.number,
};

export default RecruitersSlider;
