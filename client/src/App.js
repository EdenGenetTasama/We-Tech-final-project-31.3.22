import React from "react";
import "./App.css";
import Home from "../src/components/pages/home/Home.jsx";
import Profile from "./components/pages/profile/Profile.jsx";
import Login from "./components/pages/login/Login.jsx";
import Register from "./components/pages/register/Register";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";


function App() {
  const {user} = useContext(AuthContext);
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={user ? <Home/>: <Register/>}> </Route>
      <Route path="/Login" element={!user ?  <Login/>:<Home/>}> </Route>
      <Route path="/Register" element={user ? <Link to="/"/> : <Register/>}> </Route>
      <Route path="/Profile/:userName" element={ <Profile/>}> </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
