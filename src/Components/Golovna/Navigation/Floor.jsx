import React from 'react'
import back from "../стрелка назад (2).png"
import { Link } from 'react-router-dom'


export default function Floor() {
  return (
    <div className="floor">
    
    <h3>Floor</h3>
    <Link to="/" className="back">
    <img src={back} alt="back"></img>
    </Link>
    </div>
  )
}
