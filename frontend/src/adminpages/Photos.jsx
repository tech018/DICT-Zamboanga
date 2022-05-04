import React, { useEffect, useState } from "react";
import EmptyRow from "../pages/components/EmptyRow";
import NoResult from "../pages/components/NoResult";
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
  InputPicker,
} from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  createphoto,
  photolist,
  deletephoto,
  updatephoto,
  upload,
} from "../actions/photoActions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  NEW_PHOTO_RESET,
  DELETE_PHOTO_RESET,
  UPDATE_PHOTO_RESET,
} from "../constants/photoConstant";
import { ModalActions } from "../adminpages/ModalActions";
import ModalUpdatePhoto from "./ModalUpdatePhoto";

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

const Photos = () => {
  const [category, setCategory] = useState("");
  const [size, setSize] = useState(4);
  const [caption, setCaption] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [page, setPage] = useState(0);

  const handleOpen = () => {
    if (idList.length <= 0) {
      toast.error("Please select one or more items");
    } else {
      setShowModal(true);
    }
  };

  const handleClose = () => setShowModal(false);
  const handleUpdateClose = () => {
    setUpdateModal(false);
    setIdList([]);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const allPhoto = useSelector((state) => state.allPhoto);
  const { loading, error, photos, totalItems, currentPage } = allPhoto;
  const [idList, setIdList] = useState([]);

  const [id, setId] = useState("");

  const deletePhoto = useSelector((state) => state.deletePhoto);
  const {
    loading: loadingDelete,
    error: errorDelete,
    photo: photoDelete,
    success: successDelete,
  } = deletePhoto;

  const newPhoto = useSelector((state) => state.newPhoto);
  const {
    loading: loadingNewPhoto,
    error: errorNewPhoto,
    photos: photo,
    success: successNewPhoto,
  } = newPhoto;

  const uploadPhoto = useSelector((state) => state.uploadPhoto);
  const {
    loading: loadingUploadPhoto,
    error: errorUploadPhoto,
    photo: uploadPhotoRes,
    success: successUploadPhoto,
  } = uploadPhoto;

  const updatePhoto = useSelector((state) => state.updatePhoto);
  const {
    loading: loadingUpdatePhoto,
    error: errorUpdatePhoto,
    photos: updatedPhotoResponse,
    success: successUpdatePhoto,
  } = updatePhoto;

  useEffect(() => {
    if (userInfo) {
      dispatch(photolist(size, category, page, caption));
    } else {
      navigate("/");
    }
    if (successUpdatePhoto) {
      toast.success(updatedPhotoResponse.message);
      handleUpdateClose();
      dispatch({ type: UPDATE_PHOTO_RESET });
    }
    if (error) {
      toast.error(error);
    }
    if (errorUpdatePhoto) {
      toast.error(errorUpdatePhoto);
      dispatch({ type: UPDATE_PHOTO_RESET });
    }
    if (errorUploadPhoto) {
      toast.error(errorUploadPhoto);
    }
    if (errorNewPhoto) {
      toast.error(errorNewPhoto);
      dispatch({ type: NEW_PHOTO_RESET });
    }
    if (successNewPhoto) {
      toast.success(photo.message);
      dispatch({ type: NEW_PHOTO_RESET });
    }
    if (successDelete) {
      toast.success(photoDelete.message);
      setIdList([]);
      dispatch({ type: DELETE_PHOTO_RESET });
    }
    if (errorDelete) {
      toast.error(errorDelete);
    }
  }, [
    dispatch,
    userInfo,
    errorUpdatePhoto,
    updatedPhotoResponse,
    successUpdatePhoto,
    size,
    page,
    photo,
    errorDelete,
    successDelete,
    photoDelete,
    category,
    errorNewPhoto,
    successNewPhoto,
    errorUploadPhoto,
    caption,
    navigate,
    error,
  ]);

  const handleChangeCategory = (value) => {
    setCategory(value);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(createphoto());
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
            colspan={14}
            style={{ paddingTop: "1rem", marginLeft: "1rem" }}
          >
            <RadioGroup
              name="radioList"
              value={category}
              onChange={(value) => {
                handleChangeCategory(value);
              }}
              inline
              appearance="picker"
              style={{
                padding: "1rem",
                color: "black",
              }}
            >
              <Button color="blue" onClick={handleCreate} appearance="primary">
                Add Photo
              </Button>
              <Button
                onClick={handleOpen}
                color="red"
                style={{ marginLeft: "0.3rem", marginRight: "0.3rem" }}
                appearance="primary"
              >
                Delete
              </Button>
              <span style={{ paddingTop: "0.7rem" }}>Select Category:</span>
              <Radio value="">All</Radio>
              <Radio value="Places">Places</Radio>
              <Radio value="Foods">Foods</Radio>
              <Radio value="Events">Events</Radio>
            </RadioGroup>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={8}>
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
          {loading || loadingDelete || loadingNewPhoto ? (
            <Loader content="Please wait..." />
          ) : (
            <FlexboxGrid style={{ paddingBottom: "1rem" }}>
              <FlexboxGrid.Item colspan={24}>
                {totalItems === 0 && caption !== "" ? (
                  <NoResult title={caption} />
                ) : photos.length === 0 ? (
                  <EmptyRow />
                ) : (
                  photos.map((item) => (
                    <Panel
                      shaded
                      bordered
                      bodyFill
                      style={{
                        display: "inline-block",
                        width: 240,
                        margin: "1rem",
                        color: "black",
                      }}
                      key={item.id}
                    >
                      <img
                        src={`/zamboanga/${item.src}`}
                        height="240"
                        alt="sampleimage"
                      />
                      <Panel
                        style={{ textAlign: "center" }}
                        header={item.caption}
                      ></Panel>
                      <div style={{ padding: "1rem" }}>
                        <ButtonToolbar>
                          <input
                            type="checkbox"
                            onChange={(e) => handleSelectToDelete(item.id, e)}
                            style={{ cursor: "pointer" }}
                          />

                          <svg
                            onClick={() =>
                              handleUpdatePhoto(item.id, item.src, item.caption)
                            }
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
                  ))
                )}
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={24}>
                {photos.length > 0 && (
                  <>
                    <span className="text-black" style={{ padding: "1rem" }}>
                      Total Photos : {totalItems}
                    </span>
                    <Button
                      appearance="primary"
                      style={{ marginRight: "1rem" }}
                      onClick={handlePrevious}
                      disabled={page === 0}
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
            </FlexboxGrid>
          )}
        </>
      </div>
      <ModalActions
        handleClose={handleClose}
        showModal={showModal}
        deletephoto={deletephoto}
        idList={idList}
      />
      <ModalUpdatePhoto
        handleUpdateClose={handleUpdateClose}
        updateModal={updateModal}
        category={category}
        caption={caption}
        updatephoto={updatephoto}
        id={id}
        toast={toast}
        dispatch={dispatch}
        uploadPhotoRes={uploadPhotoRes}
        successUploadPhoto={successUploadPhoto}
        loadingUploadPhoto={loadingUploadPhoto}
        loadingUpdatePhoto={loadingUpdatePhoto}
        upload={upload}
      />
    </>
  );
};

export default Photos;
