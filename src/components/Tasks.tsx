import { useState } from "react";
import axios from "axios";
import Button from "./Button";

interface Task {
  id: string;
  title: string;
}

const Tasks = () => {
  const url = "https://jsonplaceholder.typicode.com/todos?_limit=10";
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleClick = async () => {
    const { data } = await axios.get(url);
    setTasks(data);
  };

  return (
    <>
      <h1>Tasks from API</h1>
      <Button disabled={false} onClick={handleClick}>
        Get Tasks from API
      </Button>

      {tasks.map((task) => (
        <p id={task.id} key={task.id}>
          {task.title}
        </p>
      ))}
    </>
  );
};

export default Tasks;
