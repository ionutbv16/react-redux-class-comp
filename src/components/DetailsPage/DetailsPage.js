import React, { Component } from "react";
import PropTypes from "prop-types";
import DetailsProfile from "./DetailsProfile";
import DetailsEmployees from "./DetailsEmployees";
import "./styles.less";

const propTypes = {
  companies: PropTypes.array.isRequired,
  persons: PropTypes.array.isRequired,
};

class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
    this.filterData = this.filterData.bind(this);
  }

  filterData(companies, persons, param) {
    const company = companies.filter((element) => element.name === param);
    const personsCompany = persons.filter(
      (element) => element.company === param
    );
    return { company, personsCompany };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.companies !== prevState.companies) {
      return {
        companies: nextProps.companies.filter(
          (element) => element.uid === nextProps.match.params.uid
        ),
        persons: nextProps.persons.filter(
          (element) => element.company === nextProps.match.params.uid
        ),
      };
    } else return null;
  }

  render() {
    const { companies, persons } = this.state;
    return (
      <div className="details__wrapper">
        <div>
          {companies.length > 0 && (
            <DetailsProfile
              name={companies[0].name}
              address={companies[0].address}
              revenue={companies[0].revenue}
              phone={companies[0].phone}
              numEmployees={persons.length}
            />
          )}
          {persons.length > 0 && <DetailsEmployees employees={persons} />}
        </div>
      </div>
    );
  }
}

DetailsPage.propTypes = propTypes;
export default DetailsPage;
