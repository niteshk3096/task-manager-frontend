import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import TaskDetails from "../pages/TaskDetails/TaskDetails";
import AddTaskDetails from "../components/AddTaskDetails/AddTaskDetails";
import { ProtectedRoute } from "./ProtectedRoutes";
import { UnprotectedRoute } from "./UnprotectedRoutes";
import Loader from "../components/Loader/Loader";
import NotFound from "../components/NotFoundPage/NotFound";
import { useAuth } from "./AuthProvider";
function Router() {
  const { isLoading } = useAuth();
  console.log("loading", isLoading);
  return (
    <>
      {isLoading ? <Loader /> : null}
      <Routes>
        <Route
          path="/"
          element={
            <UnprotectedRoute>
              <Login />
            </UnprotectedRoute>
          }
        />
        <Route
          path="/registration"
          element={
            <UnprotectedRoute>
              <Registration />
            </UnprotectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/task/details"
          element={
            <ProtectedRoute>
              <TaskDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/task/add"
          element={
            <ProtectedRoute>
              <AddTaskDetails />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Router;
