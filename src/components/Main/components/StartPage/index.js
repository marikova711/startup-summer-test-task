import React from 'react';
import styles from './style.module.css';
import initialImage from '../../../../images/initial.svg';

const StartPage = () => {

  return (
    <div className={styles.start_page}>
      <div className={styles.container}>
        <div className={styles.image_block}><img src={initialImage} alt=''/></div>
        <p>Start with searching a GitHub user</p>
      </div>
    </div>
  )
}

export default StartPage;