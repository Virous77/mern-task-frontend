import React from "react";
import "./Task.css";
import { BsCheck, BsCheckAll } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const TaskList = ({
  task,
  idx,
  handleComplete,
  handleDelete,
  setEdit,
  edit,
  setEditTask,
}) => {
  return (
    <div
      className={`taskList ${task?.completed ? "completed" : "notCompleted"}`}
    >
      <div className="taskListS">
        <p>
          {`${idx}.`} {task.name}
        </p>

        <div className="taskAction">
          {task.completed ? (
            <BsCheckAll
              size={20}
              cursor="pointer"
              onClick={() => handleComplete(task)}
            />
          ) : (
            <BsCheck
              size={20}
              cursor="pointer"
              onClick={() => handleComplete(task)}
            />
          )}{" "}
          <AiFillEdit
            size={20}
            cursor="pointer"
            onClick={() => {
              if (edit) {
                setEdit("");
              } else {
                setEdit(task);
              }
              setEditTask(task);
            }}
          />{" "}
          <MdDelete
            size={20}
            cursor="pointer"
            onClick={() => handleDelete(task._id)}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
