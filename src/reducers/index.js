import { combineReducers } from "redux";

const initialState = {
  data: require("../../pedido.json")
};

const pedido = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({ pedido });
