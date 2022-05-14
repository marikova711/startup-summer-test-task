import React from 'react';
import styles from './style.module.css';
import userImage from '../../../../images/user.svg';

const UserError = () => {

  return (
    <div className={styles.user_error}>
      <div className={styles.container}>
        <div className={styles.image_block}><img src={userImage} alt=''/></div>
        <p>User not found</p>
      </div>
    </div>
  )
}

export default UserError;