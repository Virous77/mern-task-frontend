import React from "react";
import { useQuery } from "react-query";
import { getAllTask } from "./api/api";
import Notification from "./Components/notification/Notification";
import Task from "./Components/contents/Task";

const App = () => {
  return (
    <main>
      <Task />
      <Notification />
    </main>
  );
};

export default App;
