import React from 'react'



export default function Bookappointment() {


  return (
    <div>
      <h2>BOOK APPOINTMENT</h2>
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
        <label htmlFor="Date">
          Choose date
        </label>
        <br />
        <input type="date" />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}
