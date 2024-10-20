import Image from "next/image";
import HotelSummaryInfo from "./HotelSummaryInfo";
// import HotelCardImage from "@/public/assets/images/image-1.png"

const HotelCard = ({ hotelInfo, checkin, checkout }) => {
  // console.log("hotelInfo", hotelInfo);

  return (
    <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
      <Image
        src={hotelInfo?.thumbNailUrl}
        className="max-h-[162px] max-w-[240px]"
        alt={hotelInfo?.name}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,..."
        width={300}
        height={200}
      />
      <HotelSummaryInfo
        info={hotelInfo}
        fromListPage={true}
        checkin={checkin}
        checkout={checkout}
      />
    </div>
  );
};

export default HotelCard;
