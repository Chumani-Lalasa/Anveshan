import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import "./App.css";
import Home from "./Components/Home";
// import {
//   Navbar,
//   MobileNav,
//   Typography,
//   Button,
//   IconButton,
//   Card,
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
// } from "@material-tailwind/react";
// import { useEffect, useState } from "react";

// const CUSTOM_ANIMATION = {
//   mount: { opacity: 1 },
//   unmount: { opacity: 0 },
// };

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
