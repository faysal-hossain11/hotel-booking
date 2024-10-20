"use client";


import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Search = ({ fromList, destination, checkin, checkout }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const [searchTerm, setSearchTerm] = useState({
        destination: destination || "Puglia",
        checkin: checkin,
        checkout: checkout,
    });

    const [allowSearch, setAllowSearch] = useState(true);

    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        const state = { ...searchTerm, [name]: value };

        if (
            new Date(state.checkin).getTime() >
            new Date(state.checkout).getTime()
        ) {
            setAllowSearch(false);
        } else {
            setAllowSearch(true);
        }
        setSearchTerm(state);
    };

    function doSearch(event) {
        const params = new URLSearchParams(searchParams);

        params.set("destination", searchTerm?.destination || "all");
        if (searchTerm?.checkin && searchTerm?.checkout) {
            params.set("checkin", searchTerm?.checkin);
            params.set("checkout", searchTerm?.checkout);
        }

        if (pathname.includes("hotels")) {
            replace(`${pathname}?${params.toString()}`);
        } else {
            replace(`${pathname}hotels?${params.toString()}`);
        }
    }







  return (
    <>
      <div className="lg:max-h-[250px] bg-white mt-6 p-16 rounded-md shadow-md shadow-blue-200">
        <div className={`${fromList} && !shadow-none`}>
          <div className="grid grid-cols-3 gap-10">
            <div>
              <span className="text-xl text-sky-900 font-medium">Destination</span>
              <h4 className="mt-2">
                <select name="destination" id="destination" onChange={handleInputs} defaultValue={searchTerm.destination} className="p-4 w-full rounded-md bg-gray-100 text-sky-900 outline-none font-medium ">
                  <option value="" className="disabled hidden selected">Choose your location</option>
                  <option value="Puglia" className="">Puglia</option>
                  <option value="Catania" className="">Catania</option>
                  <option value="Palermo" className="">Palermo</option>
                  <option value="Frejus" className="">Frejus</option>
                  <option value="Paris" className="">Paris</option>
                </select>
              </h4>
            </div>
            <div>
              <span className="text-xl text-sky-900 font-medium">Check in</span>
              <h4 className="mt-2">
                <input type="date" name="checkin" id="checkin" onChange={handleInputs} value={searchTerm.checkin} className="p-3 w-full rounded-md bg-gray-100 text-sky-900 outline-none font-medium " />
              </h4>
            </div>

            <div>
              <span className="text-xl text-sky-900 font-medium">Checkout</span>
              <h4 className="mt-2">
                <input type="date" name="checkout" id="checkout" onChange={handleInputs} value={searchTerm.checkout} className="p-3 w-full rounded-md bg-gray-100 text-sky-900 outline-none font-medium " />
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center relative bottom-5">
        <button 
        className={`rounded-md text-xl py-3 px-5 hover:bg-pink-400 transition duration-200 ${!allowSearch ? "bg-gray-600 text-white hover:bg-gray-600" : "bg-sky-900 text-white"}`}
        disabled={!allowSearch}
        onClick={doSearch}
        >🔍️ {fromList ? "Modify Search" : "Search"}</button>
      </div>
    </>
  );
};

export default Search;
