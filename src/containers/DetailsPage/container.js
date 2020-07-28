import { connect } from "react-redux";
import DetailsPage from "components/DetailsPage";

const mapStateToProps = (state) => ({
  companies: state.companies,
  persons: state.persons,
});

export default connect(mapStateToProps)(DetailsPage);
