import React from "react";
import styles from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id} className={styles.item}>
      {isOnline ? (
        <span className={styles.status + " " + styles.isOnline}></span>
      ) : (
        <span className={styles.status + " " + styles.isOffline}></span>
      )}
      <img className={styles.avatar} src={avatar} alt={name} />
      <p className={styles.name}>{name}</p>
    </li>
  );
};
export default FriendListItem;
