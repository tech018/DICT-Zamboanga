import axios from "axios";
import {
  ALL_NEWS_FAIL,
  ALL_NEWS_REQUEST,
  ALL_NEWS_SUCCESS,
  NEW_NEWS_FAIL,
  NEW_NEWS_REQUEST,
  NEW_NEWS_SUCCESS,
  SINGLE_NEWS_REQUEST,
  SINGLE_NEWS_SUCCESS,
  SINGLE_NEWS_FAIL,
  DELETE_NEWS_REQUEST,
  DELETE_NEWS_SUCCESS,
  DELETE_NEWS_FAIL,
} from "../constants/newConstants";

export const newslist = (page, size, title) => async (dispatch) => {
  try {
    dispatch({
      type: ALL_NEWS_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      `http://localhost:5000/api/news?page=${page}&size=${size}&title=${title}`,
      config
    );
    dispatch({
      type: ALL_NEWS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_NEWS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createnews = (news) => async (dispatch, getState) => {
  try {
    dispatch({
      type: NEW_NEWS_REQUEST,
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
      `http://localhost:5000/api/news`,
      { news },
      config
    );
    dispatch({
      type: NEW_NEWS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_NEWS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//get details
export const single = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SINGLE_NEWS_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      `http://localhost:5000/api/news/single/${id}`,
      config
    );
    dispatch({
      type: SINGLE_NEWS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SINGLE_NEWS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
//delete news
export const deletenews = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_NEWS_REQUEST,
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
    const { data } = await axios.delete(
      `http://localhost:5000/api/news/single/${id}`,
      config
    );
    dispatch({
      type: DELETE_NEWS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_NEWS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
