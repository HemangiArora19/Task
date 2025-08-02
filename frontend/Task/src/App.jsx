import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/Signup";
 // Assuming you have this component
import ManageTask from "./pages/Admin/ManageTask";
import CreateTask from "./pages/Admin/CreateTask";
import ManageUser from "./pages/Admin/ManageUser";
import UserDashboard from "./pages/Users/UserDashboard";
import MyTasks from "./pages/Users/MyTasks";
import ViewTaskDetails from "./pages/Users/ViewTaskDetails";
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Admin Routes */}
          <Route element={<PrivateRoute  allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
             <Route path="/admin/tasks" element={<ManageTask/>} />
             <Route path="/admin/create-task" element={<CreateTask/>} />
             <Route path="/admin/users" element={<ManageUser/>} />
          </Route>

           <Route element={<PrivateRoute allowedRoles={["user"]} />}>
            <Route path="/user/dashboard" element={<UserDashboard/>} />
            <Route path="/user/tasks" element={<MyTasks/>} />
            <Route path="/user/tasks-details/:id" element={<ViewTaskDetails/>} />
            
             
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
