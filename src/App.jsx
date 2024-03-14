import Cities from "./views/Cities";
import Home from "./views/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import DetailsCities from "./views/DetailsCities";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="/cities" element= {<Cities/>} />
          <Route path="/login" element= {<Login/>} />
          <Route path="/cities/:id" element={<DetailsCities/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
