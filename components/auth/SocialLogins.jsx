"use client";

import Image from "next/image";
import FbImage from "@/public/assets/fb.png";
import GoogleImage from "@/public/assets/google.png";
import { signIn } from 'next-auth/react';
import Link from "next/link";

const SocialLogins = ({mode}) => {

  const handleAuth = (event) => {
    signIn("google", { callbackUrl: 'http://localhost:3000/bookings' });
  }



  return (
    <>
      <p className="text-center text-xl text-gray-500 mt-6 text-[15px] font-semibold">
        {
          mode === 'register' ? (
            <Link href="/login" className="text-pink-500">Login </Link>
          ):(
            <Link href="/register" className="text-pink-500">Register </Link>
          )
        }
        or Signup with
      </p>
      <div className="flex gap-4 justify-between">
        <button className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center">
          <Image src={FbImage} alt="facebook" />
          <span>Facebook</span>
        </button>
        <button onClick={handleAuth} className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center">
          <Image src={GoogleImage} alt="google" />
          <span>Google</span>
        </button>
      </div>
    </>
  );
};

export default SocialLogins;
