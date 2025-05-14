
import { Link } from 'react-router-dom'
import back from "../../Golovna/стрелка назад (2).png";

export default function Buy() {
  return (
    <div className="buy">
      <h1>Buy</h1>
      <p>Thank you for your purchase!</p>
      <p>Your order has been successfully placed.</p>
      <p>We will contact you shortly to confirm the details.</p>
      <p>If you have any questions, please feel free to reach out to us.</p>
      <button className="buy-button">Confirm Purchase</button>
    
    
    
    
    <Link to="/portfolio" className="back">
          <img src={back} alt="back"></img>
        </Link>
    </div>
  )
}
