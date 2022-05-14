
import React, { useState } from 'react';
import styles from './style.module.css';
import Logo from './components/Logo';
import Input from './components/Input';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/actions/user';
import { getRepos, setCurrentPage } from '../../redux/actions/repos';
import searchImage from '../../images/search.svg';

const Header = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.repos.currentPage);
  const perPage = useSelector(state => state.repos.perPage);

  const onKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      dispatch(getUser(username))
      dispatch(setCurrentPage(1))
      dispatch(getRepos(username, currentPage, perPage))
    }
  }

  return (
    <div className={styles.header}>
        <div className={styles.container}>
          <Logo/>
          <div className={styles.search_block}>
            <div className={styles.icon_block}><img src={searchImage} alt=''/></div>
            <Input onChange={setUsername} placeholder='Search' onKeyPress={onKeyPressHandler}/>
          </div>
        </div>
    </div>
  )
}

export default Header;