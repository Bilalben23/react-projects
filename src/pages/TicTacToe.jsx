import React, { useEffect, useState } from 'react'

export default function TicTacToe() {
    const [isXTurn, setIsXTurn] = useState(true);
    const [squares, setSquares] = useState(() => Array(9).fill(''))
    const [status, setStatus] = useState('')
    const [winState, setWinState] = useState([])

    function handleOnClick(currentSquare) {
        let copySquares = [...squares];
        copySquares[currentSquare] = isXTurn ? 'X' : 'O';
        if (squares[currentSquare] !== '' || getWinner(squares)) return;
        setSquares(copySquares);
        setIsXTurn(!isXTurn)
    }

    useEffect(() => {
        const winner = getWinner(squares);
        if (!winner && squares.every(square => square !== '')) {
            setStatus("The Draw, Restart The Game!")
        } else if (winner) {
            setStatus(`The Winner is: ${winner}`)
        } else {
            setStatus(`The Turn of ${isXTurn ? 'X' : 'O'}`);
        }

    }, [isXTurn, squares])



    function getWinner(squares) {
        const winnerStates = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let winnerState of winnerStates) {
            const [x, y, z] = winnerState;
            if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
                setWinState(winnerState)
                return squares[x]
            }
        }
        return null;
    }


    function handleRestart() {
        setIsXTurn(true)
        setStatus('')
        setSquares(Array(9).fill(''))
        setWinState([])
    }

    return (
        <div>
            <div className='w-fit mx-auto grid grid-cols-1'>
                <div className='flex items-center justify-center'>
                    <Square
                        onClick={() => handleOnClick(0)}
                        isInWinState={winState.includes(0)}
                        value={squares[0]}
                    />
                    <Square
                        onClick={() => handleOnClick(1)}
                        isInWinState={winState.includes(1)}
                        value={squares[1]}
                    />
                    <Square
                        onClick={() => handleOnClick(2)}
                        isInWinState={winState.includes(2)}
                        value={squares[2]}
                    />
                </div>
                <div className='flex items-center justify-center'>
                    <Square
                        onClick={() => handleOnClick(3)}
                        isInWinState={winState.includes(3)}
                        value={squares[3]}
                    />
                    <Square
                        onClick={() => handleOnClick(4)}
                        isInWinState={winState.includes(4)}
                        value={squares[4]}
                    />
                    <Square
                        onClick={() => handleOnClick(5)}
                        isInWinState={winState.includes(5)}
                        value={squares[5]}
                    />
                </div>
                <div className='flex items-center justify-center'>
                    <Square
                        onClick={() => handleOnClick(6)}
                        isInWinState={winState.includes(6)}
                        value={squares[6]}
                    />
                    <Square
                        onClick={() => handleOnClick(7)}
                        isInWinState={winState.includes(7)}
                        value={squares[7]}
                    />
                    <Square
                        onClick={() => handleOnClick(8)}
                        isInWinState={winState.includes(8)}
                        value={squares[8]}
                    />
                </div>
            </div>
            <div className='w-fit mx-auto mt-2 text-center'>
                <p className='font-bold'>{status}</p>

                <button type='button' onClick={handleRestart} className='px-3 mt-2 text-white cursor-pointer py-1 bg-red-500 rounded shadow transition hover:opacity-90 hover:shadow-none'>Restart</button>
            </div>
        </div>
    )
}



function Square({ value, isInWinState, onClick }) {
    return (
        <button
            className={`font-bold w-[100px] h-[100px] bg-slate-200 border-2 border-black -ml-1 -mb-1 transition hover:bg-slate-100 ${isInWinState && '!bg-green-500'}`}
            onClick={onClick}>
            {value}
        </button>
    )
}
