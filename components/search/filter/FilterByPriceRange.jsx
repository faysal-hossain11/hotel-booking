import React from 'react';

const FilterByPriceRange = () => {
    return (
        <div>
          <h3 className="font-bold text-lg bg-slate-100 p-1 rounded">Price Range</h3>
          <form action="" className="flex flex-col gap-2 mt-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="range1" id="range1" />
              <label htmlFor="range1">$30 - $80</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="range2" id="range2" />
              <label htmlFor="range2">$80 - $130</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="range3" id="range3" />
              <label htmlFor="range3">$130 - $170</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="range4" id="range4" />
              <label htmlFor="range4">$170 - $200</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="range5" id="range5" />
              <label htmlFor="range5">$200 - $250</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="range6" id="range6" />
              <label htmlFor="range6">$250 - $ 00</label>
            </div>
          </form>
        </div>
    );
};

export default FilterByPriceRange;