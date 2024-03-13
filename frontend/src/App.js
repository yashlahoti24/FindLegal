import './App.css';
import Home from './Components/Home';
import Discuss from './Components/Discuss';
import Login from './Components/Login';
import {location} from './Data/location';
import Navbar from './Components/Navbar';
import { useState } from "react";
import Footer from './Components/Footer';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {
  const [value, setValue] = useState("");

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar/><Home
      options={location}
      label="name"
      id="id"
      selectedVal={value}
      handleChange={(val) => setValue(val)}
    /><Footer/></>
    },
    {
      path: '/discuss',
      element: <><Navbar/><Discuss/><Footer/></>
    },
    {
      path: '/login',
      element: <><Login/></>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
