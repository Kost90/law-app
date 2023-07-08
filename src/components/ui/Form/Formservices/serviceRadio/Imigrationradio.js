import React from 'react'
import { useFormContext } from "react-hook-form";
import { memo } from 'react'

const Imigrationradio = memo (() => {
    const {register, formState: { errors },} = useFormContext()
  return (
    <>
<label htmlFor="Make document for visa">
    <input type="radio" value='Make visa' {...register("service", {required: true})}/>
    Make document for visa
  </label>
  <label htmlFor="Continue visa">
  <input type="radio" value='Continue visa' {...register("service", {required: true})}/>
  Continue visa
  </label>
  <label htmlFor="Help with residence">
  <input type="radio" value='Residence' {...register("service", {required: true})}/>
  Help with residence
  </label>
  {errors.law && (
    <div style={{color: 'red' }}>Choose service</div>)}
    </>
  )
})

export default Imigrationradio