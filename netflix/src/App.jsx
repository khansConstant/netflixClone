import Home from "./pages/home/Home";
import "./app.scss"
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom/dist";

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>

};

export default App;