import React from 'react'
import { useFormContext } from "react-hook-form";
import { memo } from 'react';

const Serviceselect = memo(() => {
    const {register, formState: { errors },} = useFormContext()

  return (
    <>
<div>
      <select {...register('law', {required:true})}>
        <option value="" disabled>Choose law area</option>
        <option value="Corporate law">Corporate law</option>
        <option value="Property law">Property law</option>
        <option value="Imigration law">Imigration law</option>
      </select>
      {errors.law && (
          <div style={{color: 'red' }}>Choose law area</div>)}
      </div>
    </>
  )
})

export default Serviceselect

 