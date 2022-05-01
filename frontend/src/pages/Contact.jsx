import React, { useEffect, useState } from "react";
import ContactCard from "./components/ContactCard";
import { useSelector, useDispatch } from "react-redux";
import { contactlist } from "../actions/contactActions";
import { toast } from "react-toastify";
import { Button, InputPicker } from "rsuite";
import Meta from "./components/Meta";

const selectFields = [
  {
    label: "8 Items",
    value: "8",
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

const Contact = () => {
  const [size, setSize] = useState(8);
  const [page, setPage] = useState(0);
  const title = "";
  const dispatch = useDispatch();
  const allContact = useSelector((state) => state.allContact);
  const { loading, error, contacts, totalItems, currentPage } = allContact;

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    dispatch(contactlist(page, size, title));
  }, [dispatch, page, size, error]);

  const handleNextPage = () => {
    setPage(currentPage + 1);
  };
  const handlePrevious = () => {
    setPage(currentPage === 0 ? currentPage : currentPage - 1);
  };

  return (
    <div className="default-width">
      <Meta title={`List of Contacts`} />
      <ContactCard loading={loading} contacts={contacts} />
      {contacts.length > 0 && (
        <div style={{ padding: "2rem" }}>
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
        </div>
      )}
    </div>
  );
};

export default Contact;
