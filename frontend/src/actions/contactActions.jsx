import axios from "axios";
import {
  ALL_CONTACT_FAIL,
  ALL_CONTACT_REQUEST,
  ALL_CONTACT_SUCCESS,
  NEW_CONTACT_FAIL,
  NEW_CONTACT_REQUEST,
  NEW_CONTACT_SUCCESS,
} from "../constants/contactConstants";

export const contactlist =
  (pageNumber, title = "") =>
  async (dispatch) => {
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
        `http://localhost:5000/api/contact?pageNumber=${pageNumber}&title=${title}`,
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

export const createcontact = (contact) => async (dispatch, getState) => {
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
      { contact },
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
