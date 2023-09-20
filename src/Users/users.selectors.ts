import { RootState } from "../store";

const getUsers = (state: RootState) => state.usersInfo;

export const getUsersSelectors = (state: RootState) => getUsers(state).users;

export const getSelectedUserSelector = (state: RootState) =>
  getUsers(state).selectedUser;

export const getUserPostsSelector = (state: RootState) => getUsers(state).posts;

export const postLoadingSelector = (state: RootState) =>
  getUsers(state).isPostLoading;
