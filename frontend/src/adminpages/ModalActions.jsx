import React from "react";
import { Modal, Button } from "rsuite";
import { useDispatch } from "react-redux";

const ModalActions = ({ showModal, handleClose, idList, deletephoto }) => {
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

export default ModalActions;