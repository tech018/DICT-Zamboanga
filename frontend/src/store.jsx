import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//photos
import {
  allPhotoReducers,
  uploadPhotoReducers,
  newPhotoReducers,
  deletePhotoReducers,
  updatePhotoReducers,
} from "./reducers/photoReducers";
//users
import { loginReducers } from "./reducers/userReducers";
//contact
import {
  newContactReducers,
  allContactReducers,
} from "./reducers/contactReducers";

//news
import {
  createNewsReducers,
  allNewsReducers,
  singleNewsReducers,
  deleteNewsReducers,
  updateNewsReducers,
} from "./reducers/newsReducers";
const reducer = combineReducers({
  //photo
  allPhoto: allPhotoReducers,
  uploadPhoto: uploadPhotoReducers,
  newPhoto: newPhotoReducers,
  deletePhoto: deletePhotoReducers,
  updatePhoto: updatePhotoReducers,
  //users
  userLogin: loginReducers,
  //contact
  newContact: newContactReducers,
  allContact: allContactReducers,

  //news
  createNews: createNewsReducers,
  allNews: allNewsReducers,
  singleNews: singleNewsReducers,
  deleteNews: deleteNewsReducers,
  updateNews: updateNewsReducers,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
