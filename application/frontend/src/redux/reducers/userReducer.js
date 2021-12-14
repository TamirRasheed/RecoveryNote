import * as actionTypes from '../constants/userConstants';

export const loginReducer = (
  state = {
    _id: '',
    loggedIn: false,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        loading: true,
        _id: '',
        loggedIn: false,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        _id: action.payload._id,
        loggedIn: true,
        loading: false,
      };
    case actionTypes.LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.LOGOUT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        loading: false,
        loggedIn: false,
      };
    default:
      return state;
  }
};
