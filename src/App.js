import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import "./App.css";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Reviews from "./Pages/Reveiws/Reviews";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/appointment" element={<Appointment/>} />
        <Route path="/reviews" element={<Reviews/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
