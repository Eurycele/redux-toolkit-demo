import React from "react";
import { AppDispatch, RootState } from "../../store";
import { getUsersSelectors } from "../users.selectors";
import { resetUsersAction } from "../users.reducers";
import { dispatchGetUsersList } from "../users.dispatcher";
import { connect } from "react-redux";
import UserModel from "../models/userModel";
import User from "../User";

const mapStateToProps = (state: RootState) => {
  return {
    userList: getUsersSelectors(state),
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    resetUsersAction: () => dispatch(resetUsersAction()),
    dispatchGetUsers: () => dispatch(dispatchGetUsersList()),
  };
};

export type IUserListProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

class UserList extends React.PureComponent<IUserListProps> {
  public componentDidMount(): void {
    this.props.dispatchGetUsers();
  }

  public render() {
    const { userList } = this.props;
    return (
      <div className="panel-container">
        <div className="left-panel">
          {userList &&
            userList.length > 0 &&
            userList.map((user: UserModel) => (
              <User user={user} key={user.id} />
            ))}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
