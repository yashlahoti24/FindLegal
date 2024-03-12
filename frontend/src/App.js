import './App.css';
import Home from './Components/Home';
import {location} from './Data/location'
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import SignUp from './Components/SignUp';
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <Navbar/>
      {/* <Login/> */}
      {/* <SignUp/> */}
      <Home
        options={location}
        label="name"
        id="id"
        selectedVal={value}
        handleChange={(val) => setValue(val)}
      />
    </div>
  );
}

export default App;
