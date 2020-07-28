import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  value: PropTypes.string.isRequired,
};

export default function GenButton({ value }) {
  return <input type="submit" className="ui button" value={value} />;
}

GenButton.propTypes = propTypes;
