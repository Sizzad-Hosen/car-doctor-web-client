import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(user){
        return children;

    }
    if(loading){
        <span className="loading loading-infinity loading-lg"></span>
    }

    return (
      <Navigate to="/bookings"></Navigate>
    );
};

export default PrivateRoute;