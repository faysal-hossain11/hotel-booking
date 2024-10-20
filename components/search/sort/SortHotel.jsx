import React from 'react';

const SortHotel = () => {
    return (
        <div>
          <h3 className="font-bold text-lg bg-slate-100 p-1 rounded">Sort By</h3>
          <form action="" className="flex flex-col gap-2 mt-2 ">
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="highToLow" id="highToLow" className="" />
              <label htmlFor="highToLow">Price High to Low</label>
            </div>
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="lowToHigh" id="lowToHigh" className="" />
              <label htmlFor="lowToHigh">Price Low to high</label>
            </div>
          </form>
        </div>
    );
};

export default SortHotel;