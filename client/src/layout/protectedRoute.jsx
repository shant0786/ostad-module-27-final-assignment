import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const isLoggedIn = window.sessionStorage.getItem("token") ? true : false;
  console.log(isLoggedIn);

  return isLoggedIn === true ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
