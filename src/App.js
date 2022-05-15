


import { Routes, Route} from "react-router-dom";
import NaveBar from './Shared/NaveBar/NaveBar';
import Home from './Page/Home/Home';
import About from './Page/About/About';
import Login from './Page/Login/Login';

import Appointment from "./Page/Appointment/Appointment";
import SignUp from "./Page/Login/SignUp";
import RequireAuth from "./Page/Login/RequireAuth";

function App() {
  return (

   <div>
      <NaveBar> </NaveBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment" element={<RequireAuth>
          <Appointment/>
        </RequireAuth>} />
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      
   </div>


  );
}

export default App;
