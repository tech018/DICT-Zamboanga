import {
  ALL_CONTACT_FAIL,
  ALL_CONTACT_REQUEST,
  ALL_CONTACT_SUCCESS,
  NEW_CONTACT_FAIL,
  NEW_CONTACT_REQUEST,
  NEW_CONTACT_RESET,
  NEW_CONTACT_SUCCESS,
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

export const allContactReducers = (
  state = { contacts: [], countcontact: [] },
  action
) => {
  switch (action.type) {
    case ALL_CONTACT_REQUEST:
      return {
        loading: true,
        countcontact: [],
        contacts: [],
      };
    case ALL_CONTACT_SUCCESS:
      return {
        loading: false,
        contacts: action.payload.limitcontact,
        countcontact: action.payload.allcontacts,
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
