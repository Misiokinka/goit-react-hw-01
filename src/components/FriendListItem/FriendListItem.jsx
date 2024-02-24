import css from "./FriendListItem.module.css"

const FriendListItem = (props) => {
    const { avatar, name, isOnline = true } = props;
    return (
        <div className={css.friendItemWrapper}>
            <div className={css.friendItemBlock}><img className={css.friendImg} src={avatar} alt="Avatar" width="48" />

                <p className={css.friendName}>{name}</p>
                {isOnline ? <p className={css.friendStatusOn}> Online</p> : <p className={css.friendStatusOff}>Offline</p>}</div>
        </div >
    )
}

export default FriendListItem;