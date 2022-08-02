import { useState } from 'react';
import Winner from './calculateWinner';
import Board from "./Board";
import style from './Game.css'
function Game() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = Winner(board);
    const handleClick = (i) => {
        const boardCopy = [...board];
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);

    }
    const renderMoves = () => (

        <button onClick={() => setBoard(Array(9).fill(null))}>
            Start Game
        </button>
    )
    return (
        <>
            <Board squares={board} onClick={handleClick} />
            <div className='container'>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </>
    );
}

export default Game;