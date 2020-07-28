import { connect } from "react-redux";
import CreateNewPerson from "components/CreateNewPerson";
import actions from "store/features/newPerson/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    submitPerson: (payload) => dispatch(actions.createNewPerson(payload)),
  };
};

const mapStateToProps = (state) => ({
  companies: state.companies,
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewPerson);
