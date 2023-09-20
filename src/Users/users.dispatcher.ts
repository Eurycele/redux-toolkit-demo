import { AppDispatch } from "../store";
import { getPosts, getUsersList } from "./api";
import {
  setLoadingAction,
  setPosts,
  setPostsLoading,
  setUsersActions,
} from "./users.reducers";

export const dispatchGetUsersList = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoadingAction(true));

      const usersList = await getUsersList();

      dispatch(setUsersActions(usersList));
    } catch (error) {
      console.error(error);
      dispatch(setLoadingAction(false));
    }
  };
};

export const dispatchGetPosts = (userId: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setPostsLoading(true));

      const posts = await getPosts(userId);

      dispatch(setPosts(posts));
    } catch (error) {
      console.error(error);
      dispatch(setPostsLoading(false));
    }
  };
};
