import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Task, { TaskType } from "./components/Task";
import { taskStruct } from "./helpers/struct";
import Navbar from "./components/Navbar/Navbar";
import AddTodo from "./components/AddTodo";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    taskStruct("1", "Task 1", "Description 1", "2021-01-01", "2021-01-02", []),
  ]);

  const addTask = async () => {};
  const deleteTask = async () => {};
  const updateTask = async () => {};
  const getTasks = async () => {};

  return (
    <Navbar>
      <AddTodo />
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </Navbar>
  )
}

export default App
