"use client";
import Image from "next/image";
import { PiSunglasses } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="mt-20">
        <div className="text-center">

        <PiSunglasses className="w-10 h-10 mx-auto mb-2"/>

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src="/assets/mail_icon.png" alt="mail icon" width={10} height={10} className="w-4"/>
          bdforwk@gmail.com
        </div>
        </div>

        <div className="text-center">
          <p>© 2025 Bandit Kaewnoi. All rights reserved </p>
          
        </div>
    </div>
  )
}
export default Footer