import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { v4 as uuidv4 } from "uuid";
import useDataContext from "../../../Context/UseContext";
import styles from "./Formchat.module.css";
import { memo } from 'react'

const FormChat = memo (() => {
  const { postComment } = useDataContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      text: "",
      delete: uuidv4(),
    },
  });

  const onSubmit = (data) => {
    postComment(data);
    reset();
  };

  return (
    <div>
      <h1>LEAVE YOUR MESSAGE</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.flex_container_form}
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
          size="large"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </form>
    </div>
  );
})

export default FormChat
