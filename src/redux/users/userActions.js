import axios from "axios";
import UserActionTypes from "./userTypes";

export const loginUserSuccess = user => ({
  type: UserActionTypes.LOGIN_USER_SUCCESS,
  payload: user
});

export const loginUserFailure = errorMessage => ({
  type: UserActionTypes.LOGIN_USER_FAILURE,
  payload: errorMessage
});

export const loginUserStart = () => ({
  type: UserActionTypes.LOGIN_USER_START
});

export const loginUser = loginObject => {
  loginUserStart();
  return async dispatch => {
    try {
      const response = await axios.post("/api/users/login", loginObject);
      dispatch(loginUserSuccess(response.data));
    } catch (error) {
      dispatch(loginUserFailure(error.response.data.err));
    }
    return "done";
  };
};

export const logoutUserStart = () => ({
  type: UserActionTypes.LOGOUT_USER_START
});

export const logoutUserFailure = () => ({
  type: UserActionTypes.LOGOUT_USER_FAILURE
});

export const logoutUserSuccess = () => ({
  type: UserActionTypes.LOGOUT_USER_SUCCESS
});

export const logout = () => {
  logoutUserStart();
  return async dispatch => {
    try {
      const response = await axios.post("/api/users/logout");
      dispatch(logoutUserSuccess(response));
    } catch (error) {
      dispatch(logoutUserFailure(error.response.data.err));
    }
  };
};
