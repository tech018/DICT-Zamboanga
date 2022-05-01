import React, { useEffect, useState } from "react";
import {
  Panel,
  Loader,
  RadioGroup,
  InputGroup,
  Input,
  Button,
  ButtonToolbar,
  FlexboxGrid,
  InputPicker,
} from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import { upload } from "../actions/photoActions";
import { Markup } from "interweave";
import {
  createnews,
  newslist,
  deletenews,
  updatenews,
} from "../actions/newsActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  NEW_NEWS_RESET,
  DELETE_NEWS_RESET,
  UPDATE_NEWS_RESET,
} from "../constants/newConstants";
import { UPLOAD_PHOTO_RESET } from "../constants/photoConstant";
import { ModalNewsDelete } from "./ModalActions";
import { useNavigate } from "react-router-dom";
import UpdateNews from "./UpdateNews";

const selectFields = [
  {
    label: "4 Items",
    value: "4",
  },
  {
    label: "10 Items",
    value: "10",
  },
  {
    label: "20 Items",
    value: "20",
  },
  {
    label: "100 Items",
    value: "100",
  },
  {
    label: "1000 Items",
    value: "1000",
  },
];

const NewsEvents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [idList, setIdList] = useState([]);
  const [updateDrawer, setUpdateDrawer] = useState(false);
  const [id, setId] = useState("");
  const [size, setSize] = useState(3);
  const [page, setPage] = useState(0);
  const [title, setTitle] = useState("");
  const [drawerTitle, setDrawerTitle] = useState("");
  const [src, setSrc] = useState("");

  const allNews = useSelector((state) => state.allNews);
  const { loading, error, news, totalItems, currentPage } = allNews;

  const createNews = useSelector((state) => state.createNews);
  const {
    loading: loadingCreateNews,
    error: errorCreateNews,
    news: createNewsRes,
    success: successCreateNews,
  } = createNews;

  const deleteNews = useSelector((state) => state.deleteNews);
  const {
    loading: loadingDelete,
    error: errorDelete,
    news: newsDelete,
    success: successDelete,
  } = deleteNews;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const uploadPhoto = useSelector((state) => state.uploadPhoto);
  const {
    loading: loadingUploadPhoto,
    error: errorUploadPhoto,
    photo: uploadPhotoRes,
    success: successUploadPhoto,
  } = uploadPhoto;

  const updateNews = useSelector((state) => state.updateNews);
  const {
    loading: loadingUpdateNews,
    error: errorUpdateNews,
    news: updateNewsRes,
    success: successUpdateNews,
  } = updateNews;

  useEffect(() => {
    if (userInfo) {
      dispatch(newslist(page, size, title));
    } else {
      navigate("/");
    }

    if (error) {
      toast.error(error);
    }
    if (successCreateNews) {
      toast.success(createNewsRes.message);
      dispatch({ type: NEW_NEWS_RESET });
    }
    if (errorCreateNews) {
      toast.error(errorCreateNews);
      dispatch({ type: NEW_NEWS_RESET });
    }
    if (successDelete) {
      toast.success(newsDelete.message);
      dispatch({ type: DELETE_NEWS_RESET });
    }
    if (errorDelete) {
      toast.error(errorDelete);
      dispatch({ type: DELETE_NEWS_RESET });
    }
    if (successUploadPhoto) {
      setSrc(uploadPhotoRes.image);
    }
    if (errorUploadPhoto) {
      toast.error(errorUploadPhoto);
      dispatch({ type: UPLOAD_PHOTO_RESET });
    }
    if (errorUpdateNews) {
      toast.error(errorUpdateNews);
      dispatch({ type: UPDATE_NEWS_RESET });
    }
    if (successUpdateNews) {
      toast.success(updateNewsRes.message);
      dispatch({ type: UPDATE_NEWS_RESET });
    }
  }, [
    userInfo,
    successUpdateNews,
    updateNewsRes,
    navigate,
    errorUpdateNews,
    page,
    size,
    title,
    dispatch,
    createNewsRes,
    successCreateNews,
    errorCreateNews,
    error,
    newsDelete,
    successDelete,
    errorDelete,
    successUploadPhoto,
    uploadPhotoRes,
    errorUploadPhoto,
  ]);

  const handleOpen = () => {
    if (idList.length <= 0) {
      toast.error("Please select one or more items");
    } else {
      setShowModal(true);
    }
  };

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(createnews());
  };

  const handleSelectToDelete = (id, e) => {
    if (e.target.checked) {
      let x = idList;
      x.push(id);
      setIdList(x);
    }
  };

  const handleUpdateNews = (id, newsTitle) => {
    setUpdateDrawer(true);
    setId(id);
    setDrawerTitle(newsTitle);
  };
  const handleClose = () => setShowModal(false);

  const handleNextPage = () => {
    setPage(currentPage + 1);
  };
  const handlePrevious = () => {
    setPage(currentPage === 0 ? currentPage : currentPage - 1);
  };

  return (
    <>
      <div style={{ backgroundColor: "rgba(37, 37, 37, 0.219)" }}>
        <FlexboxGrid>
          <FlexboxGrid.Item
            colspan={12}
            style={{ paddingTop: "1rem", marginLeft: "1rem" }}
          >
            <RadioGroup
              name="radioList"
              inline
              appearance="picker"
              style={{
                padding: "1rem",
                color: "black",
              }}
            >
              <Button color="blue" onClick={handleCreate} appearance="primary">
                Add News
              </Button>
              <Button
                onClick={handleOpen}
                color="red"
                style={{ marginLeft: "0.3rem", marginRight: "0.3rem" }}
                appearance="primary"
              >
                Delete
              </Button>
            </RadioGroup>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={10}>
            <InputGroup
              style={{ marginTop: "1rem" }}
              inside
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            >
              <Input placeholder="search by title" />
              <InputGroup.Button disabled>
                <SearchIcon />
              </InputGroup.Button>
            </InputGroup>
          </FlexboxGrid.Item>
        </FlexboxGrid>

        <>
          {loading ||
          loadingCreateNews ||
          loadingDelete ||
          loadingUpdateNews ? (
            <Loader content="Please wait..." />
          ) : (
            <>
              {news.map((item) => (
                <Panel
                  shaded
                  bordered
                  bodyFill
                  style={{
                    display: "inline-block",
                    width: "18rem",
                    margin: "1rem",
                    height: "25rem",
                    color: "black",
                  }}
                >
                  <img
                    src={`/zamboanga/${item.picture}`}
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      display: "block",
                      width: "15rem",
                      height: "15rem",
                    }}
                    alt="sampleimage"
                  />
                  <Panel style={{ textAlign: "center" }} header={item.title}>
                    <Markup className="text-black" content={item.content} />
                  </Panel>

                  <div style={{ padding: "1rem" }}>
                    <ButtonToolbar>
                      <input
                        type="checkbox"
                        onChange={(e) => handleSelectToDelete(item.id, e)}
                        style={{ cursor: "pointer" }}
                      />

                      <svg
                        onClick={() => handleUpdateNews(item.id, item.title)}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        style={{
                          width: "1rem",
                          cursor: "pointer",
                          paddingTop: "0.1rem",
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </ButtonToolbar>
                  </div>
                </Panel>
              ))}
            </>
          )}
        </>
        <FlexboxGrid.Item colspan={24} style={{ paddingBottom: "1rem" }}>
          {news.length > 0 && (
            <>
              <span className="text-black" style={{ padding: "1rem" }}>
                Total News : {totalItems}
              </span>
              <Button
                appearance="primary"
                style={{ marginRight: "1rem" }}
                onClick={handlePrevious}
              >
                Prev
              </Button>
              <Button appearance="primary" onClick={handleNextPage}>
                Next
              </Button>
              <InputPicker
                style={{ marginLeft: "1rem", width: "10rem" }}
                data={selectFields}
                placeholder={`${size} items`}
                onChange={(file) => setSize(file)}
              />
            </>
          )}
        </FlexboxGrid.Item>
      </div>
      <ModalNewsDelete
        handleClose={handleClose}
        showModal={showModal}
        deletenews={deletenews}
        idList={idList}
      />
      <UpdateNews
        id={id}
        setUpdateDrawer={setUpdateDrawer}
        updateDrawer={updateDrawer}
        drawerTitle={drawerTitle}
        upload={upload}
        dispatch={dispatch}
        loadingUploadPhoto={loadingUploadPhoto}
        src={src}
        updatenews={updatenews}
      />
    </>
  );
};
export default NewsEvents;
