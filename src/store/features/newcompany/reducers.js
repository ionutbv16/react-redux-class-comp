import types from "./types";

const initialState = [];

const createNewCompanyReducer = (state = [], action = {}) => {
  switch (action.type) {
    case types.CREATE_NEW_COMPANY:
      return [
        ...state,
        {
          name: action.name,
          address: action.address,
          revenue: action.revenue,
          phone: action.phone,
          uid: action.uid,
        },
      ];
    default:
      return state;
  }
};
const actionMap = {
  [types.CREATE_NEW_COMPANY]: createNewCompanyReducer,
};

export default createNewCompanyReducer;
