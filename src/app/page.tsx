"use client";
import About from "@/components/About";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
//rafce
const page = () => {
  return (
    
    <>
        <Navbar />
        <Header/>
        <About/>
        <Projects/>
    </>
  );
};
export default page;
