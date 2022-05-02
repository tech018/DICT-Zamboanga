import {
  USER_CREATE_FAIL,
  USER_CREATE_REQUEST,
  USER_CREATE_RESET,
  USER_CREATE_SUCCESS,
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_RESET,
  USER_DELETE_SUCCESS,
  USER_GET_ALL_FAIL,
  USER_GET_ALL_REQUEST,
  USER_GET_ALL_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_RESET,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_RESET,
  USER_UPDATE_SUCCESS,
} from "../constants/userConstant";

export const loginReducers = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_LOGOUT:
      return {};
    case USER_LOGIN_RESET: {
      return {
        state: {},
      };
    }
    default:
      return state;
  }
};

export const createUserReducers = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_CREATE_REQUEST:
      return {
        loading: true,
        success: false,
        user: {},
      };
    case USER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        user: action.payload,
      };
    case USER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_CREATE_RESET:
      return {
        user: {},
      };
    default:
      return state;
  }
};

export const allUsersReducers = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_GET_ALL_REQUEST:
      return {
        loading: true,
        totalItems: {},
        currentPage: {},
        users: [],
      };
    case USER_GET_ALL_SUCCESS:
      return {
        loading: false,
        users: action.payload.users,
        currentPage: action.payload.currentPage,
        totalItems: action.payload.totalItems,
      };
    case USER_GET_ALL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const deleteUsersReducers = (state = { users: {} }, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return {
        loading: true,
        success: false,
        users: {},
      };
    case USER_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
        users: action.payload,
      };
    case USER_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_DELETE_RESET:
      return {
        users: {},
      };
    default:
      return state;
  }
};

export const updateUsersReducers = (state = { users: {} }, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return {
        loading: true,
        success: false,
        users: {},
      };
    case USER_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        users: action.payload,
      };
    case USER_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_UPDATE_RESET:
      return {
        users: {},
      };
    default:
      return state;
  }
};
