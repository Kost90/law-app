import { useForm } from "react-hook-form";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { v4 as uuidv4 } from "uuid";
import useDataContext from "../../../Context/UseContext";
import styles from './Formchat.module.css'

export default function FormChat() {
  const { postComment } = useDataContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      comment: "",
      delete: uuidv4(),
    },
  });

  const onSubmit = (data) => {
    postComment(data);
    reset();
  };

  return (
  <form onSubmit={handleSubmit(onSubmit)} className={styles.flex_container_form}>
        <label htmlFor="name">Enter your full name:</label>
        <br />
        <input type="text" {...register("name", { required: true })} />
        {errors.name && <div style={{ color: "red" }}>Enter your name</div>}
      <br />
        <textarea
          cols="30"
          rows="10"
          {...register("comment", { required: true })}
        ></textarea>
      <Button type="submit" variant="contained" size="large" endIcon={<SendIcon />}>
  Send
</Button>
    </form>
  );
}
