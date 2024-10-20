import React from 'react';

const FilterByAmenities = () => {
    return (
        <div>
          <h3 className="font-bold text-lg bg-slate-100 p-1 rounded">Amenities</h3>
          <form action="" className="flex flex-col gap-2 mt-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="wifi" id="wifi" />
              <label htmlFor="wifi">Wi-fi</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="swimmingPool" id="swimmingPool" />
              <label htmlFor="swimmingPool">Swimming Pool</label>
            </div>
          </form>
        </div>
    );
};

export default FilterByAmenities;