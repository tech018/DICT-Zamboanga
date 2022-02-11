import React, { useState, useEffect } from "react";
import { Form, Col, Row, Grid, InputGroup, Input, Button } from "rsuite";
import VisibleIcon from "@rsuite/icons/Visible";
import UnvisibleIcon from "@rsuite/icons/Unvisible";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../actions/userActions";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [error, userInfo, navigate]);

  const handleChange = () => {
    setVisible(!visible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <div className="text-black default-width" style={{ padding: "2rem" }}>
      <Grid>
        <Row>
          <Col xs={7}>
            <Form>
              <Form.Group controlId="name">
                <Form.ControlLabel>Email</Form.ControlLabel>
                <Form.Control
                  name="name"
                  onChange={(value) => setEmail(value)}
                />
              </Form.Group>
              <Form.Group controlId="name">
                <InputGroup inside>
                  <Input
                    onChange={(value) => setPassword(value)}
                    type={visible ? "text" : "password"}
                  />
                  <InputGroup.Button onClick={handleChange}>
                    {visible ? <UnvisibleIcon /> : <VisibleIcon />}
                  </InputGroup.Button>
                </InputGroup>
                {loading ? (
                  <Button appearance="primary" loading></Button>
                ) : (
                  <Button
                    style={{ marginTop: "1rem" }}
                    onClick={handleSubmit}
                    appearance="primary"
                  >
                    Login
                  </Button>
                )}
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Login;
