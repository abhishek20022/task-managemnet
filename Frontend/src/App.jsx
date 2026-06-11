import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./Pages/Auth";
import TasksBoard from "./Pages/TasksBoard";
import PrivateRoute from "./Components/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />

        <Route
          path="/dashboard/tasks"
          element={
            <PrivateRoute>
              <TasksBoard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;