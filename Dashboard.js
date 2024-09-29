
import { useState } from 'react';
import './App.css';

function Dashboard() {

  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    start: "",
    end: "",
    cc: "",
    exp: "",
    csv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formData)

    const response = await fetch('/', {
        method:"POST",
        body: JSON.stringify({formData}),
        headers: {"Content-Type": "application/json"} 

    })

  };

  return (
    <form className='App-header' onSubmit={handleSubmit}>
      <div>
        Book Your Reservation!
      </div>
      <div>
        <input placeholder='First Name' onChange={handleInputChange} name='first' value={formData.first}></input>
      </div>
      <div>
        <input placeholder='Last Name' onChange={handleInputChange} name='last' value={formData.last}></input>
      </div>
      <div>
        <input placeholder='Email' onChange={handleInputChange} name='email' value={formData.email}></input>
      </div>
      <div>
        <input placeholder='Phone Number' onChange={handleInputChange} name='phone' value={formData.phone}></input>
      </div>
      <div>
        <input placeholder='Start Date' style={{width: "100px"}} onChange={handleInputChange} name='start' value={formData.start}></input>
        -
        <input placeholder='End Date' style={{width: "100px"}} onChange={handleInputChange} name='end' value={formData.end}></input>
      </div>
      <div>
        <input placeholder='Credit Card Number' onChange={handleInputChange} name='cc' value={formData.cc}></input>
      </div>
      <div>
        <input placeholder='mm/yyyy' style={{width: "60px"}}  className='App-Space' onChange={handleInputChange} name='exp' value={formData.exp}></input>
        <input placeholder='CSV' style={{width: "60px"}} onChange={handleInputChange} name='csv' value={formData.csv}></input>
      </div>
      <div>
        <button type='submit'>submit</button>
      </div>
    </form>
  );
}

export default Dashboard;