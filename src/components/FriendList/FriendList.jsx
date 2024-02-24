import css from "./FriendList.module.css"
import FriendListItem from "../FriendListItem/FriendListItem"
import friends from "../../../src/friends.json"
const FriendList = () => {

    return (
        < div className={css.friendListWrapper}>
            {friends.map((item) => {
                return (
                    < FriendListItem
                        key={item.id}
                        avatar={item.avatar}
                        name={item.name}
                        isOnline={item.isOnline}
                    />
                )
            })}

        </ div>
    )
}

export default FriendList