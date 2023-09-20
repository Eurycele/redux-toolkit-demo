import React from "react";
import UserModel from "../models/userModel";

import "./user-detail.css";
import { useAppDispatch, useAppSelector } from "../../store";
import { setSelectedUserAction } from "../users.reducers";
import { getSelectedUserSelector } from "../users.selectors";

export type UserProps = {
  user: UserModel;
};

const User = ({ user }: UserProps) => {
  const dispatch = useAppDispatch();
  const selectedUser = useAppSelector(getSelectedUserSelector);

  const setSelectedUser = () => {
    dispatch(setSelectedUserAction(user));
  };

  const isSelected = user.id === selectedUser?.id;

  return (
    <div
      className={`user-detail ${isSelected ? "selected" : ""}`}
      onClick={setSelectedUser}
    >
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default User;
