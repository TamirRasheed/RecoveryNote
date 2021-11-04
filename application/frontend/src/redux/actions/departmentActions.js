import * as actionTypes from '../constants/departmentConstant';
import axios from 'axios';

export const getDepartments = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_DEPARTMENTS_REQUEST });

    const { data } = await axios.get('/api/departments');

    dispatch({
      type: actionTypes.GET_DEPARTMENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_DEPARTMENTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
