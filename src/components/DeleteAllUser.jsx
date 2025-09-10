import React from "react";
import { deleteUsers } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const DeleteAllUser = () => {
  // dispatch method
  const dispatch = useDispatch();

  // delete all users
  const deleteAllUsers = () => {
    // console.log(users);
    dispatch(deleteUsers());
  };

  return (
    <Wrapper>
      <button className="btn clear-btn" onClick={() => deleteAllUsers()}>
        Delete All Users
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .clear-btn {
    margin-top: 5px;
    text-trsnaform: captalized;
    background-color: #db338a;
  }
`;

export default DeleteAllUser;
