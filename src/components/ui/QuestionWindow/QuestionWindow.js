import styles from "./ChatWindow.module.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export default function QuestionsWindow({ data, onDeleteComment, logindata }) {

  const loginName = logindata;

  const questionData = data.filter((q) => q.name === loginName)
  
  return (
    <div className={styles.flex_container_chatwindow}>
      <h1>QUESTIONS:</h1>
      {questionData.map((element) => (
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
        </div>
      ))}
    </div>
  );
}