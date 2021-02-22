import React from "react";
import styles from "./Profile.module.css";
// import defaultImage from "../../logo.svg";
// console.log(defaultImage);

const Profile = ({ user }) => {
  <div className={styles.profile}>
    <div className={styles.description}>
      <img
        className={styles.avatar}
        src={user.avatar}
        alt="Аватар пользователя"
      />
      <p className={styles.name}>{user.name}</p>
      <p className={styles.tag}>@{user.tag}</p>
      <p className={styles.location}>{user.location}</p>
    </div>
    <ul className={styles.stats}>
      {/* {user.stats.map} */}
      <li>
        <span></span>
        <span></span>
      </li>
      <li>
        <span></span>
        <span></span>
      </li>
      <li>
        <span></span>
        <span></span>
      </li>
    </ul>
  </div>;
};

// Profile.defaultProps = {
//   avatar: defaultImage,
// };
export default Profile;
