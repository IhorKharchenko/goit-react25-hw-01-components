import React from "react";
import styles from "./Profile.module.css";
import Profile from "./Profile";

const ProfilesList = ({ users }) => {
  return (
    <ul className={styles.profilesList}>
      {users.map((user) => (
        <li key={user.tag} className={styles.profilesItem}>
          <Profile
            src={user.avatar}
            name={user.name}
            tag={user.tag}
            location={user.location}
            // followers={user.stats.followers}
            // views={user.stats.views}
            // likes={user.stats.likes}
            stats={user.stats}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProfilesList;
