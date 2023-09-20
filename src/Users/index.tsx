import React, { useEffect } from "react";
import { resetUsersAction, setSelectedUserAction } from "./users.reducers";
import {
  getSelectedUserSelector,
  getUserPostsSelector,
  getUsersSelectors,
  postLoadingSelector,
} from "./users.selectors";
import { useAppDispatch, useAppSelector } from "../store";
import UserModel from "./models/userModel";
import User from "./User";
import "./users.css";
import { dispatchGetPosts, dispatchGetUsersList } from "./users.dispatcher";
import Post from "../Models/Post";
import Card from "../Card";

const Users = () => {
  const usersList = useAppSelector(getUsersSelectors);
  const userPosts = useAppSelector(getUserPostsSelector);
  const selectedUser = useAppSelector(getSelectedUserSelector);
  const isPostLoading = useAppSelector(postLoadingSelector);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetUsersAction());

    // getUsers(dispatch);

    // getUsersList().then((users) => {
    //   dispatch(setUsersActions(users));
    // });

    dispatch(dispatchGetUsersList());
  }, [dispatch]);

  // onapi set default selection to first item

  useEffect(() => {
    if (usersList?.length > 0 && !selectedUser) {
      dispatch(setSelectedUserAction(usersList[0]));
    }
  }, [usersList, selectedUser, dispatch]);

  // to call post for each selected user
  useEffect(() => {
    if (selectedUser) {
      dispatch(dispatchGetPosts(selectedUser.id));
    }
  }, [dispatch, selectedUser]);

  console.log(userPosts);

  return (
    <div className="panel-container">
      <div className="left-panel">
        {usersList &&
          usersList.length > 0 &&
          usersList.map((user: UserModel) => (
            <User user={user} key={user.id} />
          ))}
      </div>
      
      <div className="right-panel">
        <div className="post-container">
          {isPostLoading ? "Loading..." : ""}
          {!isPostLoading &&
            userPosts &&
            userPosts.length > 0 &&
            userPosts.map((post: Post) => <Card post={post} />)}
        </div>
      </div>
    </div>
  );
};

export default Users;
