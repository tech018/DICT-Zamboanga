import {
  ALL_CONTACT_FAIL,
  ALL_CONTACT_REQUEST,
  ALL_CONTACT_SUCCESS,
  DELETE_CONTACT_FAIL,
  DELETE_CONTACT_REQUEST,
  DELETE_CONTACT_RESET,
  DELETE_CONTACT_SUCCESS,
  NEW_CONTACT_FAIL,
  NEW_CONTACT_REQUEST,
  NEW_CONTACT_RESET,
  NEW_CONTACT_SUCCESS,
  UPDATE_CONTACT_FAIL,
  UPDATE_CONTACT_REQUEST,
  UPDATE_CONTACT_RESET,
  UPDATE_CONTACT_SUCCESS,
} from "../constants/contactConstants";

export const newContactReducers = (state = { contact: {} }, action) => {
  switch (action.type) {
    case NEW_CONTACT_REQUEST:
      return {
        loading: true,
        success: false,
        contact: {},
      };
    case NEW_CONTACT_SUCCESS:
      return {
        loading: false,
        success: true,
        contact: action.payload,
      };
    case NEW_CONTACT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case NEW_CONTACT_RESET:
      return {
        contact: {},
      };
    default:
      return state;
  }
};

export const allContactReducers = (state = { contacts: [] }, action) => {
  switch (action.type) {
    case ALL_CONTACT_REQUEST:
      return {
        totalItems: {},
        currentPage: {},
        contacts: [],
      };
    case ALL_CONTACT_SUCCESS:
      return {
        loading: false,
        contacts: action.payload.contacts,
        currentPage: action.payload.currentPage,
        totalItems: action.payload.totalItems,
      };
    case ALL_CONTACT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const deleteContactReducers = (state = { contact: {} }, action) => {
  switch (action.type) {
    case DELETE_CONTACT_REQUEST:
      return {
        loading: true,
        success: false,
        contact: {},
      };
    case DELETE_CONTACT_SUCCESS:
      return {
        loading: false,
        success: true,
        contact: action.payload,
      };
    case DELETE_CONTACT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case DELETE_CONTACT_RESET:
      return {
        contact: {},
      };
    default:
      return state;
  }
};

export const updateContactReducers = (state = { contact: {} }, action) => {
  switch (action.type) {
    case UPDATE_CONTACT_REQUEST:
      return {
        loading: true,
        success: false,
        contact: {},
      };
    case UPDATE_CONTACT_SUCCESS:
      return {
        loading: false,
        success: true,
        contact: action.payload,
      };
    case UPDATE_CONTACT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case UPDATE_CONTACT_RESET:
      return {
        contact: {},
      };
    default:
      return state;
  }
};
