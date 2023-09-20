import { combineReducers } from "@reduxjs/toolkit";
import usersReducers from "../Users/users.reducers";

const rootReducers = combineReducers({
  usersInfo: usersReducers,
});

export default rootReducers;
