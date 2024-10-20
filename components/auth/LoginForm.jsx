"use client";
import { login } from "@/app/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const response = await login(formData);
      // console.log(response);
      if (!!response.error) {
        setError(response.error);
      } else {
        router.push("/bookings");
      }

    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <div>
        {
          error && (
            <div className="text-xl text-red-400 font-semibold text-center">{error}</div>
          )
        }
      </div>

      <form className="login-form" onSubmit={onSubmit}>
        <div className="mb-5">
          <label htmlFor="email" className="">Email Address</label>
          <input type="email" name="email" id="email" placeholder="Enter your email" className="w-full rounded border border-sky-900 py-2 px-3 outline-none focus:ring-1 focus:ring-sky-900" />
        </div>

        <div className="mb-5">
          <label htmlFor="password" className=" mb-4">Password</label>
          <input type="password" name="password" id="password" placeholder="Enter your password" className="w-full rounded border border-sky-900 py-2 px-3 outline-none focus:ring-1 focus:ring-sky-900" />
        </div>

        <div className="mb-5">
          <button type="submit" className="bg-sky-900 text-white hover:bg-pink-500 transition duration-200 w-full rounded py-2 text-xl font-semibold">
            Login
          </button>
        </div>
        <div>
          <p className="text-[16px] text-sky-900">You dont have account? <Link href="/register" className="text-pink-500" > register </Link></p>
        </div>
      </form>
    </>

  );
};

export default LoginForm;
