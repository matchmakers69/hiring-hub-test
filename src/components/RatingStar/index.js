import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { RatingButton } from "./RatingStar.styled";
import RatingStarIcon from "../RatingStarIcon";

const COLORS = {
  white: "#FFF",
  grey: "#505050",
};

const RatingStar = ({ index, rating }) => {
  const fillColor = useMemo(() => {
    if (rating > index) {
      return COLORS.white;
    } else {
      return COLORS.grey;
    }
  }, [index, rating]);
  return (
    <RatingButton>
      <RatingStarIcon fill={fillColor} />
    </RatingButton>
  );
};

RatingStar.propTypes = {};

export default RatingStar;
