import { combineReducers } from "redux";

const initialState = {
  data: {},
  isError: false,
  isLoading: false
};

const pedido = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({ pedido });
