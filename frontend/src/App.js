import "./App.css";
import Home from "./Components/Home";
import Discuss from "./Components/Discuss";
import Login from "./Components/Login";
import { location } from "./Data/location";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Services from "./Components/Services";
import LawyerLogin from "./Components/LawyerLogin";
import LawyerSignup from "./Components/LawyerSignup";
import NoteState from "./context/notes/NotesState";
// import ProfilePage from './Components/ProfileCard';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./Components/Menu";
import ProfilePage from "./Components/ProfilePage";
import Post from "./Components/Post";

function App() {
  const [value, setValue] = useState("");

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home
            options={location}
            label="name"
            id="id"
            selectedVal={value}
            handleChange={(val) => setValue(val)}
          />
          <Footer />
        </>
      ),
    },
    {
      path: "/discuss",
      element: (
        <>
          <Navbar />
          <Discuss />
          {/* <Footer /> */}
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          {/* <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu> */}
        </>
      ),
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <SignUp />
        </>
      ),
    },
    {
      path: "/find-lawyer",
      element: (
        <>
          <Navbar />
          <Services
            options={location}
            label="name"
            id="id"
            selectedVal={value}
            handleChange={(val) => setValue(val)}
          />
          <Footer />
        </>
      ),
    },
    {
      path: "/lawyer-login",
      element: <LawyerLogin />,
    },
    {
      path: "/lawyer-signup",
      element: <LawyerSignup />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
    {
      path: "/post",
      element: <><Navbar/><Post /></>,
    },
  ]);

  return (
    <div className="App">
      <NoteState>
      <RouterProvider router={router} />
      </NoteState>
    </div>
  );
}

export default App;
