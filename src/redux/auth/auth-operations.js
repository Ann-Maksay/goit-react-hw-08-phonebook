import axios from "axios";

import {
  registerActions,
  loginActions,
  logoutActions,
  getCurrentUserActions,
} from "./auth-actions";

axios.defaults.baseURL = "http://connections-api.herokuapp.com";

export const register = (credentials) => async (dispatch) => {
  dispatch(registerActions.registerRequest());

  try {
    const response = await axios.post("/users/signup", credentials);

    token.set(response.data.token);
    dispatch(registerActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(registerActions.registerError(error.message));
  }
};

export const logIn = (credentials) => async (dispatch) => {
  dispatch(loginActions.loginRequest());

  try {
    const response = await axios.post("/users/login", credentials);

    token.set(response.data.token);
    dispatch(loginActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(loginActions.loginError(error.message));
  }
};

export const logOut = () => async (dispatch) => {
  dispatch(logoutActions.logoutRequest());

  try {
    await axios.post("/users/logout");

    token.unset();
    dispatch(logoutActions.logoutSuccess());
  } catch (error) {
    dispatch(logoutActions.logoutError(error.message));
  }
};
