import Cities from "./views/Cities";
import Home from "./views/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="/cities" element= {<Cities/>} />
          <Route path="/login" element= {<Login/>} />
        </Routes>
    </BrowserRouter>
      // <Home></Home>
  )
}

export default App;
