import UserActionTypes from "./userTypes";

const initialState = {
  user: {},
  errorMessage: ""
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.LOGIN_USER_START:
    case UserActionTypes.LOGOUT_USER_START:
      return {
        ...state,
        loading: true
      };
    case UserActionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        errorMessage: ""
      };
    case UserActionTypes.LOGIN_USER_FAILURE:
    case UserActionTypes.LOGOUT_USER_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        loading: false
      };

    case UserActionTypes.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        user: {},
        loading: false,
        errorMessage: ""
      };
    default:
      return state;
  }
};

export default settingsReducer;
