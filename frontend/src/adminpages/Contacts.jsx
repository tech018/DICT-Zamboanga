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
import EmptyRow from "../pages/components/EmptyRow";
import NoResult from "../pages/components/NoResult";

import {
  createcontact,
  contactlist,
  deletecontact,
  updatecontact,
} from "../actions/contactActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  NEW_CONTACT_RESET,
  DELETE_CONTACT_RESET,
  UPDATE_CONTACT_RESET,
} from "../constants/contactConstants";
import { UPLOAD_PHOTO_RESET } from "../constants/photoConstant";
import { ModalDeleteContact } from "./ModalActions";
import { useNavigate } from "react-router-dom";
import UpdateContact from "./UpdateContact";

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

  const allContact = useSelector((state) => state.allContact);
  const { loading, error, contacts, totalItems, currentPage } = allContact;

  const newContact = useSelector((state) => state.newContact);
  const {
    loading: loadingnewContact,
    error: errornewContact,
    contact: newContactRes,
    success: successnewContact,
  } = newContact;

  const deleteContact = useSelector((state) => state.deleteContact);
  const {
    loading: loadingDelete,
    error: errorDelete,
    contact: contactDelete,
    success: successDelete,
  } = deleteContact;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const uploadPhoto = useSelector((state) => state.uploadPhoto);
  const {
    loading: loadingUploadPhoto,
    error: errorUploadPhoto,
    photo: uploadPhotoRes,
    success: successUploadPhoto,
  } = uploadPhoto;

  const updateContact = useSelector((state) => state.updateContact);
  const {
    loading: loadingupdateContact,
    error: errorupdateContact,
    contact: updateContactRes,
    success: successupdateContact,
  } = updateContact;

  useEffect(() => {
    if (userInfo) {
      dispatch(contactlist(page, size, title));
    } else {
      navigate("/");
    }

    if (error) {
      toast.error(error);
    }
    if (successnewContact) {
      toast.success(newContactRes.message);
      dispatch({ type: NEW_CONTACT_RESET });
    }
    if (errornewContact) {
      toast.error(errornewContact);
      dispatch({ type: NEW_CONTACT_RESET });
    }
    if (successDelete) {
      toast.success(contactDelete.message);
      dispatch({ type: DELETE_CONTACT_RESET });
    }
    if (errorDelete) {
      toast.error(errorDelete);
      dispatch({ type: DELETE_CONTACT_RESET });
    }
    if (successUploadPhoto) {
      setSrc(uploadPhotoRes.image);
    }
    if (errorUploadPhoto) {
      toast.error(errorUploadPhoto);
      dispatch({ type: UPLOAD_PHOTO_RESET });
    }
    if (errorupdateContact) {
      toast.error(errorupdateContact);
      dispatch({ type: UPDATE_CONTACT_RESET });
    }
    if (successupdateContact) {
      toast.success(updateContactRes.message);
      dispatch({ type: UPDATE_CONTACT_RESET });
    }
  }, [
    userInfo,
    successupdateContact,
    updateContactRes,
    navigate,
    errorupdateContact,
    page,
    size,
    title,
    dispatch,
    newContactRes,
    successnewContact,
    errornewContact,
    error,
    contactDelete,
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
    dispatch(createcontact());
  };

  const handleSelectToDelete = (id, e) => {
    if (e.target.checked) {
      let x = idList;
      x.push(id);
      setIdList(x);
    }
  };

  const handleUpdateContact = (id, newsTitle) => {
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
                Add Contact
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
          loadingnewContact ||
          loadingDelete ||
          loadingupdateContact ? (
            <Loader content="Please wait..." />
          ) : (
            <>
            {totalItems === 0 && title !== "" ? <NoResult title={title}/> : contacts.length === 0 ? <EmptyRow/> :
              contacts.map((item) => (
                <Panel
                  shaded
                  bordered
                  bodyFill
                  style={{
                    display: "inline-block",
                    width: "18rem",
                    margin: "1rem",
                    height: 540,
                    color: "black",
                  }}
                  className="img-hover-zoom text-black"
                >
                  <div style={{ padding: "1rem" }}>
                    <img
                      className="image"
                      src={`/zamboanga/${item.image}`}
                      style={{
                        padding: "1.7rem",
                        display: "block",
                        margin: "auto",
                      }}
                      height="240"
                      alt={item.contactInfo}
                    />
                    <p style={{ fontWeight: "bolder" }}>{item.title}</p>
                    <br />
                    <span>{item.contactInfo}</span> <br />
                    <span>
                      <small>
                        {item.contactPos}
                        <br />
                        {item.clusterReg}
                        <br />
                        {item.address}
                        <br />
                        {item.email}
                        <br />
                        {item.contactNo}
                      </small>
                    </span>
                  </div>
                  <div style={{ padding: "1rem" }}>
                    <ButtonToolbar>
                      <input
                        type="checkbox"
                        onChange={(e) => handleSelectToDelete(item.id, e)}
                        style={{ cursor: "pointer" }}
                      />

                      <svg
                        onClick={() => handleUpdateContact(item.id, item.title)}
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
          {contacts.length > 0 && (
            <>
              <span className="text-black" style={{ padding: "1rem" }}>
                Total Contacts : {totalItems}
              </span>
              <Button
                appearance="primary"
                style={{ marginRight: "1rem" }}
                disabled={page === 0}
                onClick={handlePrevious}
              >
                Prev
              </Button>
              <Button
                disabled={totalItems === 3}
                appearance="primary"
                onClick={handleNextPage}
              >
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
      <ModalDeleteContact
        handleClose={handleClose}
        showModal={showModal}
        deletecontact={deletecontact}
        idList={idList}
      />
      <UpdateContact
        id={id}
        setUpdateDrawer={setUpdateDrawer}
        updateDrawer={updateDrawer}
        drawerTitle={drawerTitle}
        upload={upload}
        dispatch={dispatch}
        loadingUploadPhoto={loadingUploadPhoto}
        src={src}
        updatecontact={updatecontact}
      />
    </>
  );
};
export default NewsEvents;
