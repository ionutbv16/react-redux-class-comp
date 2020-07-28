import React, { Component } from "react";
import PropTypes from "prop-types";
import CreateNewCompany from "containers/CreateNewCompany";
import CreateNewPerson from "containers/CreateNewPerson";
import CompaniesList from "containers/CompaniesList";
import "./styles.less";

const propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  resetNumberToZero: PropTypes.func.isRequired,
};

class HomePage extends Component {
  render() {
    const { increment, decrement, resetNumberToZero } = this.props;
    return (
      <React.Fragment>
        <div className="home__wrapper">
          <div className="home__center">
            <div className="home__columns">
              <CompaniesList />
            </div>
            <div className="home__columns">
              <CreateNewCompany />
              <CreateNewPerson />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

HomePage.propTypes = propTypes;
export default HomePage;
