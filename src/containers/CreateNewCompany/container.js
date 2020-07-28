import { connect } from "react-redux";
import CreateNewCompany from "components/CreateNewCompany";
import actions from "store/features/newcompany/actions";

const mapDispatchToProps = (dispatch) => ({
  submitCompany: (payload) => dispatch(actions.createNewCompany(payload)),
});

const mapStateToProps = (state) => ({
  companies: state.companies,
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewCompany);
