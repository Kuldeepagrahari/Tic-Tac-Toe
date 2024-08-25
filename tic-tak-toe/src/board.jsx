import React, { useState } from 'react'
import cross from "./Assets/cross.png"
import circle from "./Assets/circle.png"
import winSound from "./Assets/win.mp3"
import gameSound from "./Assets/game.mp3"
import  chanceSound from "./Assets/chance.mp3"
let data = ["","","","","","","","","",""]
const Board = () => {
    const winAudio = new Audio(winSound);
    const gameAudio = new Audio(gameSound);
    const chanceAudio = new Audio(chanceSound);

    const [botStyle, setBotStyle] = useState("btn1")
    const [friendStyle, setFriendStyle] = useState("friend")
    const [friendVal, setFriendVal] = useState("Play with your Friend")
    const [botVal, setBotVal] = useState("Play with our Bot")
    const [flag, setFlag] = useState("circle")
    const [lock, setLock] = useState(false)
    const [gameResult, setGameResult] = useState("Click on Best Box!")
    function winBackground (a,b,c){
      document.getElementById(`b${a}`).style.boxShadow="2px 2px 20px inset gold"
      document.getElementById(`b${b}`).style.boxShadow="2px 2px 20px inset gold"
      document.getElementById(`b${c}`).style.boxShadow="2px 2px 20px inset gold"
      
    }
    function checkWin(){
        if(friendVal === "Friend v/s Friend ON!")
       { if(data[0] === data[1] && data[1] === data[2] && data[0] !== ""){
            winEffect(data[0])
            var a = 0, b = 1, c  = 2
            winBackground(a, b, c)
            console.log("sam")

        }
        else if(data[0] === data[4] && data[4] === data[8] && data[8] !== ""){
            winEffect(data[0])
            var a = 0, b = 4, c  = 8
            winBackground(a, b, c)
            console.log("sam")
        }
        else if(data[2] === data[4] && data[4] === data[6] && data[6] !== ""){
            winEffect(data[2])
            var a = 2, b = 4, c  = 6
            winBackground(a, b, c)
            console.log("sam")
        }
        else if(data[3] === data[4] && data[4] === data[5] && data[3] !== ""){
            winEffect(data[3])
            var a = 3, b = 4, c  = 5
            winBackground(a, b, c)
            console.log("sam")
        }
        else if(data[6] === data[7] && data[7] === data[8] && data[6] !== ""){
            winEffect(data[6])
            var a = 6, b = 7, c  = 8
            winBackground(a, b, c)
            console.log("sam")
        }
        else if(data[0] === data[3] && data[3] === data[6] && data[0] !== ""){
            winEffect(data[0])
            var a = 0, b = 3, c  = 6
            winBackground(a, b, c)
            console.log("sam")
        }
        else if(data[1] === data[4] && data[4] === data[7] && data[1] !== ""){
            winEffect(data[1])
            var a = 1, b = 4, c  = 7
            winBackground(a, b, c)
            console.log("sam")
        }
        else if(data[2] === data[5] && data[5] === data[8] && data[8] !== ""){
            winEffect(data[2])
            var a = 2, b = 5, c  = 8
            winBackground(a, b, c)
            console.log("sam")
        }}
        chanceAudio.play()

      
       
    }
    function winEffect(winner){
          setLock(true)
          winAudio.play()
        //   const announcer = document.getElementById("result")
          if (winner === 'x')
            {
             setGameResult(`Congratulations <img src=${cross} alt="circle" / > , you Win!`)
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
        if(!data[ind]){
       if (  flag === "circle" ){
          
           event.target.innerHTML = `<img src = ${circle} />`
           setFlag("cross")
           data[ind] = 'o'
       }
       else {
           event.target.innerHTML = `<img src = ${cross} />`
           setFlag("circle")
           data[ind] = 'x'
       }}

       checkWin()
       
       var c = 0
       for ( var i = 0 ; i  < 9; i++ ){
            if ( data[i] === 'o' || data[i] === 'x' )c++
       }
       console.log(c)
       if ( c === 9 )if(gameResult === "just click on your best box !")setGameResult("Game Draw! Play Again")
       console.log(gameResult)
    
    }
    }
  

    function Newer(){
        const divs = document.querySelectorAll(".box")
       for ( var i = 0; i < 9; i++ ){
        data[i] = ""
        divs[i].innerHTML = ""
       }
       setLock(false)
       setGameResult("just click on your best box !")
    //    console.log(divs[0].style.backgroundColor)
       for(var i = 0; i<9; i++)
       divs[i].style.boxShadow=""

    //    console.log(divs[0].style.backgroundColor)
       
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
                }} className="box" id="b0"></div><div onClick={(event)=>{
                    toggle(event,1)
                }} className="box" id="b1"></div><div onClick={(event)=>{
                    toggle(event,2)
                }} className="box" id="b2"></div></div>
                <div className="row2"><div onClick={(event)=>{
                    toggle(event,3)
                }} className="box" id="b3"></div><div onClick={(event)=>{
                    toggle(event,4)
                }} className="box" id="b4"></div><div onClick={(event)=>{
                    toggle(event,5)
                }} className="box" id="b5"></div></div>
                <div className="row3"><div onClick={(event)=>{
                    toggle(event,6)
                }} className="box" id="b6"></div><div onClick={(event)=>{
                    toggle(event,7)
                }} className="box" id="b7"></div><div onClick={(event)=>{
                    toggle(event,8)
                }} className="box" id="b8"></div></div>
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
