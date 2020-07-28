import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Company from "./Company";
import "./styles.less";

const propTypes = {
  submitCompany: PropTypes.func.isRequired,
};

class CompaniesList extends Component {
  constructor(props) {
    super(props);
    this.redirectToDetails = this.redirectToDetails.bind(this);
  }

  redirectToDetails(url) {
    this.props.history.push("/details/" + url);
  }

  render() {
    const { companies } = this.props;

    return (
      <div class="ui card">
        <div className="companies">Companies</div>
        <div class="content">
          {companies.length
            ? companies.map((element) => (
                <Company
                  name={element.name}
                  address={element.address}
                  revenue={element.revenue}
                  phone={element.phone}
                  uid={element.uid}
                  redirect={this.redirectToDetails}
                />
              ))
            : "There are currently no companies to review"}
        </div>
      </div>
    );
  }
}

CompaniesList.propTypes = propTypes;
export default withRouter(CompaniesList);
