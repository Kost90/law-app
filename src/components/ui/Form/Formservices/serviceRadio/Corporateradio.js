import React from 'react'
import { useFormContext } from "react-hook-form";

export default function Corporateradio() {
    const {register, formState: { errors },} = useFormContext()
  return (
    <>
<label htmlFor="create-company">
    <input type="radio" value='create-company' {...register("service", {required: true})}/>
    Create company
  </label>
  <label htmlFor="remove-company">
  <input type="radio" value='remove-company' {...register("service", {required: true})}/>
  Remove company
  </label>
  <label htmlFor="add-new-owners">
  <input type="radio" value='add-new-owners' {...register("service", {required: true})}/>
  Add new owners to company
  </label>
  {errors.law && (
    <div style={{color: 'red' }}>Choose service</div>)}
    </>
  )
}

 