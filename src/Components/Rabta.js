import React from 'react'
import './Rabta.css'
const Rabta = () => {
  return (
    <div className='contact-main'>
      <div className='contact'>
        <h2>Contact Us</h2>
        <form>
          <label >Name:</label><br></br>
          <input type='text'></input><br></br>
          <label >Email:</label><br></br>
          <input type='email'></input><br></br>
          <label >Message:</label><br></br>
          <textarea rows="3" cols="40"></textarea><br></br>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Rabta;