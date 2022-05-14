import React from 'react';
import styles from './style.module.css';
import followersImage from '../../../../images/followers.svg';
import personImage from '../../../../images/person.svg';

const User = (props) => {
  const user = props.user.currentUser;

  return (
    <div className={styles.user}>
      <img className={styles.user_avatar} src={user.avatar_url} alt=''></img>
      <div className={styles.user_info}>
        <h1 className={styles.user_name}>{user.name}</h1>
        <a className={styles.user_link} href={user.html_url} target='_blank' rel='noopener noreferrer'>{user.login}</a>
        <div className={styles.follow_block}>
          <div className={styles.follow_block__item}>
            <div className={styles.follow_block__icon}><img src={followersImage} alt=''/></div>
            <p>{user.followers > 1000 ? (user.followers / 1000).toFixed(1) + 'k' : user.followers} followers</p>
          </div>
          <div className={styles.follow_block__item}>
            <div className={styles.follow_block__icon}><img src={personImage} alt=''/></div>
            <p>{user.following > 1000 ? (user.following / 1000).toFixed(1) + 'k' : user.following} following</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User;