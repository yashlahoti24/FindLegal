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
import ProfilePage from "./Components/ProfilePage";
import CreatePost from "./Components/CreatePost";
import Posts from "./Components/Posts";
import CreateReply from "./Components/CreateReply";
import PostPage from "./Components/PostPage";
import PropertyPossessionDelayRERA from "./Components/Categories/Property PossessionDelay-RERA";
import Bidding from "./Components/Bidding";
import BidPage from "./Components/BidPage";
import Page from "./Components/Page";

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
          <Footer />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          
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
          <Services/>
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
      path: "/lawyer-profile",
      element: <><Navbar/><ProfilePage /><Footer/></>,
    },
    {
      path: "/lawyer-profile/:id",
      element: <><Navbar/><ProfilePage /><Footer/></>,
    },
    {
      path: "/create-post",
      element: <><Navbar/><CreatePost /></>,
    },
    {
      path: "/post",
      element: <><Navbar/><Posts /></>,
    },
    {
      path: "/post-page/:id",
      element: <><Navbar/><PostPage /></>,
    },
    {
      path: "/bid",
      element: <><Navbar/><Bidding /></>,
    },
    {
      path: "/bid/:id",
      element: <><Navbar/><BidPage /></>,
    },
    {
      path: "/pro",
      // path: "/property-posession-delay-rera",
      element: <><Navbar/><PropertyPossessionDelayRERA /><Footer/></>,
    },
    {
      path: "/page",
      element: <><Navbar/><Page /></>,
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
