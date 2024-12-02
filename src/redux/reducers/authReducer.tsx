import types from "../types";

const initialState = {
    user: null,
    error: null,
  };
  
  const authReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
      case types.LOGIN_SUCCESS:
        return {
          ...state,
          user: action.payload,
          error: null,
        };
      case types.LOGIN_FAILURE:
        return {
          ...state,
          error: action.payload,
        };
      case types.LOGOUT:
        return initialState;
      default:
        return state;
    }
  };
  
  export default authReducer;
  