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


{/* <div>
<label htmlFor="name">Enter your full name:</label>
<br />
<input type="text" {...register("name", { required: true})}/>
{errors.name && (
<div style={{color: 'red' }}>Enter your name</div>
)}
</div>
<br />
<div>
<label htmlFor="name">Enter your mobile number:</label>
<br />
<input type="number" {...register("phone", { minLength: 8, maxLength: 25 })}/>
{errors.phone && (
<div style={{color: 'red' }}>Enter your number</div>
)}
</div> */}