"use client";
import { getDayDifference } from "@/utils/data-utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

const PaymentForm = ({ hotelInfo, loggedInUser, checkin, checkout, cost }) => {

  const [error, setError] = useState("");
  const router = useRouter();

  async function onSubmit (e) {
    e.preventDefault();

    try{
      const formData = new FormData(e.currentTarget);
      const hotelId = hotelInfo?.id;
      const userId = loggedInUser?.id;
      const checkin = formData.get("checkin");
      const checkout = formData.get("checkout");

      const res = await fetch("/api/auth/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hotelId,
          userId,
          checkin,
          checkout
        }),
      });

      res.status === 201 && router.push("/bookings");

    } catch(error) {
      setError(error.message)
    }
  }


  return (
    <form className="my-8 mx-auto" onSubmit={onSubmit}>
      <div className="my-4 space-y-2">
        <label htmlFor="name" className="block">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={loggedInUser?.name}
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
        />
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="email" className="block">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={loggedInUser?.email}
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
        />
      </div>

      <div className="my-4 space-y-2">
        <span>Check in</span>
        <h4 className="mt-2">
          <input type="date" value={checkin} name="checkin" id="checkin" className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md" />
        </h4>
      </div>

      <div className="my-4 space-y-2">
        <span>Checkout</span>
        <h4 className="mt-2">
          <input type="date" value={checkout} name="checkout" id="checkout" className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md" />
        </h4>
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="card" className="block">
          Card Number
        </label>
        <input
          type="text"
          id="card"
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
        />
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="expiry" className="block">
          Expiry Date
        </label>
        <input
          type="text"
          id="expiry"
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
        />
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="cvv" className="block">
          CVV
        </label>
        <input
          type="text"
          id="cvv"
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
        />
      </div>

      <button type="submit" className="bg-sky-900 hover:bg-pink-500 transition duration-200 text-white font-semibold text-xl w-full py-2 rounded">
        Pay Now ${cost} 
      </button>
    </form>
  );
};

export default PaymentForm;
