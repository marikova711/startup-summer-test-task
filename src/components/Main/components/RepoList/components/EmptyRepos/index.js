import React from 'react';
import styles from './style.module.css';
import reposImage from '../../../../../../images/repos.svg';

const EmptyRepos = () => {

  return (
    <div className={styles.empty_repos}>
        <div className={styles.image_block}><img src={reposImage} alt=''/></div>
        <p>Repository list is empty</p>
    </div>
  )
}

export default EmptyRepos;