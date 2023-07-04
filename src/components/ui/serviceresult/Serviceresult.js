import { useEffect } from 'react'
import {useDataContext} from '../../Context/UseContext'

let text = null;

export default function Serviceresult() {

const {data} = useDataContext()


  return (
    <div>
        <p>{data.law}</p>
        <p>{data.service}</p>
    </div>
  )
}
