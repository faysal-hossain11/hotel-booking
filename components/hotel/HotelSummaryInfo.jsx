import Link from "next/link";
import HotelRatings from "./HotelRatings";
import HotelReviews from "./HotelReviews";

const HotelSummaryInfo = ({ fromListPage, info, checkin, checkout }) => {
 

  let params="";
  if (checkin && checkout) {
    params = `?checkin=${checkin}&checkout=${checkout}`;
  }

  return (
    <>
      <div className={fromListPage ? "flex-1" : "flex-1 container"}>
        <h2 className={fromListPage ? "font-bold text-lg" : "font-bold text-2xl"}>{info?.name}</h2>
        <p>📍{info?.city}</p>
        <div className="flex gap-2 items-center my-4">
          <HotelRatings id={info?.id} />
          <HotelReviews id={info?.id} />
          {info?.isBooked && <span className="py-1 px-3 bg-sky-100 rounded-md">Sold Out</span>}
        </div>
        <div>
          <span className="py-1 px-3 bg-sky-900 rounded-sm text-white">{info?.propertyCategory} Star Property</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-end justify-center">
        <h2 className="text-2xl font-bold text-right">${info?.highRate + info?.lowRate/2} night</h2>
        <p className=" text-right">Per Night for 1 Rooms</p>
        {
          fromListPage ? (<Link href={`/hotels/${info?.id}${params}`} className="py-2 px-4 rounded texl-xl text-white bg-sky-900 hover:bg-pink-500 transition duration-200 font-semibold">Details</Link>) : (
            <Link
            href={info?.isBooked ? "#" : `/hotels/${info?.id}/payment${params}`}
            className={info.isBooked 
              ? "disabled bg-gray-500 cursor-not-allowed py-2 px-4 rounded text-xl text-white font-semibold "
              : "py-2 px-4 rounded text-xl text-white bg-sky-900 hover:bg-pink-500 transition duration-200 font-semibold"
            }
            disabled={info.isBooked}
          >
            Book
          </Link>
          )
        }

      </div>
    </>
  );
};

export default HotelSummaryInfo;
