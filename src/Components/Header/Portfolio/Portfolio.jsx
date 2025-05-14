import "./portfolio.css";
import Autotype from "../../../Components/Data";
import { Link } from "react-router-dom";
import back from "../../Golovna/стрелка назад (2).png";
import Autocard from "./Autocard";
export default function Portfolio() {
  
  

  const Autocards = () => {
    return Autotype.map(({ id, name, year, price, mileage, image }) => (
      <Autocard 
      key={id}
      id={id}
      name={name} 
      year={year}
      price={price}
      mileage={mileage}
      image={image}
      />   
      
    ));
  };

  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="cards">
        <Autocards />
       </div>
      <Link to="/" className="back">
          <img src={back} alt="back"></img>
        </Link>
    </div>
  );
}
