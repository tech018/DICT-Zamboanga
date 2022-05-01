import axios from "axios";
import {
  ALL_CONTACT_FAIL,
  ALL_CONTACT_REQUEST,
  ALL_CONTACT_SUCCESS,
  DELETE_CONTACT_FAIL,
  DELETE_CONTACT_REQUEST,
  DELETE_CONTACT_SUCCESS,
  NEW_CONTACT_FAIL,
  NEW_CONTACT_REQUEST,
  NEW_CONTACT_SUCCESS,
  UPDATE_CONTACT_FAIL,
  UPDATE_CONTACT_REQUEST,
  UPDATE_CONTACT_SUCCESS,
} from "../constants/contactConstants";

export const contactlist = (page, size, title) => async (dispatch) => {
  try {
    dispatch({
      type: ALL_CONTACT_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      `http://localhost:5000/api/contact?page=${page}&size=${size}&title=${title}`,
      config
    );
    dispatch({
      type: ALL_CONTACT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_CONTACT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createcontact = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: NEW_CONTACT_REQUEST,
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
      `http://localhost:5000/api/contact`,
      {},
      config
    );
    dispatch({
      type: NEW_CONTACT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_CONTACT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deletecontact = (list) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_CONTACT_REQUEST,
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
      `http://localhost:5000/api/contact/multiple/delete`,
      { list },
      config
    );
    dispatch({
      type: DELETE_CONTACT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CONTACT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updatecontact =
  (
    id,
    title,
    contactInfo,
    contactPos,
    image,
    clusterReg,
    address,
    email,
    contactNo
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: UPDATE_CONTACT_REQUEST,
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
        `http://localhost:5000/api/contact/${id}`,
        {
          title,
          contactInfo,
          contactPos,
          image,
          clusterReg,
          address,
          email,
          contactNo,
        },
        config
      );
      dispatch({
        type: UPDATE_CONTACT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_CONTACT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
