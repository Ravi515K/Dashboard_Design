import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import DetailPage from "./Pages/DetailPage";
import Users from "./Pages/Users";
import Login from "./Pages/Login";
import Signup from "./components/Signup";
import RequiredAuth from "./hoc/RequredRouth";
import Home from "./Pages/Home";
import LoginAuth from "./hoc/LoginAuth";

function App() {
  return (
    <div className="my-4 ">
      <Routes>
        <Route
          path="/login"
          element={
            <RequiredAuth>
              <Login />
            </RequiredAuth>
          }
        ></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route
          path="/"
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
