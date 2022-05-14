import React from 'react';
import styles from './style.module.css';

const Loader = () => {

  return (
    <div className={styles.loader}>
      <div className={styles.loading}></div>
    </div>
  )
}

export default Loader;