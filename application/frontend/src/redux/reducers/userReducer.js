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
    default:
      return state;
  }
};

export const signupReducer = (
  state = {
    _id: '',
    success: false,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.SIGNUP_REQUEST:
      return {
        loading: true,
        _id: '',
        success: false,
      };
    case actionTypes.SIGNUP_SUCCESS:
      return {
        loading: false,
        _id: action.payload.id,
        success: true,
      };
    case actionTypes.SIGNUP_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
