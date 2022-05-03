import React, { useEffect, useState } from "react";
import EmptyRow from "../pages/components/EmptyRow";
import {
  Panel,
  Loader,
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
  createuser,
  deleteuser,
  updateuser,
  userlist,
} from "../actions/userActions";
import { upload } from "../actions/photoActions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  USER_CREATE_RESET,
  USER_DELETE_RESET,
  USER_UPDATE_RESET,
} from "../constants/userConstant";
import { ModalDeleteUser } from "../adminpages/ModalActions";
import UpdateUser from "./UpdateUser";
import ModalCreateUser from "./ModalCreateUser";
import { UPDATE_PHOTO_REQUEST } from "../constants/photoConstant";

const selectFields = [
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

const Users = () => {
  const [searchEmail, setSearchEmail] = useState("");
  const [size, setSize] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [updateDrawer, setUpdateDrawer] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [page, setPage] = useState(0);

  const handleOpen = () => {
    if (idList.length <= 0) {
      toast.error("Please select one or more items");
    } else {
      setShowModal(true);
    }
  };

  const handleClose = () => setShowModal(false);
  const handleCreateClose = () => setCreateModal(false);
  const handleUpdateClose = () => {
    setUpdateDrawer(false);
    setIdList([]);
  };

  const handleCreateUser = () => {
    dispatch(createuser(email, password, avatar));
    handleCreateClose();
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const allUsers = useSelector((state) => state.allUsers);
  const { loading, error, users, totalItems, currentPage } = allUsers;
  const [idList, setIdList] = useState([]);
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");
  const [drawerTitle, setDrawerTitle] = useState("");

  const [id, setId] = useState("");

  const deleteUsers = useSelector((state) => state.deleteUsers);
  const {
    loading: loadingDelete,
    error: errorDelete,
    users: usersDelete,
    success: successDelete,
  } = deleteUsers;

  const createUser = useSelector((state) => state.createUser);
  const {
    loading: loadingcreateUser,
    error: errorcreateUser,
    user: newuser,
    success: successcreateUser,
  } = createUser;

  const uploadPhoto = useSelector((state) => state.uploadPhoto);
  const {
    loading: loadingUploadPhoto,
    error: errorUploadPhoto,
    photo: uploadPhotoRes,
    success: successUploadPhoto,
  } = uploadPhoto;

  const updateUsers = useSelector((state) => state.updateUsers);
  const {
    loading: loadingupdateUsers,
    error: errorupdateUsers,
    users: updateUserResponse,
    success: successUpdateUsers,
  } = updateUsers;

  useEffect(() => {
    if (userInfo) {
      dispatch(userlist(size, searchEmail, page));
    } else {
      navigate("/");
    }
    if (error) {
      toast.error(error);
    }

    if (errorDelete) {
      toast.error(errorDelete);
      dispatch({ type: USER_DELETE_RESET });
    }
    if (successDelete) {
      toast.success(usersDelete.message);
      dispatch({ type: USER_DELETE_RESET });
    }
    if (errorUploadPhoto) {
      toast.error(errorUploadPhoto);
      dispatch({ type: UPDATE_PHOTO_REQUEST });
    }
    if (successUploadPhoto) {
      setAvatar(uploadPhotoRes.image);
    }

    if (errorcreateUser) {
      toast.error(errorcreateUser);
      dispatch({ type: USER_CREATE_RESET });
    }
    if (successcreateUser) {
      toast.success(newuser.message);
      dispatch({ type: USER_CREATE_RESET });
      setPassword("");
      setEmail("");
      setAvatar("");
    }

    if (errorupdateUsers) {
      toast.error(errorupdateUsers);
      dispatch({ type: USER_UPDATE_RESET });
    }
    if (successUpdateUsers) {
      toast.success(updateUserResponse.message);
      dispatch({ type: USER_UPDATE_RESET });
      setPassword("");
      setEmail("");
    }
  }, [
    userInfo,
    dispatch,
    error,
    errorUploadPhoto,
    successUploadPhoto,
    uploadPhotoRes,
    size,
    page,
    searchEmail,
    navigate,
    errorDelete,
    successDelete,
    usersDelete,
    errorcreateUser,
    successcreateUser,
    newuser,
    errorupdateUsers,
    successUpdateUsers,
    updateUserResponse,
  ]);

  const handleSelectToDelete = (id, e) => {
    if (e.target.checked) {
      let x = idList;
      x.push(id);
      setIdList(x);
    }
  };

  const updateUsersClick = (id, title) => {
    setUpdateDrawer(true);
    setId(id);
    setDrawerTitle(title);
  };

  const handleNextPage = () => {
    setPage(currentPage + 1);
  };
  const handlePrevious = () => {
    setPage(currentPage === 0 ? currentPage : currentPage - 1);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    let formData = new FormData();
    formData.append("file", file);

    dispatch(upload(formData));
  };

  const handleOpenModalCreateUser = () => {
    setCreateModal(true);
  };

  const handleUpdateUser = () => {
    dispatch(updateuser(id, email, password));
    handleUpdateClose();
  };

  return (
    <>
      <div style={{ backgroundColor: "rgba(37, 37, 37, 0.219)" }}>
        <FlexboxGrid>
          <FlexboxGrid.Item
            colspan={14}
            style={{ paddingTop: "1rem", marginLeft: "1rem" }}
          >
            <Button
              color="blue"
              onClick={handleOpenModalCreateUser}
              appearance="primary"
            >
              Add User
            </Button>
            <Button
              onClick={handleOpen}
              color="red"
              style={{ marginLeft: "0.3rem", marginRight: "0.3rem" }}
              appearance="primary"
            >
              Delete
            </Button>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={8}>
            <InputGroup
              style={{ marginTop: "1rem" }}
              inside
              onChange={(e) => setSearchEmail(e.target.value)}
            >
              <Input placeholder="search by email" />
              <InputGroup.Button disabled>
                <SearchIcon />
              </InputGroup.Button>
            </InputGroup>
          </FlexboxGrid.Item>
        </FlexboxGrid>

        <>
          {loading ||
          loadingDelete ||
          loadingcreateUser ||
          loadingupdateUsers ? (
            <Loader content="Please wait..." />
          ) : users.length <= 0 ? (
            <EmptyRow />
          ) : (
            <FlexboxGrid style={{ paddingBottom: "1rem" }}>
              <FlexboxGrid.Item colspan={24}>
                {users.map((item) => (
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
                      src={`/zamboanga/${item.avatar}`}
                      height="240"
                      alt="sampleimage"
                    />
                    <Panel
                      style={{ textAlign: "center" }}
                      header={item.email}
                    ></Panel>
                    <div style={{ padding: "1rem" }}>
                      <ButtonToolbar>
                        <input
                          type="checkbox"
                          onChange={(e) => handleSelectToDelete(item.id, e)}
                          style={{ cursor: "pointer" }}
                        />

                        <svg
                          onClick={() => updateUsersClick(item.id, item.email)}
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
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={24}>
                {users.length > 0 && (
                  <>
                    <span className="text-black" style={{ padding: "1rem" }}>
                      Total Users : {totalItems}
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
      <ModalDeleteUser
        handleClose={handleClose}
        showModal={showModal}
        deleteuser={deleteuser}
        idList={idList}
      />
      {/* <ModalUpdateUser
        handleUpdateClose={handleUpdateClose}
        updateModal={updateModal}
        email={email}
        password={password}
        updateuser={updateuser}
        id={id}
        toast={toast}
        dispatch={dispatch}
        uploadPhotoRes={uploadPhotoRes}
        successUploadPhoto={successUploadPhoto}
        loadingUploadPhoto={loadingUploadPhoto}
        loadingupdateUsers={loadingupdateUsers}
        upload={upload}
        setPassword={setPassword}
        setEmail={setEmail}
        setSrc={setSrc}
        src={src}
      /> */}
      <ModalCreateUser
        loadingcreateUser={loadingcreateUser}
        createUser={createUser}
        createModal={createModal}
        avatar={avatar}
        setPassword={setPassword}
        setEmail={setEmail}
        handleCreateUser={handleCreateUser}
        handleCreateClose={handleCreateClose}
        handleUpload={handleUpload}
        loadingUploadPhoto={loadingUploadPhoto}
      />
      <UpdateUser
        setPassword={setPassword}
        setEmail={setEmail}
        updateDrawer={updateDrawer}
        drawerTitle={drawerTitle}
        handleUpdateUser={handleUpdateUser}
        setUpdateDrawer={setUpdateDrawer}
      />
    </>
  );
};

export default Users;
