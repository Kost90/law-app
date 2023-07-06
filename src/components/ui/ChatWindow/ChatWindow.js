export default function ChatWindow({ data, onDeleteComment }) {
  return (
    <div>
      <h1>YOUR MESSAGES:</h1>
      {data.map((element) => (
        <div key={element.id}>
          <p>Customer name: <br/> {element.name}</p>
          <p>Customer message: <br/> {element.comment}</p>
          <button onClick={() => onDeleteComment(element.id, element.delete)}>
            Delete message
          </button>
        </div>
      ))}
    </div>
  );
}
