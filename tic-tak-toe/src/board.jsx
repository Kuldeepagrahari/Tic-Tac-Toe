import React, { useState } from 'react'
import cross from "./Assets/cross.png"
import circle from "./Assets/circle.png"

let data = ["","","","","","","","","",""]
const Board = () => {

    const [botStyle, setBotStyle] = useState("btn1")
    const [friendStyle, setFriendStyle] = useState("friend")
    const [friendVal, setFriendVal] = useState("Play with your Friend")
    const [botVal, setBotVal] = useState("Play with our Bot")
    const [flag, setFlag] = useState("circle")
    const [lock, setLock] = useState(false)

    function checkWin(data){
        if(data[0] === data[1] && data[1] === data[2] && data[0] === data[2]){
            setLock(true)
        }
    }
// checkWin(data)
    const  toggle = (event,ind) =>{
       
       if ( lock === true ){
        return 0;
       }

       if ( flag === "circle" ){
          
           event.target.innerHTML = `<img src = ${circle} />`
           setFlag("cross")
           data[ind] = 'o'
       }
       else {
           event.target.innerHTML = `<img src = ${cross} />`
           setFlag("circle")
           data[ind] = 'x'
       }
    }
    console.log(data[0] + data[1] + data[2])

    function Newer(){
        const divs = document.querySelectorAll(".box")
       for ( var i = 0; i < 9; i++ ){
        data[i] = ""
        divs[i].innerHTML = ""
       }
    //    console.log(data[0] + data[1] + data[2])
      
       
    }
    function Bot(){
        if ( botStyle === "btn1"){
            setBotVal("You v/s our Bot ON!")
            setBotStyle("bot-off")
            setFriendStyle("friend")
            setFriendVal("Play with your Friend")
        }
        else {
            setBotStyle("btn1")
            setBotVal("Play with our Bot")
        }
        console.log(botStyle)
    }
    function Friend(){
      if ( friendStyle === "friend"){
        setFriendVal("Friend v/s Friend ON!")
        setFriendStyle("friend-off")
        setBotStyle("btn1")
        setBotVal("Play with our Bot")
      }
      else {
        setFriendStyle("friend")
        setFriendVal("Play with your Friend")
      }
    }
    return (
        <div id="game-area">
        <div id="board-left">
            
            <div className="game-board">
                <div  className="row1">
                    <div onClick={(event)=>{
                    toggle(event,0) 
                }} className="box"></div><div onClick={(event)=>{
                    toggle(event,1)
                }} className="box"></div><div onClick={(event)=>{
                    toggle(event,2)
                }} className="box"></div></div>
                <div className="row2"><div onClick={(event)=>{
                    toggle(event,3)
                }} className="box"></div><div onClick={(event)=>{
                    toggle(event,4)
                }} className="box"></div><div onClick={(event)=>{
                    toggle(event,5)
                }} className="box"></div></div>
                <div className="row3"><div onClick={(event)=>{
                    toggle(event,6)
                }} className="box"></div><div onClick={(event)=>{
                    toggle(event,7)
                }} className="box"></div><div onClick={(event)=>{
                    toggle(event,8)
                }} className="box"></div></div>
            </div>
            
        </div>
        <div id="board-right">
        <button onClick={Bot} className = {botStyle} >{botVal}</button>
        <button onClick={Friend} className={friendStyle} >{friendVal}</button>
        <button onClick={Newer} id="new" className='green-btn'>Start a New Game</button>
        </div>
        
        </div>
    )
}

export default Board
