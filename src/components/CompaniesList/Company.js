import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  revenue: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  redirect: PropTypes.func.isRequired,
};

export default function Company({
  name,
  address,
  revenue,
  phone,
  uid,
  redirect,
}) {
  return (
    <div class="ui card">
      <div className="company_name">
        <a onClick={() => redirect(uid)}>{name} (click for details)</a>
      </div>
      <div class="content">
        <div className="header">Address</div>
        <div className="description">{address}</div>
        <div className="header">Revenue</div>
        <div className="description">{revenue}</div>
        <div className="header">Phone</div>
        <div className="description">{phone}</div>
      </div>
    </div>
  );
}

Company.propTypes = propTypes;
