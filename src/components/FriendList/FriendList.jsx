import css from "./FriendList.module.css"
import FriendListItem from "../FriendListItem/FriendListItem"
import friends from "../../../src/friends.json"
const FriendList = () => {

    return (
        < ul className={css.friendListWrapper}>
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

        </ ul>
    )
}

export default FriendList