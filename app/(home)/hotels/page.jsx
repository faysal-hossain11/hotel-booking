import HotelList from '@/components/hotel/HotelList';
import Filter from '@/components/search/filter/Filter';
import Search from '@/components/search/Search';
import { getAllHotels } from '@/database/queries';
import React from 'react';


const refineCategory = (category) => {
    const decodedCategory = (category) => {
        const decodedCategory = decodeURI(category);
        if(decodedCategory === "undefined") {
            return "";
        }
        return decodedCategory;
    }
}

const hotelListPage = async ({ searchParams: { destination, checkin, checkout, category } }) => {
    const allHotels = await getAllHotels()
    // console.log(allHotels);

    return (
        <>
            <section className="bg-[url('/assets/hero-bg.jpg')] bg-cover bg-no-repeat bg-center pt-[100px] pb-[60px]">
                <div className="container items-center py-12 mx-auto ">
                    <Search
                        fromList={true}
                        destination={destination}
                        checkin={checkin}
                        checkout={checkout}
                    />
                </div>
            </section>
            <section className="py-12 ">
                <div className="container grid grid-cols-12 gap-10 mx-auto">
                    <Filter />
                    <HotelList
                        destination={destination}
                        checkin={checkin}
                        checkout={checkout}
                        category={refineCategory(category)}
                    />
                </div>
            </section>
        </>
    );
};

export default hotelListPage;