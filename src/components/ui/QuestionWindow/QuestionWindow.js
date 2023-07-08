import styles from "./QuestionWindow.module.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import useDataContext from "../../Context/UseContext";
import Formedit from "../Form/Formedit/Formedit";


export default function QuestionsWindow({ data, onDeleteComment, logindata }) {

  const {open, setOpen} = useDataContext()

  const loginName = logindata.name;

  const questionData = data.filter((q) => q.name === loginName)

  
  return (
    <div className={styles.flex_container_chatwindow}>
      <h1>YOUR QUESTIONS:</h1>
      {loginName === 'Kostiantyn Dontsov'? data.map((element) => (
        <div key={element.id} className={styles.message_container}>
          <h3>Customer name:</h3>
          <p>{element.name}</p>
          <h3>Customer message:</h3>
          <p>{element.text}</p>
          <Button
            color="secondary"
            variant="contained"
            startIcon={<DeleteIcon />}
            size="small"
            onClick={() => onDeleteComment(element.id, element.delete)}
          >
            Delete
          </Button>
          <Button
            color="success"
            size="small"
            onClick={() => setOpen(true)}
          >
            Edit messagge
          </Button>
          {open?<Formedit id={element.id}/>:null}
        </div>
      )) :questionData.map((element) => (
        <div key={element.id} className={styles.message_container}>
          <h3>Customer name:</h3>
          <p>{element.name}</p>
          <h3>Customer message:</h3>
          <p>{element.text}</p>
          <Button
            color="secondary"
            variant="contained"
            startIcon={<DeleteIcon />}
            size="small"
            onClick={() => onDeleteComment(element.id, element.delete)}
          >
            Delete
          </Button>
          <Button
            color="success"
            size="small"
            onClick={() => setOpen(true)}
          >
            Edit messagge
          </Button>
          {open?<Formedit id={element.id}/>:null}
        </div>
      ))}
 
    </div>
  );
}
