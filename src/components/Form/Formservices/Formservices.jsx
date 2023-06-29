import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useForm } from "react-hook-form"

export const Formservices = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({defaultValues:{
    name: '',
    phone: '',
    id: uuidv4(),
  },})

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
       <h1>CHOOSE SERVICE</h1>
       <form onSubmit={handleSubmit(onSubmit)}>
        <div>
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
      </div>
        <input type="submit" />
       </form>
    </div>
  )
}