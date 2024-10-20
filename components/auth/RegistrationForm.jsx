"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegistrationForm = () => {

  const [error, setError] = useState("");
  const router = useRouter();

  async function onSubmit(event) {

    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const fname = formData.get('fname');
      const lname = formData.get('lname');
      const email = formData.get('email');
      const password = formData.get('password');

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push("/login");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <div className="text-center text-red-400 text-xl font-semibold mb-5">{error && error.message}</div>
      <form className="login-form" onSubmit={onSubmit}>
        <div className="mb-5">
          <label htmlFor="fname" className=" mb-4">First Name</label>
          <input type="text" name="fname" id="fname" placeholder="first name" className="w-full rounded border border-sky-900 py-2 px-3 outline-none focus:ring-1 focus:ring-sky-900" />
        </div>

        <div className="mb-5">
          <label htmlFor="lname" className=" mb-4">Last Name</label>
          <input type="text" name="lname" id="lname" placeholder="first name" className="w-full rounded border border-sky-900 py-2 outline-none px-3 focus:ring-1 focus:ring-sky-900 " />
        </div>

        <div className="mb-5">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" placeholder="email" className="w-full rounded border border-sky-900 py-2 outline-none focus:ring-1 px-3 focus:ring-sky-900 " />
        </div>

        <div className="mb-5">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="password" className="w-full rounded border border-sky-900 py-2 px-3 outline-none focus:ring-1 focus:ring-sky-900 " />
        </div>

        <div className="mb-5">
          <button type="submit" className="w-full py-3 bg-sky-900 hover:bg-pink-500 transition duration-200 text-xl font-semibold text-white rounded">
            Create account
          </button>
        </div>
        <div>
          <p className="text-[16px] text-sky-900">Have already account? <Link href="/login" className="text-pink-500" > login </Link></p>
        </div>
      </form>
    </>
  );
};

export default RegistrationForm;
