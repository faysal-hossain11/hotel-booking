import { auth } from '@/auth';
import PastBooking from '@/components/user/booking/PastBooking';
import UpcomingBooking from '@/components/user/booking/UpcomingBooking';
import ProfileInfo from '@/components/user/ProfileInfo';
import { getBookingByUser, getUsersByEmail } from '@/database/queries';
import { redirect } from 'next/navigation';
import React from 'react';

const Bookings = async () => {

    const session = await auth();

    if (!session) {
        redirect('/login');
    }

    const loggedInUser = await getUsersByEmail(session?.user?.email);
    const bookings = await getBookingByUser(loggedInUser?.id);

    const pastBookings = bookings.filter((booking) => {
        return (new Date().getTime() > new Date(booking.checkin).getTime())
    })

    const upcomingBookings = bookings.filter((booking) => {
        return (new Date().getTime() < new Date(booking.checkin).getTime())
    })

    return (
        <>
            <section className='mt-[160px]'>
                <div className='container mx-auto'>
                    <ProfileInfo />
                </div>
            </section>
            <section className='container mx-auto pb-24'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <PastBooking bookings={pastBookings}
                    />
                    <UpcomingBooking bookings={upcomingBookings}
                    />
                </div>
            </section>
        </>
    );
};

export default Bookings;