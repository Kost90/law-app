import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import useDataContext from "../../../Context/UseContext";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Enter your full name:</label>
        <br />
        <input type="text" {...register("name", { required: true })} />
        {errors.name && <div style={{ color: "red" }}>Enter your name</div>}
      </div>
      <br />
      <div>
        <textarea
          cols="30"
          rows="10"
          {...register("comment", { required: true })}
        ></textarea>
      </div>
      <button type="submit">Send message</button>
    </form>
  );
}
