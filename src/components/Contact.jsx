"use client";
import React, { useState } from "react";

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "20720aa8-5d0e-4355-b66c-a1b5076e21d8");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };   
 
    return (
    <div id='contact'className="w-full px-6 md:px-12 lg:px-[12%] py-10 scroll-mt-20">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl">Contact</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-8 text-base md:text-lg">You can contact me here.</p>

        <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
                <input type="text" placeholder="Enter your name" required 
                 className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white" name="name"/>
                <input type="email" placeholder="Enter your email" required 
                className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"  name="email"/>
            </div>
            <textarea rows={6} placeholder="Enter your message"
            className="w-full p-4 outline-none border-[0.5px] border-gray-400
            rounded-md bg-white mb-6"  name="message"></textarea>
            <button type="submit" className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80
            text-white rounded-full mx-auto hover:bg-black duration-500">Submit now</button>

            <p className="mt-4">{result}</p>
        </form>
    </div>
  )
}
export default Contact