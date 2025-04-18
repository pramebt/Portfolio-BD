"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("");

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    const newErrors = {
      name: name === "",
      email: !/\S+@\S+\.\S+/.test(email),
      message: message === "",
    };
    setErrors(newErrors);

    const hasError = Object.values(newErrors).includes(true);
    if (hasError) {
      setResult("❌ Please fix the highlighted fields.");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      return;
    }

    setResult("Sending....");

    formData.append("access_key", "20720aa8-5d0e-4355-b66c-a1b5076e21d8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form submitted successfully!");
      form.reset();
      setErrors({ name: false, email: false, message: false });
    } else {
      setResult(`❌ ${data.message}`);
    }

    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div id="contact" className="relative w-full px-6 md:px-12 lg:px-[12%] py-10 scroll-mt-20">
      {/* Animated Alert Box */}
      <AnimatePresence>
        {showAlert && result && (
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -50, y: 50 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-6 left-6 bg-zinc-900 text-white border border-zinc-700 rounded-xl px-6 py-4 shadow-lg z-50 max-w-sm w-[90%] sm:w-full"
          >
            <p className={`${result.includes("✅") ? "text-green-400" : "text-red-400"} font-medium`}>
              {result}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl">Contact</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-8 text-base md:text-lg">
        You can contact me here.
      </p>

      {/* Form */}
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className={`flex-1 p-3 outline-none border-[0.5px] rounded-md bg-white w-full ${
                errors.name ? "border-red-500" : "border-gray-400"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">Name is required</p>
            )}
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className={`flex-1 p-3 outline-none border-[0.5px] rounded-md bg-white w-full ${
                errors.email ? "border-red-500" : "border-gray-400"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">Enter a valid email</p>
            )}
          </div>
        </div>

        <div className="relative">
          <textarea
            rows={6}
            placeholder="Enter your message"
            name="message"
            className={`w-full p-4 outline-none border-[0.5px] rounded-md bg-white mb-1 resize-none ${
              errors.message ? "border-red-500" : "border-gray-400"
            }`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mb-5">Message is required</p>
          )}
        </div>

        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
        >
          Submit now
        </button>
      </form>
    </div>
  );
};

export default Contact;
