import "./App.css";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import MonoConnect from "./pages/MonoConnect";
import {Login} from "./pages/Login";
import UserList from "./components/UserList";
import NewUser from "./pages/NewUser";
import User from "./components/User"


function App() {
  return (
    <BrowserRouter>
      <Dashboard/>
      {/* <MonoConnect/> */}
      
    </BrowserRouter>
    
  );
}

export default App;
