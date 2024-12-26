import React from 'react'
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
  import { useEffect, useState } from "react";
  
  const CUSTOM_ANIMATION = {
    mount: { opacity: 1 },
    unmount: { opacity: 0 },
  };

function Home() {
      const [openNav, setOpenNav] = useState(false);
      const [open, setOpen] = useState(null);
    
      const handleOpen = (id) => {
        setOpen((prevOpen) => (prevOpen === id ? null : id));
      };
    
      useEffect(() => {
        window.addEventListener(
          "resize",
          () => window.innerWidth >= 960 && setOpenNav(false)
        );
      }, []);
    
      const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          <Typography
            as="li"
            variant="small"
            color="white"
            className="p-1 font-normal"
          >
            <a href="#" className="flex items-center">
              Pages
            </a>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="white"
            className="p-1 font-normal"
          >
            <a href="#" className="flex items-center">
              Account
            </a>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="white"
            className="p-1 font-normal"
          >
            <a href="#" className="flex items-center">
              Blocks
            </a>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="white"
            className="p-1 font-normal"
          >
            <a href="#" className="flex items-center">
              Docs
            </a>
          </Typography>
        </ul>
      );
  return (
    <>
     {/* Navbar div */}
     <div className="-m-6 max-h-[800px] w-[calc(100%+48px)] mb-0">
        <Navbar className="sticky top-0 z-10 h-32 max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-green-700 flex items-center">
          <div className="flex w-full items-center justify-between text-white">
            {/* Branding Section */}
            <Typography
              as="a"
              href="#"
              className="ml-4 cursor-pointer py-1.5 font-extrabold"
            >
              Material Tailwind
            </Typography>

            {/* Centered Navigation Options */}
            <div className="flex justify-center flex-grow">
              <ul className="flex flex-col lg:flex-row gap-12">
                <Typography
                  as="li"
                  variant="h6"
                  color="white"
                  className="p-1 font-semibold"
                >
                  <a href="#" className="flex items-center">
                    Pages
                  </a>
                </Typography>
                <Typography
                  as="li"
                  variant="h6"
                  color="white"
                  className="p-1 font-semibold"
                >
                  <a href="#" className="flex items-center">
                    Account
                  </a>
                </Typography>
                <Typography
                  as="li"
                  variant="h6"
                  color="white"
                  className="p-1 font-semibold"
                >
                  <a href="#" className="flex items-center">
                    Blocks
                  </a>
                </Typography>
                <Typography
                  as="li"
                  variant="h6"
                  color="white"
                  className="p-1 font-semibold"
                >
                  <a href="#" className="flex items-center">
                    Docs
                  </a>
                </Typography>
              </ul>
            </div>

            {/* Right-Aligned Buttons */}
            <div className="flex gap-x-2 mr-4">
              <Button variant="text" size="sm" className="text-white">
                <span>Log In</span>
              </Button>
              <Button variant="gradient" size="sm">
                <span>Sign In</span>
              </Button>
            </div>
          </div>
        </Navbar>
      </div>
      {/* main div */}
      <div className="flex justify-center items-center h-[calc(99vh-128px)]">
        <div className="bg-green-300 w-4/5 h-5/6"></div>
      </div>

      <div className="relative">
        {/* Box div */}
        <div className="flex justify-center items-center bg-gray-200 w-1/5 h-24 mx-auto mt-8 relative">
          <p className="text-black font-semibold">
            This is the box above the circles
          </p>

          {/* Left arrow */}
          <div className="absolute left-0 bottom-0 w-0 h-0">
            {/* Emerging div */}
            <div
              className="absolute w-[215px] h-[10px] bg-black bottom-[40px] left-[-215px]"
              style={{ transform: "rotate(0deg)" }}
            ></div>

            {/* Downward div */}
            <div className="absolute h-[90px] w-[10px] bg-black left-[-215px] top-[-40px]"></div>

            {/* Arrow div */}
            <div className="absolute border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-black left-[-220px] top-[50px] rotate-180"></div>
          </div>

          {/* Middle arrow */}
          <div className="absolute left-[50%] translate-x-[-50%] bottom-0 w-0 h-0">
            <div className="absolute h-[48px] w-[10px] bg-black"></div>
            <div className="absolute border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-black top-[48px] left-[-4px] rotate-180"></div>
          </div>

          {/* Right arrow */}
          {/* Right arrow */}
          <div className="absolute right-0 bottom-0 w-0 h-0">
            {/* Emerging div */}
            <div
              className="absolute w-[215px] h-[10px] bg-black bottom-[40px] right-[-215px]"
              style={{ transform: "rotate(0deg)" }}
            ></div>

            {/* Downward div */}
            <div className="absolute h-[90px] w-[10px] bg-black right-[-215px] top-[-40px]"></div>

            {/* Arrow div */}
            <div className="absolute border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-black right-[-220px] top-[50px] rotate-180"></div>
          </div>
        </div>
        {/* Circles div */}
        <div className="flex justify-center items-center gap-32 mt-16">
          <div className="bg-green-500 rounded-full w-60 h-60"></div>
          <div className="bg-green-500 rounded-full w-60 h-60"></div>
          <div className="bg-green-500 rounded-full w-60 h-60"></div>
        </div>

        
      </div>
      {/* title div */}
      <div className="inset-0 flex justify-center items-center mt-16">
        <div className="bg-green-500 h-32 w-7/12"></div>
      </div>

      {/* Accordians */}
      <div className="flex justify-center items-center mt-16">
        <Accordion
          open={open === 1}
          animate={CUSTOM_ANIMATION}
          className="w-3/5 mx-auto mb-2 rounded-lg border border-blue-gray-100 px-4"
        >
          <AccordionHeader onClick={() => handleOpen(1)}>
            What is Material Tailwind?
          </AccordionHeader>
          <AccordionBody>Hello Everyone, this is Accordion Body.</AccordionBody>
        </Accordion>
      </div>
      <div className="flex justify-center items-center mt-16">
        <Accordion
          open={open === 2}
          animate={CUSTOM_ANIMATION}
          className="w-3/5 mx-auto mb-2 rounded-lg border border-blue-gray-100 px-4"
        >
          <AccordionHeader onClick={() => handleOpen(2)}>
            What is Material Tailwind?
          </AccordionHeader>
          <AccordionBody>Hello Everyone, this is Accordion Body.</AccordionBody>
        </Accordion>
      </div>
      <div className="flex justify-center items-center mt-16">
        <Accordion
          open={open === 3}
          animate={CUSTOM_ANIMATION}
          className="w-3/5 mx-auto mb-2 rounded-lg border border-blue-gray-100 px-4"
        >
          <AccordionHeader onClick={() => handleOpen(3)}>
            What is Material Tailwind?
          </AccordionHeader>
          <AccordionBody>Hello Everyone, this is Accordion Body.</AccordionBody>
        </Accordion>
      </div>
      {/* Footer Section */}
      <div className="flex justify-between items-center mt-16 px-10 py-6 bg-gray-800 text-white">
  <div className="flex-1 text-center">
    <p>Footer Item 1</p>
  </div>
  <div className="flex-1 text-center">
    <p>Footer Item 2</p>
  </div>
  <div className="flex-1 text-center">
    <p>Footer Item 3</p>
  </div>
      </div> 
    </>
  )
}

export default Home
