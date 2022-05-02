import React, { useState, useEffect } from "react";
import {
  Loader,
  RadioGroup,
  InputGroup,
  Input,
  Button,
  ButtonToolbar,
  FlexboxGrid,
  InputPicker,
} from "rsuite";
import { userlist, updateuser, deleteuser } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { upload } from "../actions/photoActions";
import { useNavigate } from "react-router-dom";
import {
  USER_CREATE_RESET,
  USER_DELETE_RESET,
  USER_UPDATE_RESET,
} from "../constants/userConstant";

const selectFields = [
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

const Users = () => {
  const [searchEmail, setSearchEmail] = useState("");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const allUsers = useSelector((state) => state.allUsers);
  const { loading, error, users, totalItems, currentPage } = allUsers;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      dispatch(userlist(size, searchEmail, page));
    } else {
      navigate("/");
    }
  }, [userInfo, navigate, page, searchEmail, size, dispatch]);

  return (
    <div style={{ padding: "1rem" }}>
      <table className="table text-black">
        <thead>
          <tr>
            <th className="table__heading">No</th>
            <th className="table__heading">Email</th>
            <th className="table__heading">Avatar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id} className="table__row">
              <td className="table__content">{item.id}</td>
              <td className="table__content">{item.email}</td>
              <td className="table__content">{item.avatar}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
