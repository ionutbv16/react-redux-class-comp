import uuid from "react-uuid";
import types from "./types";

function createNewCompany(payload) {
  return {
    type: types.CREATE_NEW_COMPANY,
    uid: uuid(),
    name: payload.name,
    address: payload.address,
    revenue: payload.revenue,
    phone: payload.phone,
  };
}

export default {
  createNewCompany,
};
