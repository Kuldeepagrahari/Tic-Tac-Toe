import React, { useState } from 'react';
import cross from "../Assets/cross.png";
import circle from "../Assets/circle.png";
import winSound from "../Assets/win.mp3";
import gameSound from "../Assets/game.mp3";
import chanceSound from "../Assets/chance.mp3";

let data = ["","","","","","","","","",""];

const Board = () => {
    const winAudio = new Audio(winSound);
    const gameAudio = new Audio(gameSound);
    const chanceAudio = new Audio(chanceSound);

    const [botStyle, setBotStyle] = useState("btn1");
    const [friendStyle, setFriendStyle] = useState("friend");
    const [friendVal, setFriendVal] = useState("Play with your Friend");
    const [botVal, setBotVal] = useState("Play with our Bot");
    const [flag, setFlag] = useState("circle");
    const [lock, setLock] = useState(false);
    const [gameResult, setGameResult] = useState("Click on Best Box!");
    const [isBotTurn, setIsBotTurn] = useState(false);

    function winBackground(a, b, c) {
        document.getElementById(`b${a}`).style.boxShadow = "2px 2px 20px inset gold";
        document.getElementById(`b${b}`).style.boxShadow = "2px 2px 20px inset gold";
        document.getElementById(`b${c}`).style.boxShadow = "2px 2px 20px inset gold";
    }

    function checkWin() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (data[a] && data[a] === data[b] && data[a] === data[c]) {
                winEffect(data[a]);
                winBackground(a, b, c);
                return;
            }
        }
        
        if (!data.includes("")) {
            setGameResult("Game Draw! Play Again");
        } else {
            chanceAudio.play();
            setLock(true)
        }
    }

    function winEffect(winner) {
        setLock(true);
        winAudio.play();
        setGameResult(`Congratulations! <img src=${winner === 'x' ? cross : circle} alt="${winner}" />, you Win!`);
    }

    const toggle = (event, ind) => {
        if (lock || data[ind]) return;
    
        if (friendVal === "Friend v/s Friend ON!" || botVal === "You v/s our Bot ON!") {
            if (flag === "circle") {
                event.target.innerHTML = `<img src=${circle} />`;
                data[ind] = 'o';
                setFlag("cross");
                checkWin();
    
                if (botVal === "You v/s our Bot ON!" && !lock) {
                    setIsBotTurn(true);
                    setTimeout(botMove, 500); // Short delay for bot's turn
                }
            } else {
                event.target.innerHTML = `<img src=${cross} />`;
                data[ind] = 'x';
                setFlag("circle");
                checkWin();
            }
        }
    };
    
    function botMove() {
        if (!isBotTurn || lock) return;
    
        let availableIndices = data.map((val, index) => val === "" ? index : null).filter(val => val !== null);
        if (availableIndices.length === 0) return;
    
        let botIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
        data[botIndex] = flag === "circle" ? 'x' : 'o'; // Bot plays the opposite of current player
        document.getElementById(`b${botIndex}`).innerHTML = `<img src=${flag === "circle" ? cross : circle} />`;
    
        setFlag(flag === "circle" ? "circle" : "cross");
        setIsBotTurn(false);
        checkWin();
    }
    

    function Newer() {
        const divs = document.querySelectorAll(".box");
        for (var i = 0; i < 9; i++) {
            data[i] = "";
            divs[i].innerHTML = "";
            divs[i].style.boxShadow = "";
        }
        setLock(false);
        setGameResult("Just click on your best box!");
    }

    function Bot() {
        if (botStyle === "btn1") {
            setBotVal("You v/s our Bot ON!");
            setBotStyle("bot-off");
            setIsBotTurn(true)
            setFriendStyle("friend");
            setFriendVal("Play with your Friend");
        } else {
            setBotStyle("btn1");
            setBotVal("Play with our Bot");
        }
    }

    function Friend() {
        if (friendStyle === "friend") {
            setFriendVal("Friend v/s Friend ON!");
            setFriendStyle("friend-off");
            setBotStyle("btn1");
            setBotVal("Play with our Bot");
        } else {
            setFriendStyle("friend");
            setFriendVal("Play with your Friend");
        }
    }

    return (
        <div id="game-area">
            <h1 id="result" dangerouslySetInnerHTML={{ __html: gameResult }}></h1>
            <div id="board-left">
                <div className="game-board">
                    <div className="row1">
                        <div onClick={(event) => toggle(event, 0)} className="box" id="b0"></div>
                        <div onClick={(event) => toggle(event, 1)} className="box" id="b1"></div>
                        <div onClick={(event) => toggle(event, 2)} className="box" id="b2"></div>
                    </div>
                    <div className="row2">
                        <div onClick={(event) => toggle(event, 3)} className="box" id="b3"></div>
                        <div onClick={(event) => toggle(event, 4)} className="box" id="b4"></div>
                        <div onClick={(event) => toggle(event, 5)} className="box" id="b5"></div>
                    </div>
                    <div className="row3">
                        <div onClick={(event) => toggle(event, 6)} className="box" id="b6"></div>
                        <div onClick={(event) => toggle(event, 7)} className="box" id="b7"></div>
                        <div onClick={(event) => toggle(event, 8)} className="box" id="b8"></div>
                    </div>
                </div>
            </div>
            <div id="board-right">
                <button onClick={Bot} className={botStyle}>{botVal}</button>
                <button onClick={Friend} className={friendStyle}>{friendVal}</button>
                <button onClick={Newer} id="new" className='green-btn'>Start a New Game</button>
            </div>
        </div>
    );
};

export default Board;
