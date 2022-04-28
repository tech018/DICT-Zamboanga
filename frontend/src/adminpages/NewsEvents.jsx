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
import {
    createnews,
    newslist,
    deletenews,
  } from "../actions/newsActions";
  import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import dict from '../images/dict.png'

const NewsEvents = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [idList, setIdList] = useState([]);
  const [caption, setCaption] = useState("");
  const allNews = useSelector((state) => state.allNews);
  const { loading, error, news } = allNews;
  const [updateModal, setUpdateModal] = useState(false);
  const [id, setId] = useState("");

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

    return (<><div style={{ backgroundColor: "rgba(37, 37, 37, 0.219)" }}>        
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
          {loading ? (
            <Loader content="Loading..." />
          ) : (
            <>
                <Panel
                  shaded
                  bordered
                  bodyFill
                  style={{
                    display: "inline-block",
                    width: '30%',
                      margin: "1rem",
                      color: "black",
                  }}
                >
                  <img
                    src={dict}
                    style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'block'
                    }}
                    alt="sampleimage"
                  />
                  <Panel
                    style={{ textAlign: "center" }}
                    header="SAMPLE TITLE"
                  ></Panel>
                   <Panel
                    style={{ textAlign: "center" }}
                    header="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                  ></Panel>
                  <div style={{ padding: "1rem" }}>
                    <ButtonToolbar>
                      <input
                        type="checkbox"
                        // onChange={(e) => handleSelectToDelete(item.id, e)}
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
            </>
          )}
        </>
    </div></>);
}
export default NewsEvents;
