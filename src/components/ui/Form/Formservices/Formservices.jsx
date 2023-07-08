import { useForm, FormProvider } from "react-hook-form";
import Button from "@mui/material/Button";
import styles from "./Formeservices.module.css";
import Corporateradio from "./serviceRadio/Corporateradio";
import Serviceselect from "./serviceSelect/Serviceselect";
import Propertyradio from "./serviceRadio/Propertyradio";
import Imigrationradio from "./serviceRadio/Imigrationradio";
import { useDataContext } from "../../../Context/UseContext";
import { memo } from 'react';

export const Formservices = memo (() => {
  const { addbookData, data } = useDataContext();

  const methods = useForm({
    defaultValues: {
      law: "",
      service: "",
    },
  });

  const area = methods.watch("law");

  const onSubmit = (data) => {
    addbookData(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <div className={styles.flex_Container}>
        <h1>CHOOSE SERVICE:</h1>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className={styles.flex_Container}
        >
          <Serviceselect />
          {area === "Corporate law" && <Corporateradio />}
          {area === "Property law" && <Propertyradio />}
          {area === "Imigration law" && <Imigrationradio />}
          {/* <button type="submit">Calculate</button> */}
          <Button type="submit" color="secondary" size="small" variant="contained">
            Calculate
          </Button>
        </form>
      </div>
    </FormProvider>
  );
});
