import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


const PrivateViews = () => {
    const user = useSelector((store) => store.user.user);
    return user.first_name ? <Outlet /> : <Navigate to="/" />  
}

export default PrivateViews;