import Gallery from '@/components/hotel/details/Gallery';
import Overview from '@/components/hotel/details/Overview';
import Summary from '@/components/hotel/details/Summary';
import { getHotelById } from '@/database/queries';

const hotelDetails = async ({ params: { id }, searchParams: { checkin, checkout } }) => {

    const hotelInfoId = await getHotelById(id, checkin, checkout)

    return (
        <>
            <Summary
                hotelInfo={hotelInfoId}
                checkin={checkin}
                checkout={checkout}
            />
            <Gallery gallery={hotelInfoId?.gallery} />
            <Overview overview={hotelInfoId?.overview} />
        </>
    );
};

export default hotelDetails;
