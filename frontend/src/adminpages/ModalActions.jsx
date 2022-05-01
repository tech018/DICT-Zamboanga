import React from "react";
import { Modal, Button } from "rsuite";
import { useDispatch } from "react-redux";

export const ModalActions = ({
  showModal,
  handleClose,
  idList,
  deletephoto,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletephoto(idList));
    handleClose();
  };
  return (
    <div>
      <Modal open={showModal} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>
            Delete {idList.length <= 1 ? `New` : `News`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span style={{ color: "black" }}>
            Are you sure you want to delete {idList.length}{" "}
            {idList.length <= 1 ? `Item` : `items`}
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleDelete} color="red" appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const ModalNewsDelete = ({
  showModal,
  handleClose,
  idList,
  deletenews,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletenews(idList));
    handleClose();
  };
  return (
    <div>
      <Modal open={showModal} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>
            Delete {idList.length <= 1 ? `Contact` : `Contacts`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span style={{ color: "black" }}>
            Are you sure you want to delete {idList.length}{" "}
            {idList.length <= 1 ? `Item` : `items`}
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleDelete} color="red" appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const ModalDeleteContact = ({
  showModal,
  handleClose,
  idList,
  deletecontact,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletecontact(idList));
    handleClose();
  };
  return (
    <div>
      <Modal open={showModal} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>
            Delete {idList.length <= 1 ? `Photo` : `Photos`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span style={{ color: "black" }}>
            Are you sure you want to delete {idList.length}{" "}
            {idList.length <= 1 ? `Item` : `items`}
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleDelete} color="red" appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
