import * as actionTypes from '../constants/userConstants';
import axios from 'axios';

export const login = (loginData) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.LOGIN_REQUEST });

    const { data } = await axios.post('/api/users/login', loginData);

    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem(
      'login',
      JSON.stringify({ _id: data._id, loggedIn: true })
    );
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.LOGOUT_SUCCESS,
    });
    localStorage.setItem('login', JSON.stringify({ _id: '', loggedIn: false }));
  } catch (error) {
    dispatch({
      type: actionTypes.LOGOUT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signup = (signupData) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.LOGIN_REQUEST });

    const { data } = await axios.post('/api/users/signup', signupData);

    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
