import React, { Component } from "react";
import PropTypes from "prop-types";
import { InputField, GenButton } from "../Elements";
import "./styles.less";

const propTypes = {
  submitCompany: PropTypes.func.isRequired,
};

class CreateNewCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      fields: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleValidation() {
    const { fields } = this.state;
    const errors = {};
    let formIsValid = true;

    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Name cannot be empty";
    }

    if (!fields["address"]) {
      formIsValid = false;
      errors["address"] = "Address cannot be empty";
    }

    if (!fields["revenue"]) {
      formIsValid = false;
      errors["revenue"] = "Revenue cannot be empty";
    }

    if (!fields["phone"]) {
      formIsValid = false;
      errors["phone"] = "Phone cannot be empty";
    }

    this.setState({ errors });
    return formIsValid;
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  }

  resetForm() {
    this.setState({
      fields: { name: "", address: "", revenue: "", phone: "" },
    });
  }

  submitForm(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      this.props.submitCompany(this.state.fields);
      this.resetForm();
    }
  }

  render() {
    const { submitCompany } = this.props;

    return (
      <div class="ui card">
        <div className="companies">Create New Company</div>
        <div class="content">
          <form onSubmit={this.submitForm} className="ui form">
            <InputField
              name="name"
              labelName="Name"
              value={this.state.fields.name}
              handleChange={this.handleChange}
              error={this.state.errors["name"]}
            />
            <InputField
              name="address"
              labelName="Address"
              value={this.state.fields.address}
              handleChange={this.handleChange}
              error={this.state.errors["address"]}
            />
            <InputField
              name="revenue"
              labelName="Revenue"
              value={this.state.fields.revenue}
              handleChange={this.handleChange}
              error={this.state.errors["revenue"]}
            />
            <InputField
              name="phone"
              labelName="Phone"
              value={this.state.fields.phone}
              handleChange={this.handleChange}
              error={this.state.errors["phone"]}
            />

            <div>
              <GenButton value="Save" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

CreateNewCompany.propTypes = propTypes;
export default CreateNewCompany;
