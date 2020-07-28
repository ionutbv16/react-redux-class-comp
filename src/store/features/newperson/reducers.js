import types from "./types";

const initialState = [];

const createNewPersonReducer = (state = [], action = {}) => {
  switch (action.type) {
    case types.CREATE_NEW_PERSON:
      return [
        ...state,
        {
          name: action.name,
          address: action.address,
          company: action.company,
        },
      ];
    default:
      return state;
  }
};
const actionMap = {
  [types.CREATE_NEW_PERSON]: createNewPersonReducer,
};

export default createNewPersonReducer;
