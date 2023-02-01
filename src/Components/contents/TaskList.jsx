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
  setEditTask,
  handleCompleted,
  completeLoading,
  deleteLoading,
  tid,
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
              color={completeLoading && tid === task._id && "red"}
            />
          ) : (
            <BsCheck
              size={20}
              cursor="pointer"
              onClick={() => handleComplete(task)}
              color={completeLoading && tid === task._id && "green"}
            />
          )}{" "}
          <AiFillEdit
            size={20}
            cursor="pointer"
            onClick={() => {
              setEditTask(task);
              handleCompleted(task);
            }}
          />{" "}
          <MdDelete
            size={20}
            cursor="pointer"
            onClick={() => handleDelete(task._id)}
            color={deleteLoading && tid === task._id && "red"}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
