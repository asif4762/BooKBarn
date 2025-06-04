import { useContext, useRef } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  const hasShownToast = useRef(false);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  console.log("PrivateRoute → user:", user);
  if (user) {
    return children;
  }

  if (!hasShownToast.current) {
    toast.error("Please login first");
    hasShownToast.current = true;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
