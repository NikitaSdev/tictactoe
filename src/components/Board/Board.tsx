import React, {FC} from 'react';
import s from "../../App.module.scss";
import Square from "../Square/Square";

interface boardProps{
    squares:Array<number[]> | null
    click:any
}

const Board:FC<boardProps> = ({squares,click}) => {
    return (
        <div className={s.board}>
            {
                squares?.map((square,index) => (
                    <Square key={index} value={square} onClick={() => click(index)}/>
                    )
                )
            }
        </div>
    );
};

export default Board;