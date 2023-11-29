import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import DetailPage from "./DetailPage";
import Users from "./components/Users";
import Login from "./components/Login";
import Signup from "./components/Signup";
import RequiredAuth from "./hoc/RequredRouth";
import Home from "./Home";
import LoginAuth from "./hoc/LoginAuth";

function App() {
  return (
    <div className="my-4 ">
      <Routes>
        <Route path="/" element={<RequiredAuth> <Home /></RequiredAuth> }></Route>
        <Route path="/login" element= {<RequiredAuth> <Login /></RequiredAuth> }></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route
          path="/dashboard"
          element={
            <RequiredAuth>
              <Dashboard />
            </RequiredAuth>
          }
        ></Route>
        <Route path="/detail/:id" element={<DetailPage />}></Route>
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
