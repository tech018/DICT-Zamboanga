import React, { useState, useEffect } from "react";
import { Form, Panel, InputGroup, Input, Button, FlexboxGrid } from "rsuite";
import VisibleIcon from "@rsuite/icons/Visible";
import UnvisibleIcon from "@rsuite/icons/Unvisible";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../actions/userActions";

const { Group, Control } = Form;

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
    <div className="login-page  default-width">
      <FlexboxGrid justify="center" style={{ margin: "3rem" }}>
        <FlexboxGrid.Item colspan={12}>
          <Panel
            header={<h3 style={{ textAlign: "center" }}>Admin Login</h3>}
            bordered
          >
            <Form fluid>
              <Group controlId="name">
                <Control
                  name="name"
                  placeholder="Email"
                  onChange={(value) => setEmail(value)}
                />
              </Group>
              <Group controlId="name">
                <InputGroup inside style={{ width: "100%" }}>
                  <Input
                    onChange={(value) => setPassword(value)}
                    type={visible ? "text" : "password"}
                    placeholder="Password"
                  />
                  <Button onClick={handleChange}>
                    {visible ? <UnvisibleIcon /> : <VisibleIcon />}
                  </Button>
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
              </Group>
            </Form>
          </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );
};

export default Login;
