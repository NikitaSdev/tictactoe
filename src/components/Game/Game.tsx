import React, {useState} from 'react';
import Board from "../Board/Board";
import {calculateWinner} from '../../Winner'
import s from "../../App.module.scss"
const Game = () => {
    const [board,setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (index:any) => {
        const boardCopy = [...board]
        if(winner || boardCopy[index]){
            return null
        }
        boardCopy[index] = xIsNext ? 'X' : 'O'
        setBoard((boardCopy))
        setXIsNext(!xIsNext)
    }
    const startNewGame = () =>{
        return(
            <button className={s.start} onClick={() =>setBoard(Array(9).fill(null))}>Заново</button>
        )
    }

    return (
        <div className={s.game}>
            {startNewGame()}
            <Board squares={board} click={handleClick}/>
            <p className={s.info}>
                {
                    winner ? 'Выйграли ' + winner : ('Сейчас ходят' + (xIsNext ? 'X' : "O"))
                }
            </p>
        </div>
    );
};

export default Game;