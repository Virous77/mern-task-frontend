import React, { useState } from "react";
import "./Task.css";
import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getAllTask,
  taskCreate,
  deleteTask,
  updateCompleted,
  updateTask,
} from "../../api/api";
import Loader from "../UI/Loader";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useAppContext } from "../../store/appContext";

const Task = () => {
  const { data, isLoading, isError } = useQuery(["tasks"], getAllTask);
  const queryClient = useQueryClient();

  const { mutate: newTask } = useMutation(taskCreate, {
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
      setTask("");
    },
  });

  const { mutate: deleteTasks } = useMutation(deleteTask, {
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });

  const { mutate: updateComp } = useMutation(updateCompleted, {
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });

  const { mutate: updateTasks } = useMutation(updateTask, {
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
      setEditTask("");
      setEdit("");
    },
  });

  //Local State
  const { handleNotification } = useAppContext();
  const [edit, setEdit] = useState("");
  const [task, setTask] = useState("");
  const [ediTask, setEditTask] = useState("");

  const completedTask = data?.filter((task) => task.completed === true);

  //Task Action for complete &not-complete
  const handleComplete = (task) => {
    if (task.completed) {
      updateComp({
        _id: task._id,
        completed: false,
        name: task.name,
      });
    } else {
      updateComp({
        _id: task._id,
        completed: true,
        name: task.name,
      });
    }
  };

  //Delete Task
  const handleDelete = (id) => {
    if (!id) return;
    deleteTasks(id);
  };

  ///Create New Task
  const createTask = (e) => {
    e.preventDefault();

    const formData = {
      name: task,
      completed: false,
    };

    if (task.trim() === "") {
      handleNotification({ status: "error", message: "Field is empty!" });
      return;
    }
    newTask({ ...formData });
  };

  ///Edit Task
  const editTask = (e) => {
    e.preventDefault();

    if (ediTask.trim() === "") {
      handleNotification({ status: "error", message: "Field is empty!" });
      return;
    }
    updateTasks({ _id: edit._id, name: ediTask, completed: false });
  };

  return (
    <section className="Task">
      <h1>Task Manager</h1>

      {!edit && (
        <TaskForm
          placeholder="Add Task"
          submitForm={createTask}
          content="Add"
          task={task}
          setTask={setTask}
        />
      )}

      {edit && (
        <TaskForm
          placeholder="Edit Task"
          submitForm={editTask}
          content="Update"
          task={ediTask.name}
          setTask={setEditTask}
        />
      )}

      {isLoading && <Loader />}

      <div className="taskListBar">
        <header>
          <p>Total Task: ({data?.length}) </p>
          <p>Completed Task: ({completedTask?.length})</p>
        </header>
        <div className="taskListM">
          {data?.map((task, idx) => (
            <TaskList
              task={task}
              key={task._id}
              idx={idx + 1}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
              setEdit={setEdit}
              edit={edit}
              setEditTask={setEditTask}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Task;
