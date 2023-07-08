import React from 'react'
import { useFormContext } from "react-hook-form";
import { memo } from 'react'

const Propertyradio = memo (() => {
    const {register, formState: { errors },} = useFormContext()
  return (
    <>
<label htmlFor="New building">
    <input type="radio" value='New building' {...register("service", {required: true})}/>
    Make document for buildings
  </label>
  <label htmlFor="Building reconstruction">
  <input type="radio" value='Building reconstruction' {...register("service", {required: true})}/>
  Building reconstruction
  </label>
  <label htmlFor="Building sale">
  <input type="radio" value='Sale building' {...register("service", {required: true})}/>
  Building sale
  </label>
  {errors.law && (
    <div style={{color: 'red' }}>Choose service</div>)}
    </>
  )
})

export default Propertyradio