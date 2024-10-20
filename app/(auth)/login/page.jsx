import LoginForm from '@/components/auth/LoginForm';
import SocialLogins from '@/components/auth/SocialLogins';
import React from 'react';

const Login = () => {
    return (
        <section className='grid place-items-center mt-[180px] mb-24'>
            <div className='max-w-[550px] w-full mx-auto p-6 border border-gray-700/20 rounded-md'>
                <h2 className='font-bold text-3xl text-center mb-4 capitalize'>Sing in</h2>
                <LoginForm />
                <SocialLogins mode={'login'} />
            </div>
        </section>
    );
};

export default Login;