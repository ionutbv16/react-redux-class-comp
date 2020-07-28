import { combineReducers } from "redux";
import clickCounter from "./clickCounter/reducers";
import companies from "./newcompany/reducers";
import persons from "./newperson/reducers";

const rootReducer = combineReducers({
  clickCounter,
  companies,
  persons,
});
export default rootReducer;
