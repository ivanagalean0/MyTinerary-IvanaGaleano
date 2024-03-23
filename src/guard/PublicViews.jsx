import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
const PublicViews = () => {
    const user = useSelector((store) => store.user.user);
    return user.first_name ? <Navigate to="/" /> : <Outlet />
};

export default PublicViews;