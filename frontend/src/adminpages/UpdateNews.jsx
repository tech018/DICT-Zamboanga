import React, { useState } from "react";
import { Drawer, Button, Form, Loader, FlexboxGrid } from "rsuite";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";

const UpdateNews = ({
  id,
  setUpdateDrawer,
  updateDrawer,
  drawerTitle,
  upload,
  dispatch,
  loadingUploadPhoto,
  src,
  updatenews,
}) => {
  const [title, setTitle] = useState("");

  const [content, setContent] = useState(EditorState.createEmpty());

  const editorDesc = content;
  const outputcontent = draftToHtml(
    convertToRaw(editorDesc.getCurrentContent())
  );

  const handleUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    let formData = new FormData();
    formData.append("file", file);

    dispatch(upload(formData));
  };

  const handleUpdateNews = (e) => {
    e.preventDefault();
    dispatch(updatenews(id, src, outputcontent, title));
    setUpdateDrawer(false);
  };

  return (
    <div>
      <Drawer
        backdrop="static"
        open={updateDrawer}
        onClose={() => setUpdateDrawer(false)}
      >
        <Drawer.Header>
          <Drawer.Title>Update {drawerTitle}</Drawer.Title>
          <Drawer.Actions>
            <Button onClick={() => setUpdateDrawer(false)}>Cancel</Button>
            <Button onClick={handleUpdateNews} appearance="primary">
              Confirm
            </Button>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>
          <Form>
            <FlexboxGrid>
              <FlexboxGrid.Item colspan={24}>
                <Form.Control
                  name="name"
                  autoComplete="off"
                  placeholder="Name of News/Events"
                  onChange={(value) => setTitle(value)}
                />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={24}>
                {loadingUploadPhoto ? (
                  <Loader content="Loading..." />
                ) : (
                  <input
                    className="custom-file-upload text-black"
                    style={{ width: "18.8rem" }}
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    onChange={handleUpload}
                  />
                )}
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={24}>
                <Editor
                  editorState={content}
                  wrapperClassName="wrapper-class"
                  editorClassName="editor-class text-black"
                  toolbarClassName="toolbar-class"
                  wrapperStyle={{
                    border: "1px solid white",
                    marginBottom: "20px",
                  }}
                  editorStyle={{
                    height: "20rem",
                    padding: "0px",
                    width: "100%",
                    border: "1px solid grey",
                  }}
                  onEditorStateChange={(editorState) => setContent(editorState)}
                />
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Form>
        </Drawer.Body>
      </Drawer>
    </div>
  );
};

export default UpdateNews;
