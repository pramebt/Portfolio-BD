"use client";
import About from "@/components/About";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
//rafce
const page = () => {

  return (
    
    <div className="bg-white w-screen min-h-screen">
    
        <Navbar />
        <Header/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  );
};
export default page;
