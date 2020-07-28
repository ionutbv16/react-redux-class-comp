import React from "react";
import DetailsEmployee from "./DetailsEmployee";
import PropTypes from "prop-types";

const propTypes = {
  employees: PropTypes.array.isRequired,
};

export default function DetailsEmployees({ employees }) {
  return (
    <div class="ui card">
      <div className="company_name">Employees</div>
      <div class="content">
        {employees.length
          ? employees.map((element) => (
              <DetailsEmployee name={element.name} address={element.address} />
            ))
          : "There are currently no employees"}
      </div>
    </div>
  );
}

DetailsEmployee.propTypes = propTypes;
