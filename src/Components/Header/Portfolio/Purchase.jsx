import { Link } from 'react-router-dom'
import back from "../../Golovna/стрелка назад (2).png";


export default function Purchase() {
  return (
    <div>
    
    <h2>Purchase</h2>    
    <p>Name - {form.name}</p>
    <p>E-mail - {form.email}</p>
    <p>Phone - {form.phone}</p>
    <p>Address - {form.address}</p>
    
    <div className="back-auto">
        <Link to="/buy">
          <img src={back} alt="back" />
        </Link>
      </div>
    </div>
  )
}
