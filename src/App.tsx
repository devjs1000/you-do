import { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Task, { TaskType } from "./components/Task";
import { taskStruct } from "./helpers/struct";
import Navbar from "./components/Navbar/Navbar";
import AddTodo from "./components/AddTodo";

function App() {
  const localTasks = localStorage.getItem("tasks");
  const [tasks, setTasks] = useState([
    taskStruct(
      "Make A Game In Godot",
      "Hey You Have To Try This",
      "2021-01-01",
      "2021-01-02",
      []
    ),
  ] as TaskType[]);

  const saveTasks = async () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const changeField = async (id: string, field: keyof TaskType, value: any) => {
    const newTasks = tasks.map((task: any) => {
      if (task.id === id) {
        task[field] = value;
      }
      return task;
    });
    await setTasks(newTasks);
    saveTasks();
  };

  useEffect(() => {
    if (localTasks) {
      setTasks(JSON.parse(localTasks));
    }
  }, []);

  useEffect(() => {
    saveTasks();
  }, [tasks.length]);

  const addTask = async (data: TaskType) => {
    await setTasks([...tasks, data]);
  };
  const deleteTask = async (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const updateTask = async () => {};
  const getTasks = async () => {};
  const completeTask = async (id: string, state: boolean) => {
    changeField(id, "completed", state);
  };

  return (
    <>
      <Navbar>
        <AddTodo add={addTask} />
        {tasks.map((task) => (
          <Task
            remove={deleteTask}
            complete={completeTask}
            key={task.id}
            task={task}
          />
        ))}
      </Navbar>
    </>
  );
}

export default App;
