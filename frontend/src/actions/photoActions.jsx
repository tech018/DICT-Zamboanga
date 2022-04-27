import axios from "axios";
import {
  ALL_PHOTO_FAIL,
  ALL_PHOTO_REQUEST,
  ALL_PHOTO_SUCCESS,
  DELETE_PHOTO_FAIL,
  DELETE_PHOTO_REQUEST,
  DELETE_PHOTO_SUCCESS,
  NEW_PHOTO_FAIL,
  NEW_PHOTO_REQUEST,
  NEW_PHOTO_SUCCESS,
  UPDATE_PHOTO_FAIL,
  UPDATE_PHOTO_REQUEST,
  UPDATE_PHOTO_SUCCESS,
  UPLOAD_PHOTO_FAIL,
  UPLOAD_PHOTO_REQUEST,
  UPLOAD_PHOTO_SUCCESS,
} from "../constants/photoConstant";

export const photolist =
  (pageNumber, category, caption) => async (dispatch) => {
    try {
      dispatch({
        type: ALL_PHOTO_REQUEST,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(
        `http://localhost:5000/api/photo?pageNumber=${pageNumber}&category=${category}&caption=${caption}`,
        config
      );
      dispatch({
        type: ALL_PHOTO_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PHOTO_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const upload = (formData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UPLOAD_PHOTO_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${userInfo.accessToken}`,
      },
    };
    const { data } = await axios.post(
      `http://localhost:5000/api/photo/uploadphoto`,
      formData,
      config
    );
    dispatch({
      type: UPLOAD_PHOTO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPLOAD_PHOTO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createphoto = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: NEW_PHOTO_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.accessToken}`,
      },
    };
    const { data } = await axios.post(
      `http://localhost:5000/api/photo/new/photo`,
      {},
      config
    );
    dispatch({
      type: NEW_PHOTO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PHOTO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//delete photo
export const deletephoto = (list) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_PHOTO_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.accessToken}`,
      },
    };
    const { data } = await axios.post(
      `http://localhost:5000/api/photo//multiple/delete`,
      { list },
      config
    );
    dispatch({
      type: DELETE_PHOTO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PHOTO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updatephoto =
  (id, src, caption, category) => async (dispatch, getState) => {
    try {
      dispatch({
        type: UPDATE_PHOTO_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.accessToken}`,
        },
      };
      const { data } = await axios.put(
        `http://localhost:5000/api/photo/${id}`,
        { src, caption, category },
        config
      );
      dispatch({
        type: UPDATE_PHOTO_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_PHOTO_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
