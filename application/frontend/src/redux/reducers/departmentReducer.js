import * as actionTypes from '../constants/departmentConstant';

export const getDepartmentsReducer = (state = { departments: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_DEPARTMENTS_REQUEST:
      return {
        loading: true,
        departments: [],
      };
    case actionTypes.GET_DEPARTMENTS_SUCCESS:
      return {
        departments: action.payload,
        loading: false,
      };
    case actionTypes.GET_DEPARTMENTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
