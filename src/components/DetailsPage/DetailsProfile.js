import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  revenue: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  numEmployees: PropTypes.number.isRequired,
};

export default function DetailsProfile({
  name,
  address,
  revenue,
  phone,
  numEmployees,
}) {
  return (
    <div class="ui card">
      <div className="company_name">{name}</div>
      <div class="content">
        <div className="header">Address</div>
        <div className="description">{address}</div>
        <div className="header">Revenue</div>
        <div className="description">{revenue}</div>
        <div className="header">Phone</div>
        <div className="description">{phone}</div>
        <div className="header">Total Employees</div>
        <div className="description">{numEmployees}</div>
      </div>
    </div>
  );
}

DetailsProfile.propTypes = propTypes;
