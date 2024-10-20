import RegistrationForm from '@/components/auth/RegistrationForm';
import SocialLogins from '@/components/auth/SocialLogins';
import React from 'react';

const Register = () => {
    return (
        <section className='grid place-items-center mt-[180px] pb-24'>
            <div className='max-w-[550px] w-full mx-auto p-6 border border-gray-700/20 rounded-md'>
                <h2 className='font-bold text-3xl text-center mb-4 capitalize'>Register Now</h2>
                <RegistrationForm />
                <SocialLogins mode={'register'} />
            </div>
        </section>
    );
};

export default Register;