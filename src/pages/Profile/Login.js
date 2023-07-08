import useDataContext from "../../components/Context/UseContext";
import { v4 as uuidv4 } from "uuid";
import { useForm} from "react-hook-form";

function Login({setLoggedOn}) {
    
const {setLoginname} = useDataContext()

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
  })


  return (
    <div>
        <button onClick={() => setLoggedOn(true)}>Login</button>
    </div>
  )
}

export default Login