import React from 'react';
import styles from './style.module.css'

const Input = (props) => {

    const onChangeHandler = (e) => {
        props.onChange(e.target.value);
    }
        return (
            <input
              {...props}
              value={props.value}
              type={props.type}
              className={styles.input}
              onChange={onChangeHandler} 
            />
        )
}

export default Input;