import React from 'react';
import { useSelector } from 'react-redux';
import User from './components/User';
import UserError from './components/UserError';
import StartPage from './components/StartPage';
import RepoList from './components/RepoList';
import styles from './style.module.css';
import Loader from './components/Loader';

const Main = () => {
    const isFetching = useSelector(state => state.user.isFetching);
    const isFetchError = useSelector(state => state.user.isFetchError);
    const user = useSelector(state => state.user);
    
    return (
            isFetching === false
            ?
                isFetchError === true
                ?
                <UserError/>
                :
                    JSON.stringify(user.currentUser) === '{}'
                    ?
                    <StartPage/>
                    :
                    <div className={styles.user_wrapper}>
                        <div className={styles.container}>
                            <User user={user}/>
                            <RepoList user={user}/>
                        </div>
                    </div>
            :
            <Loader/>
  )
}

export default Main;