import React, { useEffect, useState } from "react";
import {
  Panel,
  Loader,
  RadioGroup,
  Radio,
  InputGroup,
  Input,
  Button,
  ButtonToolbar,
  FlexboxGrid,
} from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import { createnews, newslist, deletenews } from "../actions/newsActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { NEW_NEWS_RESET, DELETE_NEWS_RESET } from "../constants/newConstants";
import { ModalNewsDelete } from "./ModalActions";
import { useNavigate } from "react-router-dom";

const NewsEvents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [idList, setIdList] = useState([]);
  const [caption, setCaption] = useState("");
  const [updateModal, setUpdateModal] = useState(false);
  const [id, setId] = useState("");
  const [size, setSize] = useState(3);
  const [page, setPage] = useState(0);
  const [title, setTitle] = useState("");

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
    }
  }, [
    userInfo,
    navigate,
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

  const handleUpdatePhoto = (id, src, caption) => {
    setUpdateModal(true);
    setId(id);
  };
  const handleClose = () => setShowModal(false);

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
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            >
              <Input placeholder="search by title" />
              <InputGroup.Button disabled>
                <SearchIcon />
              </InputGroup.Button>
            </InputGroup>
          </FlexboxGrid.Item>
        </FlexboxGrid>

        <>
          {loading || loadingCreateNews || loadingDelete ? (
            <Loader content="Loading..." />
          ) : (
            <>
              {news.map((item) => (
                <Panel
                  shaded
                  bordered
                  bodyFill
                  style={{
                    display: "inline-block",
                    width: "30%",
                    margin: "1rem",
                    color: "black",
                  }}
                >
                  <img
                    src={`/zamboanga/${item.picture}`}
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      display: "block",
                    }}
                    alt="sampleimage"
                  />
                  <Panel
                    style={{ textAlign: "center" }}
                    header={item.tile}
                  ></Panel>
                  <Panel
                    style={{ textAlign: "center" }}
                    header={item.content}
                  ></Panel>
                  <div style={{ padding: "1rem" }}>
                    <ButtonToolbar>
                      <input
                        type="checkbox"
                        onChange={(e) => handleSelectToDelete(item.id, e)}
                        style={{ cursor: "pointer" }}
                      />

                      <svg
                        // onClick={() =>
                        //   handleUpdatePhoto(item.id, item.src, item.caption)
                        // }
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
      </div>
      <ModalNewsDelete
        handleClose={handleClose}
        showModal={showModal}
        deletenews={deletenews}
        idList={idList}
      />
    </>
  );
};
export default NewsEvents;
