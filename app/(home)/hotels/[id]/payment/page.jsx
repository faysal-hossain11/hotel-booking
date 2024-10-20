import { auth } from '@/auth';
import PaymentForm from '@/components/payment/PaymentForm';
import { getHotelById, getUsersByEmail } from '@/database/queries';
import { getDayDifference } from '@/utils/data-utils';
import { redirect } from 'next/navigation';
import React from 'react';

const Payment = async ({ params: { id }, searchParams: { checkin, checkout } }) => {

    const session = await auth();
    if (!session) {
        redirect('/login')
    }

    const loggedInUser = await getUsersByEmail(session?.user?.email);
    const hotelInfo = await getHotelById(id, checkin, checkout);

    const hasCheckInCheckout = checkin && checkout;

    let cost = (hotelInfo?.highRate + hotelInfo?.lowRate)/2;
    if(hasCheckInCheckout) {
        const days = getDayDifference(checkin, checkout);
        cost = cost * days;
    }




    return (
        <section className='container mx-auto'>
            <div className='p-6 rounded max-w-xl mx-auto my-12 mt-[160px]'>
                <h2 className='font-bold text-3xl mb-3'>Payment Details</h2>
                <p>you have picked <b> {hotelInfo?.name} </b> and total price is <b> ${cost}</b> {hasCheckInCheckout && `for ${getDayDifference(checkin, checkout)}`} day(s). </p>
                <PaymentForm
                    checkin={checkin}
                    checkout={checkout}
                    hotelInfo={hotelInfo}
                    loggedInUser={loggedInUser}
                    cost={cost}
                />
            </div>
        </section>
    );
};

export default Payment;