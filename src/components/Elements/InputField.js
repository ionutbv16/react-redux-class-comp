import React from "react";

import PropTypes from "prop-types";

const propTypes = {
  name: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};

export default function InputField({
  name,
  labelName,
  value,
  handleChange,
  error,
}) {
  return (
    <div className="field">
      <label>{labelName}</label>
      <input
        type="text"
        onChange={handleChange}
        className="ui input"
        value={value}
        name={name}
      />
      <span className="form_error_row">{error}</span>
    </div>
  );
}
InputField.propTypes = propTypes;
