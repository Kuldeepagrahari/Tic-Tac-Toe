import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import {Link} from "react-router-dom"
const Nav = () => {
  return (
    <div>
      <nav>
        <h1>Tic Tac Toe</h1>
        <div className="social">
          <Link to="https://github.com/Kuldeepagrahari">< FaSquareGithub style={{backgroundImage: "linear-gradient(45deg, gold,white)", color:"black", width:"25", height:"25", borderRadius:"5px"}}/></Link>
          <Link to="https://www.linkedin.com/in/kuldeep-agrahari-56b159260"><FaLinkedin style={{backgroundImage: "linear-gradient(45deg, gold,white)", color:"black",width:"25", height:"25", borderRadius:"5px"}}/></Link>
          <Link to="https://x.com/kuldeep_106"><FaSquareXTwitter style={{backgroundImage: "linear-gradient(45deg, gold,white)", color:"black",width:"25", height:"25", borderRadius:"5px"}}/></Link>
        </div>
      </nav>
    </div>
  )
}

export default Nav
