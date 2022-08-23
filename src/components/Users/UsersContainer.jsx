import { connect } from 'react-redux'
import {
  follow,
  getUsers,
  setCurrentPage,
  toggleFollowingProgress,
  unfollow,
} from '../../redux/usersReducer'
import React from 'react'
import Users from './Users'
import Preloader from '../../common/Preloader/Preloader'
import { compose } from 'redux'
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { getAllUsers, getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount } from '../../redux/usersSelectors'

class UsersContainer extends React.Component {

  componentDidMount() {
    const { currentPage, pageSize } = this.props
    this.props.getUsers(currentPage, pageSize)
  }

  onPageChanged = (pageNumber) => {
    const { pageSize } = this.props
    this.props.getUsers(pageNumber, pageSize)
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
        followingInProgress={this.props.followingInProgress} />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: getAllUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}



export default compose(withAuthRedirect, connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers }))(UsersContainer)