import React, {useState} from 'react'

export default function Contactus() {


  return (
    <div className='border'>
      <h2>Contact us:</h2>
      <p>Leave your message and we call back</p>
      <form action="">
      <label htmlFor="Name">
          Name
        </label>
        <br />
        <input type="text" placeholder='Name'/>
        <br />
        <label htmlFor="Phone number">
          Phone number
        </label>
        <br />
        <input type="number" placeholder='Number'/>
        <br />
        <textarea name="message" id="message" cols="15" rows="10"></textarea>
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}
