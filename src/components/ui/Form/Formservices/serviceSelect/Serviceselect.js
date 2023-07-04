import React from 'react'
import { useFormContext } from "react-hook-form";

export default function Serviceselect() {
    const {register, formState: { errors },} = useFormContext()

  return (
    <>
<div>
      <select {...register('law', {required:true})}>
        <option value="" disabled>Choose law area</option>
        <option value="corporate_law">Corporate law</option>
        <option value="property_law">Property law</option>
        <option value="imigration_law">Imigration law</option>
      </select>
      {errors.law && (
          <div style={{color: 'red' }}>Choose law area</div>)}
      </div>
    </>
  )
}

 