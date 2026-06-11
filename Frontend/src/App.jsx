import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./Pages/Auth";
import TasksBoard from "./Pages/TasksBoard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard/tasks" element={<TasksBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;