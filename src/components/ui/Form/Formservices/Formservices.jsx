
import { useForm, FormProvider} from "react-hook-form"
import styles from './Formeservices.module.css'
import Corporateradio from "./serviceRadio/Corporateradio";
import Serviceselect from "./serviceSelect/Serviceselect";
import Propertyradio from "./serviceRadio/Propertyradio";
import Imigrationradio from "./serviceRadio/Imigrationradio";
import {useDataContext} from '../../../Context/UseContext'

export const Formservices = () => {
  const {addbookData, data} = useDataContext()

  const methods = useForm({defaultValues:{
    law: '',
    service: ''
  }});

  const area = methods.watch('law')

  const onSubmit = (data) => {
    addbookData(data)
  }

console.log(data)

  return (
    <FormProvider {...methods}>
      <div>
       <h1>CHOOSE SERVICE</h1>
       <form onSubmit={methods.handleSubmit(onSubmit)}>
      <Serviceselect/>
      {area === 'corporate_law'&& (<Corporateradio/>)} 
      {area === 'property_law'&& (<Propertyradio/>)} 
      {area === 'imigration_law'&& (<Imigrationradio/>)} 
      <input type="submit"/>
       </form>
    </div>
    </FormProvider>
  )
}
