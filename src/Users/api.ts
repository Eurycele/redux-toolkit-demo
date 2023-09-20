import { AppDispatch } from "../store";
import { setUsersActions } from "./users.reducers";

export const getUsers = (dispatch: AppDispatch) => {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      dispatch(setUsersActions(users));
    });
};

export const getUsersList = () => {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => users);
};


export const getPosts = (userId: number ) => fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId)
    .then((response) => response.json())
    .then((json) => {
        return json;
    })