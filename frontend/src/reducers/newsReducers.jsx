import {
  ALL_NEWS_FAIL,
  ALL_NEWS_REQUEST,
  ALL_NEWS_SUCCESS,
  DELETE_NEWS_FAIL,
  DELETE_NEWS_REQUEST,
  DELETE_NEWS_RESET,
  DELETE_NEWS_SUCCESS,
  NEW_NEWS_FAIL,
  NEW_NEWS_REQUEST,
  NEW_NEWS_RESET,
  NEW_NEWS_SUCCESS,
  SINGLE_NEWS_FAIL,
  SINGLE_NEWS_REQUEST,
  SINGLE_NEWS_RESET,
  SINGLE_NEWS_SUCCESS,
} from "../constants/newConstants";

export const createNewsReducers = (state = { news: {} }, action) => {
  switch (action.type) {
    case NEW_NEWS_REQUEST:
      return {
        loading: true,
        success: false,
        news: {},
      };
    case NEW_NEWS_SUCCESS:
      return {
        loading: false,
        success: true,
        news: action.payload,
      };
    case NEW_NEWS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case NEW_NEWS_RESET:
      return {
        news: {},
      };
    default:
      return state;
  }
};

export const allNewsReducers = (state = { news: [] }, action) => {
  switch (action.type) {
    case ALL_NEWS_REQUEST:
      return {
        loading: true,
        news: [],
      };
    case ALL_NEWS_SUCCESS:
      return {
        loading: false,
        news: action.payload.news,
        currentPage: action.payload.currentPage,
        totalItems: action.payload.totalItems,
      };
    case ALL_NEWS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

//SINGLE NEWS
export const singleNewsReducers = (state = { singlenews: {} }, action) => {
  switch (action.type) {
    case SINGLE_NEWS_REQUEST:
      return {
        loading: true,
        singlenews: {},
      };
    case SINGLE_NEWS_SUCCESS:
      return {
        loading: false,
        singlenews: action.payload,
      };
    case SINGLE_NEWS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case SINGLE_NEWS_RESET:
      return {
        singlenews: {},
      };
    default:
      return state;
  }
};

export const deleteNewsReducers = (state = { news: {} }, action) => {
  switch (action.type) {
    case DELETE_NEWS_REQUEST:
      return {
        loading: true,
        success: false,
        news: {},
      };
    case DELETE_NEWS_SUCCESS:
      return {
        loading: false,
        success: true,
        news: action.payload,
      };
    case DELETE_NEWS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case DELETE_NEWS_RESET:
      return {
        news: {},
      };
    default:
      return state;
  }
};
