
import { Link } from 'react-router-dom'
import back from "../../Golovna/стрелка назад (2).png";
import "./buy.css"; 

import React, { useState } from 'react';

export default function Buy() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {
    setForm({   
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="buy">
      <h1>Buy</h1>
      <p>Thank you for your purchase!</p>
      <p>Your order has been successfully placed.</p>
      <p>We will contact you shortly to confirm the details.</p>
      <p>If you have any questions, please feel free to reach out to us.</p>
      <div className="form-auto">
      <span>Form to fill out</span>
        <form className="form-all">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
         
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
        
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} required />
          
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={form.address} onChange={handleChange} required />
        </form>
      
      </div>
      <Link to="/purchase"><button className="buy-button">Confirm Purchase</button></Link>
    
    <p>Name - {form.name}</p>
    <p>E-mail - {form.email}</p>
    <p>Phone - {form.phone}</p>
    <p>Address - {form.address}</p>
      
        <Link to="/portfolio" className="back-auto">
          <img src={back} alt="back" />
        </Link>
     
    </div>
  )
}
