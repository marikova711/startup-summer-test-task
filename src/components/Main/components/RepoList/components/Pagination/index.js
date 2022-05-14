import React from 'react';
import styles from './style.module.css';
import { setCurrentPage } from '../../../../../../redux/actions/repos';
import { useDispatch } from 'react-redux';
import { ReactComponent as ArrowLeft } from '../.././../../../../images/arrowLeft.svg'
import { ReactComponent as ArrowRight } from '../.././../../../../images/arrowRight.svg'

const Pagination = (props) => {
    const dispatch = useDispatch();
    const currentPage = props.currentPage;
    const pages = props.pages;
    const pagesCount = props.pagesCount;

    return (
        <div className={styles.pagination}>
            <button
                className={currentPage === 1 ? styles.disabled : ''}
                onClick={() => dispatch(setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1))}>
                    <ArrowLeft fill={currentPage === 1 ? '#808080' : '#0064EB'}/></button>
            {pages.map((page, index) => <span 
                key={index}
                className={`${currentPage === page ? styles.currentPage : styles.page} ${page === '...' ? styles.disabled : ''}`}
                onClick={page !== '...' ? () => dispatch(setCurrentPage(page)) : undefined}>{page}</span>)}
            <button 
                className={currentPage === pagesCount ? styles.disabled : ''}
                onClick={() => dispatch(setCurrentPage(currentPage === pagesCount ? currentPage : currentPage + 1))}>
                    <ArrowRight stroke={currentPage === pagesCount ? '#808080' : '#0064EB'}/></button>
        </div>
    )
}

export default Pagination;