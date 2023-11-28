import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import DetailPage from "./DetailPage";
import Users from "./components/Users";
import Login from "./components/Login";
import Signup from "./components/Signup";
import RequiredAuth from "./hoc/RequredRouth";
import Home from "./Home";

function App() {
 
  return (
    <div className="my-4 ">
     
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Signup />}></Route>
          <Route path="/home" element={<RequiredAuth> <Dashboard /></RequiredAuth> }></Route>
          <Route path="/detail/:id" element={<DetailPage />}></Route>
          <Route path ="/users" element={<Users />}/>
        </Routes>
      
    </div>
  );
}

export default App;
