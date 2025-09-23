// import React, { useContext } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Admin/Dashboard";
// import Login from "./pages/Auth/Login";
// import SignUp from "./pages/Auth/Signup";
//  // Assuming you have this component
// import ManageTask from "./pages/Admin/ManageTask";
// import CreateTask from "./pages/Admin/CreateTask";
// import ManageUser from "./pages/Admin/ManageUser";
// import UserDashboard from "./pages/Users/UserDashboard";
// import MyTasks from "./pages/Users/MyTasks";
// import ViewTaskDetails from "./pages/Users/ViewTaskDetails";
// import PrivateRoute from "./routes/PrivateRoute";
// import UserProvider, { UserContext } from "./context/userContext";
// const Root = () => {
//   const { user, loading } = useContext(UserContext);

//   if (loading) return <Outlet />;

//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   return user.role === "admin"
//     ? <Navigate to="/admin/dashboard" />
//     : <Navigate to="/user/dashboard" />;
// };
// const App = () => {
//   return (
//     <UserProvider>
//     <div>
//       <Router>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />

//           {/* Admin Routes */}
//           <Route element={<PrivateRoute  allowedRoles={["admin"]} />}>
//             <Route path="/admin/dashboard" element={<Dashboard />} />
//              <Route path="/admin/tasks" element={<ManageTask/>} />
//              <Route path="/admin/create-task" element={<CreateTask/>} />
//              <Route path="/admin/users" element={<ManageUser/>} />
//           </Route>

//            <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
//             <Route path="/user/dashboard" element={<UserDashboard/>} />
//             <Route path="/user/tasks" element={<MyTasks/>} />
//             <Route path="/user/tasks-details/:id" element={<ViewTaskDetails/>} />
            
             
//           </Route>
//           <Route path="/" element={<Root/>}/>
//         </Routes>

//       </Router>

//     </div>
//     </UserProvider>
//   );
// };


// export default App;
import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";

import Dashboard from "./pages/Admin/Dashboard";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/Signup";
import ManageTask from "./pages/Admin/ManageTask";
import CreateTask from "./pages/Admin/CreateTask";
import ManageUser from "./pages/Admin/ManageUser";
import UserDashboard from "./pages/Users/UserDashboard";
import MyTasks from "./pages/Users/MyTasks";
import ViewTaskDetails from "./pages/Users/ViewTaskDetails";
import PrivateRoute from "./routes/PrivateRoute";
import UserProvider, { UserContext } from "./context/userContext";
import { Toaster } from "react-hot-toast";

// Root component to decide where to navigate after login
const Root = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) return <Outlet />;

  if (!user) {
    return <Navigate to="/login" />;
  }

  return user.role === "admin"
    ? <Navigate to="/admin/dashboard" />
    : <Navigate to="/user/dashboard" />;
};

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Admin Routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/tasks" element={<ManageTask />} />
            <Route path="/admin/create-task" element={<CreateTask />} />
            <Route path="/admin/users" element={<ManageUser />} />
          </Route>

          {/* User Routes */}
          <Route element={<PrivateRoute allowedRoles={["user"]} />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/tasks" element={<MyTasks />} />
            <Route path="/user/tasks-details/:id" element={<ViewTaskDetails />} />
          </Route>

          {/* Root Redirect */}
          <Route path="/" element={<Root />} />
        </Routes>
      </Router>
      <Toaster toastOptions={{
        className:'',
        style:{
          fontSize: '14px',
        },
      }}/>
    </UserProvider>
  );
};

export default App;
