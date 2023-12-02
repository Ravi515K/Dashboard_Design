import "./App.css";
import { Routes, Route } from "react-router-dom";
import Users from "./Pages/Users/Users";
import Dashboard from "./Pages/Home/Dashboard"
import Login from "./Pages/Login/Login";
import Signup from "./components/Signup";
import RequiredAuth from "./hoc/RequredRouth";
import DetailPage from "./Pages/DetailPage/DetailPage";

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
