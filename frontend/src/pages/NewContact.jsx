import React, { useState, useEffect } from "react";
import { Form, Button, ButtonToolbar, Loader } from "rsuite";
import { upload } from "../actions/photoActions";
import { createcontact } from "../actions/contactActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { NEW_CONTACT_RESET } from "../constants/contactConstants";

const NewContact = () => {
  const [title, setTitle] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [contactPos, setContactPos] = useState("");
  const [image, setImage] = useState("");
  const [clusterReg, setClusterReg] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");

  const navigate = useNavigate();

  const uploadPhoto = useSelector((state) => state.uploadPhoto);
  const { loading, error, photo, success } = uploadPhoto;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const newContact = useSelector((state) => state.newContact);
  const {
    loading: loadingContact,
    error: errorContact,
    contact,
    success: successContact,
  } = newContact;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    if (success) {
      setImage(photo && photo.image);
    }
    if (error) {
      toast.error(error);
    }
    if (successContact) {
      toast.success(contact.message);
      navigate("/contact");
      dispatch({ type: NEW_CONTACT_RESET });
    }
    if (errorContact) {
      toast.error(errorContact);
    }
  }, [
    success,
    photo,
    error,
    successContact,
    contact,
    errorContact,
    navigate,
    userInfo,
    dispatch,
  ]);

  const handleUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    let formData = new FormData();
    formData.append("file", file);

    dispatch(upload(formData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createcontact({
        title,
        contactInfo,
        contactPos,
        image,
        email,
        clusterReg,
        address,
        contactNo,
      })
    );
  };
  return (
    <div className="default-width text-black">
      <Form fluid style={{ padding: "2rem", width: "50rem", margin: "auto" }}>
        <Form.Group controlId="name-1">
          <Form.ControlLabel>Name of Government Department</Form.ControlLabel>
          <Form.Control
            name="department"
            onChange={(value) => setTitle(value)}
          />
        </Form.Group>
        <Form.Group controlId="nameofgovernmentofficial">
          <Form.ControlLabel>Name of Government Official</Form.ControlLabel>
          <Form.Control
            name="nameofgovernmentofficial"
            onChange={(value) => setContactInfo(value)}
          />
        </Form.Group>
        <Form.Group controlId="designation">
          <Form.ControlLabel>Designation</Form.ControlLabel>
          <Form.Control
            name="designation"
            onChange={(value) => setContactPos(value)}
          />
        </Form.Group>
        <Form.Group controlId="cluster">
          <Form.ControlLabel>Cluster/Region</Form.ControlLabel>
          <Form.Control
            name="cluster"
            onChange={(value) => setClusterReg(value)}
          />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.ControlLabel>Address</Form.ControlLabel>
          <Form.Control
            name="address"
            onChange={(value) => setAddress(value)}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.ControlLabel>Email</Form.ControlLabel>
          <Form.Control name="email" onChange={(value) => setEmail(value)} />
        </Form.Group>
        <Form.Group controlId="contactNo">
          <Form.ControlLabel>Contact Number</Form.ControlLabel>
          <Form.Control
            name="contactNo"
            onChange={(value) => setContactNo(value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.ControlLabel>Photo</Form.ControlLabel>
          <input
            accept="image/*"
            id="icon-button-file"
            type="file"
            style={{ margin: "auto", display: "block" }}
            onChange={handleUpload}
          />
        </Form.Group>
        {loading ? (
          <Loader content="Loading..." />
        ) : (
          <img
            src={
              photo && photo.image
                ? `/zamboanga/${photo && photo.image}`
                : `/zamboanga/default.jpg`
            }
            alt="photoupload"
            style={{
              width: "20rem",
              height: "20rem",
              margin: "auto",
              display: "block",
            }}
          />
        )}
        <Form.Group>
          <ButtonToolbar>
            {loadingContact ? (
              <Button appearance="primary" loading>
                Primary
              </Button>
            ) : (
              <Button onClick={handleSubmit} appearance="primary">
                Submit
              </Button>
            )}
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </div>
  );
};

export default NewContact;
