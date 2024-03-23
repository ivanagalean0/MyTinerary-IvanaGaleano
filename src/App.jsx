import Cities from "./views/Cities";
import Home from "./views/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import DetailsCities from "./views/DetailsCities";
import { useDispatch, useSelector } from "react-redux";
import Register from "./views/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import authQueries from "./services/authQueries";
import {success} from "./utils/alerts"
import { login } from "./redux/actions/userAction";
import PublicViews from "./guard/PublicViews";
import Profile from "./views/Profile";
import PrivateViews from "./guard/PrivateViews";

function App() {
  // const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch()
  useEffect(() => {
    authQueries.loginWithToken().then((res) => {
      if(res.status == 200){
        dispatch(login(res.data))
        success("Welcome " + res.data.first_name);
      }
    });
  }, []);

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="/cities" element= {<Cities/>} />
          <Route path="/cities/:id" element={<DetailsCities/>} />
          <Route element={<PublicViews />}>
            <Route path="/registro" element={<Register/>} />
            <Route path="/login" element= {<Login/>} />
          </Route>
          <Route element={<PrivateViews />}>
            <Route path="/perfil" element={<Profile />} />
          </Route>
        </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App;
