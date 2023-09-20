import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import UserModel from "./models/userModel";
import Post from "../Models/Post";

export interface IUsersRedcuers {
  users: UserModel[];
  loading: boolean;
  selectedUser: UserModel | null;
  posts: Post[];
  isPostLoading: boolean;
}

const initialState: IUsersRedcuers = {
  users: [],
  loading: false,
  selectedUser: null,
  posts: [],
  isPostLoading: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    setUsersActions: (state, action: PayloadAction<UserModel[]>) => ({
      ...state,
      users: action.payload,
      loading: false,
    }),
    resetUsersAction: () => initialState,
    setLoadingAction: (state, action: PayloadAction<boolean>) => {
      return { ...state, loading: action.payload };
    },
    setSelectedUserAction: (
      state,
      action: PayloadAction<UserModel | null>
    ) => ({ ...state, selectedUser: action.payload }),
    setPosts: (state, action: PayloadAction<Post[]>) => ({
      ...state,
      posts: action.payload,
      isPostLoadig: false,
    }),
    setPostsLoading: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isPostLoadig: action.payload,
    }),
  },
});

export const {
  setUsersActions,
  resetUsersAction,
  setLoadingAction,
  setSelectedUserAction,
  setPosts,
  setPostsLoading,
} = usersSlice.actions;

export default usersSlice.reducer;
