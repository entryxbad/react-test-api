import Paginator from '../../common/Paginator/Paginator'
import User from './User'

let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {
    return <div>
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize} />

            {users.map((u) => <User user={u} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.follow} key={u.id} />)}
        </div>
    </div>
}

export default Users