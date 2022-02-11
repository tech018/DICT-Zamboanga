import React, { useEffect, useState } from "react";
import ContactCard from "./components/ContactCard";
import { useSelector, useDispatch } from "react-redux";
import { contactlist } from "../actions/contactActions";
import { toast } from "react-toastify";
import { Button } from "rsuite";

const Contact = () => {
  const [pageNumber, setPageNumber] = useState(8);
  const dispatch = useDispatch();
  const allContact = useSelector((state) => state.allContact);
  const { loading, error, contacts: data, countcontact } = allContact;

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    dispatch(contactlist(pageNumber));
  }, [dispatch, pageNumber, error]);
  return (
    <div className="default-width">
      <ContactCard loading={loading} data={data} />
      <div style={{ margin: "1rem" }}>
        <Button
          style={{ margin: "auto", display: "block" }}
          color="yellow"
          appearance="primary"
          disabled={pageNumber >= countcontact.length}
          onClick={() => setPageNumber(pageNumber + 4)}
        >
          Show more
        </Button>
      </div>
    </div>
  );
};

export default Contact;
