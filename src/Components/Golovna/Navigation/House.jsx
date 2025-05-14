import back from "../стрелка назад (2).png"
import { Link } from 'react-router-dom'

export default function House() {
  return (
    <div className="house">

    <h3>House</h3>

    <Link to="/" className="back">
    <img src={back} alt="back"></img>
    </Link>
    </div>
  )
}
