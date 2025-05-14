import React from 'react'
import { Link } from 'react-router-dom'
import back from "../стрелка назад (2).png"
import "./flat.css"

export default function Flat() {
  return (
    <div className="flat">
    
    <h3>Flat</h3>
    <Link to="/" className="back">
    <img src={back} alt=""></img>
    </Link>
    </div>
  )
}
