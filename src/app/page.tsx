"use client";
import React, { useEffect, useState } from "react";
import About from "@/components/About";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
//rafce
const page = () => {

  return (
    
    <>
    
        <Navbar />
        <Header/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
  );
};
export default page;
