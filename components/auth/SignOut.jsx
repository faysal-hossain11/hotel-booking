"use client";
import { signOut } from 'next-auth/react';
import React from 'react';

const SignOut = () => {
    return (
        <div>
            <button onClick={() => {
                signOut({ callbackUrl: "http://localhost:3000/login" })
            }
            } className='px-5 py-3 bg-sky-800 text-white font-semibold hover:bg-pink-400 transition duration-200 rounded-md '>Sign Out</button>
        </div>
    );
};

export default SignOut;