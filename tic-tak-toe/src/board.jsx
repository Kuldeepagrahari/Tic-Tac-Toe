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
    const [gameResult, setGameResult] = useState("")

    function checkWin(){
        if(friendVal === "Friend v/s Friend ON!")
       { if(data[0] === data[1] && data[1] === data[2] && data[0] !== ""){
            winEffect(data[0])
        }
        else if(data[0] === data[4] && data[4] === data[8] && data[8] !== ""){
            winEffect(data[0])
        }
        else if(data[2] === data[4] && data[4] === data[6] && data[6] !== ""){
            winEffect(data[2])
        }
        else if(data[3] === data[4] && data[4] === data[5] && data[3] !== ""){
            winEffect(data[3])
        }
        else if(data[6] === data[7] && data[7] === data[8] && data[6] !== ""){
            winEffect(data[6])
        }
        else if(data[0] === data[3] && data[3] === data[6] && data[0] !== ""){
            winEffect(data[0])
        }
        else if(data[1] === data[4] && data[4] === data[7] && data[1] !== ""){
            winEffect(data[1])
        }
        else if(data[2] === data[5] && data[5] === data[8] && data[8] !== ""){
            winEffect(data[2])
        }}
       


        
       
    }
    function winEffect(winner){
          setLock(true)
        //   const announcer = document.getElementById("result")
          if (winner === 'x')
            {
             setGameResult(`Congratulations!  <img src=${cross} alt="circle" / > , you Win!`)
            //  announcer.innerHTML=`<img src=${cross}/>`

            }
          else if (winner === 'o'){
            setGameResult(`Congratulations!  <img src=${circle} alt="circle" / >  ,  you Win!`)
            // announcer.innerHTML=`<img src=${circle}/>`
          }
        //   else {
        //     var c = 0
        //     for ( var i = 0; i< 9; i++ ){
        //         if ( data[i] === 'o' || data[i] === 'x' ){
        //             c++
                    
        //         }
        //     }
        //     if(c === 9){
        //         setGameResult('Game Draw!')
        //         c = 0
        //     }
           
            
        //   }

    }
// checkWin(data)
    const  toggle = (event,ind) =>{
       if(friendVal === "Friend v/s Friend ON!")
{       if ( lock === true ){
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

       checkWin()
       
       var c = 0
       for ( var i = 0 ; i  < 9; i++ ){
            if ( data[i] === 'o' || data[i] === 'x' )c++
       }
       if ( c === 9 )if(gameResult === "")setGameResult("Game Draw!, Play Again")}
    }
  

    function Newer(){
        const divs = document.querySelectorAll(".box")
       for ( var i = 0; i < 9; i++ ){
        data[i] = ""
        divs[i].innerHTML = ""
       }
       setLock(false)
       setGameResult("")
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
            <h1 id="result" dangerouslySetInnerHTML={{ __html: gameResult }}></h1>
            
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
