import React from "react";
import PropTypes from "prop-types";
import { RatingStarBox } from "./RatingStarIcon.styled";
import { ReactComponent as Star } from "../../assets/icons/star.svg";

const COLORS_MAPPER = {
  "#FFF": "active-star",
  "#505050": "blank-star",
};

const RatingStarIcon = ({ fill = "none" }) => {
  return (
    <>
      <RatingStarBox className={COLORS_MAPPER[fill]}>
        <Star style={{ fill }} />
      </RatingStarBox>
    </>
  );
};

RatingStarIcon.propTypes = {
  fill: PropTypes.string,
  activeClass: PropTypes.string,
};

export default RatingStarIcon;
