export default function TaskList({ tasks, deleteTask }) {
    return (
      <div>
        {tasks.map(task => (
          <div key={task.id}>
            <span>{task.text}</span>
            <button onClick={() => deleteTask(task.id)} >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }