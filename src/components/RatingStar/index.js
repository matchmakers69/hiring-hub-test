import React from "react";
import PropTypes from "prop-types";
import { RatingButton } from "./RatingStar.styled";
import RatingStarIcon from "../RatingStarIcon";

const COLORS = {
  white: "#FFF",
  grey: "#505050",
};

const RatingStar = ({ index = 0, rating = 0 }) => {
  const fillStarsWithColor = (index) => {
    if (rating > index) {
      return COLORS.white;
    } else {
      return COLORS.grey;
    }
  };
  return (
    <RatingButton>
      <RatingStarIcon fill={fillStarsWithColor(index)} />
    </RatingButton>
  );
};

RatingStar.propTypes = {
  index: PropTypes.number,
  rating: PropTypes.number,
};

export default RatingStar;
