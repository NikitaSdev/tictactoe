import React from 'react';
import s from "../../App.module.scss";

const Square = (props:any) => {
    return (
        <button className={s.square} onClick={props.onClick}>
            {props.value}
        </button>
    );
};

export default Square;