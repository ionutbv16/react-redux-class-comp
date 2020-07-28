import React, { Component } from "react";
import PropTypes from "prop-types";
import { Dropdown } from "semantic-ui-react";
import InputField from "../Elements/InputField";
import "./styles.less";

const propTypes = {
  submitPerson: PropTypes.func.isRequired,
};

class CreateNewPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      fields: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChangeDDL = this.handleChangeDDL.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
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

    if (!fields["company"]) {
      formIsValid = false;
      errors["company"] = "Please add at least 1 company ";
    }

    this.setState({ errors });
    return formIsValid;
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  }

  handleChangeDDL(input) {
    let fields = this.state.fields;
    fields["company"] = input;
    this.setState({ fields });
  }

  resetForm() {
    this.setState({
      fields: { name: "", address: "", company: "" },
    });
  }

  submitForm(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      this.props.submitPerson(this.state.fields);
      this.resetForm();
    }
  }

  render() {
    const { companies } = this.props;
    return (
      <div class="ui card">
        <div className="companies">Create New Person</div>
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

            <div className="field">
              {companies.length > 0 && (
                <Dropdown
                  onChange={(e, d) => this.handleChangeDDL(d.value)}
                  placeholder="Select Employeer"
                  fluid
                  selection
                  value={this.state.fields.company}
                  options={companies.map((element) => ({
                    key: element.name,
                    text: element.name,
                    value: element.uid,
                  }))}
                />
              )}

              <span className="form_error_row">
                {this.state.errors["company"]}
              </span>
            </div>
            <div>
              <input type="submit" className="ui button" value="Save" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

CreateNewPerson.propTypes = propTypes;
export default CreateNewPerson;
