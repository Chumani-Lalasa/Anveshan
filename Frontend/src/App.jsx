import { ClerkProvider, SignedIn, SignedOut, SignIn, SignUp, UserButton } from "@clerk/clerk-react";
import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import Register from "./Components/Register";

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <LoginPage /> */}
      <div className="bg">
      <Register />
      </div>
    </>
  );
}

export default App;
