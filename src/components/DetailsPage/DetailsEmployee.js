import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default function DetailsEmployee({ name, address }) {
  return (
    <div class="ui card">
      <div className="company_name">{name}</div>
      <div class="content">
        <div className="header">Address</div>
        <div className="description">{address}</div>
      </div>
    </div>
  );
}

DetailsEmployee.propTypes = propTypes;
