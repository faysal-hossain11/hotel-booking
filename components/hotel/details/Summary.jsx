import HotelSummaryInfo from "../HotelSummaryInfo";

const Summary = ({ hotelInfo, checkin, checkout }) => {

  console.log("now hotel Info info ", hotelInfo);

  return (
    <section className="py-4 mt-[180px]">
      <div className="flex container mx-auto">
        <HotelSummaryInfo
          info={hotelInfo}
          source="details"
          checkin={checkin}
          checkout={checkout}
        />
      </div>
    </section>
  );
};

export default Summary;

