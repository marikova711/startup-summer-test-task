import React from 'react';
import styles from './style.module.css';
import Header from '../Header';
import Main from '../Main';

const App = () => {
  
  return (
    <div className={styles.wrapper}>
        <Header/>
        <Main/>
    </div>
  )
}

export default App;
