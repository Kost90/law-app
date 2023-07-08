import useDataContext from "../../components/Context/UseContext";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import styles from './Profilepage.module.css'

function Login() {
  const { setLoginname } = useDataContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      logout: uuidv4(),
    },
  });

  const onSubmit = (data) => {
    setLoginname(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.flex_container_form}>
      <label htmlFor="name">Enter your full name:</label>
      <br />
      <input type="text" {...register("name", { required: true })} />
      {errors.name && <div style={{ color: "red" }}>Enter your name</div>}
      <br />
      <Button
        type="submit"
        variant="contained"
        size="large"
        endIcon={<SendIcon />}
      >
        Login
      </Button>
    </form>
  );
}

export default Login;
