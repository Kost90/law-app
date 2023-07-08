import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { v4 as uuidv4 } from "uuid";
import useDataContext from "../../../Context/UseContext";
import styles from './Formedit.module.css'

function Formedit({id}) {
  const { editComment, setOpen } = useDataContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      text: "",
      id: id,
      delete: uuidv4(),
    },
  });

  const onSubmit = (data) => {
    editComment(data);
    reset();
    setOpen(false)
  };

  return (
    <div className={styles.flex_container_edit}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.flex_container_edit_form}
      >
        <label htmlFor="name">Enter your full name:</label>
        <br />
        <input type="text" {...register("name", { required: true })} />
        {errors.name && <div style={{ color: "red" }}>Enter your name</div>}
        <br />
        <textarea
          cols="30"
          rows="10"
          {...register("text", { required: true })}
        ></textarea>
        <Button
          type="submit"
          variant="contained"
          size="medium"
          endIcon={<SendIcon />}
        >
          Save
        </Button>
        <Button
          type="button"
          variant="outlined"
          color="error"
          size="small"
          onClick={() => setOpen(false)}
        >
          Close
        </Button>
      </form>
    </div>
  );
}

export default Formedit;
