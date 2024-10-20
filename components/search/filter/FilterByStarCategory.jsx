"use client";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const FilterByStarCategory = () => {

  const [query, setQuery] = useState([]);
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const {replace} = useRouter();

  const params = new URLSearchParams(searchParams);

  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const checked = event.target.checked;

    if(checked) {
      setQuery(prev => [...prev, name]);
    } else {
      const filtered = query.filter(item => item !== name);
      setQuery(filtered);
    }
    console.log(query);
    
  }


  useEffect(() => {
    const category = params.get('category');
    if(category) {
      const decodedCategory = decodeURI(category)
      const queryInCategory = decodedCategory.split('|');
      setQuery(queryInCategory)
    }
  }, []);

  useEffect(() => {
    if(query.length > 0) {
      params.set('category', encodeURI(query.join('|')))
    } else {
      params.delete('category')
    }
    replace(`${pathName}?${params.toString()}`)
  }, [query])



  return (
    <div>
      <h3 className="font-bold text-lg bg-slate-100 p-1 rounded">Star Category</h3>
      <form action="" className="flex flex-col gap-2 mt-2">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="5"
            id="fiveStar"
            checked = {query.includes('5')}
            onChange={handleChange}
          />
          <label htmlFor="fiveStar">5 Star</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="4"
            id="fourStar"
            checked = {query.includes('4')}
            onChange={handleChange}
          />
          <label htmlFor="fourStar">4 Star</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="3"
            id="threeStar"
            checked = {query.includes('3')}
            onChange={handleChange}
          />
          <label htmlFor="threeStar">3 Star</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="2"
            id="twoStar"
            checked = {query.includes('2')}
            onChange={handleChange}
          />
          <label htmlFor="twoStar">2 Star</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="1"
            id="oneStar"
            checked = {query.includes('1')}
            onChange={handleChange}
          />
          <label htmlFor="oneStar">1 Star</label>
        </div>
      </form>
    </div>
  );
};

export default FilterByStarCategory;