


import { Routes, Route, Link } from "react-router-dom";
import NaveBar from './Shared/NaveBar/NaveBar';
import Home from './Page/Home/Home';
import About from './Page/About/About';
import Login from './Page/Login/Login';
import MakeAppointment from "./Page/Home/MakeAppoinment/MakeAppointment";
import Appointment from "./Page/Appointment/Appointment";

function App() {
  return (

   <div>
      <NaveBar> </NaveBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment" element={<Appointment/>} />
      </Routes>
      
   </div>


  );
}

export default App;
