import Square from "./Square";
import style from './Board.css'
function Board({ squares, onClick }) {
    return (
        <div>
            {
                squares.map((square, i) => (
                    <Square key={i} value={square} onClick={() => onClick(i)} />
                ))
            }
        </div>

    );
}

export default Board;