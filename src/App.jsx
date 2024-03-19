import Cities from "./views/Cities";
import Home from "./views/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import DetailsCities from "./views/DetailsCities";
import store from './redux/store'
import { Provider } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
            <Route path="/" element= {<Home/>} />
            <Route path="/cities" element= {<Cities/>} />
            <Route path="/login" element= {<Login/>} />
            <Route path="/cities/:id" element={<DetailsCities/>} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App;
