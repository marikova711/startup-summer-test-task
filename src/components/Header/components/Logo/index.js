import React from 'react';
import styles from './style.module.css';
import logoImage from '../../../../images/logo.svg';

const Logo = () => {

  return (
        <img className={styles.logo} src={logoImage} alt=''/>
  )
}

export default Logo;