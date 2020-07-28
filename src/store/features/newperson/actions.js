import types from "./types";

function createNewPerson(payload) {
  return {
    type: types.CREATE_NEW_PERSON,
    name: payload.name,
    address: payload.address,
    company: payload.company,
  };
}

export default {
  createNewPerson,
};
