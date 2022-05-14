import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './style.module.css';
import Repo from './components/Repo';
import { getRepos } from '../../../../redux/actions/repos';
import { createPages } from '../../../../utils/pagesCreator';
import Loader from '../Loader';
import Pagination from './components/Pagination';
import EmptyRepos from './components/EmptyRepos';

const RepoList = (props) => {
  const dispatch = useDispatch();
  const userLogin = props.user.currentUser.login;
  const repos = useSelector(state => state.repos.items);
  const isLoading = useSelector(state => state.repos.isLoading);
  const currentPage = useSelector(state => state.repos.currentPage);
  const perPage = useSelector(state => state.repos.perPage);
  const publicRepos = props.user.publicRepos;

  const pagesCount = Math.ceil(publicRepos / perPage);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  
  const lastItem = repos.length === perPage ? currentPage * perPage : publicRepos;
  const firstItem = lastItem - repos.length + 1;

  const resultPages = createPages(pages, pagesCount, currentPage)

  useEffect(() => {
    dispatch(getRepos(userLogin, currentPage, perPage))
  }, [currentPage])

  return (
    publicRepos === 0
    ?
    <EmptyRepos/>
    :
    <div className={styles.repo_block}>
      {
        isLoading === false
        ?
        <div className={styles.repo_list}>
        <h1 className={styles.title}>Repositories ({publicRepos})</h1>
        {repos.map(repo =><Repo repo={repo}/>)}
        </div>
        :
        <Loader/>
      }
        <div className={styles.pagination_block}>
            <span className={styles.items}>{firstItem}-{lastItem} of {publicRepos} items</span>
            <Pagination 
              pages={resultPages} 
              currentPage={currentPage} 
              pagesCount={pagesCount}/>
        </div>
    </div>
  )
}

export default RepoList;