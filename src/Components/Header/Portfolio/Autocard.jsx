import "./autocard.css"
import { Link } from "react-router-dom";


const Autocard = ({ id, name, year, price, mileage, image }) => {
    return (
      <div className="autocard">
        <p className="id">ID: {id}</p>
        <p className="name"> Name: {name}</p>
        <p className="year">Year: {year}</p>
        <p className="price">Price: $ {price}</p>
        <p className="mileage">Mileage: $ {mileage}</p>
        <img className="image" src={image} alt="pic" />
        <Link to="/buy" className="buy">
        <button className="buy-button">Buy</button>
        </Link>
      </div>
    );
  };
    export default Autocard;