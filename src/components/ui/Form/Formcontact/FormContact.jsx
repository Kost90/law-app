import { useForm} from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useDataContext } from "../../../Context/UseContext";

export default function FormContact() {

  const { postContact } = useDataContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      comment: "",
      delete: uuidv4(),
    },
  })

  const onSubmit = (data) => {
    postContact(data)
    console.log(data)
    reset()
  }

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
      <label htmlFor="name">Enter your email:</label>
      <br />
      <input type="email" {...register("email", { required: true })} />
      {errors.name && <div style={{ color: "red" }}>Enter your email</div>}
    </div>
    <br />
    <div>
      <label htmlFor="name">Enter your mobile number:</label>
      <br />
      <input
        type="number"
        {...register("phone", { minLength: 8, maxLength: 25 })}
      />
      {errors.phone && <div style={{ color: "red" }}>Enter your number</div>}
    </div>
    <br />
    <div>
      <textarea
        cols="30"
        rows="10"
        {...register("comment", { required: true })}
      ></textarea>
    </div>
    <input type="submit" />
  </form>
  )
}
