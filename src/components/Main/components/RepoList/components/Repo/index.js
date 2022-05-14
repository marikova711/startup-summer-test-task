import React from "react";
import styles from './style.module.css';

const Repo = (props) => {
    const repo = props.repo;

    return (
        <div className={styles.repo}>
            <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>{repo.name}</a>
            <p>{repo.description}</p>
        </div>
    )
};

export default Repo;