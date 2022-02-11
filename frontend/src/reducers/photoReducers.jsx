import {
  ALL_PHOTO_FAIL,
  ALL_PHOTO_REQUEST,
  ALL_PHOTO_SUCCESS,
  UPLOAD_PHOTO_REQUEST,
  UPLOAD_PHOTO_SUCCESS,
  UPLOAD_PHOTO_FAIL,
  UPLOAD_PHOTO_RESET,
  NEW_PHOTO_REQUEST,
  NEW_PHOTO_SUCCESS,
  NEW_PHOTO_FAIL,
  NEW_PHOTO_RESET,
  DELETE_PHOTO_REQUEST,
  DELETE_PHOTO_SUCCESS,
  DELETE_PHOTO_FAIL,
  DELETE_PHOTO_RESET,
} from "../constants/photoConstant";

export const allPhotoReducers = (state = { photos: [] }, action) => {
  switch (action.type) {
    case ALL_PHOTO_REQUEST:
      return {
        loading: true,

        photos: [],
      };
    case ALL_PHOTO_SUCCESS:
      return {
        loading: false,
        photos: action.payload,
      };
    case ALL_PHOTO_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

//upload photo
export const uploadPhotoReducers = (state = { photo: {} }, action) => {
  switch (action.type) {
    case UPLOAD_PHOTO_REQUEST:
      return {
        loading: true,
        success: false,
        photos: {},
      };
    case UPLOAD_PHOTO_SUCCESS:
      return {
        loading: false,
        success: true,
        photo: action.payload,
      };
    case UPLOAD_PHOTO_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case UPLOAD_PHOTO_RESET:
      return {
        photo: {},
      };
    default:
      return state;
  }
};

//new photo
export const newPhotoReducers = (state = { photos: {} }, action) => {
  switch (action.type) {
    case NEW_PHOTO_REQUEST:
      return {
        loading: true,
        success: false,
        photos: {},
      };
    case NEW_PHOTO_SUCCESS:
      return {
        loading: false,
        success: true,
        photos: action.payload,
      };
    case NEW_PHOTO_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case NEW_PHOTO_RESET:
      return {
        photos: {},
      };
    default:
      return state;
  }
};

//delete photo

export const deletePhotoReducers = (state = { photo: {} }, action) => {
  switch (action.type) {
    case DELETE_PHOTO_REQUEST:
      return {
        loading: true,
        success: false,
        photo: {},
      };
    case DELETE_PHOTO_SUCCESS:
      return {
        loading: false,
        success: true,
        photo: action.payload,
      };
    case DELETE_PHOTO_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case DELETE_PHOTO_RESET:
      return {
        photo: {},
      };
    default:
      return state;
  }
};
