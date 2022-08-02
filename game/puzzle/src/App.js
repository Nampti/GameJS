import { useState } from 'react';
function App() {
  const shuffle = (a) => {
    for (let i = a.length - 1; i > 1; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const layout = (n) => {
    const row = Math.floor(n / 3);
    const col = n % 3;
    return [80 * col, 80 * row];
  }
  const [board, setBoard] = useState((myArray));
  const win = () => {
    let cnt = 0;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === i + 1) {
        cnt++;
      }
      else {
        cnt--;
      }
    }
    return cnt === 9;
  }
  return (
    <div className="container">
      <div className="game">
        {board.map((item, index) => {
          let [x, y] = layout(board.indexOf(item))
          let cellClass = (item === 9) ? "cell empty-cell" : "cell";
          return (
            <div
              key={index}
              className={cellClass}
              onClick={() => {
                let emptyIndex = board.indexOf(9);
                let targetIndex = board.indexOf(item);
                const dif = Math.abs(targetIndex - emptyIndex);
                if (dif === 1 || dif === 3) {
                  let positions = [...board]
                  positions[emptyIndex] = item;
                  positions[targetIndex] = 9;
                  setBoard(positions);
                }
                if (win()) {
                  setBoard(shuffle(myArray))
                }
              }}
              style={{ transform: `translate3d(${x}px,${y}px,0) scale(1.1)` }}
            > {item}
            </div>
          )

        }
        )
        }
      </div >
    </div >
  );
}

export default App;
